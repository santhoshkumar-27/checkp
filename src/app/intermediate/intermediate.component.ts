import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-intermediate',
  templateUrl: './intermediate.component.html',
  styleUrls: ['./intermediate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntermediateComponent implements DoCheck {

  constructor() { }
  title = 'checkp';
  checkMess = {
    message: 'somming'
  }
  ngDoCheck() {
    console.log('this is called from the intermediate')
  }
  changeDet(value: any) {
    this.checkMess.message =value;
  }
}
