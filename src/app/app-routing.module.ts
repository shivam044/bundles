import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BundleListComponent } from './bundle-list/bundle-list.component';
import { AddBundleComponent } from './bundle-list/add-bundle/add-bundle.component';
import { EditBundleComponent } from './bundle-list/edit-bundle/edit-bundle.component';
import { CheckAvailabilityComponent } from './bundle-list/check-availability/check-availability.component';
const routes: Routes = [
  {
    path: '',
    // redirectTo: '/bundles',
    component: CheckAvailabilityComponent,
    // pathMatch: 'full'
  },
  {
    path: 'bundles/add',
    component: AddBundleComponent
  },
  {
    path: 'bundles/edit/:id',
    component: EditBundleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
