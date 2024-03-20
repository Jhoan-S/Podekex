import { NgModule } from '@angular/core';

import { EnhancedTitleCasePipe } from './pipes/enhancedTitleCase.pipe';

// Directives
import { BlockPasteDirective } from './directives/block-paste.directive';
import { OnlyAlphaNumericDirective } from './directives/only-alpha-numeric.directive';

const directives = [
  BlockPasteDirective,
  OnlyAlphaNumericDirective
];

@NgModule({
  imports: [],
  exports: [EnhancedTitleCasePipe, ...directives],
  declarations: [EnhancedTitleCasePipe, ...directives],
})
export class CoreModule { }
