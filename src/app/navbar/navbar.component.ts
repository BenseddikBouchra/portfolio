import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  currentSection: string = '';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const sections = document.querySelectorAll('.section');
    let current = '';

    sections.forEach((section: Element) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 100) {
        current = section.getAttribute('id') || '';
      }
    });

    this.currentSection = current;
  }
}

