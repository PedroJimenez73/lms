import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  @ViewChild('nombre', {static: false}) nombreRef: ElementRef;
  registroForm: FormGroup;
  usuario: any;
  registroAdm: boolean;
  validacion: string;

  constructor(private fr: FormBuilder,
              private autenticacionService: AutenticacionService,
              private router: Router,) { }

  ngOnInit() {
    this.registroForm = this.fr.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      rol: ['', Validators.required],
      password: ['', Validators.required],
      confirm: '',
    });
    this.onChanges();
    setTimeout(() => {
      this.nombreRef.nativeElement.focus();
    },500);
  }

  onChanges() {
    this.registroForm.valueChanges
          .subscribe(value =>{
            if (this.registroForm.get('nombre').invalid && this.registroForm.get('nombre').touched) {
              this.validacion = 'Nombre y apellidos obligatorio';
            } else if (this.registroForm.get('email').invalid && this.registroForm.get('email').touched) {
              this.validacion = 'Introduzca un correo electrónico';
            } else if (this.registroForm.get('password').invalid && this.registroForm.get('password').touched) {
              this.validacion = 'Contraseña obligatoria';
            } else if ((this.registroForm.get('password').value !== this.registroForm.get('confirm').value) && this.registroForm.get('confirm').touched ) {
              this.validacion = 'Las contraseña no coinciden';
            } else {
              this.validacion = '';
            }
          })
  }

  registroUsuario() {
    const usuario = {
      nombre: this.registroForm.get('nombre').value,
      email: this.registroForm.get('email').value,
      rol: this.registroForm.get('rol').value,
      password: this.registroForm.get('password').value,
    };
    this.autenticacionService.postUsuario(usuario)
      .subscribe( (res: any) => {
        this.router.navigate(['/panel/usuarios']);
      }, (error: any) => {
        console.log(error); 
    });
  }

}
