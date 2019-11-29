import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aws-info',
  templateUrl: './aws-info.component.html',
  styleUrls: ['./aws-info.component.scss']
})
export class AwsInfoComponent implements OnInit {

  awsForm: FormGroup;

  constructor( private _formBilder: FormBuilder,private _router: Router) {
    this.createForm();
  }
  ngOnInit() {
  }
  get f() { return this.awsForm.controls; }
  createForm() {
    this.awsForm = this._formBilder.group({
      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password':['',Validators.required]
   
  });
 

}
}
