import { Injectable } from '@angular/core';
import { UsersDetail } from './users-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44314/api/users'
  formData : UsersDetail = new UsersDetail();
  list : UsersDetail[];

  postUsersDetail(){
   return this.http.post(this.baseURL, this.formData);
  }

  putUsersDetail(id:number){
    return this.http.put(`${this.baseURL}/${id}`, this.formData);
   }

   deleteUsersDetail(id:number){
     console.log(id);
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as UsersDetail[]);
  }

}
