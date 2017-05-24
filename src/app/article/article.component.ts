import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  item

/*  @Output()
  delete = new EventEmitter<any>();*/

 constructor (private datasvc: DataService){

  }

  ngOnInit() {
  }

  //Delete the article.
/*  deleteArticle(){
    this.delete.emit(this.item);
  }*/
}
