import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public sHttp: HttpClient) { }

  login(usuario: any, getToken?): Observable<any> {
    if(getToken != null){
      usuario.getToken = getToken;
    }
    let params = JSON.stringify(usuario);
    return this.sHttp.post(this.url + '/login', params, {headers: this.headersVariable});
  }

  register(params){
    return this.sHttp.post(this.url + '/registrarUsuario', params, {headers: this.headersVariable});
  }
  
  getToken(){
    const token2 = localStorage.getItem('token');
    if(token2 != undefined){
      this.token = token2
    }else{
     return this.token = '';
    }
  }

  getIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != undefined){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }

    return this.identidad;
  }

  
}