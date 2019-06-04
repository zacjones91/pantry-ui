import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FridgeComponent } from './fridge/fridge.component';
import { FreezerComponent } from './freezer/freezer.component';
import { PantryComponent } from './pantry/pantry.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'fridge', component: FridgeComponent },
            { path: 'freezer', component: FreezerComponent },
            { path: 'pantry', component: PantryComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];