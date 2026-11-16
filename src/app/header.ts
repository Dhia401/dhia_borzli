import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>Conference App</h1>
      <p>Bienvenue sur votre espace utilisateur</p>
    </header>
  `,
  styles: `
    header {
      background: linear-gradient(120deg, #15365c, #2f6ca9);
      color: white;
      padding: 10px 16px 36px;
      text-align: center;
    }

    h1 { font-size: 2.4rem; margin: 0; }
    p { margin: 8px 0 0; }
  `,
})
export class Header {}
