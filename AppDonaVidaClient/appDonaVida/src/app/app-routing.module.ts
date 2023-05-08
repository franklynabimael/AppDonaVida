import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CentersDonationComponent } from './components/centers-donation/centers-donation.component';
import { BodySidebarComponent } from './components/body-sidebar/body-sidebar.component';
import { DonationRecordsComponent } from './components/donation-records/donation-records.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'create-quote',
        component: CreateQuoteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'center-donor',
        component: CentersDonationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'donation-records',
        component: DonationRecordsComponent,
        canActivate: [AuthGuard],
      },
      { path: 'quotes', component: QuotesComponent, canActivate: [AuthGuard] },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
