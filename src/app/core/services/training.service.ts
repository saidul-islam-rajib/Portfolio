import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Training } from '../interfaces/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private apiUrl = `${environment.baseUrl}/training/get-trainings`;

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.apiUrl);
  }
}