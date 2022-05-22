import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private clientService: ClientsService) { }
  clients : any;
  list;

  ngOnInit() {
    this.getClients()
  }

  getClients() {
    this.clientService.getClients().subscribe(
      result => {
        console.log(result);
        this.clients = result;
        this.list =  this.clients.clientList;
      },
      err => console.log(err)
    )
  }
}
