import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
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
    MatSnackBarModule,
    MatCardModule
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-filla-dark to-black py-20">
      <div class="container mx-auto px-4">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Get in <span class="text-filla-gold">Touch</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Let us help you plan your perfect journey
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Contact Information Cards -->
          <div class="space-y-6">
            <!-- Office Location -->
            <div class="bg-filla-gray/30 backdrop-blur-lg p-6 rounded-xl hover:bg-filla-gray/40 transition-all duration-300">
              <div class="flex items-center space-x-4">
                <div class="bg-filla-gold/10 p-3 rounded-full">
                  <mat-icon class="text-filla-gold">location_on</mat-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Visit Our Office</h3>
                  <p class="text-gray-400">123 Travel Street</p>
                  <p class="text-gray-400">Accra, Ghana</p>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="bg-filla-gray/30 backdrop-blur-lg p-6 rounded-xl hover:bg-filla-gray/40 transition-all duration-300">
              <div class="flex items-center space-x-4">
                <div class="bg-filla-gold/10 p-3 rounded-full">
                  <mat-icon class="text-filla-gold">phone</mat-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Call Us</h3>
                  <p class="text-gray-400">+233 XX XXX XXXX</p>
                  <p class="text-gray-400">Mon-Fri 9am-6pm</p>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="bg-filla-gray/30 backdrop-blur-lg p-6 rounded-xl hover:bg-filla-gray/40 transition-all duration-300">
              <div class="flex items-center space-x-4">
                <div class="bg-filla-gold/10 p-3 rounded-full">
                  <mat-icon class="text-filla-gold">email</mat-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Email Us</h3>
                  <p class="text-gray-400">infofillacity.com</p>
                  <p class="text-gray-400">24/7 Online Support</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" 
                  class="bg-filla-gray/30 backdrop-blur-lg p-8 rounded-xl space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <mat-form-field appearance="outline" color="accent">
                  <mat-label>First Name</mat-label>
                  <input matInput formControlName="firstName" placeholder="John">
                  <mat-error *ngIf="contactForm.get('firstName')?.errors?.['required']">
                    First name is required
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="outline" color="accent">
                  <mat-label>Last Name</mat-label>
                  <input matInput formControlName="lastName" placeholder="Doe">
                  <mat-error *ngIf="contactForm.get('lastName')?.errors?.['required']">
                    Last name is required
                  </mat-error>
                </mat-form-field>
              </div>

              <mat-form-field appearance="outline" color="accent">
                <mat-label>Email</mat-label>
                <input matInput formControlName="email" placeholder="john.doe@example.com" type="email">
                <mat-icon matSuffix>email</mat-icon>
                <mat-error *ngIf="contactForm.get('email')?.errors?.['required']">
                  Email is required
                </mat-error>
                <mat-error *ngIf="contactForm.get('email')?.errors?.['email']">
                  Please enter a valid email
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" color="accent">
                <mat-label>Phone</mat-label>
                <input matInput formControlName="phone" placeholder="+1 234 567 8900">
                <mat-icon matSuffix>phone</mat-icon>
                <mat-error *ngIf="contactForm.get('phone')?.errors?.['required']">
                  Phone number is required
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" color="accent">
                <mat-label>Message</mat-label>
                <textarea matInput formControlName="message" rows="4" 
                  placeholder="Tell us about your travel plans..."></textarea>
                <mat-icon matSuffix>message</mat-icon>
                <mat-error *ngIf="contactForm.get('message')?.errors?.['required']">
                  Message is required
                </mat-error>
              </mat-form-field>

              <button mat-raised-button
                      [disabled]="contactForm.invalid || isSubmitting"
                      class="w-full py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-filla-gold to-yellow-500 
                             text-filla-dark hover:opacity-90 transition-opacity">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                <mat-icon class="ml-2">send</mat-icon>
              </button>
            </form>
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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
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
            from_name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
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
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}