import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

import { BackendService } from './backend.service';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [AppComponent, ProductItemComponent, ProductListComponent, PanelComponent],
  imports: [BrowserModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
