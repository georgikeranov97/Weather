import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FeaturesModule } from './../features/features.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from './pipes/date.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FilterByLocationPipe } from './pipes/filter-by-location.pipe';



@NgModule({
  declarations: [ConfirmationDialogComponent, DatePipe, FilterByLocationPipe],
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,

    DatePipe,
    FilterByLocationPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
