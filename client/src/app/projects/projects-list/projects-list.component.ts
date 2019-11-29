import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: '',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  animations:[routerTransition()]

})
export class ProjectsListComponent implements OnInit {
  ngOnInit(){}
  displayedColumns = ['stacksCount', 'clustersCount', 'nodesCount', 'volumesCount','actions'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  clustersCount: number;
  stacksCount: number;
  nodesCount: number;
  volumesCount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {stacksCount: 1, clustersCount: 5, nodesCount: 1, volumesCount: 4  },
  {stacksCount: 2, clustersCount: 4, nodesCount: 4, volumesCount: 10},
  {stacksCount: 3, clustersCount: 3, nodesCount: 6, volumesCount: 200},
  {stacksCount: 4, clustersCount: 2, nodesCount: 9, volumesCount: 500 },
  {stacksCount: 5, clustersCount: 0, nodesCount: 10, volumesCount: 20},
  {stacksCount: 6, clustersCount: 1, nodesCount: 0, volumesCount: 3},
  {stacksCount: 7, clustersCount: 2, nodesCount: 14, volumesCount: 110},
  {stacksCount: 8, clustersCount: 3, nodesCount: 3, volumesCount: 120},
  {stacksCount: 9, clustersCount: 4, nodesCount: 12, volumesCount: 80},
  {stacksCount: 10, clustersCount: 0, nodesCount: 5, volumesCount: 410},
];