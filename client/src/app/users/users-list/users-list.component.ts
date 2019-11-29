import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
 
  usersList:User[];
  constructor(private _userService:UserService, private _router:Router) { }
  ngOnInit() {
    console.log('hello world');
    this.getUsers();
  }

  getUsers(){
    console.log('just enter in the function getUsers()');
    this._userService.getAllUsers().subscribe(
      data => { this.usersList=data;
        console.log('I am going to show you the list of users');
      console.log(this.usersList);}
    );
  }

  displayedColumns = ['fullName', 'email', 'role', 'actions'];

  deleteUser(user,index){
    if(window.confirm('Are you sure?')) {
    this._userService.deleteUser(user._id).subscribe((data) => {
    this.usersList.splice(index, 1);
    this.getUsers();


} )    
    }
    }
    editUser(userId) {
      this._router.navigate([`/home/users/edit/${userId}`]);
      console.log("first"+ userId);
      }
  

  
  

}


