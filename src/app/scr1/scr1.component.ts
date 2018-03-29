import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scr1',
  templateUrl: './scr1.component.html',
  styleUrls: ['./scr1.component.css']
})
export class Scr1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoScr() {
    this.router.navigate(['scr']);
  }
}
