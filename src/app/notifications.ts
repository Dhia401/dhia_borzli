import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  template: `
    <section id="notifications" class="panel">
      <span class="panel-icon" aria-hidden="true">🔔</span>
      <div>
        <h2>Zone de notifications</h2>
        <p>Vous avez {{ notifications.length }} nouvelles notifications.</p>
        <button type="button" (click)="visible = !visible" [attr.aria-expanded]="visible">
          {{ visible ? 'Masquer les notifications' : 'Afficher les notifications' }}
        </button>
        @if (visible) {
          <ul>
            @for (notification of notifications; track notification) {
              <li>{{ notification }}</li>
            }
          </ul>
        }
      </div>
    </section>
  `,
  styles: `
    .panel { --accent: #f59b0b; --icon-background: #fff3d7; }
    ul { margin-bottom: 0; }
  `,
})
export class Notifications {
  protected visible = false;
  protected readonly notifications = ['Nouvelle conférence disponible.', 'La liste des conférences a été mise à jour.'];
}
