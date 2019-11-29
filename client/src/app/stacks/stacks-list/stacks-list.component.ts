import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-stacks-list',
  templateUrl: './stacks-list.component.html',
  styleUrls: ['./stacks-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StacksListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  displayedColumns = ['id', 'name', 'type'];
  dataSource = new ExampleDataSource();

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
}

export interface Element {
  id: number,
  name: string;
  type: string;
  description: string;
}

const data: Element[] = [
  { id: 1, name: 'GitLab', type: 'dev', description: 'azertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 2, name: 'Graphana', type: 'monitoring', description: 'azertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 3, name: 'GitHub', type: 'dev', description: 'azertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 4, name: 'Jasmine', type: 'test', description: 'azertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 5, name: 'Ansible', type: 'production', description: 'azertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 6, name: 'BitBucket', type: 'dev', description: 'azertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 7, name: 'Prometheus', type: 'monitoring', description: 'azertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 8, name: 'Nagios', type: 'monitoring', description: 'Oazertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 9, name: 'Jenkins', type: 'dev', description: 'azertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 10, name: 'Selenium', type: 'test', description: 'Ne azertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 11, name: 'GitLab', type: 'dev', description: 'Naazertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 12, name: 'Magnesium', type: 'test', description: 'Mazertyu iopqsdfgh lkjghmk xcbwbg' },
  { id: 13, name: 'Aluminum', type: 'production', description: 'Aazertyu iopqsdfgh lkjghmk xcbwbl' },
  { id: 14, name: 'GitLab', type: 'dev', description: 'Siazertyu iopqsdfgh lkjghmk xcbwb ' },
  { id: 15, name: 'Prometheus', type: 'monitoring', description: 'P' },
  { id: 16, name: 'Selenium', type: 'test', description: 'Sazertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 17, name: 'GitLab', type: 'dev', description: 'Clazertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 18, name: 'GitLab', type: 'dev', description: 'Arazertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 19, name: 'GitLab', type: 'dev', description: 'Kazertyu iopqsdfgh lkjghmk xcbwb' },
  { id: 20, name: 'GitLab', type: 'dev', description: 'Caazertyu iopqsdfgh lkjghmk xcbwb' },
];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];
    data.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return of(rows);
  }

  disconnect() { }
}
