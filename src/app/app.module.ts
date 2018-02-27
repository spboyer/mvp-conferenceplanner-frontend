import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';
import { SessionsComponent } from './sessions/sessions.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';

import { DayPipe } from './shared/data-day.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    ToolbarComponent,
    DayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'sessions', component: SessionsComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
