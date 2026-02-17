import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  activeSection = 'home';

  ngAfterViewInit() {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const sections = ['home', 'about', 'edge', 'spotlight', 'ai', 'support', 'contact'];
    const offset = 120;
    const scrollPosition = window.scrollY + offset;

    for (let i = sections.length - 1; i >= 0; i -= 1) {
      const id = sections[i];
      const element = document.getElementById(id);
      if (!element) {
        continue;
      }
      const top = element.offsetTop;
      if (scrollPosition >= top) {
        this.activeSection = id;
        return;
      }
    }

    this.activeSection = 'home';
  }
}
