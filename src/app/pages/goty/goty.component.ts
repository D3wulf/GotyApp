import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/Juego';
import { GameService } from '../../services/game.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styles: [
  ]
})
export class GotyComponent implements OnInit {

  juegos:Game[]=[];

  constructor(private game:GameService) { }

  ngOnInit(): void {

    this.game.getJuegos().subscribe(resp=>{

     this.juegos=resp;
    })
  }

  votar(juego:Game){

    this.game.votarJuego(juego.id).subscribe( (resp:any)=>{
      
      if (resp.ok ){

        Swal.fire("Gracias",'Tu voto ha sido registrado','success');

      }else{
        Swal.fire("Error",'Ha habido un error en la solicitud','error');
      }
    });
  }



}
