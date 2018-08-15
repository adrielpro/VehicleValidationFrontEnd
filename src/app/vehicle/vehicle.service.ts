import { Vehicle, VehicleResponse } from './../vehicle';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


const LIST_ENDPOINT = '/vehicleRequest/processVehicle';
const httpOptions = {

  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Accept': 'application/json'
  })
};

@Injectable()
export class VehicleService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  validate(vehicle: Vehicle): Observable<VehicleResponse> {
    return this.http.post<VehicleResponse>(environment.apiUrl + LIST_ENDPOINT, JSON.stringify(vehicle), httpOptions);
  }



}

