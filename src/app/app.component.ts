import { Component } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Application....';
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};

  constructor (private http: Http) {
    console.log('Hello Fellow User');
    this.getContacts();
    this.getData();
    }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
  })
}
}
