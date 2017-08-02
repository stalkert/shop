import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'app/common/guards/admin.guard';

import {
    AdminComponent,
    AdminDashboardComponent,
    ManageProductsComponent,
    ManageCategoriesComponent,
    ManageCategoriesListComponent,
    ManageCategoriesItemComponent,
    ManageCategoriesFormComponent} from '.';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'products', component: ManageProductsComponent },
                    { path: 'categories',
                        component: ManageCategoriesComponent,
                        children: [
                            { path: 'list', component: ManageCategoriesListComponent },
                            { path: 'edit/:id', component: ManageCategoriesFormComponent }                    ]
                    },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
];

export let adminRouterComponents = [
    AdminComponent,
    AdminDashboardComponent,
    ManageProductsComponent,
    ManageCategoriesComponent,
    ManageCategoriesListComponent,
    ManageCategoriesItemComponent,
    ManageCategoriesFormComponent];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
