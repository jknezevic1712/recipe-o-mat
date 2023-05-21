import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RecipeTileComponent } from './shared/recipe-tile/recipe-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthorizationComponent,
    ProfileComponent,
    HeaderComponent,
    LayoutComponent,
    RecipeTileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
