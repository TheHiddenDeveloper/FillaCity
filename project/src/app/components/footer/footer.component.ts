import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-2xl font-bold gradient-text mb-4">Wanderlust</h3>
            <p class="text-gray-400">
              Your trusted partner for unforgettable travel experiences around the globe.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav class="space-y-2">
              <a routerLink="/" class="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a routerLink="/about" class="block text-gray-400 hover:text-white transition-colors">About</a>
              <a routerLink="/services" class="block text-gray-400 hover:text-white transition-colors">Services</a>
              <a routerLink="/contact" class="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div class="space-y-2">
              <p class="flex items-center">
                <mat-icon class="mr-2 text-primary">location_on</mat-icon>
                123 Travel Street, City
              </p>
              <p class="flex items-center">
                <mat-icon class="mr-2 text-primary">phone</mat-icon>
                +1 234 567 890
              </p>
              <p class="flex items-center">
                <mat-icon class="mr-2 text-primary">email</mat-icon>
                infowanderlust.com
              </p>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                <mat-icon>facebook</mat-icon>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                <mat-icon>twitter</mat-icon>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                <mat-icon>instagram</mat-icon>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-8 text-center">
          <p class="text-gray-400">
            © {{currentYear}} Wanderlust Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}