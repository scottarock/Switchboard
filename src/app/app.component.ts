import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'switchboard-app';
  switches: Boolean[] = [];

  ngOnInit() {
    for ( let idx = 0; idx < 10; idx += 1 ) {
      this.switches[idx] = (Math.floor(Math.random() * 2)) === 1;
    }

  }

  onClick(switchNumber: number): void {
    this.switches[switchNumber] = !this.switches[switchNumber];
  }
}
