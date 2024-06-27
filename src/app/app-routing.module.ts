import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PartnerComponent } from './views/partner/partner.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'parceiros/:id', component: PartnerComponent },
];

const routerOptions: ExtraOptions = {
  useHash: true, // Use hash strategy
};

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
