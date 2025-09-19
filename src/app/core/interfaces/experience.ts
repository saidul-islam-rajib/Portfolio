export interface Experience{
  companyName: string;
  companyUrl: string;
  shortName: string;
  companyLogo: string;
  designation: string;
  isCurrentEmployee: boolean;
  isFullTimeEmployee: boolean;
  startDate: Date;
  endDate: Date;
  userId: string;
  experienceSection: ExperienceSection[];
}

export interface ExperienceSection{
  experienceSectionId: string;
  sectionDescription: string;
}
