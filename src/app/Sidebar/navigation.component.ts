import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  title = 'P-Seminar';
  Klassenstuffen: boolean = false
  Klasse_9: boolean = false
  Klasse_10: boolean = false
  Klasse_11: boolean = false
  Klasse_12: boolean = false
  Klasse_13: boolean = false
}
