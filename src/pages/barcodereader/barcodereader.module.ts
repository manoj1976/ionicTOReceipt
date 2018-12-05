import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodereaderPage } from './barcodereader';

@NgModule({
  declarations: [
    BarcodereaderPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodereaderPage),
  ],
  exports: [
    BarcodereaderPage
  ]
})
export class BarcodereaderPageModule {}
