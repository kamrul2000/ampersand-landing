import { AfterViewInit, Component, Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    element.classList.add('reveal-on-scroll');

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            } else {
              entry.target.classList.remove('is-visible');
            }
          }
        },
        { threshold: 0.2 }
      );

      this.observer.observe(element);
    } else {
      element.classList.add('is-visible');
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
