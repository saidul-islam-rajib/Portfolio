export interface Training {
  trainingId: string;
  userId: string;
  title: string;
  summary: string;
  trainingCenterName: string;
  date: Date;
  serialNumber: string;
  companyLogo: string;
  link: string;
  keys: TrainingKeys[];
}

export interface TrainingKeys{
  trainingKeyId: string;
  key: string;
}
