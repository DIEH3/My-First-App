import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = input('A Little About Me');
  description = input('');
  tags = input<string[]>([]);
  badge = input('');
  link = input('');
}
