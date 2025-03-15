# 🚀 Migrate to Angular Latest Features

> [!IMPORTANT]
```sh
ng update @angular/cli @angular/core
> CLI Version Warning
> The installed Angular CLI version is outdated.
> Installing a temporary Angular CLI versioned 19.2.2 to perform the update.
```
## 📦 Dependency Updates in `package.json`

| Dependency                          | Old Version | New Version |
|--------------------------------------|------------|------------|
| `@angular-devkit/build-angular`     | 19.0.2     | 19.2.2     |
| `@angular/cli`                      | 19.0.2     | 19.2.2     |
| `@angular/compiler-cli`             | 19.0.1     | 19.2.2     |
| `@angular/animations`               | 19.0.1     | 19.2.2     |
| `@angular/common`                   | 19.0.1     | 19.2.2     |
| `@angular/compiler`                 | 19.0.1     | 19.2.2     |
| `@angular/core`                     | 19.0.1     | 19.2.2     |
| `@angular/forms`                    | 19.0.1     | 19.2.2     |
| `@angular/platform-browser`         | 19.0.1     | 19.2.2     |
| `@angular/platform-browser-dynamic` | 19.0.1     | 19.2.2     |
| `@angular/router`                   | 19.0.1     | 19.2.2     |
| `rxjs`                              | 7.8.1      | 7.8.2      |
| `tslib`                             | 2.6.2      | 2.8.1      |
| `karma`                             | 6.4.1      | 6.4.4      |
| `karma-chrome-launcher`             | 3.1.0      | 3.2.0      |
| `karma-coverage`                    | 2.2.0      | 2.2.1      |
| `karma-jasmine-html-reporter`       | 2.0.0      | 2.1.0      |
| `typescript`                        | 5.5.4      | 5.8.2      |

## 🚀 Angular Control Flow Migration (`ng generate @angular/core:control-flow`)

