import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friend-list',
  imports: [FormsModule],
  template: `
    <section id="amis" class="panel">
      <span class="panel-icon" aria-hidden="true">👥</span>
      <div>
        <h2>Liste des amis</h2>
        <div class="name-fields">
          <input aria-label="Nom affiché" [value]="name()" readonly>
          <input aria-label="Nom avec liaison d’événement" [value]="name()" (input)="name.set($event.target.value)">
          <input aria-label="Nom avec liaison bidirectionnelle" [(ngModel)]="name">
        </div>
        <ul>
          @for (friend of friends; track friend) {
            <li>{{ friend }}</li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .panel { --accent: #1c9d6a; --icon-background: #e4f5ed; }
    .name-fields { display: flex; flex-wrap: wrap; }
    input { width: 200px; max-width: 100%; }
    ul { padding-left: 22px; margin-bottom: 0; }
  `,
})
export class FriendList {
  readonly name = model.required<string>();
  protected readonly friends = ['Sami', 'Sarra', 'Amine'];
}
