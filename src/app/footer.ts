import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer>© 2026 Conference App - Gestion des conférences</footer>`,
  styles: `
    footer {
      background: #15365c;
      color: white;
      text-align: center;
      padding: 20px 16px;
      margin-top: 40px;
    }
  `,
})
export class Footer {}
