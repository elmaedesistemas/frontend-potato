// imports for routing
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

//components
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'

//define routes
const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
]

//export configuration
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
