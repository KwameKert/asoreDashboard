import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.scss']
})
export class UpdateTicketComponent implements OnInit {

  status: string ='' ;
  constructor(public dialogRef: MatDialogRef<UpdateTicketComponent>,) { }

  ngOnInit(): void {
  }

  updateTicket(){
    if(this.status != ''){
      this.dialogRef.close({status: this.status});
    }
  }

}
