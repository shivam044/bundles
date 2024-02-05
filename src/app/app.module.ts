import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BundleListComponent } from './bundle-list/bundle-list.component';
import { AddBundleComponent } from './bundle-list/add-bundle/add-bundle.component';
import { EditBundleComponent } from './bundle-list/edit-bundle/edit-bundle.component';
import { CheckAvailabilityComponent } from './bundle-list/check-availability/check-availability.component';
import { FormsModule } from '@angular/forms';
import { PictureRendererComponent } from './bundle-list/add-bundle/picture-renderer.component';
import { AgGridModule } from 'ag-grid-angular';
import { MockDataService } from './mock-data.service';
import { DialogComponent } from './dialog/dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BundleListComponent,
    AddBundleComponent,
    PictureRendererComponent,
    EditBundleComponent,
    CheckAvailabilityComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    AgGridModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule, // Needed for Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [
    provideClientHydration(),
    MockDataService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
