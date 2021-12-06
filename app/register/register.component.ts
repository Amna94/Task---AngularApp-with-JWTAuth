import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  invalidRegister: boolean;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

    register(form: NgForm) {
      const credentials = {
        'name' : form.value.name,
        'username' : form.value.username,
        'password' : form.value.password
      }
      this.http.post("https://localhost:4200/api/auth/register", credentials)
      .subscribe(response =>{
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidRegister = false;
        this.router.navigate(["/"]);
      }, err => {
            this.invalidRegister = true;
      })
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        name: '',
        email: '',
        password: ''
    });
  }

  submit(): void{
      
      this.http.post('https://localhost:44314/api/register', this.form.getRawValue())
      .subscribe(() =>{ this.router.navigate(['/login']);
      });
  }
}
