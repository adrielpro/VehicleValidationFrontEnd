import { VehicleResponse } from './../vehicle';
import { VehicleService } from './vehicle.service';
import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../vehicle';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
 title = 'Vehicle form';
 subtitle = 'Fill the form, and submit to validate';
 model = new Vehicle();

constructor(private vehicleService: VehicleService, public snackBar: MatSnackBar) {}

 ngOnInit() {}

 // On Submit form, send it to backend for validation
 onSubmit() {
   this.vehicleService.validate(this.model).subscribe(data => {
     console.log(data);
     this.openSnackBar(data.returnCode.name, 'Close', data.returnCode.name);
  });
  }

  // Show a snackbar component with validation result
  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      panelClass: [className]
    });
  }
 get diagnostic() { return JSON.stringify(this.model); }

}
