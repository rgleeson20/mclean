import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './layout/ui/header/header.component';
import { SidenavListComponent } from './layout/ui/sidenav-list/sidenav-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    MatSidenavModule,
    HeaderComponent,
    SidenavListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Megan McLean';
}
