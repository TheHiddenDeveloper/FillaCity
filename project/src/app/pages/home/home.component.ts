import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  template: `
    <!-- Hero Section -->
    <div class="relative h-[80vh] bg-filla-dark">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528747045269-390fe33c19f2')] bg-cover bg-center">
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div class="relative h-full flex items-center">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white max-w-3xl">
            Experience Africa & Beyond with
            <span class="text-filla-gold">Filla City</span>
          </h1>
          <p class="text-xl mb-8 max-w-2xl text-gray-200 text-justify">
            Your premier travel partner for unforgettable experiences across Africa and worldwide. We specialize in crafting bespoke travel experiences, from African safaris to global adventures.
          </p>
          <div class="space-x-4">
            <button mat-raised-button class="bg-filla-gold text-filla-dark px-8 py-3 text-lg">
              Explore Packages
            </button>
            <button mat-stroked-button class="border-filla-gold text-filla-gold px-8 py-3 text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Destinations -->
    <section class="py-20 bg-filla-dark">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">
          Popular <span class="text-filla-gold">Destinations</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <mat-card class="bg-filla-gray">
            <img src="https://images.unsplash.com/photo-1571406252241-db0280bd36cd" alt="Ghana" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Ghana</h3>
              <p class="text-gray-300 mb-4 text-justify">Experience the rich culture, historic castles, and vibrant markets of the Gold Coast.</p>
              <div class="flex justify-between items-center">
                <span class="text-filla-gold font-bold">From $899</span>
                <button mat-button color="accent">Explore Ghana</button>
              </div>
            </div>
          </mat-card>

          <mat-card class="bg-filla-gray">
            <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5" alt="South Africa" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">South Africa</h3>
              <p class="text-gray-300 mb-4 text-justify">Discover wildlife safaris, wine routes, and the stunning Cape Town landscape.</p>
              <div class="flex justify-between items-center">
                <span class="text-filla-gold font-bold">From $1,299</span>
                <button mat-button color="accent">Explore South Africa</button>
              </div>
            </div>
          </mat-card>

          <mat-card class="bg-filla-gray">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" alt="Dubai" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Dubai</h3>
              <p class="text-gray-300 mb-4 text-justify">Experience luxury shopping, desert safaris, and modern architectural marvels.</p>
              <div class="flex justify-between items-center">
                <span class="text-filla-gold font-bold">From $1,599</span>
                <button mat-button color="accent">Explore Dubai</button>
              </div>
            </div>
          </mat-card>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <mat-card class="bg-filla-gray">
            <img src="https://images.unsplash.com/photo-1517935706615-2717063c2225" alt="Canada" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Canada</h3>
              <p class="text-gray-300 mb-4 text-justify">Explore stunning natural landscapes, vibrant cities, and diverse culture.</p>
              <div class="flex justify-between items-center">
                <span class="text-filla-gold font-bold">From $1,899</span>
                <button mat-button color="accent">Explore Canada</button>
              </div>
            </div>
          </mat-card>

          <mat-card class="bg-filla-gray">
            <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74" alt="USA" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">USA</h3>
              <p class="text-gray-300 mb-4 text-justify">Discover iconic cities, national parks, and endless adventures.</p>
              <div class="flex justify-between items-center">
                <span class="text-filla-gold font-bold">From $1,799</span>
                <button mat-button color="accent">Explore USA</button>
              </div>
            </div>
          </mat-card>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-filla-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose <span class="text-filla-gold">Filla City</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-filla-gold text-4xl mb-4">✈️</div>
            <h3 class="text-xl font-bold mb-2">Expert Planning</h3>
            <p class="text-gray-300 text-justify">Personalized travel itineraries crafted by experienced professionals</p>
          </div>
          <div>
            <div class="text-filla-gold text-4xl mb-4">🏆</div>
            <h3 class="text-xl font-bold mb-2">Best Value</h3>
            <p class="text-gray-300 text-justify">Competitive prices with no compromise on quality</p>
          </div>
          <div>
            <div class="text-filla-gold text-4xl mb-4">🌟</div>
            <h3 class="text-xl font-bold mb-2">Local Expertise</h3>
            <p class="text-gray-300 text-justify">Deep knowledge of destinations and hidden gems</p>
          </div>
          <div>
            <div class="text-filla-gold text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-bold mb-2">24/7 Support</h3>
            <p class="text-gray-300 text-justify">Round-the-clock assistance throughout your journey</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Success Gallery Section -->
    <section class="py-20 bg-filla-dark">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">
          Our Success <span class="text-filla-gold">Gallery</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Success Cards -->
          <mat-card class="bg-filla-gray/30 backdrop-blur-lg hover:bg-filla-gray/40 transition-all duration-300">
            <img mat-card-image src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5" 
                 alt="Safari Adventure" class="h-48 object-cover">
            <mat-card-content class="p-6">
              <h3 class="text-xl font-bold mb-2">Safari Adventure</h3>
              <p class="text-gray-300 mb-4">Organized a memorable safari expedition for 20+ guests, featuring exclusive wildlife encounters and luxury accommodations.</p>
              <div class="flex items-center text-filla-gold">
                <mat-icon class="mr-2">star</mat-icon>
                <span>5.0 Rating</span>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- Add more success cards (total of 14) following the same pattern -->
          <!-- Example of additional cards: -->
          <mat-card class="bg-filla-gray/30 backdrop-blur-lg hover:bg-filla-gray/40 transition-all duration-300">
            <img mat-card-image src="https://images.unsplash.com/photo-1571406252241-db0280bd36cd" 
                 alt="Ghana Cultural Tour" class="h-48 object-cover">
            <mat-card-content class="p-6">
              <h3 class="text-xl font-bold mb-2">Ghana Cultural Tour</h3>
              <p class="text-gray-300 mb-4">Curated an immersive cultural experience for international visitors, showcasing Ghana's rich heritage and traditions.</p>
              <div class="flex items-center text-filla-gold">
                <mat-icon class="mr-2">star</mat-icon>
                <span>4.9 Rating</span>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- Continue adding more cards... -->
        </div>

        <!-- Pagination or Load More -->
        <div class="text-center mt-12">
          <button mat-raised-button class="bg-filla-gold text-filla-dark px-8 py-3">
            Load More Success Stories
          </button>
        </div>
      </div>
    </section>


    <!-- WhatsApp Button -->
    <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
       target="_blank" 
       class="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
      </svg>
    </a>
  `
})
export class HomeComponent {}