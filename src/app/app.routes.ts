import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/services/auth.guard';
import { HomeComponent } from './dashboard/home/home.component';

export const routes: Routes = [
    { path: 'auth/login', component: LoginComponent, canActivate:[AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent },  // Default dashboard home
          ]
     },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  ];
  
