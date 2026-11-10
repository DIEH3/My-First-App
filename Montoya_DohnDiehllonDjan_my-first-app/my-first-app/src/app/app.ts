import { Component, computed, signal } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

interface StackGroup { title: string; items: string[]; }
interface Step { label: string; detail: string; status: 'done' | 'now' | 'next'; }
interface Project { title: string; description: string; tags: string[]; link: string; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Dohn Diehllon Djan D. Montoya';
  firstName = 'Dohn';
  lastName = 'Montoya';
  role = 'Web Developer in the making';
  location = 'Bamban, Tarlac';
  email = 'dddmontoya1906@gmail.com';
  phone = '0919-595-5099';

  profile =
    'I am a student at Holy Angel University taking a bachelor\'s in Information Technology, ' +
    'specializing in Web Development.';

  // Hero waveform: base height of each bar (0 to 1), in the spirit of the AM cover.
  bars = Array.from({ length: 43 }, (_, i) => {
    const wave = Math.abs(Math.sin(i * 0.62) * Math.cos(i * 0.19)) + 0.12 * Math.abs(Math.sin(i * 1.7));
    const edge = Math.sin((Math.PI * (i + 0.5)) / 43);
    return Math.min(1, 0.08 + wave * edge * 1.15);
  });

  volume = signal(5);
  clickCount = signal(0);
  message = signal('Welcome to my profile, Manager.');

  levelLabel = computed(() => `Volume ${this.volume()} / 10`);

  barHeight(base: number): number {
    const gain = 0.35 + this.volume() * 0.065;
    return Math.min(100, base * gain * 100);
  }

  showMessage() {
    this.clickCount.update(n => n + 1);
    this.volume.update(v => Math.min(10, v + 1));
    this.message.set(
      this.volume() === 10
        ? 'Maxed out. E.G.O manifested. Thanks for stopping by!'
        : `Enkephalin collected: ${this.clickCount()}.`
    );
  }

  turnDown() {
    this.volume.update(v => Math.max(1, v - 1));
    this.message.set('Suppression complete. Volume lowered.');
  }

  stack: StackGroup[] = [
    { title: 'Markup & style',
      items: ['Semantic HTML5', 'CSS Grid & Flexbox', 'CSS custom properties', 'Responsive, mobile-first layouts'] },
    { title: 'Languages',
      items: ['JavaScript (ES6+)', 'TypeScript', 'DOM & events', 'Async basics (Promises, fetch)'] },
    { title: 'Framework',
      items: ['Angular standalone components', 'Templates & control flow (@for, @if)', 'Signals', 'Routing'] },
    { title: 'Tooling',
      items: ['Angular CLI', 'Git & GitHub', 'npm', 'Browser DevTools'] },
    { title: 'Practices',
      items: ['Accessibility (focus, contrast, ARIA)', 'Component reuse', 'Unit tests', 'Clean, readable code'] }
  ];

  roadmap: Step[] = [
    { label: 'HTML & CSS', detail: 'Page structure, layout and responsive styling.', status: 'done' },
    { label: 'JavaScript', detail: 'Logic, events and working with the DOM.', status: 'done' },
    { label: 'TypeScript', detail: 'Types, interfaces and safer code.', status: 'done' },
    { label: 'Angular', detail: 'Components, templates, signals and routing.', status: 'now' },
    { label: 'RxJS & HTTP', detail: 'Fetching data from APIs and handling streams.', status: 'next' },
    { label: 'Testing & deployment', detail: 'Shipping tested apps to the web.', status: 'next' }
  ];

  projects: Project[] = [
    { title: 'Nook Finder',
      description: 'A finder for quiet places around Angeles City.',
      tags: ['Angeles City', 'Places finder'],
      link: 'https://github.com/REID31-SaN/Nook-Finder' },
    { title: 'SoyHaven',
      description: 'A restaurant finder for food spots around Angeles City.',
      tags: ['Angeles City', 'Food & restaurants'],
      link: 'https://github.com/Fourstik/6WCSERVER-WD-303-SoyHaven' },
    { title: 'IMJ Core',
      description: 'A computer website that gives information about technology and news.',
      tags: ['Technology', 'News'],
      link: 'https://github.com/Fourstik/imj-core' }
  ];

  snippet =
`@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html'
})
export class ProfileCard {
  title = input('A Little About Me');
  tags = input<string[]>([]);
}`;
}
