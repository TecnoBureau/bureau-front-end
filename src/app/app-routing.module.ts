import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PartnerComponent } from './views/partner/partner.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ScrollToTopGuard } from './guards/scroll-to-top.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'sobre', component: LandingPageComponent },
  { path: 'parceiros', component: LandingPageComponent },
  { path: 'inscricoes', component: LandingPageComponent },
  { path: 'contatos', component: LandingPageComponent },
  { path: 'parceiros/:id', component: PartnerComponent, canActivate: [ScrollToTopGuard] },
];

const routerOptions: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
