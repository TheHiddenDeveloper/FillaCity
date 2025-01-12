import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
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
    MatCardModule,
    MatDividerModule
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-b from-filla-dark to-filla-gray py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Get in <span class="text-filla-gold">Touch</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our services? We're here to help you plan your perfect journey.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <mat-card class="bg-filla-gray/50 backdrop-blur-lg p-8 rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
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

              <button mat-raised-button color="accent"
                      [disabled]="contactForm.invalid || isSubmitting"
                      class="w-full py-6 text-lg font-semibold rounded-full bg-filla-gold hover:bg-filla-gold/90 text-filla-dark">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                <mat-icon class="ml-2">send</mat-icon>
              </button>
            </form>
          </mat-card>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Office Location -->
            <mat-card class="bg-filla-gray/50 backdrop-blur-lg p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-start space-x-4">
                <mat-icon class="text-filla-gold text-3xl">location_on</mat-icon>
                <div>
                  <h3 class="text-xl font-bold mb-2">Visit Our Office</h3>
                  <p class="text-gray-300">123 Travel Street</p>
                  <p class="text-gray-300">Business District</p>
                  <p class="text-gray-300">Accra, Ghana</p>
                </div>
              </div>
            </mat-card>

            <!-- Contact Details -->
            <mat-card class="bg-filla-gray/50 backdrop-blur-lg p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-start space-x-4">
                <mat-icon class="text-filla-gold text-3xl">contact_phone</mat-icon>
                <div>
                  <h3 class="text-xl font-bold mb-2">Contact Details</h3>
                  <p class="text-gray-300 flex items-center">
                    <mat-icon class="mr-2 text-filla-gold">phone</mat-icon>
                    +233 XX XXX XXXX
                  </p>
                  <p class="text-gray-300 flex items-center">
                    <mat-icon class="mr-2 text-filla-gold">email</mat-icon>
                    infofillacity.com
                  </p>
                </div>
              </div>
            </mat-card>

            <!-- Business Hours -->
            <mat-card class="bg-filla-gray/50 backdrop-blur-lg p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-start space-x-4">
                <mat-icon class="text-filla-gold text-3xl">schedule</mat-icon>
                <div>
                  <h3 class="text-xl font-bold mb-2">Business Hours</h3>
                  <p class="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p class="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                  <p class="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </mat-card>

            <!-- Social Media -->
            <mat-card class="bg-filla-gray/50 backdrop-blur-lg p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-start space-x-4">
                <mat-icon class="text-filla-gold text-3xl">share</mat-icon>
                <div>
                  <h3 class="text-xl font-bold mb-2">Follow Us</h3>
                  <div class="flex space-x-4">
                    <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300">
                      <mat-icon>facebook</mat-icon>
                    </a>
                    <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300">
                      <mat-icon>photo_camera</mat-icon>
                    </a>
                    <a href="#" class="text-gray-300 hover:text-filla-gold transition-colors duration-300">
                      <mat-icon>twitter</mat-icon>
                    </a>
                  </div>
                </div>
              </div>
            </mat-card>
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
        console.error('Failed to send email:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}