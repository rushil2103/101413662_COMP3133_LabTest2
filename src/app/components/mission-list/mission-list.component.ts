import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission.interface';
import { MissionCardComponent } from '../mission-card/mission-card.component';
import { MissionDetailsComponent } from '../mission-details/mission-details.component';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MissionCardComponent,
    MissionDetailsComponent
  ],
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  loading = true;
  years: string[] = [];
  
  // Filter values
  selectedYear = '';
  launchSuccess: boolean | null = null;
  landingSuccess: boolean | null = null;

  constructor(
    private spacexService: SpacexService
  ) {}

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.loading = true;
    this.spacexService.getMissions().subscribe({
      next: (data) => {
        this.missions = data;
        this.filteredMissions = data;
        this.years = [...new Set(data.map(mission => mission.launch_year))].sort();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching missions:', error);
        this.loading = false;
      }
    });
  }

  applyFilters(): void {
    this.filteredMissions = this.missions.filter(mission => {
      const matchesYear = !this.selectedYear || mission.launch_year === this.selectedYear;
      const matchesLaunch = this.launchSuccess === null || mission.launch_success === this.launchSuccess;
      const matchesLanding = this.landingSuccess === null || 
        mission.rocket.first_stage.cores[0]?.land_success === this.landingSuccess;
      
      return matchesYear && matchesLaunch && matchesLanding;
    });
  }

  resetFilters(): void {
    this.selectedYear = '';
    this.launchSuccess = null;
    this.landingSuccess = null;
    this.filteredMissions = this.missions;
  }
} 