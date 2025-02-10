import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[40vh] flex items-center">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
          alt="Our Services"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <div class="container relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span class="t<mext-accent">Services</span>
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl">
          Comprehensive travel solutions tailored to your needs
        </p>
      </div>
    </section>

    <!-- Main Services -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card group">
            <div class="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
                alt="Flight Bookings"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-black/50 dark:bg-black/50 flex items-center justify-center"
              >
                <i
                  class="fas fa-plane text-2xl text-white dark:!text-yellow-500"
                ></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Flight Bookings</h3>
              <ul class="space-y-2 text-gray-600 mb-6">
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Premium airline partnerships
                </li>
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Flexible booking options
                </li>
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  24/7 flight support
                </li>
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Best price guarantee
                </li>
              </ul>
              <a routerLink="/contact" class="btn-primary block text-center"
                >Book Now</a
              >
            </div>
          </div>

          <div class="card group">
            <div class="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                alt="Accommodations"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-black/50 dark:bg-black/50 flex items-center justify-center"
              >
                <i
                  class="fas fa-hotel text-2xl text-white dark:!text-yellow-500"
                ></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Accommodations</h3>
              <ul class="space-y-2 text-gray-600 mb-6">
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Luxury hotels & resorts
                </li>
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Exclusive rates
                </li>
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Room upgrades
                </li>
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  VIP amenities
                </li>
              </ul>
              <a routerLink="/contact" class="btn-primary block text-center"
                >Find Hotels</a
              >
            </div>
          </div>

          <div class="card group">
            <div class="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Tour Packages"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-black/50 dark:bg-black/50 flex items-center justify-center"
              >
                <i
                  class="fas fa-map text-2xl text-white dark:!text-yellow-500"
                ></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Tour Packages</h3>
              <ul class="space-y-2 text-gray-600 mb-6">
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Customized itineraries
                </li>
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Expert local guides
                </li>
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Unique experiences
                </li>
                <li class="flex items-center">
                  <mat-icon class="text-primary mr-2">check_circle</mat-icon>
                  Group discounts
                </li>
              </ul>
              <a routerLink="/contact" class="btn-primary block text-center"
                >Explore Tours</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold text-center mb-12">
          Additional <span class="gradient-text">Services</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card p-6 flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <i class="fas fa-car dark:!text-yellow-500"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Transportation</h3>
              <p class="text-gray-600">
                From luxury car rentals to private transfers, we ensure
                comfortable and reliable transportation throughout your journey.
              </p>
            </div>
          </div>

          <div class="card p-6 flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <i class="fas fa-utensils dark:!text-yellow-500"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Dining Reservations</h3>
              <p class="text-gray-600">
                Access to exclusive restaurants and unique dining experiences
                around the world.
              </p>
            </div>
          </div>

          <div class="card p-6 flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <i class="fas fa-masks-theater dark:!text-yellow-500"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Event Tickets</h3>
              <p class="text-gray-600">
                Premium access to shows, sports events, and cultural activities
                at your destination.
              </p>
            </div>
          </div>

          <div class="card p-6 flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <i class="fas fa-shield-heart dark:!text-yellow-500"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Travel Insurance</h3>
              <p class="text-gray-600">
                Comprehensive travel insurance options to protect your journey
                and investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {}
