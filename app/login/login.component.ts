import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  invalidLogin: boolean;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

    login(form: NgForm) {
      const credentials = {
        'username' : form.value.username,
        'password' : form.value.password
      }
      this.http.post("https://localhost:4200/api/auth/login", credentials)
      .subscribe(response =>{
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.router.navigate(["/"]);
      }, err => {
            this.invalidLogin = true;
      })
    }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  submit(): void{
      this.http.post('https://localhost:44314/api/login', this.form.getRawValue(), {
        withCredentials: true
      }).subscribe(() => this.router.navigate(['/']));
  }
}
