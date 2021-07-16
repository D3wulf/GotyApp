import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/Juego';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  juegosDevueltos:any[]=[];

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    //la info de firebase
    this.db.collection<Game>('goty').valueChanges()
    .pipe(
      map( (resp:Game[])=>{

        return resp.map(juego=>{
          return{
            name:juego.name,
            value:juego.votos
          }
        })
      }
      )
    )
    .subscribe(juegosDevueltos=>{

      this.juegosDevueltos=juegosDevueltos
    });
  }

}
