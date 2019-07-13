import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(){}
  
  ngOnInit() {
    $(document).ready(() => {
      $('#titulo').css({'color': 'red'});
    });
  }
}
