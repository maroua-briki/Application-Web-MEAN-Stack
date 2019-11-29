import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MustMatch } from 'src/app/shared/directives/mustmatch.validator';
import { UserService } from 'src/app/shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: User = new User();
  editForm: FormGroup;
  serverErrorMessages: string;
  submitted = false;
  hide = true;
  userId: string;
  // user:User=new User();
  // roles:any=['ITLeader','Developper','ITOperator'];
  roles: Role[] = [
    { value: 'ITLeader', viewValue: 'ITLeader' },
    { value: 'Developper', viewValue: 'Developper' },
    { value: 'ITOperator', viewValue: 'ITOperator' }
  ];

  constructor(private _userService: UserService, private route: ActivatedRoute, private _router: Router, private _formBilder: FormBuilder) {
    this.createForm();

  }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    console.log("the id of the user u r looking for:" + this.userId);
    this.getUserById(this.userId);
  }

  get f() { return this.editForm.controls; }
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.editForm = this._formBilder.group({
      'fullName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email, Validators.pattern(emailregex)]],
      'password': ['', [Validators.minLength(8), Validators.maxLength(30), this.checkPassword]],
      'repeatPassword': ['', Validators.required],
      'role': ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'repeatPassword')
      });
  }
  /*===========password validation======================*/
  getErrorPassword() {
    return this.editForm.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.editForm.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  /*============get by id ==================*/
  getUserById(userId) {
    this._userService.getUserById(userId).subscribe((res: User) => {
      this.user = res;
      this.editForm.patchValue({
        fullName: this.user.fullName,
        email: this.user.email,
        password: this.user.password,
        role: this.user.role,
      });
      console.log(res);

    });

  }
  updateUser() {
    console.log('Hello I am in update user');
    if (this.editForm.valid) {
      let data: User = this.editForm.value;
      console.log("user" +data.fullName);
      console.log("user id" +this.userId);

      this._userService.updateUser(this.userId, data).subscribe(
        res => {
          console.log("data" + data.fullName);
          console.log("res de update" + res);
          location.reload();
          
        }
      );
    }
  }



}
export interface Role {
  value: string;
  viewValue: string;
}
