import { AboutMeModule } from './about-me/about-me.module';
import { ProfessionalExperianceComponent } from './professional-experiance/professional-experiance.component';
import { ProfessionalExperianceModule } from './professional-experiance/professional-experiance.module';
import { ProfessionalInfoComponent } from './professional-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProfessionalInfoComponent],
  imports: [CommonModule, ProfessionalExperianceModule, AboutMeModule],
  exports: [ProfessionalInfoComponent],
})
export class ProfessionalInfoModule {}
