export interface CurrentlyLearning {
  learningId: string;
  userId: string;
  title: string;
  description: string;
  startDate: Date;
  progress: number; // 0-100 percentage
  keys: CurrentlyLearningKey[];
}

export interface CurrentlyLearningKey {
  learningKeyId: string;
  key: string;
}