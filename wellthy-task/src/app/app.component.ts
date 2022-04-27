import { Platform } from '@angular/cdk/platform';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wellthy';
  number = new FormControl();
  status: boolean = false;
  loading: boolean = false
  isiOS: boolean = false;
  isAndroid: boolean = false;

  constructor(public platform: Platform) {

    const resizeObs = fromEvent(window, 'resize')
    resizeObs.pipe(
      debounceTime(1500)
    ).subscribe((event) => {
      this.isiOS = this.platform.IOS
      this.isAndroid = this.platform.ANDROID


    });



  }

  ngOnInit() {

    this.isiOS = this.platform.IOS
    this.isAndroid = this.platform.ANDROID


  }


  onClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.status = true;
    }, 1000);


  }


}


