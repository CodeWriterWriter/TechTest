import { Component } from '@angular/core';
var DataJson = require('../assets/data.json');
import { UserDetailsComponent} from './user-details/user-details.component';
import { UserTableComponent } from './user-table/user-table.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-test';

  data = DataJson.data;
  selectedData = 0;

  ngOnInit() {
    console.log(this.data);
  }

  changeSelected(index){
    this.selectedData = index;
  }
}
