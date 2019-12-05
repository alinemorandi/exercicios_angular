import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  observable: Observable<string>;

  nomes: Array<string> = [];

  ngOnInit(){
    this.observable = new Observable(subscriber =>{
      setInterval(() =>{
        subscriber.next(this.makeid(5));
      }, 10000);
    });

    let lista: Array<string> = [];
    this.observable.subscribe({
      next(x) {lista.push(x); },
      error(err) {alert('ocorreu um erro '+err); }
    });

    this.nomes = lista;
  }

  enviar(valor: string){
    this.nomes.push(valor);
  }

  makeid(length){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i = 0; i < length; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
