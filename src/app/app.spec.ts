import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { vi } from 'vitest';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the Conference App title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Conference App');
  });

  it('should search by title and update registration availability', async () => {
    vi.setSystemTime(new Date(2027, 10, 1));
    const harness = await RouterTestingHarness.create('/conferences');
    const page = harness.routeNativeElement!;
    const search = page.querySelector('input')!;
    const registrations = () => [...page.querySelectorAll<HTMLButtonElement>('.register')];

    expect(registrations().map((button) => button.classList[1])).toEqual([
      'available',
      'limited',
      'full',
    ]);

    search.value = 'sign';
    search.dispatchEvent(new Event('input'));
    harness.detectChanges();
    expect(registrations()).toHaveLength(1);
    expect(page.textContent).toContain('SIGNALS WORKSHOP');

    const button = registrations()[0];
    for (let index = 0; index < 6; index++) {
      button.click();
      harness.detectChanges();
    }

    expect(button.classList.contains('full')).toBe(true);
    expect(button.disabled).toBe(true);
    expect(page.textContent).toContain('Places restantes : 0');

    search.value = 'inconnue';
    search.dispatchEvent(new Event('input'));
    harness.detectChanges();
    expect(page.textContent).toContain('Aucune conférence ne correspond à votre recherche.');
  });

  afterEach(() => vi.useRealTimers());
});
