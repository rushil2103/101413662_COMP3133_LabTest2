import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MissionListComponent } from './components/mission-list/mission-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MissionListComponent
  ],
  template: `
    <mat-toolbar color="primary">
      <div class="toolbar-content">
        <div class="title-section">
          <span class="app-title">SpaceX Missions</span>
          <span class="student-info">
            Rushil Tamakuwala | ID: 101413662 | COMP 3133
          </span>
        </div>
      </div>
    </mat-toolbar>
    <app-mission-list></app-mission-list>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f0f2f5;
      font-family: 'Segoe UI', Roboto, sans-serif;
    }

    mat-toolbar {
      background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
      color: #ffffff;
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .toolbar-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .title-section {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .app-title {
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .student-info {
      font-size: 0.95rem;
      margin-top: 6px;
      color: #cfd8dc;
      font-style: italic;
    }

    @media (max-width: 600px) {
      mat-toolbar {
        padding: 0.8rem 1rem;
      }

      .app-title {
        font-size: 1.4rem;
      }

      .student-info {
        font-size: 0.85rem;
      }
    }
  `]
})
export class AppComponent {
  title = 'SpaceX Missions';
}
