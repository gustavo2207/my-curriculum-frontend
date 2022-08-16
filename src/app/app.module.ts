import { FooterModule } from './components/footer/footer.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CurriculumModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
