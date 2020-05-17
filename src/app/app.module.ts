
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SectionFooterComponent } from './components/section-footer/section-footer.component';
import { ColorComponent } from './components/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionMainComponent,
    SectionHeaderComponent,
    SectionFooterComponent,
    ColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
