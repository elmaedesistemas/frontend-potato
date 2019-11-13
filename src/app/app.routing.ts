// imports for routing
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

//components
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { HomeComponent } from './components/home/home.component'
import { ErrorComponent } from './components/error/error.component'
//define routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: ErrorComponent},
]

//export configuration
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
