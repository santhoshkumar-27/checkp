import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent implements DoCheck, OnInit, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {


  title = 'checkp';
  checkMess = {
    message: 'somming'
  }
  ngOnInit(): void {
      console.log('this is parent oninit')
  }
  ngDoCheck() {
    console.log('this is called from the parent docheck')
  }
  ngAfterContentInit(): void {
    console.log('this is called from the parent content init')
  }
  ngAfterViewInit(): void {
    console.log('this is called from the parent view init')
  }
  ngAfterContentChecked(): void {
    console.log('this is called from the parent content checked')
  }
  ngAfterViewChecked(): void {
    console.log('this is called from the parent view checked')
  }

  changeDet(value: any) {
    this.checkMess.message =value;
  }
}
