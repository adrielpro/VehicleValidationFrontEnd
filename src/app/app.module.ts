import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule, MatSnackBarModule, MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { VehicleService } from './vehicle/vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule
  ],

  providers: [
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
