//Importamos los modulos del router de angular

//Nos permite generar un modulo con las rutas y tener todo
//separado y poder cargarlo dentro del framework
import { ModuleWithProviders, Component } from '@angular/core';

//Nos genrar objetos de rutas y generar el modulo para
//la configuracion dentro del framewrok
import { Routes, RouterModule } from '@angular/router';

//Importamos los componentes los cuales son una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { MenuComponent } from './components/menu/menu.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ContactoComponent } from './components/contacto/contacto.component';

//Definimos el array de rutas, esta es la configuracion.

const appRoutes: Routes = [

    {
        path: '', component: HomeComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'conocenos', component: ConocenosComponent
    },
    {
        path: 'menu', component: MenuComponent
    },
    {
        path: 'promociones', component: PromocionesComponent
    },
    {
        path: 'contacto', component: ContactoComponent 
    }

];

//Exportamos el modulo de route y poderlo utilizarlo en general
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);