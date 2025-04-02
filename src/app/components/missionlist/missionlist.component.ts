// src/app/components/missionlist/missionlist.component.ts

import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/spacex.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];

  constructor(private spacexService: SpacexService, private router: Router) { }

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.launches = data;
    });
  }

  viewDetails(flight_number: number) {
    this.router.navigate(['/mission', flight_number]);
  }

  applyFilter(year: string) {
    if (year) {
      this.spacexService.getLaunchesByYear(year).subscribe(data => {
        this.launches = data;
      });
    } else {
      // If no filter, reload all launches.
      this.spacexService.getLaunches().subscribe(data => {
        this.launches = data;
      });
    }
  }
}


