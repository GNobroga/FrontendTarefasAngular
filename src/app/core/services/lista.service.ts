import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista } from '../models/lista';
import { Observable } from "rxjs";
import { APIConfig } from 'src/configs/Api';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private _http: HttpClient) { }

  public create(lista: Lista): Observable<Lista> {
    return this._http.post<Lista>(`${APIConfig.BASE_URL}/listas`, lista);
  }

  public update(lista: Lista): Observable<Lista> {
    return this._http.put<Lista>(`${APIConfig.BASE_URL}/listas/${lista.codigo}`, lista);
  }

  public delete(lista: Lista): Observable<any> {
    return this._http.delete<any>(`${APIConfig.BASE_URL}/listas/${lista.codigo}`);
  }
}
