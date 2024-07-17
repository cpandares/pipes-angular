import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select

  public name:string = 'John Doe';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'Invitarlo',
    female: 'Invitarla'
  }

  cahngePerson():void{
    this.name = 'Jane Doe';
    this.gender = 'female';
  }
  
  // i18n Plural

  public clients: string[] = ['juan', 'pedro', 'maria', 'luis', 'jose'];

  public mapClients = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    'other': 'Tenemos # clientes esperando.'
  }

  atender():void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'John',
    age: 30,
    address: 'Caracas, Venezuela'
  }

  // ASYNC PIPE

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })


}
