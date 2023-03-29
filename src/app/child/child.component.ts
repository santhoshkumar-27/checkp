import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, DoCheck {
  @Input()
  set inprValue(value: string) {
    this.inputValue = value;
  }
  get inprValue() {
    return this.inputValue;
  }
  inputValue: any;
  constructor() { }
  ngDoCheck(): void {
    console.log('this is called from the child components')
  }
  ngOnInit(): void {
  }
  time() {
    return moment().format('h:mm:ss A dddd, MMM D, YYYY');
  }
}
