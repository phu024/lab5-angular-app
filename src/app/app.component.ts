import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  parentColorProperty : string='';

  receiveData($event: string){
    this.parentColorProperty=$event;
  }

  ngOnInit(): void {
  }

  title = 'lab5-angular-app';

}
