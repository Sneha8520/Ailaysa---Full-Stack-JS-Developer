import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { InputTextModule } from 'primeng/inputtext'; // Import PrimeNG InputText module
import { ButtonModule } from 'primeng/button'; // Import PrimeNG Button module

import { AppComponent } from './app.component';
import { BoxListComponent } from './square-management/box-list/box-list.component';
import { BoxComponent } from './square-management/box/box.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BoxListComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    InputTextModule, // PrimeNG InputText
    ButtonModule,  // PrimeNG Button
    BrowserAnimationsModule,
    ToastModule,
    ConfirmDialogModule,
    CommonModule,
    AppRoutingModule,
    CardModule,
    DialogModule

  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
