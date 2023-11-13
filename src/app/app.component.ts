import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOption:string = ''

  selectOption(menuOption:string){
    this.menuOption = menuOption
  }
}
