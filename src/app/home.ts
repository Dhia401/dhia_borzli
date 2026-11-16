import { Component, signal } from '@angular/core';
import { Profile } from './profile';
import { FriendList } from './friend-list';
import { Notifications } from './notifications';

@Component({
  selector: 'app-home',
  imports: [Profile, FriendList, Notifications],
  template: `
    <app-profile [name]="name()" />
    <app-friend-list [(name)]="name" />
    <app-notifications />
  `,
})
export class Home {
  protected readonly name = signal('Ahmed');
}
