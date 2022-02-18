import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';  //its is a parent module for input module, mat label, mat buttons, mat checkbox etc etc.... 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';      //its a parent module for form control, form builder
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';    // used to connect with backend URL
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { GetallbooksComponent } from './component/getallbooks/getallbooks.component';
import { QuickviewComponent } from './component/quickview/quickview.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { GetcartComponent } from './component/getcart/getcart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { GetwishlistComponent } from './component/getwishlist/getwishlist.component';
import { OrderplacedsuccessfullyComponent } from './component/orderplacedsuccessfully/orderplacedsuccessfully.component';
import {MatMenuModule} from '@angular/material/menu';
import { AdminComponent } from './component/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    GetallbooksComponent,
    QuickviewComponent,
    GetcartComponent,
    GetwishlistComponent,
    OrderplacedsuccessfullyComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    NgxPaginationModule,
    MatExpansionModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
