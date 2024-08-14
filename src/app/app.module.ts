import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { DetailsIsticharaComponent } from './details-istichara/details-istichara.component';
import { DetailsDessalementComponent } from './details-dessalement/details-dessalement.component';
import { DetailsPetshopComponent } from './details-petshop/details-petshop.component';
import { DetailsResumeComponent } from './details-resume/details-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ServiceComponent,
    ContactComponent,
    DetailsIsticharaComponent,
    DetailsDessalementComponent,
    DetailsPetshopComponent,
    DetailsResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
