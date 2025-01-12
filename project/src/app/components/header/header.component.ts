import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    CommonModule
  ],
  template: `
    <header class="fixed w-full top-0 z-50">
      <nav class="bg-gradient-to-r from-filla-dark to-black shadow-lg">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <img src="assets/logo.png" alt="Filla City Logo" class="h-12 w-auto">
              <span class="ml-3 text-filla-gold font-bold text-xl hidden md:block">FILLA CITY</span>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
              <a routerLink="/" 
                 class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center space-x-1">
                <mat-icon>home</mat-icon>
                <span>Home</span>
              </a>
              <a routerLink="/about" 
                 class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center space-x-1">
                <mat-icon>info</mat-icon>
                <span>About</span>
              </a>
              <a routerLink="/services" 
                 class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center space-x-1">
                <mat-icon>flight_takeoff</mat-icon>
                <span>Services</span>
              </a>
              <a routerLink="/contact" 
                 class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center space-x-1">
                <mat-icon>contact_support</mat-icon>
                <span>Contact</span>
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <button 
              class="md:hidden text-gray-300 hover:text-filla-gold focus:outline-none"
              (click)="sidenav.toggle()">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Sidenav -->
      <mat-sidenav #sidenav mode="over" position="end" class="w-64 bg-filla-dark">
        <mat-nav-list class="p-4">
          <a mat-list-item routerLink="/" (click)="sidenav.close()" 
             class="mb-4 text-gray-300 hover:text-filla-gold">
            <mat-icon class="mr-4 text-filla-gold">home</mat-icon>
            <span>Home</span>
          </a>
          <a mat-list-item routerLink="/about" (click)="sidenav.close()"
             class="mb-4 text-gray-300 hover:text-filla-gold">
            <mat-icon class="mr-4 text-filla-gold">info</mat-icon>
            <span>About</span>
          </a>
          <a mat-list-item routerLink="/services" (click)="sidenav.close()"
             class="mb-4 text-gray-300 hover:text-filla-gold">
            <mat-icon class="mr-4 text-filla-gold">flight_takeoff</mat-icon>
            <span>Services</span>
          </a>
          <a mat-list-item routerLink="/contact" (click)="sidenav.close()"
             class="mb-4 text-gray-300 hover:text-filla-gold">
            <mat-icon class="mr-4 text-filla-gold">contact_support</mat-icon>
            <span>Contact</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>
    </header>
  `
})
export class HeaderComponent {}