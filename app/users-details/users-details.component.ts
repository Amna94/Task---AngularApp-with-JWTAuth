import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersDetail } from '../shared/users-detail.model';
import { UsersDetailService } from '../shared/users-detail.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient,
    public service: UsersDetailService,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get("https://localhost:4200/api/users")
    .subscribe(response => {
      this.users = response;
    }, err => {
      console.log(err);
    })
    this.service.refreshList();
  }

  populateForm(selectedRecord: UsersDetail){
      this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    {
      this.service.deleteUsersDetail(id)
      .subscribe(
        res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Users detail');
        },
        err => {console.log(err)}
      )
    }
  }
}
