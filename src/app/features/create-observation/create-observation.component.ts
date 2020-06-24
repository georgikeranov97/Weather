import { ObservationService } from './../observation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-observation',
  templateUrl: './create-observation.component.html',
  styleUrls: ['./create-observation.component.css']
})
export class CreateObservationComponent implements OnInit {

  public observationForm;
  public currentDate;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private observationService: ObservationService,
  ) {
    this.observationForm = this.formBuilder.group({
      location: ['', Validators.required],
      temperature: ['', Validators.required],
      humidity: ['', Validators.required],
      windSpeed: ['', Validators.required],
      windDirection: ['', Validators.required],
      precipitation: ['', Validators.required],
      pressure: ['', Validators.required],
      conditions: ['', Validators.required],
      time: [''],
      date: [''],
    });
  }
  ngOnInit(): void {
    this.formatCurrentDate();
  }

  public goBack() {
    this.location.back();
  }

  public createObservation() {
    this.observationService.createObservation(this.observationForm.value).subscribe();
  }

  public formatCurrentDate() {
    this.currentDate = new Date().toISOString();
    return this.currentDate;
  }

}
