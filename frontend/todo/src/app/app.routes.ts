import { RouteGuardService } from './service/route-guard.service';
import { Routes } from '@angular/router';

// welcome 
export const routes: Routes = [
  { path: '', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)  },//canActivate, RouteGuardService
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'welcome/:name', loadComponent: () => import('./welcome/welcome.component').then(m => m.WelcomeComponent), canActivate:[RouteGuardService]},
  { path: 'todos', loadComponent: () => import('./list-todos/list-todos.component').then(m => m.ListTodosComponent), canActivate:[RouteGuardService] },
  { path: 'logout', loadComponent: () => import('./logout/logout.component').then(m => m.LogoutComponent), canActivate:[RouteGuardService] },
  { path: 'todos/:id', loadComponent: () => import('./todo/todo.component').then(m => m.TodoComponent), canActivate:[RouteGuardService] },

  { path: '**', loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent) }
];