import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { About } from './sections/about/about';
import { Services, RevealOnScrollDirective } from './sections/services/services';
import { Products } from './sections/products/products';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, About, Services, Products, Contact, RevealOnScrollDirective],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  year = new Date().getFullYear();
}
