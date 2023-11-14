import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {
    path: '',
    component:HomepageComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
