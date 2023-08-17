import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
  <nav class="navbar">
  <a href="/">
    <div class="navbar-logo">
      <img class="navbar-logo-image" src="/assets/sit_logo.png" alt="logo" aria-hidden="true">
    </div>
  </a>
      <ul class="navbar-list">
        <li><a href="/">Home</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/applications">Applications</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
