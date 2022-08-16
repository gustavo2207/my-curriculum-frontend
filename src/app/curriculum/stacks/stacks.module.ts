import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StacksComponent } from './stacks.component';
import { StackComponent } from './stack/stack.component';

@NgModule({
  declarations: [StacksComponent, StackComponent],
  imports: [CommonModule],
  exports: [StacksComponent],
})
export class StacksModule {}
