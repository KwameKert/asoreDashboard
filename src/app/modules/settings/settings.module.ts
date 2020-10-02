import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSettingsComponent } from './components/list-settings/list-settings.component';
import { AddSettingComponent } from './components/add-setting/add-setting.component';
import { ViewSettingComponent } from './components/view-setting/view-setting.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ListSettingsComponent, AddSettingComponent, ViewSettingComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListSettingsComponent]
})
export class SettingsModule { }
