import { Component } from '@angular/core';

@Component({
  selector: 'app-graphen',
  templateUrl: './graphen.component.html',
  styleUrls: ['./graphen.component.css']
})
export class GraphenComponent {
  Start: boolean = false;
  Question1: boolean = false;
  steps: boolean[] = [];
  Answer1 = 0;
  Solution1 = 3;
}