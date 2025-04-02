# SpaceX Mission Explorer

A modern, responsive web application built with Angular that allows users to explore and filter SpaceX launch missions.

## Student Information
- **Name:** Rushil Tamakuwala
- **Student ID:** 101413662
- **Course:** COMP 3133 - Full Stack Development II

## 🚀 Features

- **Real-time Mission Data**: Fetches and displays up-to-date SpaceX mission information
- **Advanced Filtering System**:
  - Filter by launch year
  - Filter by launch success/failure
  - Filter by landing success/failure
  - Reset filters functionality

- **Modern UI/UX**:
  - Responsive Material Design
  - Interactive mission cards with hover effects
  - Space-themed animated background
  - Custom loading animations
  - Glass morphism effects
  - Smooth transitions and animations

- **Detailed Mission Information**:
  - Mission patches and logos
  - Launch and landing status
  - Rocket information
  - Launch site details
  - Links to videos and articles
  - Comprehensive mission descriptions

## 🛠️ Technologies Used

- Angular 19.2.0
- Angular Material
- TypeScript
- SpaceX API
- CSS3 with custom animations
- Responsive Design

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19.2.5)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd 101413749-lab-test2-comp3133
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── mission-list/
│   │   ├── mission-card/
│   │   └── mission-details/
│   ├── models/
│   │   └── mission.interface.ts
│   ├── services/
│   │   └── spacex.service.ts
│   └── app.component.ts
├── assets/
└── styles.css
```

## 🎨 UI Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Space Theme**: Custom space-themed background with animated stars
- **Material Design**: Enhanced Material Design components with custom styling
- **Custom Animations**: 
  - Rocket loading animation
  - Card hover effects
  - Modal transitions
  - Background star twinkling

## 🔍 Filtering Capabilities

- **Launch Year**: Filter missions by specific launch years
- **Launch Success**: Filter by successful or failed launches
- **Landing Success**: Filter by successful or failed landings
- **Combination Filters**: Apply multiple filters simultaneously
- **Reset Option**: Clear all filters with one click

## 📱 Mobile Responsiveness

- Adaptive grid layout
- Collapsible filters on mobile
- Touch-friendly interface
- Optimized images and assets

## 🚀 Deployment

To build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

This project was created as part of the COMP 3133 course at George Brown College.

## 📄 License

This project is for educational purposes only.

## 🙏 Acknowledgments

- SpaceX for providing the open API
- Angular team for the fantastic framework
- Material Design team for the UI components
