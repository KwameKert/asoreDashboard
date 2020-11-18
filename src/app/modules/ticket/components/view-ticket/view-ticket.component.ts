import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {

  hostUrl: string = 'http://api.thinksophtlabs.com:3000/'
  data: any;
  isLoading: boolean  = true;
  ticketId: string;

  constructor(private route: ActivatedRoute,  private _ticketService: TicketService){}

  ngOnInit(): void {
    this.ticketId = this.route.snapshot.paramMap.get('id');
    this.getTicketDetails();
  }

  async getTicketDetails(){

    try{
      let ticket = await this._ticketService.fetchItem(this.ticketId);
      if(ticket.data){
          this.data = ticket.data;
          this.isLoading = false;
        console.log(ticket);
      }

    }catch(e){
      console.trace(e);

    }
  }

 

}
