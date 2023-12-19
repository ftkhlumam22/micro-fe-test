import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  logoUrl =
    'https://logosbynick.com/wp-content/uploads/2018/03/final-logo-example.png';

  links = [
    { path: '/dashboard', title: 'Dashboard', icon: 'fa-home' },
    { path: '/admin', title: 'Admin', icon: 'fa-user' },
  ];
}
