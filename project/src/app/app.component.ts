import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
// import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  template: `
    <div class="flex flex-col min-h-screen">
      <mat-toolbar class="bg-filla-dark">
        <div class="container mx-auto px-4 flex items-center">
          <div class="flex items-center">
            <img src="assets/logo.png" alt="Filla City Logo" class="h-12 mr-4">
            <span class="text-filla-gold font-semibold hidden md:inline">FILLA CITY</span>
          </div>
          <span class="flex-grow"></span>
          <!-- Desktop Menu -->
          <nav class="hidden md:block">
            <a mat-button class="text-white hover:text-filla-gold" routerLink="/">
              <mat-icon class="mr-1">home</mat-icon>
              Home
            </a>
            <a mat-button class="text-white hover:text-filla-gold" routerLink="/about">
              <mat-icon class="mr-1">info</mat-icon>
              About Us
            </a>
            <a mat-button class="text-white hover:text-filla-gold" routerLink="/services">
              <mat-icon class="mr-1">flight_takeoff</mat-icon>
              Services
            </a>
            <a mat-button class="text-white hover:text-filla-gold" routerLink="/contact">
              <mat-icon class="mr-1">contact_support</mat-icon>
              Contact Us
            </a>
          </nav>
          <!-- Mobile Menu Button -->
          <button mat-icon-button class="md:hidden" (click)="toggleMobileMenu()">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </mat-toolbar>

      <!-- Mobile Menu -->
      <div *ngIf="isMobileMenuOpen" class="md:hidden bg-filla-dark">
        <nav class="container mx-auto px-4 py-4">
          <a mat-button class="text-white hover:text-filla-gold w-full justify-start" routerLink="/" (click)="closeMobileMenu()">
            <mat-icon class="mr-2">home</mat-icon>
            Home
          </a>
          <a mat-button class="text-white hover:text-filla-gold w-full justify-start" routerLink="/about" (click)="closeMobileMenu()">
            <mat-icon class="mr-2">info</mat-icon>
            About Us
          </a>
          <a mat-button class="text-white hover:text-filla-gold w-full justify-start" routerLink="/services" (click)="closeMobileMenu()">
            <mat-icon class="mr-2">flight_takeoff</mat-icon>
            Services
          </a>
          <a mat-button class="text-white hover:text-filla-gold w-full justify-start" routerLink="/contact" (click)="closeMobileMenu()">
            <mat-icon class="mr-2">contact_support</mat-icon>
            Contact Us
          </a>
        </nav>
      </div>

      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>

    
    </div>
  `,
  styles: [`
    .flex-grow { flex: 1 1 auto; }
  `]
})
export class AppComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}