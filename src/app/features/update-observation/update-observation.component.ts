import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observation } from '../observation/observations.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ObservationService } from '../observation.service';

@Component({
  selector: 'app-update-observation',
  templateUrl: './update-observation.component.html',
  styleUrls: ['./update-observation.component.css']
})
export class UpdateObservationComponent implements OnInit {

  public updateForm;

  constructor(
    @Inject(MAT_DIALOG_DATA) public observationToUpdate: Observation,
    private formBuilder: FormBuilder,
    private observationService: ObservationService,
  ) {
      this.updateForm = this.formBuilder.group({
        location: [this.observationToUpdate.location, Validators.required],
        temperature: [this.observationToUpdate.temperature, Validators.required],
        humidity: [this.observationToUpdate.humidity, Validators.required],
        windSpeed: [this.observationToUpdate.windSpeed, Validators.required],
        windDirection: [this.observationToUpdate.windDirection, Validators.required],
        precipitation: [this.observationToUpdate.precipitation, Validators.required],
        pressure: [this.observationToUpdate.pressure, Validators.required],
        conditions: [this.observationToUpdate.conditions, Validators.required],
        time: [this.observationToUpdate.time, Validators.required],
        date: [this.observationToUpdate.date, Validators.required]
      });
    }

  ngOnInit(): void {
    console.log(this.observationToUpdate);
  }

  public updateObservation() {
    this.observationService.updateObservation(this.observationToUpdate.id, this.updateForm.value).subscribe();
  }

}
