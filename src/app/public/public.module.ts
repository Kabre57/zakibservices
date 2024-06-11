import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { ReferencesComponent } from './pages/references/references.component';
import { OffresComponent } from './pages/offres/offres.component';




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ContactComponent,
    PresentationComponent,
    ActivitesComponent,
    ReferencesComponent,
    OffresComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
