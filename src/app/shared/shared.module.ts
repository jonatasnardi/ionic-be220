import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockTitleComponent } from '../components/block-title/block-title.component';


@NgModule({
  declarations: [
    BlockTitleComponent,
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    BlockTitleComponent
  ],
  exports: [
    BlockTitleComponent,
  ],
})
export class SharedModule {}
