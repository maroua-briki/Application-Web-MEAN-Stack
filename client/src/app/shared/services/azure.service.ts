import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, takeUntil } from "rxjs/operators";
import { InfraConfig } from '../models/infra-config';

@Injectable({
  providedIn: 'root'
})
export class AzureService {
  //URLs
  private serverConfigUrl = 'http://localhost:3000/api/azureParams';
  private pulumiNewUrl = 'http://localhost:3000/api/new/';
  private pulumiDeployUrl = 'http://localhost:3000/api/deploy/';
  private pulumiDestroyUrl ='http://localhost:3000/api/delete/';
  private getOutputsUrl = 'http://localhost:3000/api/getOutputs/';
  private header = new HttpHeaders().set('Content-Type', 'application/json');

  //Constructor
  constructor(private http:HttpClient) { }

  //APi Methods//
  
  //Get All VM param
  getAllParams():any{
    return this.http.get(this.serverConfigUrl,{headers:this.header});
  }
  //POST The Params gotten from the frontEND To The Server
  updateParams(infraConfig:InfraConfig){
    return this.http.post(this.serverConfigUrl,infraConfig,{headers:this.header}).pipe(shareReplay(1));
  }

  //Pulumi New Method
  //template: the name of the template that we want to create
  pulumiNew(template:string){
    return this.http.get(this.pulumiNewUrl+template,{headers:this.header}).pipe(shareReplay(1));
  }
  //Pulumi Deploy Method
  //deploy the new app with selected : stackname
  pulumiDeploy(stackname:string){
    return this.http.get<null>(this.pulumiDeployUrl+stackname,{headers:this.header}).pipe(shareReplay(1));
  }

  //Pulumi Deploy Method
  //Destroy an deployed app with selected : stackname
  pulumiDestroy(stackname:string){
    return this.http.get<null>(this.pulumiDestroyUrl+stackname,{headers:this.header}).pipe(shareReplay(1));
  }
  getOutputs():any{
    return this.http.get(this.getOutputsUrl,{headers:this.header});
  }


}
