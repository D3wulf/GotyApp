import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/Juego';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const miUrl = environment.url;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos:Game[]=[];


  constructor(private http: HttpClient) { }

  getJuegos(){

    if(this.juegos.length> 0){
      // no tenemos juegos y debemos retornar un observable
      return of(this.juegos);

    }else{

      return this.http.get<Game[]>(`${miUrl}/api/goty`)
      .pipe(
        tap(
          resp=> this.juegos = resp
        )
      )

    }

   
  }

  votarJuego(id:string){
    // los post llevan el {} final
    return this.http.post(`${miUrl}/api/goty/${id}`, {})
    .pipe(

      catchError(err=>{

       
        return of(err.error);
        
      })  


    )


  }




}
