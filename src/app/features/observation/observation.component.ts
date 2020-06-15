import { ConfirmationDialogComponent } from './../../shared/confirmation-dialog/confirmation-dialog.component';
import { Observation } from './observations.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateObservationComponent } from '../create-observation/create-observation.component';
import { ActivatedRoute } from '@angular/router';
import { UpdateObservationComponent } from '../update-observation/update-observation.component';
import { ObservationService } from '../observation.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
  public snapshotParam;

  @Input() observation: Observation;
  @Output() updateObservation = new EventEmitter<number>();
  @Output() deleteObservation = new EventEmitter<number>();
  constructor(
    private dialog: MatDialog,
    private observationService: ObservationService,
  ) {}

  ngOnInit() {
  }

  public openEditForm() {
    const dialogRef = this.dialog.open(UpdateObservationComponent, {
      width: '330px',
      height: '400px',
      data: this.observation
    });

    this.updateObservation.emit(this.observation.id);
    dialogRef.afterClosed().subscribe(result => console.log(result));
    console.log(this.observation.id);
  }

  public openDeleteConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '330px',
      height: '400px',
      data: this.observation
    });

    this.deleteObservation.emit(this.observation.id);
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  // public deleteObservation() {
  //   this.observationService.deleteObservation(this.observation.id).subscribe();
  // }

}
