import { Component, OnInit } from '@angular/core';
import { Projects } from '../../interfaces/projects.interface';
import { ProjectsService } from '../../services/projects/projects.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  Projects: Projects[] = [];

  constructor(private ProjectsService: ProjectsService) { }

  ngOnInit(): void {
    this.ProjectsService.getProjects().subscribe(data => {
      this.Projects = data;
    });
  }

  openProjectLink(url: string) {
    window.open(url, '_blank');
  }
}
