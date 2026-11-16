import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header';
import { Navigation } from './navigation';
import { Footer } from './footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navigation, RouterOutlet, Footer],
  templateUrl: './app.html',
})
export class App {}
