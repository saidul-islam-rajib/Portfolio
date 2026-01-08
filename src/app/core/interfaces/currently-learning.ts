export interface CurrentlyLearning {
  learningId: string;
  userId: string;
  title: string;
  description: string;
  startDate: Date;
  progress: number;
  image: string;
  keys: CurrentlyLearningKey[];
}

export interface CurrentlyLearningKey {
  learningKeyId: string;
  key: string;
}