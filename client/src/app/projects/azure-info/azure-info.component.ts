import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AzureService } from 'src/app/shared/services/azure.service';
import { MatDialog } from '@angular/material';
import { DeleteComponent } from '../delete/delete.component';
import { InfraConfig } from 'src/app/shared/models/infra-config';

@Component({
  selector: 'app-azure-info',
  templateUrl: './azure-info.component.html',
  styleUrls: ['./azure-info.component.scss']
})
export class AzureInfoComponent implements OnInit {
  validateParams=false;
  params: any;
  azureForm: FormGroup;
  public breakpoint: number;
  wasFormChanged = false;



  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private configService: AzureService,
    public dialog: MatDialog,
    private infraConfig: InfraConfig ) 
    {
    this.azureForm = this._formBuilder.group({
      'clientId': ['', Validators.required],
      'subscriptionId': ['', Validators.required],
      'tenantId': ['', Validators.required],
      'clientSecret': ['', Validators.required],
      'username': ['', Validators.required],
      'password': ['', [Validators.required, this.checkPassword]],
      'location': ['', Validators.required],
      'prefix': ['', Validators.required],
      'vmsize': ['', Validators.required],
      'vmNumber': ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      'offer': ['', Validators.required],
      'sku': ['', Validators.required],
      'version': ['', Validators.required],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code


  }
  // get f(){return this.azureForm.controls;}
  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 3;
  }

  ngOnInit() {
    //al first, we get all params from the server side :)
    this.configService.getAllParams().subscribe(data => {
      this.params = data;
      console.log(this.params);
    });

  }

  validateAndSendParams() {
    console.log(this.azureForm);
    this.configService.updateParams(this.azureForm.value)
      .subscribe(data => console.log("send successfully"));
    this.configService.pulumiNew('Test-infra-azure-VM').subscribe(data => {
      console.log('Project created successfully');
    });

  }
  deploy() {
    this.configService.pulumiDeploy('dev').subscribe(data => {
      console.log('Project deployed successfully');
    });
  }
  deleteDeployedStack() {
    this.configService.pulumiDestroy('dev').subscribe(data => {
      console.log('Project deleted successfully');
    })
  }

  openDialog(): void {
    console.log(this.wasFormChanged);
    if (this.azureForm.dirty) {
      const dialogRef = this.dialog.open(DeleteComponent, {
        width: '340px',
      });
    } else {
      this.dialog.closeAll();
    }
  }


  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }
  /*consume the service**/
  onSubmit() {
    if (this.azureForm.valid) {
      this.validateAndSendParams();
      this.validateParams= true;
    }
  }
  OnDeploy(){
    if(this.validateParams){
      this.deploy();
      this.dialog.closeAll();
    }
  }

}
