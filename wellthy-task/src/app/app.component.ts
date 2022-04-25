import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wellthy';
  number = new FormControl();
  status: boolean = false;
  loading: boolean = false;
  onClick(){
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
      this.status= true;
    }, 1000);
    
   
  }
  

}
