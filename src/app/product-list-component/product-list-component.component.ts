import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})


export class ProductListComponentComponent {
  Products = [
    {nom:'Banane',price:500},
    {nom:'Pomme',price:200},
    {nom:'Orange',price:2000},
    {nom: 'Pasteque',price:270},
    {nom:'Papaye',price:500}
]

productColor(price:number){

    if(price > 300){

      return 'highlightDirective'
    }
    return 'color'
}


}
