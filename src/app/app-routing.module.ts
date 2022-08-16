import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumModule } from './curriculum/curriculum.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'curriculum' },
  {
    path: 'curriculum',
    loadChildren: () =>
      import('./curriculum/curriculum.module').then((module) => {
        return module.CurriculumModule;
      }),
    canLoad: [CurriculumModule],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CurriculumModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
