import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from 'src/app/servicios/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent implements OnInit {

  @ViewChild('codigo', {static: false}) codigoRef: ElementRef;
  cursoForm: FormGroup;
  waiting = false;

  constructor(private fr: FormBuilder,
              private cursosService: CursosService,
              private router: Router) { }

  ngOnInit() {
    this.cursoForm = this.fr.group({
      codigo: '',
      titulo: '',
      categoria: '',
      autor: '',
      horas: null,
      fechaInicio: null,
      fechaFinalizacion: null
    });
    setTimeout(() => {
      this.codigoRef.nativeElement.focus();
    },500)
  }

  onSubmit() {
    const curso = {
      codigo: this.cursoForm.get('codigo').value,
      titulo: this.cursoForm.get('titulo').value,
      categoria: this.cursoForm.get('categoria').value,
      autor: this.cursoForm.get('autor').value,
      horas: this.cursoForm.get('horas').value,
      fechaInicio: this.cursoForm.get('fechaInicio').value,
      fechaFinalizacion: this.cursoForm.get('fechaFinalizacion').value,
    };
    this.waiting = true;
    this.cursosService.postCurso(curso)
      .subscribe( (res: any) => {
        this.waiting = false;
        this.router.navigate(['/panel/cursos']);
      }, (error: any) => {
        console.log(error)
        // this.errores = error.error.mensaje;
        this.waiting = false;
      });
  }

}
