import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ConferenceList } from './conference-list';

describe('ConferenceList', () => {
  beforeEach(() => vi.setSystemTime(new Date(2027, 10, 1)));
  afterEach(() => vi.useRealTimers());

  it('filters titles, formats dates and updates button availability after registration', async () => {
    const fixture = TestBed.createComponent(ConferenceList);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const buttons = () => [...page.querySelectorAll<HTMLButtonElement>('.register')];

    expect(page.textContent).toContain('ANGULAR 21 CONFERENCE');
    expect(page.textContent).toContain('15/11/2027');
    expect(buttons().map((button) => button.classList[1])).toEqual(['available', 'limited', 'full']);
    expect(buttons()[2].disabled).toBe(true);

    const search = page.querySelector('input')!;
    search.value = 'SIGNALS';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(buttons()).toHaveLength(1);

    const button = buttons()[0];
    for (let index = 0; index < 6; index++) {
      button.click();
      fixture.detectChanges();
    }
    expect(fixture.componentInstance.conferences[1].nbParticipants).toBe(20);
    expect(button.classList.contains('full')).toBe(true);
    expect(button.disabled).toBe(true);
    fixture.componentInstance.register(fixture.componentInstance.conferences[1]);
    expect(fixture.componentInstance.conferences[1].nbParticipants).toBe(20);

    search.value = 'introuvable';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(page.textContent).toContain('Aucune conférence ne correspond');
  });

  it('handles empty lists, past conferences and the ten-place boundary', async () => {
    const fixture = TestBed.createComponent(ConferenceList);
    const component = fixture.componentInstance;
    const conference = component.conferences[0];
    conference.nbParticipants = conference.maxParticipants - 10;
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const button = page.querySelector<HTMLButtonElement>('.register')!;
    expect(button.classList.contains('available')).toBe(true);
    button.click();
    fixture.detectChanges();
    expect(button.classList.contains('limited')).toBe(true);

    component.conferences = [{ ...conference, date: new Date(2027, 9, 31) }];
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    expect(page.textContent).toContain('Aucune conférence à venir.');
    component.conferences = [];
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    expect(page.textContent).toContain('Aucune conférence enregistrée.');
  });
});
