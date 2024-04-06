import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Bryan';
  public gender: 'male'|'female' | 'no existe'= 'male';
  public invitationMap = {
    male: 'invitarlo',
    female:'invitarla'
  }
  changeClient():void{
    this.name= "Melissa";
    this.gender = "female";
  }

  //i18n Plural
  public clients: string[] = ['Maria','Pedro','Fernando','Gissel','Eduardo','Melissa','Natalia'];
  public clientsMap = {
    '=0':'No tenemos ningun cliente esperando',
    '=1':'Tenemos un cliente esperado.',
    'other':'Tenemos # clientes esperando'
  }
  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name:'Bryan',
    age: 30,
    address: "Washington, USA"
  }

  //async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:',value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.');
      console.log( 'Tenemos data en la promesa.');

    },3500);
  });
}
