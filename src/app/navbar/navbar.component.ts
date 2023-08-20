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
        <li><a href="/dashboard" class="mouse">Dashboard</a></li>
        <li class="dropdown">
        <a href="#" class="dropdown-toggle">Jobs &#9662;</a>
          <ul class="dropdown-menu">
            <li><a href="/job-search">Job Search</a></li>
            <li><a href="/my-applications">My Applications</a></li>
          </ul>
        </li>
        <li><a href="/student-profile" class="mouse">My Profile</a></li>
        <li class="dropdown">
        <a href="#" class="dropdown-toggle">Hello user &#9662;</a>
          <ul class="dropdown-menu">
            <li><a href="/reset-password">Reset Password</a></li>
            <li><a href="/sign-out">Sign out</a></li>
          </ul>
        </li>
      </ul>
    </nav>

  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
