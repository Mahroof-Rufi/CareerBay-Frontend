import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-options',
  templateUrl: './nav-bar-options.component.html',
  styleUrl: './nav-bar-options.component.scss'
})
export class NavBarOptionsComponent {
  @Input() isMenuOpen: boolean = false;

}
