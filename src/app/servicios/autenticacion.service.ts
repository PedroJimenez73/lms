import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  urlLogin = environment.urlLogin;
  urlUsuario = environment.urlUsuario;

  token: string;
  nombre: string;
  rol: string;
  validacion: string;
  objectId: string;

  private loggedIn = new BehaviorSubject<any>({logged: false, nombre: ''});
  private welcome = new BehaviorSubject<any>('');

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get sendWelcome() {
    return this.welcome.asObservable();
  }

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarCredenciales();
  }

  login(usuario) {
    return this.http.post(this.urlLogin, usuario).pipe(
      map( (res: any) => {
        this.guardarCredenciales(res.token, res.nombre, res.rol, res.objectId);
        this.welcome.next(res.nombre);
        setTimeout(() => {
          this.welcome.next('');
        }, 3000)
        return res;
      })
    );
  }

  guardarCredenciales(token, nombre, rol, objectId) {
    localStorage.setItem('token', token);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('rol', rol);
    localStorage.setItem('objectId', objectId);
    this.token = token;
    this.nombre = nombre;
    this.rol = rol;
    this.objectId = objectId;
    this.loggedIn.next({logged: true, nombre: nombre});
  }

  cargarCredenciales() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.nombre = localStorage.getItem('nombre');
      this.rol = localStorage.getItem('rol');
      this.objectId = localStorage.getItem('objectId');
      this.loggedIn.next({logged: true, nombre: this.nombre});
    } else {
      this.token = '';
      this.nombre = '';
      this.rol = '';
      this.objectId = '';
      this.loggedIn.next({logged: false, nombre: ''});
    }
  }

  getUsuarios() {
    const url = this.urlUsuario + '/' + '?token=' + this.token;
    return this.http.get(url).pipe(
      map( (res: any) => {
        return res;
      })
    );
  }

  // getUsuarioId(id) {
  //   const url = this.urlUsuario + '/' + id + '?token=' + this.token;
  //   return this.http.get(url).pipe(
  //     map( (res: any) => {
  //       return res;
  //     })
  //   );
  // }

  postUsuario(usuario) {
    // const url = this.urlUsuario + '/' + '?token=' + this.token;
    const url = this.urlUsuario;
    return this.http.post(url, usuario).pipe(
      map( (res: any) => {
        return res;
      })
    );
  }

  // putUsuario(id, usuario) {
  //   const url = this.urlUsuario + '/' + id + '?token=' + this.token;
  //   return this.http.put(url, usuario).pipe(
  //     map( (res: any) => {
  //       if (id === this.objectId) {
  //         localStorage.setItem('nombre', usuario.nombre);
  //         this.nombre = usuario.nombre;
  //       }
  //       return res;
  //     })
  //   );
  // }

  // deleteUsuario(id) {
  //   const url = this.urlUsuario + '/' + id + '?token=' + this.token;
  //   return this.http.delete(url).pipe(
  //     map( (res: any) => {
  //       return res;
  //     })
  //   );
  // }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('rol');
    localStorage.removeItem('objectId');
    localStorage.removeItem('login');
    this.token = '';
    this.nombre = '';
    this.rol = '';
    this.objectId = '';
    this.loggedIn.next({logged: false, nombre: ''});
    this.router.navigate(['/']);
  }


  // isAdmin() {
  //   let admin;
  //   if (this.rol === 'Administrador') {
  //     admin = true;
  //   } else {
  //     admin = false;
  //   }
  //   return admin;
  // }
}
