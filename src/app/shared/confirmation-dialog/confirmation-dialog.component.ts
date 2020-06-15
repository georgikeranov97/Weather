import { ObservationService } from './../../features/observation.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observation } from 'src/app/features/observation/observations.model';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) private observationToDelete: Observation,
    private observationService: ObservationService
  ) { }

  ngOnInit(): void {
  }

  public deleteObservation() {
    this.observationService.deleteObservation(this.observationToDelete.id).subscribe();
  }

}
