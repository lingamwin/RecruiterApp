import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MenuListItemComponent} from '../app/dashboard/menu-list-item/menu-list-item.component';
import { NavService } from '../app/service/nav.service';
import { TopNavComponent } from '../app/dashboard/top-nav/top-nav.component';
import {AuthenticationService} from "./service/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { QualifiedComponent } from './dashboard/qualified/qualified.component';
import { NewComponent } from './dashboard/new/new.component';
import { NotContacted } from './dashboard/notContacted/notContacted.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FollowedComponent } from './dashboard/followed/followed.component';
import {AgGridModule} from "ag-grid-angular/main";
import { ApiService } from './dashboard/api.service';
import { HttpModule } from '@angular/http';
import { CandidateDataService } from './dashboard/candidate-data.service';


@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuListItemComponent,
    QualifiedComponent,
    NewComponent,
    NotContacted,
    TopNavComponent,
    DashboardComponent,
    FollowedComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    AgGridModule.withComponents(
      []
  )
  ],
  providers: [AuthenticationService, NavService,CandidateDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
