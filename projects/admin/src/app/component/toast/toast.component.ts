import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnInit {
  show = false;
  message = '';

  constructor() {}

  ngOnInit(): void {}

  showToast(message: string) {
    this.message = message;
    this.show = true;
    setTimeout(() => (this.show = false), 3000);
  }
}
