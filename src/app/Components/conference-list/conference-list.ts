import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, DatePipe, UpperCasePipe, NgClass],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchTitle = '';
  selectedConferenceId: number | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Présentation des nouveautés Angular 21.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les signaux Angular.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 20,
      nbParticipants: 14,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence sur le développement web.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 30,
    },
  ];

  get upcomingConferences(): Conference[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.conferences.filter((conference) => conference.date >= today);
  }

  get filteredConferences(): Conference[] {
    const title = this.searchTitle.trim().toLowerCase();
    return this.upcomingConferences.filter((conference) => conference.title.toLowerCase().includes(title));
  }

  register(conference: Conference): void {
    if (conference.nbParticipants < conference.maxParticipants) {
      conference.nbParticipants++;
    }
  }

  toggleDetails(id: number): void {
    this.selectedConferenceId = this.selectedConferenceId === id ? null : id;
  }
}
