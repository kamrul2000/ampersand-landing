import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  model = {
    name: '',
    email: '',
    message: ''
  };
  sent = false;

  submit() {
    this.sent = true;
    this.model = {
      name: '',
      email: '',
      message: ''
    };
  }
}
