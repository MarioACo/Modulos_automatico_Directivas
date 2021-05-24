import { Component } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent  {

    public mostrarHtml5():string {
      return "Esto es Html5";
    }

}
