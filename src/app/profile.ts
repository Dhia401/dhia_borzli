import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <section id="profil" class="panel">
      <span class="panel-icon" aria-hidden="true">👤</span>
      <div>
        <h2>Profil utilisateur</h2>
        <p><strong>Nom :</strong> {{ name() }}</p>
        <p><strong>Email :</strong> ahmed@email.com</p>
      </div>
    </section>
  `,
})
export class Profile {
  readonly name = input.required<string>();
}
