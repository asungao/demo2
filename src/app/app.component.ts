import { Component } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data:any;

  constructor (private datasvc: DataService) {
   // this.data = this.datasvr.data;
  }

  ngOnInit(){
    this.data = this.datasvc.data;
  }

  changeKeyword( input:string){
    this.title = input;

   }

clearKeyword($event:KeyboardEvent)
   {
    console.log($event);
     if ($event.keyCode == 27 || $event.keyCode == 13) {
       this.title ='';
      // ($event.target as HTMLInputElement).value='';
      $event.target["value"]='';
    }
   }




}
