import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Travel"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div class="container relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Discover Your Next Adventure
          </h1>
          <p class="text-xl text-gray-200 mb-8">
            Experience the world's most breathtaking destinations with our
            curated travel experiences
          </p>
          <div class="flex gap-4">
            <a routerLink="/services" class="btn-primary">Explore Packages</a>
            <a routerLink="/contact" class="btn-secondary bg-white"
              >Contact Us</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Destinations -->
    <section class="section-padding bg-white">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">
          Popular <span class="gradient-text">Destinations</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card group">
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571406252241-db0280bd36cd"
                alt="Destination"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
              >
                <h3 class="text-xl font-bold text-white">Santorini, Greece</h3>
                <p class="text-gray-200">From $899</p>
              </div>
            </div>
          </div>

          <div class="card group">
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
                alt="Destination"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
              >
                <h3 class="text-xl font-bold text-white">Bali, Indonesia</h3>
                <p class="text-gray-200">From $799</p>
              </div>
            </div>
          </div>

          <div class="card group">
            <div class="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
                alt="Destination"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
              >
                <h3 class="text-xl font-bold text-white">Dubai, UAE</h3>
                <p class="text-gray-200">From $1,299</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">
          Why Choose <span class="gradient-text">Us</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <i class="fas fa-plane text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Best Flights</h3>
            <p class="text-gray-600">
              Handpicked flights for comfort and value
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <i class="fas fa-hotel text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Top Hotels</h3>
            <p class="text-gray-600">Luxury stays at competitive prices</p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <i class="fas fa-headset text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">24/7 Support</h3>
            <p class="text-gray-600">Always here when you need us</p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <i class="fas fa-piggy-bank text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Best Prices</h3>
            <p class="text-gray-600">Unbeatable value for your journey</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Travel"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-primary/80"></div>
      </div>

      <div class="container relative z-10 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Let us help you plan the perfect getaway. Contact us today and begin
          your adventure.
        </p>
        <a routerLink="/contact" class="btn-secondary bg-white inline-block">
          Get Started
        </a>
      </div>
    </section>

    <!-- WhatsApp Button -->
    <a
      href="https://wa.me/+233599135546"
      target="_blank"
      class="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors"
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"
        />
      </svg>
    </a>
  `,
})
export class HomeComponent {}
