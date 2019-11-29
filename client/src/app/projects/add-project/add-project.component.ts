import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultilevelNodes } from 'ng-material-multilevel-menu';
import { constant as CONSTANT } from './constant';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  appitems: MultilevelNodes[] = CONSTANT.appitems;
  config = CONSTANT.config;
  displayList = false; 
   // appitems = [
  //   {
  //     label: 'Hosted kubernetes clusters',
  //     faIcon: 'fas fa-sync-alt',
  //     items: [
  //       {
  //         label: 'Google Kubernetes Engine (GKE) ',
  //         link: '/azure',
  //         faIcon: 'fab fa-google'
  //       },
  //       {
  //         label: 'Amazon Elastic Container Service for Kubernetes (EKS)',
  //         link: '/item-1-1',
  //         faIcon: 'fab fa-aws',

  //       },
  //       {
  //         label: 'Azure Kubernetes Service (AKS)',
  //         link: '/item-1-1',
  //         faIcon: 'fab fa-microsoft',

  //       }
  //     ]
  //   },
  //   {
  //     label: 'OFF Premise',
  //     faIcon: 'fas fa-cloud',
  //     items: [
  //       {
  //         label: 'GKE',
  //         link: './azure',
  //         // routerLink:'/azure',
  //         // routerLinkActive:'active',
  //         faIcon: 'fab fa-google'
  //       },
  //       {
  //         label: 'EKS',
  //         link: '../azure',
  //         faIcon: 'fab fa-aws'
  //       }, {
  //         label: 'AKS',
  //         link: 'azure',
  //         faIcon: 'fab fa-microsoft',
        
  //       }
  //     ]
  //   },
  //   {
  //     label: 'ON Premise',
  //     link: '/item-3',
  //     faIcon: 'fas fa-globe',
  //   }
  // ];
  // config = {
  //   paddingAtStart: true,
  //   classname: 'my-custom-class',
  //   // listBackgroundColor: 'rgb(208, 241, 239)',
  //   listBackgroundColor: 'rgb(255, 255, 255)',
  //   fontColor: 'rgb(8, 54, 71)',
  //   // fontColor: 'rgb(255, 255, 255)',
  //   // backgroundColor: 'rgb(208, 241, 239)',
  //   backgroundColor: 'rgb(255, 255, 255)',
  //   selectedListFontColor: 'red',
  // };


  constructor(private router:Router) { }
  ngOnInit(){
   // console.log(this.appitems)
  } 


  selectedItem(item) {
    console.log(item);
 this.router.navigateByUrl(item.link);

  }

  selectedLabel($event) {
    console.log($event);
  }
redirectToLink(link){
  this.router.navigateByUrl('/azure');
  console.log(link);
}

}
