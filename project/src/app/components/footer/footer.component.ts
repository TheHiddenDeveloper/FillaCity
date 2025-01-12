import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule],
  template: `
    <footer class="bg-gradient-to-b from-filla-dark to-black text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center">
              <img src="assets/logo.png" alt="Filla City Logo" class="h-10 mr-3">
              <h3 class="text-xl font-bold bg-gradient-to-r from-filla-gold to-yellow-500 bg-clip-text text-transparent">
                Filla City
              </h3>
            </div>
            <p class="text-gray-400 text-sm">
              Your trusted partner in creating unforgettable travel experiences across Africa and beyond.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h4 class="text-filla-gold font-semibold mb-3">Quick Links</h4>
              <nav class="space-y-2">
                <a routerLink="/" class="block text-gray-400 hover:text-filla-gold text-sm transition-colors">Home</a>
                <a routerLink="/about" class="block text-gray-400 hover:text-filla-gold text-sm transition-colors">About</a>
                <a routerLink="/services" class="block text-gray-400 hover:text-filla-gold text-sm transition-colors">Services</a>
                <a routerLink="/contact" class="block text-gray-400 hover:text-filla-gold text-sm transition-colors">Contact</a>
              </nav>
            </div>
            <div>
              <h4 class="text-filla-gold font-semibold mb-3">Popular</h4>
              <nav class="space-y-2">
                <a href="#" class="block text-gray-400 hover:text-filla-gold text-sm transition-colors">Ghana</a>
                <a href="#" class="block text-gray-400 hover:text-filla-gold text-sm transition-colors">Dubai</a>
                <a href="#" class="block text-gray-400 hover:text-filla-gold text-sm transition-colors">USA</a>
                <a href="#" class="block text-gray-400 hover:text-filla-gold text-sm transition-colors">Canada</a>
              </nav>
            </div>
          </div>

          <!-- Social Links -->
          <div class="space-y-4">
            <h4 class="text-filla-gold font-semibold">Connect With Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-filla-gold transition-colors">
                <mat-icon>facebook</mat-icon>
              </a>
              <a href="#" class="text-gray-400 hover:text-filla-gold transition-colors">
                <mat-icon>photo_camera</mat-icon>
              </a>
              <a href="#" class="text-gray-400 hover:text-filla-gold transition-colors">
                <mat-icon>twitter</mat-icon>
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-center pt-8 border-t border-gray-800">
          <p class="text-gray-400 text-sm">
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