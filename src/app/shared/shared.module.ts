import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FeaturesModule } from './../features/features.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    FeaturesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
