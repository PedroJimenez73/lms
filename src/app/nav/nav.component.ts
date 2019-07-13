import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  url: string;
  isLogged: boolean; 
  subscripcion: Subscription;
  @ViewChild('burger', {static: false}) burgerRef: ElementRef;
  @ViewChild('menu', {static: false}) menuRef: ElementRef;
  nombre: string;
  showOverlay = false;


  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.subscripcion = this.autenticacionService.isLoggedIn
                                  .subscribe(
                                    (data: any) => {
                                      this.isLogged = data.logged;
                                      this.nombre = data.nombre;
                                    },
                                    (error:any) => {console.log(error)
                                  })
  }

  toggleMenu() {
    this.burgerRef.nativeElement.classList.toggle('open-menu');
    this.menuRef.nativeElement.classList.toggle('open-menu');
  }

  exit() {
    this.autenticacionService.logout();
  }

  toggleOverlay(sidemenu?) {
    this.showOverlay = !this.showOverlay;
    if(sidemenu) {
      this.burgerRef.nativeElement.classList.toggle('open-menu');
      this.menuRef.nativeElement.classList.toggle('open-menu');
    }
  }

}
