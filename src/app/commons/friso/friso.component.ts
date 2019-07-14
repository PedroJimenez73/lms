import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friso',
  templateUrl: './friso.component.html',
  styleUrls: ['./friso.component.scss']
})
export class FrisoComponent implements OnInit {

  @Input('mensaje') mensaje: string;
  showMessage = false; 
  
  titulo: string;
  rutas: any;
  urls = [];
  textosUrl = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = this.route.snapshot.data.titulo;
    this.rutas = this.route.snapshot.pathFromRoot;

    for (let i = 0; i < this.rutas.length; i ++) {
      if(this.rutas[i].data.breadcrumb) {
        this.textosUrl.push(this.rutas[i].data.titulo);
        this.urls.push(this.rutas[i].data.url);
      }
    }
    if (this.mensaje) {
      this.showMessage = true;
      setTimeout(()=> {
        this.showMessage = false;
      }, 3000)
    }

  }

}
