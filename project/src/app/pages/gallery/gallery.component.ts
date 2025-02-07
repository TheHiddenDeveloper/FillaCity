import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

interface GalleryImage {
  url: string;
  location: string;
  category: string;
}

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[40vh] flex items-center">
      <div class="absolute inset-0">
        <img
          src="assets/img-2.jpg"
          alt="Travel Gallery"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <div class="container relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Travel <span class="text-accent">Gallery</span>
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl">
          Capturing moments and memories around the world
        </p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <!-- Filter Categories -->
        <div class="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            *ngFor="let category of categories"
            (click)="filterImages(category)"
            class="px-6 py-2 rounded-full transition-all"
            [class.bg-primary]="selectedCategory === category"
            [class.text-white]="selectedCategory === category"
            [class.bg-gray-100]="selectedCategory !== category"
            [class.hover:bg-gray-200]="selectedCategory !== category"
          >
            {{ category }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let image of filteredImages"
            class="group relative overflow-hidden rounded-lg cursor-pointer"
            (click)="openImage(image)"
          >
            <img
              [src]="image.url"
              [alt]="image.location"
              class="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300"
            >
              <div
                class="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <p class="flex items-center">
                  <mat-icon class="mr-2">location_on</mat-icon>
                  {{ image.location }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class GalleryComponent {
  selectedCategory = "All";
  categories = ["All", "UAE", "USA", "Canada", "UK"];

  images: GalleryImage[] = [
    {
      url: "assets/img-3.jpg",
      location: "Abu Dhabi",
      category: "UAE",
    },
    {
      url: "assets/img-4.jpg",
      location: "California",
      category: "USA",
    },
    {
      url: "assets/img-5.jpg",
      location: "Ontario",
      category: "Canada",
    },
    {
      url: "assets/img-6.jpg",
      location: "Dubai",
      category: "UAE",
    },
    {
      url: "assets/img-7.jpg",
      location: "Liverpool",
      category: "UK",
    },
    {
      url: "assets/img-8.jpg",
      location: "Iowa",
      category: "USA",
    },
    {
      url: "assets/img-9.jpg",
      location: "Quebec",
      category: "Canada",
    },
    {
      url: "assets/img-10.jpg",
      location: "Massachusetts",
      category: "USA",
    },
    {
      url: "assets/img-11.jpg",
      location: "Leeds",
      category: "UK",
    },
    {
      url: "assets/img-12.jpg",
      location: "Montreal",
      category: "Canada",
    },
    {
      url: "assets/img-13.jpg",
      location: "Ajman",
      category: "UAE",
    },
    {
      url: "assets/img-14.jpg",
      location: "Bristol",
      category: "UK",
    },
    {
      url: "assets/img-15.jpg",
      location: "Miami",
      category: "USA",
    },
    {
      url: "assets/img-16.jpg",
      location: "Vancouver",
      category: "Canada",
    },
    {
      url: "assets/img-17.jpg",
      location: "Manchester",
      category: "UK",
    },
  ];

  get filteredImages(): GalleryImage[] {
    if (this.selectedCategory === "All") {
      return this.images;
    }
    return this.images.filter((img) => img.category === this.selectedCategory);
  }

  filterImages(category: string) {
    this.selectedCategory = category;
  }

  openImage(image: GalleryImage) {
    // TODO: Implement lightbox functionality
    console.log("Opening image:", image);
  }
}
