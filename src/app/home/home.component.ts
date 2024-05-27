import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { Subscription } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  headerClass = 'mat-headline-1';
  subheaderClass = 'mat-headline-2'; 
  breakpointSubscription: Subscription = Subscription.EMPTY;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.initScreenSizeObservation();
  }

  private initScreenSizeObservation() {
    this.breakpointSubscription = this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ])
    .subscribe((state: BreakpointState) => {
      this.setHeaderClases(state);
    });
  }

  private setHeaderClases(state: BreakpointState) {
    if (
      state.breakpoints[Breakpoints.XSmall] ||
      state.breakpoints[Breakpoints.Small]
    ) {
      this.headerClass = 'mat-headline-5';
      this.subheaderClass = 'mat-headline-6'; // Small screen

      return;
    }

    if (state.breakpoints[Breakpoints.Medium]) {
      this.headerClass = 'mat-headline-3';
      this.subheaderClass = 'mat-headline-4'; // Medium screen

      return;
    }

    this.headerClass = 'mat-headline-1'; // Large screen and above
    this.subheaderClass = 'mat-headline-2'; // Large screen and above
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}
