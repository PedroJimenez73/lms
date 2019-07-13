import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.scss']
})
export class IntroduccionComponent implements OnInit {

  lecciones: any;
  count = 0

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.lecciones = this.elem.nativeElement.querySelectorAll('.lesson');
    this.renderer.addClass(this.lecciones[this.count], 'open');
  }

  navToLesson(e) {
    this.count += e;
    for (let i = 0; i < this.lecciones.length; i++) {
      if (i === this.count) {
        this.renderer.addClass(this.lecciones[i], 'open');
      } else {
        this.renderer.removeClass(this.lecciones[i], 'open');
      }
    }
  }

}
