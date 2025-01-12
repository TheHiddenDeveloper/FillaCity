import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule, MatDividerModule],
  template: `
    <footer class="bg-gradient-to-t from-black to-filla-dark text-white py-16">
      <div class="container mx-auto px-4">
        <!-- Top Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <!-- Company Info -->
          <div class="space-y-6">
            <div class="flex items-center">
              <img src="assets/logo.png" alt="Filla City Logo" class="h-12 mr-4">
              <h3 class="text-2xl font-bold text-filla-gold">Filla City</h3>
            </div>
            <p class="text-gray-300 text-justify">
              Your trusted partner in creating unforgettable travel experiences across Africa and beyond.
              We specialize in crafting bespoke journeys that exceed expectations.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300">
                <mat-icon>facebook</mat-icon>
              </a>
              <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300">
                <mat-icon>photo_camera</mat-icon>
              </a>
              <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300">
                <mat-icon>twitter</mat-icon>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-filla-gold">Quick Links</h3>
            <nav class="flex flex-col space-y-3">
              <a routerLink="/" class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                <mat-icon class="mr-2 text-sm">chevron_right</mat-icon>
                Home
              </a>
              <a routerLink="/about" class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                <mat-icon class="mr-2 text-sm">chevron_right</mat-icon>
                About Us
              </a>
              <a routerLink="/services" class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                <mat-icon class="mr-2 text-sm">chevron_right</mat-icon>
                Services
              </a>
              <a routerLink="/contact" class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                <mat-icon class="mr-2 text-sm">chevron_right</mat-icon>
                Contact
              </a>
            </nav>
          </div>

          <!-- Popular Destinations -->
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-filla-gold">Popular Destinations</h3>
            <nav class="flex flex-col space-y-3">
              <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                <mat-icon class="mr-2">place</mat-icon>
                Ghana
              </a>
              <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                <mat-icon class="mr-2">place</mat-icon>
                South Africa
              </a>
              <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                <mat-icon class="mr-2">place</mat-icon>
                Dubai
              </a>
              <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                <mat-icon class="mr-2">place</mat-icon>
                USA
              </a>
            </nav>
          </div>

          <!-- Newsletter -->
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-filla-gold">Newsletter</h3>
            <p class="text-gray-300">
              Subscribe to our newsletter for exclusive travel deals and updates.
            </p>
            <div class="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                class="bg-filla-gray/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-filla-gold"
              >
              <button mat-raised-button class="bg-filla-gold text-filla-dark py-2 rounded-lg hover:bg-filla-gold/90">
                Subscribe
                <mat-icon class="ml-2">send</mat-icon>
              </button>
            </div>
          </div>
        </div>

        <mat-divider class="border-gray-700"></mat-divider>

        <!-- Bottom Section -->
        <div class="pt-8 text-center">
          <p class="text-gray-400">
            © {{currentYear}} Filla City Travel & Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
