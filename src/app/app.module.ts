import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent, SidebarComponent, FooterComponent, AuthLayoutComponent, SuperAdminComponent, FleetManangerComponent, PageTitleComponent} from './layouts';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
//import { NgxUiLoaderModule } from 'ngx-ui-loader/lib/core/ngx-ui-loader.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     SidebarComponent, 
     FooterComponent, 
     AuthLayoutComponent,
      SuperAdminComponent, 
      FleetManangerComponent,
       PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //NgxUiLoaderModule,
      ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
  }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
