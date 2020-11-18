import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'status','message','created_on', 'category', 'actions'];
  isLoading: boolean = false;
 dataSource: MatTableDataSource<any>;

 // dataSource: MatTableDataSource<any> = null;
  isEmpty: boolean = false;
  constructor(private ticketService: TicketService, private _router: Router) { }


  ngOnInit(): void {
    this.loadTickets();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  async loadTickets(){
    try{
      this.isLoading = true;
      let riders = await this.ticketService.fetchAll();
        this.dataSource = new MatTableDataSource(riders.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      
    }catch(error){
      this.isEmpty = true;
    }finally{
      this.isLoading = false;
    }
  
  }


  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  updateTicket(data){

  }

  viewTicket(id){
    this._router.navigate([`/admin/tickets/${id}`]);
  //  console.log(data)
  }



}
