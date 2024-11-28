import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioListar } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrl = environment.UrlApi;

  constructor(private http: HttpClient) { }

  GetUsuarios(): Observable<UsuarioListar[]>{
    return this.http.get<UsuarioListar[]>(this.ApiUrl);
  }
  
}
