import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrentlyLearning } from '../interfaces/currently-learning';

@Injectable({
  providedIn: 'root'
})
export class CurrentlyLearningService {
  private apiUrl = `${environment.baseUrl}/currently-learning/get-currently-learning`;

  constructor(private http: HttpClient) { }

  getCurrentlyLearning(): Observable<CurrentlyLearning[]> {
    
    const mockData: CurrentlyLearning[] = [
      {
        learningId: 'cl1',
        userId: 'user123',
        title: 'AI-Driven Development',
        description: 'Exploring the intersection of artificial intelligence and software development, focusing on how AI can enhance developer productivity and code quality.',
        startDate: new Date('2025-11-02'),
        progress: 60,
        image: './assets/images/topic-1.png',
        keys: [
          { learningKeyId: 'clk1', key: 'Large Language Models (LLMs)' },
          { learningKeyId: 'clk2', key: 'AI Code Generation & Assistance' },
          { learningKeyId: 'clk3', key: 'Prompt Engineering' },
          { learningKeyId: 'clk4', key: 'AI-Powered Testing & Debugging' }
        ]
      },
      {
        learningId: 'cl2',
        userId: 'user123',
        title: 'Problem Solving Skills',
        description: 'Trying to improve problem-solving skills through algorithmic thinking, data structures, and coding challenges on various competitive programming platforms.',
        startDate: new Date('2025-11-02'),
        progress: 25,
        image: './assets/images/topic-2.png',
        keys: [
          { learningKeyId: 'clk5', key: 'Data Structure & Algorithms' },
          { learningKeyId: 'clk6', key: 'Statistics Analysis' },
        ]
      },
      {
        learningId: 'cl3',
        userId: 'user123',
        title: 'Cloud-Native Architecture',
        description: 'Mastering modern cloud technologies and microservices architecture for scalable applications.',
        startDate: new Date('2025-11-02'),
        progress: 60,
        image: './assets/images/topic-3.png',
        keys: [
          { learningKeyId: 'clk11', key: 'Event-Driven Architecture' },
          { learningKeyId: 'clk12', key: 'DevOps & CI/CD Pipelines' }
        ]
      },
      {
        learningId: 'cl4',
        userId: 'user123',
        title: 'Health',
        description: 'Trying to improve my physical and mental health through regular exercise, balanced nutrition, and mindfulness practices.',
        startDate: new Date('2025-07-16'),
        progress: 80,
        image: './assets/images/health.jpeg',
        keys: [
          { learningKeyId: 'clk11', key: 'Ensuring sound sleep & timely wake up' },
          { learningKeyId: 'clk12', key: 'Participating in marathon' }
        ]
      }
    ];

    return of(mockData);
  }
}