import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerComponent } from './views/partner/partner.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { InscriptionsFormComponent } from './views/inscriptions-form/inscriptions-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'parceiros/:id', component: PartnerComponent },
  { path: 'formulario', component: InscriptionsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
