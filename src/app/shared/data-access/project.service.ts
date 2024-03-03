import { Injectable } from '@angular/core';
import { DataStore } from './data.store';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProject(projectId: string) : Project | undefined{
    return DataStore.allProjects.find((project) => project.id === projectId);
  }
}
