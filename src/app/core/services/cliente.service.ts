import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Usuario } from '../models/usuario';
import { APIConfig } from 'src/configs/Api';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  constructor(private _http: HttpClient) {}

  public create(usuario: Usuario): Observable<Usuario> {
    console.log(`${APIConfig.BASE_URL}/usuarios`)
    return this._http.post<Usuario>(`${APIConfig.BASE_URL}/usuarios`, { apelido: usuario.apelido, senha: usuario.senha });
  }

  public findById(id: number): Observable<Usuario> {
    return this._http.get<Usuario>(`${APIConfig.BASE_URL}/usuarios/${id}`);
  }
}
