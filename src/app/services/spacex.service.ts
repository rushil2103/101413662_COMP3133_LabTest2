// src/app/services/spacex.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../models/spacex.model';
import { Mission } from '../models/mission.interface';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  // Get all launches
  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.baseUrl);
  }

  // Get launches by year
  getLaunchesByYear(year: string): Observable<Launch[]> {
    const url = `${this.baseUrl}?launch_year=${year}`;
    return this.http.get<Launch[]>(url);
  }

  // Get launch details by flight number
  getLaunchDetails(flight_number: number): Observable<Launch> {
    const url = `${this.baseUrl}/${flight_number}`;
    return this.http.get<Launch>(url);
  }

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }
}
