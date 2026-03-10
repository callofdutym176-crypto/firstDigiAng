import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-simplehome',
  standalone: true,
  imports: [MatTabsModule, RouterOutlet],
  templateUrl: './simplehome.html',
  styleUrl: './simplehome.scss',
})
export class Simplehome {
  selectedIndex = 0;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.syncTabWithRoute());
  }

  onTabChange(index: number) {
    if (this.selectedIndex === index) return;

    if (index === 0) this.router.navigate(['/home']);
    if (index === 1) this.router.navigate(['/form']);
    if (index === 2) this.router.navigate(['/grid']);
  }

  syncTabWithRoute() {
    const url = this.router.url;

    if (url.includes('home')) this.selectedIndex = 0;
    else if (url.includes('form')) this.selectedIndex = 1;
    else if (url.includes('grid')) this.selectedIndex = 2;
  }
}
