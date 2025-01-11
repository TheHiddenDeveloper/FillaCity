import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    MatSnackBarModule
  ],
  styles: [`
    .contact-form-container {
      background-color: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }
    .contact-form-container:hover {
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
    }
    .mat-form-field {
      width: 100%;
    }
    .mat-form-field-appearance-outline .mat-form-field-outline {
      color: rgba(255, 215, 0, 0.5);
    }
    .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {
      color: #ffd700;
    }
    .mat-input-element {
      color: #ffffff;
    }
    .mat-form-field-label {
      color: rgba(255, 255, 255, 0.7);
    }
    .contact-info-item {
      transition: all 0.3s ease;
    }
    .contact-info-item:hover {
      transform: translateY(-5px);
    }
    .social-link {
      transition: all 0.3s ease;
    }
    .social-link:hover {
      transform: scale(1.1);
    }
  `],
  template: `
    <div class="min-h-screen bg-filla-dark py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Contact <span class="text-filla-gold">Us</span>
        </h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="contact-form-container p-8">
            <h2 class="text-2xl font-bold mb-6 text-filla-gold">Get in Touch</h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <mat-form-field appearance="outline" color="accent">
                <mat-label>Name</mat-label>
                <input matInput formControlName="name" placeholder="Your Name">
                <mat-icon matSuffix>person</mat-icon>
                <mat-error *ngIf="contactForm.get('name')?.errors?.['required']">Name is required</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" color="accent">
                <mat-label>Email</mat-label>
                <input matInput formControlName="email" placeholder="your.email@example.com" type="email">
                <mat-icon matSuffix>email</mat-icon>
                <mat-error *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</mat-error>
                <mat-error *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" color="accent">
                <mat-label>Phone</mat-label>
                <input matInput formControlName="phone" placeholder="Your Phone Number">
                <mat-icon matSuffix>phone</mat-icon>
                <mat-error *ngIf="contactForm.get('phone')?.errors?.['required']">Phone is required</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" color="accent">
                <mat-label>Message</mat-label>
                <textarea matInput formControlName="message" placeholder="How can we help you?" rows="4"></textarea>
                <mat-icon matSuffix>message</mat-icon>
                <mat-error *ngIf="contactForm.get('message')?.errors?.['required']">Message is required</mat-error>
              </mat-form-field>

              <button mat-raised-button 
                      [disabled]="contactForm.invalid || isSubmitting"
                      class="bg-filla-gold text-filla-dark w-full py-3 rounded-full font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-filla-gold focus:ring-opacity-50">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <div class="space-y-12">
            <div class="contact-info-item bg-filla-gray p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-4 text-filla-gold flex items-center">
                <mat-icon class="mr-2">location_on</mat-icon>Office Location
              </h3>
              <p class="text-gray-300">123 Travel Street</p>
              <p class="text-gray-300">Business District</p>
              <p class="text-gray-300">Accra, Ghana</p>
            </div>

            <div class="contact-info-item bg-filla-gray p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-4 text-filla-gold flex items-center">
                <mat-icon class="mr-2">info</mat-icon>Contact Information
              </h3>
              <p class="text-gray-300 flex items-center mb-2">
                <mat-icon class="mr-2 text-filla-gold">phone</mat-icon>
                +233 XX XXX XXXX
              </p>
              <p class="text-gray-300 flex items-center mb-2">
                <mat-icon class="mr-2 text-filla-gold">email</mat-icon>
                infofillacity.com
              </p>
              <p class="text-gray-300 flex items-center">
                <mat-icon class="mr-2 text-filla-gold">access_time</mat-icon>
                Mon-Fri 9:00 AM - 6:00 PM
              </p>
            </div>

            <div class="contact-info-item bg-filla-gray p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-4 text-filla-gold flex items-center">
                <mat-icon class="mr-2">share</mat-icon>Follow Us
              </h3>
              <div class="flex space-x-4">
                <a href="#" class="social-link text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                  <mat-icon class="mr-1">facebook</mat-icon>Facebook
                </a>
                <a href="#" class="social-link text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                  <mat-icon class="mr-1">photo_camera</mat-icon>Instagram
                </a>
                <a href="#" class="social-link text-gray-300 hover:text-filla-gold transition-colors duration-300 flex items-center">
                  <mat-icon class="mr-1">twitter</mat-icon>Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID");
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      try {
        await emailjs.send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
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
        console.error('Failed to send email:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}