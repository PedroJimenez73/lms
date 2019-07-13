import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  titulo: string;
  urls = [];
  textosUrl = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = this.route.snapshot.data.titulo;
    this.route.snapshot.pathFromRoot.forEach(ruta => {
      if (ruta.data.titulo === undefined) {
        this.textosUrl.push('Inicio');
        this.urls.push('/');
      } else if (ruta.data.breadcrumb) {
        this.textosUrl.push(ruta.data.titulo);
        this.urls.push(ruta.data.url);
      } 
    });
  }

}
