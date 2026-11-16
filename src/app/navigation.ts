import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav aria-label="Navigation principale">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a>
      <a routerLink="/" fragment="profil">Profil</a>
      <a routerLink="/conferences" routerLinkActive="active">Conférences</a>
      <a routerLink="/" fragment="amis">Amis</a>
      <a routerLink="/" fragment="notifications">Notifications</a>
    </nav>
  `,
  styles: `
    nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      padding: 16px;
      background: white;
    }

    a {
      padding: 10px 18px;
      border-radius: 9px;
      color: #15365c;
      text-decoration: none;
      font-weight: bold;
    }

    a:hover { background: #e8f0fa; }
    a.active { background: #245ee8; color: white; }
  `,
})
export class Navigation {}
