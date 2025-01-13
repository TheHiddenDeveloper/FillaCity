import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule],
  template: `
    <header class="fixed w-full top-0 z-50" [class.bg-white]="!isDarkMode" [class.bg-primary]="isDarkMode">
      <div class="container">
        <nav class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center space-x-2">
            <span class="text-2xl font-bold gradient-text">Wanderlust</span>
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" 
               routerLinkActive="text-accent"
               [routerLinkActiveOptions]="{exact: true}"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="hover:text-accent transition-colors">
              Home
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-accent"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="hover:text-accent transition-colors">
              About
            </a>
            <a routerLink="/services" 
               routerLinkActive="text-accent"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="hover:text-accent transition-colors">
              Services
            </a>
            <a routerLink="/gallery" 
               routerLinkActive="text-accent"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="hover:text-accent transition-colors">
              Gallery
            </a>
            <a routerLink="/contact" 
               routerLinkActive="text-accent"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="hover:text-accent transition-colors">
              Contact
            </a>

            <!-- Theme Toggle -->
            <button 
              (click)="toggleTheme()"
              class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              [class.text-gray-600]="!isDarkMode"
              [class.text-gray-300]="isDarkMode">
              <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            (click)="isMenuOpen = !isMenuOpen"
            [class.text-gray-600]="!isDarkMode"
            [class.text-gray-300]="isDarkMode"
            class="md:hidden hover:text-accent focus:outline-none">
            <mat-icon>{{ isMenuOpen ? 'close' : 'menu' }}</mat-icon>
          </button>
        </nav>

        <!-- Mobile Menu -->
        <div 
          *ngIf="isMenuOpen"
          class="md:hidden absolute top-16 left-0 right-0 border-t shadow-lg"
          [class.bg-white]="!isDarkMode"
          [class.border-gray-100]="!isDarkMode"
          [class.bg-primary]="isDarkMode"
          [class.border-gray-800]="isDarkMode">
          <div class="container py-4 space-y-4">
            <a routerLink="/" 
               (click)="isMenuOpen = false"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="block hover:text-accent transition-colors">
              Home
            </a>
            <a routerLink="/about"
               (click)="isMenuOpen = false"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="block hover:text-accent transition-colors">
              About
            </a>
            <a routerLink="/services"
               (click)="isMenuOpen = false"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="block hover:text-accent transition-colors">
              Services
            </a>
            <a routerLink="/gallery"
               (click)="isMenuOpen = false"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="block hover:text-accent transition-colors">
              Gallery
            </a>
            <a routerLink="/contact"
               (click)="isMenuOpen = false"
               [class.text-gray-600]="!isDarkMode"
               [class.text-gray-300]="isDarkMode"
               class="block hover:text-accent transition-colors">
              Contact
            </a>
            
            <!-- Mobile Theme Toggle -->
            <button 
              (click)="toggleTheme()"
              class="w-full text-left flex items-center space-x-2 hover:text-accent transition-colors"
              [class.text-gray-600]="!isDarkMode"
              [class.text-gray-300]="isDarkMode">
              <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
              <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = false;
  isDarkMode = false;

  constructor() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }
}