import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ViewRiderComponent } from 'src/app/modules/riders/components/view-rider/view-rider.component';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  data: any;
  _id: string;
  hostUrl: string = 'http://localhost:3000/'
  constructor(private route: ActivatedRoute, private _orderService: OrderService,  private ngxService: NgxUiLoaderService, public dialog: MatDialog) { }
   

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('id');
    //console.log(this._id)
   //console.log(this.data);

   this.fetchOrder();
  }



  async fetchOrder(){
    try{
      this.ngxService.start();
      let response = await this._orderService.fetchOrder(this._id);
      if(response && response.data){
        let result = response.data;
       this.data = result;
       console.log(this.data)

      }else{
        console.error("Oops")
      }
    }catch(error){

    }finally{
     this.ngxService.stop();
    }
  }

  viewRider(data: any){
    const dialogRef = this.dialog.open(ViewRiderComponent, {
      width: '800px',
      height: '55%',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });

  }

 
}