[Control flow syntax](https://angular.dev/guide/templates/control-flow) has been introduced in Angular version 17. This new syntax is integrated directly into the template, eliminating the need to import CommonModule.

This schematic facilitates the migration of all existing code within your application to adopt the new Control Flow Syntax.

Run the following command 

```sh
puneethsai@MacBook-Pro todo % ng generate @angular/core:control-flow
✔ Which path in your project should be migrated? ./
✔ Should the migration reformat your templates? Yes 
```

| File Updated                                  | Size (Bytes) |
|----------------------------------------------|-------------|
| `src/app/login/login.component.html`        | 600         |
| `src/app/welcome/welcome.component.html`    | 465         |
| `src/app/todo/todo.component.html`          | 1121        |
| `src/app/list-todos/list-todos.component.html` | 926      |
| `src/app/menu/menu.component.html`          | 860         |
| `src/app/menu/menu.component.ts`            | 652         |
| `src/app/list-todos/list-todos.component.ts` | 1854       |
| `src/app/todo/todo.component.ts`            | 1527        |
| `src/app/welcome/welcome.component.ts`      | 2426        |
| `src/app/login/login.component.ts`          | 2268        |

### ✅ Migration Steps:
1. **Replaced** `*ngIf`, `*ngFor`, and `*ngSwitch` with the new `@angular/core` Control Flow syntax.
2. **Reformatted** affected templates for better readability.
3. **Updated** TypeScript files where necessary.

## 1. `src/app/login/login.component.html`
**Replaced** `*ngIf` with the new `@angular/core` i.e., with `@if` Control Flow syntax.
### `Before`
```html
<div class="alert alert-warning" *ngIf='invalidLogin'>{{errorMessage}}</div>
```
### `After`
```html
@if (invalidLogin) {
 <div class="alert alert-warning">{{errorMessage}}</div>
}
```

## 2. `src/app/welcome/welcome.component.html`
**Replaced** `*ngIf` with the new `@angular/core` i.e., with `@if` Control Flow syntax.
### `Before`
```html
<div class="container" *ngIf="welcomeMessageFromService">
```
### `After`
```html
@if (welcomeMessageFromService) {
<div class="container">
    <H2>Your Customized Welcome Message</H2>
    {{welcomeMessageFromService}}
</div>
}
```
## 3. `src/app/todo/todo.component.html`
**Replaced** `*ngIf` with the new `@angular/core` i.e., with `@if` Control Flow syntax.
### `Before`
```html
<div class="alert alert-warning" *ngIf="todoForm.dirty && todoForm.invalid">Enter valid values</div>
<div class="alert alert-warning" *ngIf="todoForm.dirty && targetDate.invalid">Enter valid Target Date</div>
<div class="alert alert-warning" *ngIf="todoForm.dirty && description.invalid">Enter atleast 5 characters in Description</div>
```
### `After`
```html
@if (todoForm.dirty && todoForm.invalid) {
  <div class="alert alert-warning">Enter valid values</div>
}
@if (todoForm.dirty && targetDate.invalid) {
  <div class="alert alert-warning">Enter valid Target Date</div>
}
@if (todoForm.dirty && description.invalid) {
  <div class="alert alert-warning">Enter atleast 5 characters in Description</div>
}
```

## 4. `src/app/list-todos/list-todos.component.html`
**Replaced** `*ngIf` and `*ngFor` with the new `@angular/core` i.e., with `@if` and `@for` Control Flow syntax.
### `Before`
```html
<div class="alert alert-success" *ngIf='message'>{{message}}</div>

<!--   for (Todo todo: todos) {  -->
<tr *ngFor="let todo of todos">
    <td>{{todo.description}}</td>
    <td>{{todo.targetDate | date | uppercase}}</td>
    <td>{{todo.done}}</td>
    <td><button (click)="updateTodo(todo.id)" class="btn btn-success">Update</button></td>
    <td><button (click)="deleteTodo(todo.id)" class="btn btn-warning">Delete</button></td>
</tr>

```
### `After`
```html
@if (message) {
 <div class="alert alert-success">{{message}}</div>
}

@for (todo of todos; track todo) {
<tr>
    <td>{{todo.description}}</td>
    <td>{{todo.targetDate | date | uppercase}}</td>
    <td>{{todo.done}}</td>
    <td><button (click)="updateTodo(todo.id)" class="btn btn-success">Update</button></td>
    <td><button (click)="deleteTodo(todo.id)" class="btn btn-warning">Delete</button></td>
</tr>
}
```

## 5. `src/app/menu/menu.component.html`
**Replaced** `*ngIf` with the new `@angular/core` i.e., with `@if` Control Flow syntax.
### `Before`
```html
<ul class="navbar-nav">
    <li><a *ngIf="hardcodedAuthenticationService.isUserLoggedIn()" routerLink="/welcome/in28minutes" class="nav-link">Home</a></li>
    <li><a *ngIf="hardcodedAuthenticationService.isUserLoggedIn()" routerLink="/todos" class="nav-link">Todos</a></li>
</ul>
```
### `After`
```html
<ul class="navbar-nav">
    <li>@if (hardcodedAuthenticationService.isUserLoggedIn()) {
        <a routerLink="/welcome/in28minutes" class="nav-link">Home</a>
        }</li>
    <li>@if (hardcodedAuthenticationService.isUserLoggedIn()) {
        <a routerLink="/todos" class="nav-link">Todos</a>
        }</li>
</ul>
```

### `Before`
```html
 <ul class="navbar-nav navbar-collapse justify-content-end">
    <li><a *ngIf="!hardcodedAuthenticationService.isUserLoggedIn()" routerLink="/login" class="nav-link">Login</a></li>
    <li><a *ngIf="hardcodedAuthenticationService.isUserLoggedIn()" routerLink="/logout" class="nav-link">Logout</a></li>
</ul>
```
### `After`
```html
<ul class="navbar-nav navbar-collapse justify-content-end">
    <li>@if (!hardcodedAuthenticationService.isUserLoggedIn()) {
        <a routerLink="/login" class="nav-link">Login</a>
        }
    </li>
    <li>@if (hardcodedAuthenticationService.isUserLoggedIn()) {
        <a routerLink="/logout" class="nav-link">Logout</a>
        }
    </li>
</ul>
```

## 7. `src/app/menu/menu.component.ts`
**Replaced** `*ngIf` with the new `@angular/core` i.e., with `@if` Control Flow syntax. Remove `NgIf` under `@Components.imports` 
### `Before`
```html
import { NgIf } from '@angular/common';

imports: [NgIf, RouterLink]
```
### `After`
```html
imports: [RouterLink]
```

## 8. `src/app/list-todos/list-todos.component.ts`
**Replaced** `*ngIf` with the new `@angular/core` i.e., with `@if` Control Flow syntax. Remove `NgIf` under `@Components.imports`
### `Before`
```html
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';

imports: [NgIf, NgFor, UpperCasePipe, DatePipe]
```
### `After`
```html
imports: [UpperCasePipe, DatePipe]
```
## 9. `src/app/todo/todo.component.ts`
**Replaced** `*ngIf` with the new `@angular/core` i.e., with `@if` Control Flow syntax. Remove `NgIf` under `@Components.imports`
### `Before`
```html
import { NgIf, DatePipe } from '@angular/common';

imports: [NgIf, FormsModule, DatePipe]
```
### `After`
Removed NgIf under @Components.imports
```html
import { DatePipe } from '@angular/common';

imports: [FormsModule, DatePipe]
```
## 10. `src/app/welcome/welcome.component.ts`
**Replaced** `*ngIf` with the new `@angular/core` i.e., with `@if` Control Flow syntax. Remove `NgIf` under `@Components.imports`
### `Before`
```html
import { NgIf } from '@angular/common';

imports: [RouterLink, NgIf]
```
### `After`
```html
imports: [RouterLink]
```

## 11. `src/app/login/login.component.ts`
**Replaced** `*ngIf` with the new `@angular/core` i.e., with `@if` Control Flow syntax. Remove `NgIf` under `@Components.imports`
### `Before`
```html
import { NgIf } from '@angular/common';

imports: [NgIf, FormsModule]
```
### `After`
```html
imports: [FormsModule]
```
## 🚀 Migration to the `inject` function (`ng generate @angular/core:inject`)
Angular's `inject` function provides enhanced type accuracy and improved compatibility with standard decorators when compared to traditional constructor-based injection.

This schematic transforms the `constructor-based injection` in your classes to utilize the inject function.

Execute the schematic with the command below:
```sh
(base) puneethsai@MacBook-Pro todo % ng generate @angular/core:inject
✔ Which path in your project should be migrated? ./
✔ Do you want to migrate abstract classes? Abstract classes are not migrated by default, because their parameters aren't guaranteed to be injectable Yes
✔ Do you want to clean up all constructors or keep them backwards compatible? Enabling this option will include an additional signature of `constructor(...args: 
unknown[]);` that will avoid errors for sub-classes, but will increase the amount of generated code by the migration `No`
✔ Do you want optional inject calls to be non-nullable? Enable this option if you want the return type to be identical to @Optional(), at the expense of worse type 
safety `Yes`
UPDATE src/app/menu/menu.component.ts (604 bytes)
UPDATE src/app/list-todos/list-todos.component.ts (1457 bytes)
UPDATE src/app/service/data/todo-data.service.ts (1087 bytes)
UPDATE src/app/todo/todo.component.ts (1534 bytes)
UPDATE src/app/service/route-guard.service.ts (672 bytes)
UPDATE src/app/logout/logout.component.ts (514 bytes)
UPDATE src/app/service/data/welcome-data.service.ts (1750 bytes)
UPDATE src/app/welcome/welcome.component.ts (2316 bytes)
UPDATE src/app/service/basic-authentication.service.ts (1988 bytes)
UPDATE src/app/login/login.component.ts (2222 bytes)
UPDATE src/app/service/http/http-intercepter-basic-auth.service.ts (998 bytes)
```
#### **Replaced** constructor-based dependency injection with `@angular/core:inject` syntax.
## 1. `src/app/menu/menu.component.ts`

### `Before`
```html
import { NgIf } from '@angular/common';

constructor(public hardcodedAuthenticationService
: HardcodedAuthenticationService) { }
```
### `After`
```html
import { Component, OnInit } from '@angular/core';

hardcodedAuthenticationService = inject(HardcodedAuthenticationService);
```
## 2. `src/app/list-todos/list-todos.component.ts`
### `Before`
```html
import { NgIf } from '@angular/common';

constructor(
private todoService: TodoDataService,
private router: Router
) { }

```
### `After`
```html
import { Component, OnInit, inject } from '@angular/core';

private todoService = inject(TodoDataService);
private router = inject(Router);
```

## 3. `src/app/service/data/todo-data.service.ts`
### `Before`
```html
import { Injectable } from '@angular/core';

constructor(
private http: HttpClient
) { }

```
### `After`
```html
import { Injectable, inject } from '@angular/core';

private http = inject(HttpClient);
```

## 4. `src/app/todo/todo.component.ts`
### `Before`
```html
import { Component, OnInit } from '@angular/core';

constructor(
private todoService: TodoDataService,
private route: ActivatedRoute,
private router: Router
) { }

```
### `After`
```html
import { Component, OnInit, inject } from '@angular/core';

private todoService = inject(TodoDataService);
private route = inject(ActivatedRoute);
private router = inject(Router);
```

## 5. `src/app/service/route-guard.service.ts`
### `Before`
```html
import { Injectable } from '@angular/core';

constructor(
private hardcodedAuthenticationService: HardcodedAuthenticationService,
private router: Router) {

}

```
### `After`
```html
import { Injectable, inject } from '@angular/core';

private hardcodedAuthenticationService = inject(HardcodedAuthenticationService);
private router = inject(Router);
```

## 5. `src/app/logout/logout.component.ts`
### `Before`
```html
import { Component, OnInit } from '@angular/core';

constructor(
private hardcodedAuthenticationService: HardcodedAuthenticationService
) { }

```
### `After`
```html
import { Component, OnInit, inject } from '@angular/core';

private hardcodedAuthenticationService = inject(HardcodedAuthenticationService);
```

## 5. `src/app/service/data/welcome-data.service.ts`
### `Before`
```html
import { Injectable } from '@angular/core';

constructor(
private http: HttpClient
) { }
```
### `After`
```html
import { Injectable, inject } from '@angular/core';

private http = inject(HttpClient);
```

## 6. `src/app/welcome/welcome.component.ts`
### `Before`
```html
import { Component, OnInit } from '@angular/core';//'./app.component';

//ActivatedRoute
constructor(
private route: ActivatedRoute,
private service: WelcomeDataService) {

}
```
### `After`
```html
import { Injectable, inject } from '@angular/core';

private route = inject(ActivatedRoute);
private service = inject(WelcomeDataService);
```

## 7. `src/app/service/basic-authentication.service.ts`
### `Before`
```html
import { Injectable } from '@angular/core';

constructor(private http: HttpClient) { }
```
### `After`
```html
import { Injectable, inject } from '@angular/core';

private http = inject(HttpClient);
```

## 8. `src/app/login/login.component.ts`
### `Before`
```html
import { Component, OnInit } from '@angular/core';

constructor(private router: Router,
private hardcodedAuthenticationService: HardcodedAuthenticationService,
private basicAuthenticationService: BasicAuthenticationService) { }
```
### `After`
```html
import { Component, OnInit, inject } from '@angular/core';

private router = inject(Router);
private hardcodedAuthenticationService = inject(HardcodedAuthenticationService);
private basicAuthenticationService = inject(BasicAuthenticationService);
```

## 9. `src/app/service/http/http-intercepter-basic-auth.service.ts`
### `Before`
```html
import { Injectable } from '@angular/core';

constructor(
private basicAuthenticationService : BasicAuthenticationService
) { }
```
### `After`
```html
import { Injectable, inject } from '@angular/core';

private basicAuthenticationService = inject(BasicAuthenticationService);
```
## 🚀 Migration to `lazy-loaded` routes (`ng generate @angular/core:route-lazy-loading`)
This schematic assists developers in transforming eagerly loaded component routes into lazy loaded routes. 
This transformation enables the build process to divide the production bundle into smaller segments, thereby preventing the creation of a large JavaScript bundle that encompasses all routes, which can adversely impact the initial loading time of an application.

To execute the schematic, use the following command:
```sh
(base) puneethsai@MacBook-Pro todo % ng generate @angular/core:route-lazy-loading
✔ Which path in your project should be migrated? ./
    🎉 Automated migration step has finished! 🎉
    Number of updated routes: 21
    Number of skipped routes: 0
    IMPORTANT! Please verify manually that your application builds and behaves as expected.
    See https://angular.dev/reference/migrations/route-lazy-loading for more information.
UPDATE src/app/app-routing.module.ts (1255 bytes)
UPDATE src/app/app.routes.ts (1086 bytes)  
```

## 1. `src/app/app-routing.module.ts`
### `Before`
```html
const routes: Routes = [
    { path: '', component: LoginComponent  },//canActivate, RouteGuardService
    { path: 'login', component: LoginComponent },
    { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
    { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService] },
    { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
    { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },
    
    { path: '**', component: ErrorComponent }
]
```
### `After`
Remove all the imports statements for the respective components
```html
const routes: Routes = [
{ path: '', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)  },//canActivate, RouteGuardService
{ path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
{ path: 'welcome/:name', loadComponent: () => import('./welcome/welcome.component').then(m => m.WelcomeComponent), canActivate:[RouteGuardService]},
{ path: 'todos', loadComponent: () => import('./list-todos/list-todos.component').then(m => m.ListTodosComponent), canActivate:[RouteGuardService] },
{ path: 'logout', loadComponent: () => import('./logout/logout.component').then(m => m.LogoutComponent), canActivate:[RouteGuardService] },
{ path: 'todos/:id', loadComponent: () => import('./todo/todo.component').then(m => m.TodoComponent), canActivate:[RouteGuardService] },

{ path: '**', loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent) }
];
```

## 2. `src/app/app.routes.ts`
### `Before`
```html
import { TodoComponent } from './todo/todo.component';
import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

// welcome
export const routes: Routes = [
{ path: '', component: LoginComponent  },//canActivate, RouteGuardService
{ path: 'login', component: LoginComponent },
{ path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
{ path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService] },
{ path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
{ path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },

{ path: '**', component: ErrorComponent }
];
```
### `After`
Remove all the imports statements for the respective components
```html
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
```
### Reference Link
### [Angular 19 Migrations](https://angular.dev/reference/migrations)

Happy Coding!