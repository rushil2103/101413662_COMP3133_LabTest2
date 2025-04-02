export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_date_utc: string;
    launch_success: boolean;
    rocket: {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
        first_stage: {
            cores: Array<{
                core_serial: string;
                land_success: boolean;
            }>;
        };
    };
    links: {
        mission_patch: string;
        mission_patch_small: string;
        article_link: string;
        video_link: string;
    };
    details: string;
    launch_site: {
        site_name_long: string;
    };
}