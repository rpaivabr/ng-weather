import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() text: string = '';
  timesClicked = 0;

  constructor() { }

  ngOnInit(): void {
  }

  buttonValue(): string {
    return this.calculatedValue();
  }

  addTimesClicked(): void {
    this.timesClicked += 2;
  }

  private calculatedValue(): string {
    return `Clicked: ${this.timesClicked}`
  }

}
