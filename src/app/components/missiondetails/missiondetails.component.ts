// src/app/components/missiondetails/missiondetails.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/spacex.model';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission!: Launch;

  constructor(private route: ActivatedRoute, private spacexService: SpacexService) { }

  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('flight_number'));
    this.spacexService.getLaunchDetails(flightNumber).subscribe(data => {
      this.mission = data;
    });
  }
}
