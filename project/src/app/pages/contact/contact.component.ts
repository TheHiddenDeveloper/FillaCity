import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[40vh] flex items-center">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a" 
          alt="Contact Us"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div class="container relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in <span class="text-accent">Touch</span>
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl">
          Let us help you plan your perfect journey
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
              <div class="space-y-4">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <mat-icon class="text-primary">location_on</mat-icon>
                  </div>
                  <div>
                    <h3 class="font-semibold">Address</h3>
                    <p class="text-gray-600">123 Travel Street, City, Country</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <mat-icon class="text-primary">phone</mat-icon>
                  </div>
                  <div>
                    <h3 class="font-semibold">Phone</h3>
                    <p class="text-gray-600">+1 234 567 890</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <mat-icon class="text-primary">email</mat-icon>
                  </div>
                  <div>
                    <h3 class="font-semibold">Email</h3>
                    <p class="text-gray-600">infoFillaCity Travel and Tour.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-bold mb-6">Business Hours</h2>
              <div class="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-bold mb-6">Follow Us</h2>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <mat-icon class="text-primary">facebook</mat-icon>
                </a>
                <a href="#" class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <mat-icon class="text-primary">twitter</mat-icon>
                </a>
                <a href="#" class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <mat-icon class="text-primary">instagram</mat-icon>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="card p-8">
              <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      formControlName="firstName"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      [ngClass]="{'border-red-500': contactForm.get('firstName')?.invalid && contactForm.get('firstName')?.touched}"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      formControlName="lastName"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      [ngClass]="{'border-red-500': contactForm.get('lastName')?.invalid && contactForm.get('lastName')?.touched}"
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    formControlName="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    [ngClass]="{'border-red-500': contactForm.get('email')?.invalid && contactForm.get('email')?.touched}"
                  >
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    formControlName="phone"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    [ngClass]="{'border-red-500': contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched}"
                  >
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    formControlName="message"
                    rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    [ngClass]="{'border-red-500': contactForm.get('message')?.invalid && contactForm.get('message')?.touched}"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  [disabled]="contactForm.invalid || isSubmitting"
                  class="btn-primary w-full flex items-center justify-center"
                >
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                  <mat-icon class="ml-2">send</mat-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="h-[400px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1621859476051!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        class="absolute inset-0"
      ></iframe>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
  if (this.contactForm.valid) {
    this.isSubmitting = true;

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
          from_email: this.contactForm.value.email,
          to_email: environment.emailjs.toEmail,
          phone: this.contactForm.value.phone,
          message: this.contactForm.value.message,
        }
      );
      
      this.snackBar.open('Message sent successfully!', 'Close', {
        duration: 5000,
        panelClass: ['success-snackbar']
      });
      this.contactForm.reset();
    } catch (error) {
      this.snackBar.open('Failed to send message. Please try again.', 'Close', {
        duration: 5000,
        panelClass: ['error-snackbar']
      });
    } finally {
      this.isSubmitting = false;
    }
  }
}
}