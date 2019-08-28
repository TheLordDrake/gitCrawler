import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Mail, MapPin } from 'angular-feather/icons';

const icons = {
  Mail,
  MapPin
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
