import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from 'src/app/modules/admins/admin.service';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-assign-ticket',
  templateUrl: './assign-ticket.component.html',
  styleUrls: ['./assign-ticket.component.scss']
})
export class AssignTicketComponent implements OnInit {

  admins: any;
  assignedTo: string;
  constructor(private adminService: AdminService, private ticketService: TicketService, public dialogRef: MatDialogRef<AssignTicketComponent>,  private ngxService: NgxUiLoaderService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.loadAdmins();
  }

  async loadAdmins(){
    try{
      this.ngxService.start();
      let response = await this.adminService.fetchAllAdmin();
      this.admins = response.data;
      console.log(response.data)
    }catch(error){
      console.error(error)
    }finally{
      this.ngxService.stop();
    }
  }

  async assignTicket(){
    let data = {
      assignedTo: this.assignedTo,
      _id: this.data
    }

    let response = await this.ticketService.assignTicket(data);
    if(response){
      this.dialogRef.close({event: true})
      console.log(response.data);
    }

  //  console.log()
  }

}
