import {ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {WorkersComponent} from './components/workers/workers.component'
import {AdminComponent} from './components/admin/admin.component'
import {KidsprofComponent} from './components/kidsprof/kidsprof.component'
import {HomeComponent} from './components/home/home.component';
import {AppComponent} from './app.component'
import {ContentManagerComponent} from './components/content-manager/content-manager.component'
const appRouts:Routes = [

    {
        path:'',
        component:HomeComponent
    }
    ,
    {
        path:'kidsprof',
        component:KidsprofComponent
    }
    ,
    {
        path:'workers',
        component:WorkersComponent
    }
    ,
    {
        path:'admin',
        component:AdminComponent
    }
    ,
    {
        path:'content',
        component:ContentManagerComponent 
    }

    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouts)