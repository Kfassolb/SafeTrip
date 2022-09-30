import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { viajero } from '../model/viajero';

@Injectable({
  providedIn: 'root'
})
export class ViajeroService {

  url: string = "http://localhost:5000/viajero"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<viajero[]>(this.url);
  }
}
