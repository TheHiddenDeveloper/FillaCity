import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="min-h-screen bg-filla-dark py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-12 text-center">
          Our <span class="text-filla-gold">Services</span>
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <mat-card class="bg-filla-gray">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05" alt="Flight Bookings" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Flight Bookings</h3>
              <ul class="space-y-2 text-gray-300 mb-6">
                <li>✓ Best airline deals</li>
                <li>✓ Flexible booking options</li>
                <li>✓ Premium class upgrades</li>
                <li>✓ Airport lounge access</li>
              </ul>
              <button mat-raised-button class="bg-filla-gold text-filla-dark w-full">
                Book Now
              </button>
            </div>
          </mat-card>

          <mat-card class="bg-filla-gray">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="Hotel Reservations" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Hotel Reservations</h3>
              <ul class="space-y-2 text-gray-300 mb-6">
                <li>✓ Luxury accommodations</li>
                <li>✓ Best price guarantee</li>
                <li>✓ Free cancellation</li>
                <li>✓ Special perks & amenities</li>
              </ul>
              <button mat-raised-button class="bg-filla-gold text-filla-dark w-full">
                Find Hotels
              </button>
            </div>
          </mat-card>

          <mat-card class="bg-filla-gray">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="Tour Packages" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Tour Packages</h3>
              <ul class="space-y-2 text-gray-300 mb-6">
                <li>✓ Customized itineraries</li>
                <li>✓ Expert local guides</li>
                <li>✓ All-inclusive options</li>
                <li>✓ Group discounts</li>
              </ul>
              <button mat-raised-button class="bg-filla-gold text-filla-dark w-full">
                Explore Tours
              </button>
            </div>
          </mat-card>
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent {}