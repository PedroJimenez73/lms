import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {

  usuarios: [];

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.autenticacionService.getUsuarios()
                    .subscribe((res: any)=>{
                      this.usuarios = res.usuarios;
                    },
                      (error) => { console.log(error)}
                    )
  }

}
