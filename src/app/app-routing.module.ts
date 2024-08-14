import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsIsticharaComponent } from './details-istichara/details-istichara.component';
import { DetailsDessalementComponent } from './details-dessalement/details-dessalement.component';
import { DetailsPetshopComponent } from './details-petshop/details-petshop.component';
import { DetailsResumeComponent } from './details-resume/details-resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'details-istichara', component: DetailsIsticharaComponent },
  { path: 'details-dessalement', component: DetailsDessalementComponent },
  { path: 'details-petshop', component: DetailsPetshopComponent },
  { path: 'details-resume', component: DetailsResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
