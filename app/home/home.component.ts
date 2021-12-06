import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emiters } from '../emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:44314/api/users', {withCredentials:true}).subscribe(
      (res:any) => {
        this.message = 'Hi ${res.name}';
          Emiters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emiters.authEmitter.emit(false);
      }
    );
  }

}
