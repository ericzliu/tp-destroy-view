import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  counter = 0;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.counter = 0;
  }

  incr() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
}
