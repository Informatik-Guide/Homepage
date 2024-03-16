import { Component } from '@angular/core';

@Component({
  selector: 'app-graphen',
  templateUrl: './graphen.component.html',
  styleUrls: ['./graphen.component.css']
})
export class GraphenComponent {
  Start: boolean = false;
  Question: boolean = false;
  steps: boolean[] = [];
  Antwort: boolean = false;
}