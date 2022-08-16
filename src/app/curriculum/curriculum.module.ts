import { ProjectsModule } from './projects/projects.module';
import { StacksModule } from './stacks/stacks.module';
import { ProfessionalInfoModule } from './professional-info/professional-info.module';
import { ProfileModule } from './profile/profile.module';
import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum.component';

@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    HeaderModule,
    ProfileModule,
    ProfessionalInfoModule,
    StacksModule,
    ProjectsModule,
  ],
  exports: [CurriculumComponent],
})
export class CurriculumModule {}
