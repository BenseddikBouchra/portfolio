import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('typedElement') typedElement!: ElementRef;
  textItems = ['Développeuse', 'Designer', 'Freelancer'];

  currentText = this.textItems[0];
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.textItems.length;
      this.currentText = this.textItems[this.currentIndex];
    }, 2000); // Adjust interval as needed
    this.checkScrollPosition(); // Check scroll position initially
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkScrollPosition(); // Check scroll position on scrolling
  }

  checkScrollPosition(): void {
    // Show button only if scrolled down
    this.showButton = window.pageYOffset > 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  }
  showButton: boolean = false;
}
