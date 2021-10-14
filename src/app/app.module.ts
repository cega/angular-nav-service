import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TopNavComponent,
    MenuListItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
