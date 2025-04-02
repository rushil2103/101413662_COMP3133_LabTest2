import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Mission } from '../../models/mission.interface';
import { MissionDetailsComponent } from '../mission-details/mission-details.component';

@Component({
  selector: 'app-mission-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule
  ],
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.css']
})
export class MissionCardComponent {
  @Input() mission!: Mission;

  constructor(private dialog: MatDialog) {}

  openDetails(): void {
    this.dialog.open(MissionDetailsComponent, {
      width: '600px',
      data: this.mission
    });
  }
} 