import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
   sitename ="Hello, My Site Name"
   counter =0;
  ngOnInit() {

  }

 changeTitle($event){
   this.sitename ="Click on my site";
   this.counter++;
   console.log($event);
 }

 changeTitle1($event){
   this.sitename ="Click on my site";
   this.counter--;
   console.log($event);
 }

 isHighlight(){
   return (this.counter % 2 ==0 )
 }

 applyClass(){
   return {
     highlight:this.isHighlight
    }
 }
}
