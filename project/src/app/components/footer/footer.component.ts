// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatIconModule } from '@angular/material/icon';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-footer',
//   standalone: true,
//   imports: [CommonModule, MatIconModule, RouterModule],
//   template: `
//     <footer class="bg-filla-gray text-white py-12 mt-auto">
//       <div class="container mx-auto px-4">
//         <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <!-- Company Info -->
//           <div>
//             <h3 class="text-xl font-bold text-filla-gold mb-4">Filla City</h3>
//             <p class="text-gray-300 text-justify mb-4">
//               Your trusted partner in creating unforgettable travel experiences across Africa and beyond.
//             </p>
//             <div class="flex space-x-4">
//               <a href="#" class="text-gray-300 hover:text-filla-gold">
//                 <mat-icon>facebook</mat-icon>
//               </a>
//               <a href="#" class="text-gray-300 hover:text-filla-gold">
//                 <mat-icon>instagram</mat-icon>
//               </a>
//               <a href="#" class="text-gray-300 hover:text-filla-gold">
//                 <mat-icon>twitter</mat-icon>
//               </a>
//             </div>
//           </div>

//           <!-- Quick Links -->
//           <div>
//             <h3 class="text-xl font-bold text-filla-gold mb-4">Quick Links</h3>
//             <ul class="space-y-2">
//               <li>
//                 <a routerLink="/" class="text-gray-300 hover:text-filla-gold flex items-center">
//                   <mat-icon class="text-sm mr-2">chevron_right</mat-icon>
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a routerLink="/about" class="text-gray-300 hover:text-filla-gold flex items-center">
//                   <mat-icon class="text-sm mr-2">chevron_right</mat-icon>
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a routerLink="/services" class="text-gray-300 hover:text-filla-gold flex items-center">
//                   <mat-icon class="text-sm mr-2">chevron_right</mat-icon>
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a routerLink="/contact" class="text-gray-300 hover:text-filla-gold flex items-center">
//                   <mat-icon class="text-sm mr-2">chevron_right</mat-icon>
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <!-- Popular Destinations -->
//           <div>
//             <h3 class="text-xl font-bold text-filla-gold mb-4">Popular Destinations</h3>
//             <ul class="space-y-2">
//               <li>
//                 <a href="#" class="text-gray-300 hover:text-filla-gold flex items-center">
//                   <mat-icon class="text-sm mr-2">place</mat-icon>
//                   Ghana
//                 </a>
//               </li>
//               <li>
//                 <a href="#" class="text-gray-300 hover:text-filla-gold flex items-center">
//                   <mat-icon class="text-sm mr-2">place</mat-icon>
//                   South Africa
//                 </a>
//               </li>
//               <li>
//                 <a href="#" class="text-gray-300 hover:text-filla-gold flex items-center">
//                   <mat-icon class="text-sm mr-2">place</mat-icon>
//                   Dubai
//                 </a>
//               </li>
//               <li>
//                 <a href="#" class="text-gray-300 hover:text-filla-gold flex items-center">
//                   <mat-icon class="text-sm mr-2">place</mat-icon>
//                   USA
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <!-- Contact Info -->
//           <div>
//             <h3 class="text-xl font-bold text-filla-gold mb-4">Contact Info</h3>
//             <ul class="space-y-4">
//               <li class="flex items-start">
//                 <mat-icon class="text-filla-gold mr-2">location_on</mat-icon>
//                 <span class="text-gray-300">123 Travel Street, Business District, Accra, Ghana</span>
//               </li>
//               <li class="flex items-center">
//                 <mat-icon class="text-filla-gold mr-2">phone</mat-icon>
//                 <span class="text-gray-300">+233 XX XXX XXXX</span>
//               </li>
//               <li class="flex items-center">
//                 <mat-icon class="text-filla-gold mr-2">email</mat-icon>
//                 <span class="text-gray-300">info@fillacity.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div class="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p class="text-gray-300">
//             © ${new Date().getFullYear()} Filla City Travel & Tours. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   `
// })
// export class FooterComponent {}