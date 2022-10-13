import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Fisica } from '../model/fisica';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FisicaService {

  private readonly API = 'api/cursos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Fisica[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(fisica => console.log(fisica))
      )
  }

  loadById(id: string){
    return this.httpClient.get<Fisica>('${this.API}/${id}');
  }
  save(record: Fisica){
    this.httpClient.post<Fisica>( this.API, record).subscribe(result => console.log(result));
  }


  delete(id: string){
    return this.httpClient.get<Fisica>('${this.API}/${id}');
  }
}
