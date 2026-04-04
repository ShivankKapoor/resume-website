export interface ExperienceRole {
    position: string;
    startMonthYear: string;
    endMonthYear: string;
    description: string;
}

export class Experience {
    public workIcon: string;
    public position: string;
    public employer: string;
    public startMonthYear: string;
    public endMonthYear: string;
    public description: string;
    public roles?: ExperienceRole[];

    constructor(workIcon: string, position: string, employer: string, startMonthYear: string, endMonthYear: string, description: string, roles?: ExperienceRole[]) {
        this.workIcon = workIcon;
        this.position = position;
        this.employer = employer;
        this.startMonthYear = startMonthYear;
        this.endMonthYear = endMonthYear;
        this.description = description;
        this.roles = roles;
    }

}