import { Component } from '@angular/core';
import { Hero,Color } from '../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {


  public isUpperCase:boolean = false;
  public orderBy?: keyof Hero | undefined | '' = '';
  
  public heroes : Hero[]= [
    {
      name: 'Superman',
      canFly: true,
      color: Color.Blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.Black
    },
    {
      name : 'Robin',
      canFly: false,
      color: Color.Green
    },{
      name: 'Flash',
      canFly: true,
      color: Color.Red
    }

  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }


  changeOrder(value: keyof Hero | ''):void {
    this.orderBy = value;
  }

}
