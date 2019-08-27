import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MotdBannerComponent } from './components/motd-banner/motd-banner.component';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    HomeComponent,
    UserDetailsComponent,
    MotdBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
