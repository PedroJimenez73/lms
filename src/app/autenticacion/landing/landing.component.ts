import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  login = true;
  subscripLogin: Subscription;
  subscripBienvenida: Subscription;
  isLogged = false;
  nombre: string;
  bienvenida: string;
  modalOn = false;
  showOverlay = false;

  constructor(private autenticacionService: AutenticacionService,
              private router: Router) { 
                this.subscripLogin = this.autenticacionService.isLoggedIn
                                              .subscribe(
                                                (data: any) => {
                                                  this.isLogged = data.logged;
                                                },
                                                (error:any) => {console.log(error)
                                              })
              }

  ngOnInit() {
    this.subscripBienvenida = this.autenticacionService.sendWelcome
                                              .subscribe(
                                                (data: any) => {
                                                  if(data){
                                                    const nombrePila = data;
                                                    this.nombre = nombrePila.substring(0, nombrePila.indexOf(" "));
                                                    this.bienvenida = `¡Bienvenid@ de nuevo ${this.nombre}!`
                                                  }
                                                },
                                                (error:any) => {console.log(error)
                                              })
                                  
  }

  toggleAuth() {
    this.login = !this.login;
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }



}
