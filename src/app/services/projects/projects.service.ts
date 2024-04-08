import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from '../../interfaces/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url = '../../assets/data/projects.json'
  
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.url);
  }

}
