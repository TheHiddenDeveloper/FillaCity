import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="min-h-screen bg-filla-dark">
      <!-- Hero Section -->
      <section class="relative h-[40vh]">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080')] bg-cover bg-center">
          <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div class="relative h-full flex items-center">
          <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              About <span class="text-filla-gold">Filla City</span>
            </h1>
            <p class="text-xl text-gray-200 max-w-2xl">
              Your trusted partner in creating unforgettable travel experiences
            </p>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-2xl font-bold mb-6">Our Story</h2>
              <div class="space-y-4 text-gray-300">
                <p>
                  Since our establishment, Filla City Travel & Tours has been at the forefront of luxury travel experiences. 
                  We've built our reputation on creating exceptional journeys that exceed our clients' expectations.
                </p>
                <p>
                  Our passion for travel and dedication to excellence has made us one of the most trusted names in the industry. 
                  We believe that every journey should be unique and memorable.
                </p>
                <p>
                  With a team of experienced travel professionals and a network of global partners, 
                  we're able to offer unparalleled service and access to the world's most exclusive destinations.
                </p>
              </div>
            </div>
            
            <div class="bg-filla-gray p-8 rounded-lg">
              <h2 class="text-2xl font-bold mb-6">Why Choose Us</h2>
              <div class="space-y-6">
                <div>
                  <h3 class="text-xl font-bold mb-2 text-filla-gold">Expert Travel Planning</h3>
                  <p class="text-gray-300">Our team of travel experts crafts perfect itineraries tailored to your preferences.</p>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-filla-gold">24/7 Support</h3>
                  <p class="text-gray-300">Round-the-clock assistance ensures you're taken care of throughout your journey.</p>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-filla-gold">Best Price Guarantee</h3>
                  <p class="text-gray-300">We offer competitive prices without compromising on quality and service.</p>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-filla-gold">Luxury Experience</h3>
                  <p class="text-gray-300">Access to exclusive resorts, premium flights, and VIP services worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {}