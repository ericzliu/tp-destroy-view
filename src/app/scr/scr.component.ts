import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scr',
  templateUrl: './scr.component.html',
  styleUrls: ['./scr.component.css']
})
export class ScrComponent implements OnInit, OnDestroy {

  childCounter = 0;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.childCounter = 0;
  }

  gotoScr1() {
    this.router.navigate(['scr1']);
  }

  handleChildCounterChange($event: number) {
    this.childCounter = $event;
  }
}
