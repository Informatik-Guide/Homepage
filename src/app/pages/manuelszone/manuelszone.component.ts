import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-manuelszone',
  templateUrl: './manuelszone.component.html',
  styleUrls: ['./manuelszone.component.css']
})
export class ManuelszoneComponent {
  Start: boolean = false;
  Question: boolean = false;
  steps: boolean[] = [];
}
