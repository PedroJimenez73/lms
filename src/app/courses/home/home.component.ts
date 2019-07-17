import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cursos: {};

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.getCursos()
              .subscribe((res: any)=>{
                this.cursos = res.cursos;
              },
                (error) => { console.log(error)}
              )
  }

}
