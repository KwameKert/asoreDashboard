import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { TicketService } from '../../ticket.service';
import { UpdateTicketComponent } from '../update-ticket/update-ticket.component';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent implements OnInit {

  displayedColumns: string[] = ['title', 'status','message','created_on', 'category', 'actions'];
  isLoading: boolean = false;
 dataSource: MatTableDataSource<any>;

 // dataSource: MatTableDataSource<any> = null;
  isEmpty: boolean = false;
  constructor(private ticketService: TicketService, private _router: Router, public dialog: MatDialog, private ngxService: NgxUiLoaderService,) { }


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


   editTicket(_id: string){
    const dialogRef = this.dialog.open(UpdateTicketComponent, {
      width: '320px',
      height: '220px',
    });

    dialogRef.afterClosed().subscribe( async result => {
      if(result.status){
        let data = {
          _id: _id,
          status: result.status
        }

        try{
          this.ngxService.start();
          let response =   await this.ticketService.updateTicketStatus(data);
          if(response){
            this.loadTickets();
          }
         
      }catch(error){
        this.isEmpty = true;
      }finally{
        this.ngxService.stop();
      }
        
    }}, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });
  }




  viewTicket(id){
    this._router.navigate([`/admin/tickets/${id}`]);
  //  console.log(data)
  }



}
