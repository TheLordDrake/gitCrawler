import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Link, Mail, MapPin } from 'angular-feather/icons';

const icons = {
  Link,
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
