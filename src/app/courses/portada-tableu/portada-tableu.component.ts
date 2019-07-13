import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;


@Component({
  selector: 'app-portada-tableu',
  templateUrl: './portada-tableu.component.html',
  styleUrls: ['./portada-tableu.component.scss']
})

export class PortadaTableuComponent implements OnInit, AfterViewInit {

  myWindow: any;
  alumno = {
    "learner_id": "123",
    "learner_name": "Bob The Builder",
    "suspend_data": ['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0'],
    "location": 2,
    "entry": "resume"
    };

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  loadScorm() {
    window.API_1484_11.loadFromJSON(this.alumno);
    this.myWindow = window.open("../../../assets/viu refCT/publicacion/index.html", "myWindow", "width=1240,height=720");
    this.myWindow.addEventListener("beforeunload",() => {
        this.alumno.location = Number(window.API_1484_11.cmi.location);
        window.API_1484_11 = new window.simplifyScorm.ScormAPI2004();
    })
  }

}
