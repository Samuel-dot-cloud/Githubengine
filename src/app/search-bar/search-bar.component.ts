import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output () emitUser = new EventEmitter<any>();

  userName: string;

  user() {
     this.emitUser.emit(this.userName);
  }


  constructor() { }

  ngOnInit() {
  }

}
