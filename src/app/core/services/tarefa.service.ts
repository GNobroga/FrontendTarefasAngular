import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';
import { Observable } from 'rxjs';
import { APIConfig } from 'src/configs/Api';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private _http: HttpClient) { }

  public create(task: Tarefa): Observable<Tarefa> {
    return this._http.post<Tarefa>(`${APIConfig.BASE_URL}/tarefas`, task);
  }
}
