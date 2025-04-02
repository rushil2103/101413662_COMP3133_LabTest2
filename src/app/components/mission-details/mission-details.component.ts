import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Mission } from '../../models/mission.interface';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<MissionDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public mission: Mission
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  openVideo(): void {
    if (this.mission.links.video_link) {
      window.open(this.mission.links.video_link, '_blank');
    }
  }

  openArticle(): void {
    if (this.mission.links.article_link) {
      window.open(this.mission.links.article_link, '_blank');
    }
  }
} 