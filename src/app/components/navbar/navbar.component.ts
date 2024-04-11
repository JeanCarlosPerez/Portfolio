import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenu = false; // Flag to control menu visibility

  toggleMenu() {
    this.showMenu = !this.showMenu; // Toggle menu state on click
  }
  
  activeElementId: string = 'home';
  isButtonActive: { [key: string]: boolean } = {};

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    this.activeElementId = id;
    // Establecer el estado activo del botón
    this.isButtonActive = {
      ...this.isButtonActive,
      [id]: true
    };
  }
  
}
