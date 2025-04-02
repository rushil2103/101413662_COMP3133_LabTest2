// src/app/models/spacex.model.ts

export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
  }
  
  export interface Links {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  }
  
  export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    // Note: Some data (like images) might be available under links as well.
    // Adjust as needed based on the API response.
    rocket: Rocket;
    links: Links;
  }
  