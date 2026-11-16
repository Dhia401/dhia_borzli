import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from './conference';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, NgClass, UpperCasePipe, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  protected searchTitle = '';
  protected selectedConferenceId: number | null = null;

  protected readonly conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Présentation des nouveautés d’Angular 21.',
      date: '2027-11-15',
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les signaux Angular.',
      date: '2027-11-30',
      place: 'Ariana',
      maxParticipants: 20,
      nbParticipants: 14,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence sur le développement web.',
      date: '2027-11-20',
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 30,
    },
  ];

  protected get upcomingConferences(): Conference[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.conferences.filter((conference) => new Date(`${conference.date}T00:00:00`) >= today);
  }

  protected get filteredConferences(): Conference[] {
    const title = this.searchTitle.trim().toLowerCase();

    return this.upcomingConferences.filter((conference) => conference.title.toLowerCase().includes(title));
  }

  protected register(conference: Conference): void {
    if (conference.nbParticipants < conference.maxParticipants) {
      conference.nbParticipants++;
    }
  }

  protected toggleDetails(id: number): void {
    this.selectedConferenceId = this.selectedConferenceId === id ? null : id;
  }
}
