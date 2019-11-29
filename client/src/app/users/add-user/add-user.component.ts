import { Component, OnInit, NgZone } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/shared/directives/mustmatch.validator';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  registerForm: FormGroup;
  serverErrorMessages: string;
  submitted = false;
  hide = true;
  // roles:any=['ITLeader','Developper','ITOperator'];
  roles: Role[] = [
    { value: 'ITLeader', viewValue: 'ITLeader' },
    { value: 'Developper', viewValue: 'Developper' },
    { value: 'ITOperator', viewValue: 'ITOperator' }
  ];

  constructor(private _userService: UserService, private _router: Router, private _formBilder: FormBuilder, private ngZone: NgZone, ) {
    this.createForm();
  }
  ngOnInit() {
  }
  get f() { return this.registerForm.controls; }
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.registerForm = this._formBilder.group({
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
    return this.registerForm.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.registerForm.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    this._userService.postUser(this.registerForm.value).subscribe(
      res => {
        console.log(res);
        console.log('je vais afficher lusers list')
        this._userService.getAllUsers().subscribe();
        location.reload();      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
          console.log('erreur: ' + this.serverErrorMessages)
        }
        else

          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      });
        this.registerForm.reset();
        this._userService.getAllUsers();

  }
  updateProfile(e) {
    this.registerForm.get('role').setValue(e, {
      onlySelf: true
    });
  }
}
export interface Role {
  value: string;
  viewValue: string;
}