import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[40vh] flex items-center">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080"
          alt="About Us"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <div class="container relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span class="text-accent">FillaCity Travel and Tour</span>
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl">
          Creating unforgettable journeys since 2010
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Our Story</h2>
            <div class="space-y-4 text-gray-600">
              <p>
                Founded in 2010, FillaCity Travel and Tour has grown from a
                small local agency to a leading name in luxury travel
                experiences. Our journey began with a simple mission: to create
                extraordinary travel experiences that exceed expectations.
              </p>
              <p>
                Over the years, we've built strong relationships with premium
                partners worldwide, allowing us to offer exclusive experiences
                and unparalleled service to our clients.
              </p>
              <p>
                Today, we continue to innovate and enhance our services, always
                putting our clients' dreams and satisfaction first.
              </p>
            </div>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
              alt="Our Story"
              class="rounded-lg shadow-xl"
            />
            <div
              class="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg"
            >
              <p class="text-3xl font-bold">13+</p>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <h2 class="text-3xl font-bold text-center mb-12">
          Our <span class="gradient-text">Values</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-6">
            <div
              class="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4"
            >
              <i class="fas fa-circle-check text-xl dark:!text-yellow-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Excellence</h3>
            <p class="text-gray-600">
              We strive for excellence in every aspect of our service, ensuring
              each journey exceeds expectations.
            </p>
          </div>

          <div class="card p-6">
            <div
              class="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4"
            >
              <i class="fas fa-heart text-xl dark:!text-yellow-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Passion</h3>
            <p class="text-gray-600">
              Our passion for travel drives us to create unique and memorable
              experiences for our clients.
            </p>
          </div>

          <div class="card p-6">
            <div
              class="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4"
            >
              <i class="fas fa-handshake text-xl dark:!text-yellow-500"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Trust</h3>
            <p class="text-gray-600">
              Building lasting relationships through transparency and
              reliability is at our core.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <h2 class="text-3xl font-bold text-center mb-12">
          Meet Our <span class="gradient-text">Team</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="relative mb-4 group">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg"
              />
              <div
                class="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors rounded-lg"
              ></div>
            </div>
            <h3 class="text-xl font-bold">Sarah Johnson</h3>
            <p class="text-gray-600">Founder & CEO</p>
          </div>

          <div class="text-center">
            <div class="relative mb-4 group">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg"
              />
              <div
                class="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors rounded-lg"
              ></div>
            </div>
            <h3 class="text-xl font-bold">Michael Chen</h3>
            <p class="text-gray-600">Travel Director</p>
          </div>

          <div class="text-center">
            <div class="relative mb-4 group">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg"
              />
              <div
                class="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors rounded-lg"
              ></div>
            </div>
            <h3 class="text-xl font-bold">Emma Davis</h3>
            <p class="text-gray-600">Customer Experience</p>
          </div>

          <div class="text-center">
            <div class="relative mb-4 group">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                alt="Team Member"
                class="w-full h-64 object-cover rounded-lg"
              />
              <div
                class="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors rounded-lg"
              ></div>
            </div>
            <h3 class="text-xl font-bold">James Wilson</h3>
            <p class="text-gray-600">Operations Manager</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
