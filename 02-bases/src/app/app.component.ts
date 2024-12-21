import { Value } from './../../node_modules/regjsparser/parser.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola gente';
  public contador: string = '21';

  increaseby (Value:Number): void {
    this.contador +=1;
  }

}


