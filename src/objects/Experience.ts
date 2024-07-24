export class Experience {
    public workIcon: string;
    public position: string;
    public employer: string;
    public startMonthYear: string;
    public endMonthYear: string;
    public description: string;

    constructor(workIcon: string, position: string, employer: string, startMonthYear: string, endMonthYear: string, description: string) {
        this.workIcon = workIcon;
        this.position = position;
        this.employer = employer;
        this.startMonthYear = startMonthYear;
        this.endMonthYear = endMonthYear;
        this.description = description;
    }

}