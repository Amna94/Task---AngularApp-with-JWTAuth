import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emiters } from '../emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authenticated = false;

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    Emiters.authEmitter.subscribe(
      (auth : boolean) => {
          this.authenticated = auth;
      }
    );
  }

    logout(): void {
        this.http.post('https://localhost:4200/api/logout', {}, {withCredentials: true})
        .subscribe(() => 
          this.authenticated = false
        );
    }
}
