import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Mail } from 'angular-feather/icons';

const icons = {
  Mail
};

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
