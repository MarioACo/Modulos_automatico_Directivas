import { Component} from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent{

  nombre = 'Rodriguez Pablo';
  edad = 6;
  sueldos = [1700, 1600, 1900];
}
