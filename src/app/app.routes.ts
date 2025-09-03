import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // generic dashboard
    { path: 'dashboard', component: DashboardComponent },
    { path: 'home', component:HomeComponent},

    
    // role-based dashboards

    // auth routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '**', component: PageNotFoundComponent }
];
