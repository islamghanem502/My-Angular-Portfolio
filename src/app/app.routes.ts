import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectComponent },
    { path: '**', component: HomeComponent },
];
