import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AddDonationRecordComponent } from './components/add-donation-record/add-donation-record.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { CentersDonationComponent } from './components/centers-donation/centers-donation.component';
import { DonationRecordDetailComponent } from './components/donation-record-detail/donation-record-detail.component';
import { DonationRecordsComponent } from './components/donation-records/donation-records.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    AddQuoteComponent,
    QuotesComponent,
    CentersDonationComponent,
    DonationRecordsComponent,
    DonationRecordDetailComponent,
    AddDonationRecordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:7082'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
