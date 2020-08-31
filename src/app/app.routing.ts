//Importamos los modulos 

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { NoexistoComponent } from './components/noexisto/noexisto.component';



//Array rutas

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: NoexistoComponent }
];

// Exportar modulo

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);