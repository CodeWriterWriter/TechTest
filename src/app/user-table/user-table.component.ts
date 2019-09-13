import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() data: object[];
  @Output() selected = new EventEmitter();
  constructor() { }

  ngOnInit() {

    console.log(this.data);
  }

  selectedChanged(index){
    this.selected.emit(index);
  }

}
