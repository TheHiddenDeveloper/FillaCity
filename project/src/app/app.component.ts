import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule,
    MatListModule,
    CommonModule,
    FooterComponent
  ],
  template: `
    <div class="flex flex-col min-h-screen">
      <mat-toolbar class="bg-filla-dark">
        <div class="container mx-auto px-4 flex items-center justify-between">
          <div class="flex items-center">
            <img src="assets/logo.png" alt="Filla City Logo" class="h-12 mr-4">
            <span class="text-filla-gold font-semibold hidden md:inline">FILLA CITY</span>
          </div>
          
          <!-- Desktop Menu -->
          <nav class="hidden md:flex items-center space-x-4">
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
          <button mat-icon-button class="md:hidden" (click)="sidenav.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </mat-toolbar>

      <!-- Mobile Sidenav -->
      <mat-sidenav-container class="flex-grow">
        <mat-sidenav #sidenav mode="over" position="end" class="w-64 bg-filla-dark">
          <mat-nav-list>
            <a mat-list-item routerLink="/" (click)="sidenav.close()">
              <mat-icon class="mr-4 text-filla-gold">home</mat-icon>
              <span class="text-white">Home</span>
            </a>
            <a mat-list-item routerLink="/about" (click)="sidenav.close()">
              <mat-icon class="mr-4 text-filla-gold">info</mat-icon>
              <span class="text-white">About Us</span>
            </a>
            <a mat-list-item routerLink="/services" (click)="sidenav.close()">
              <mat-icon class="mr-4 text-filla-gold">flight_takeoff</mat-icon>
              <span class="text-white">Services</span>
            </a>
            <a mat-list-item routerLink="/contact" (click)="sidenav.close()">
              <mat-icon class="mr-4 text-filla-gold">contact_support</mat-icon>
              <span class="text-white">Contact Us</span>
            </a>
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content>
          <main>
            <router-outlet></router-outlet>
          </main>
          <app-footer></app-footer>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `
})
export class AppComponent {}