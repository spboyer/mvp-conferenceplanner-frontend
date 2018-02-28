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
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    ToolbarComponent,
    DayPipe,
    SpeakerDetailComponent,
    SessionDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'sessions', component: SessionsComponent },
      { path: 'speaker/:id', component: SpeakerDetailComponent },
      { path: 'sessiondetail/:id', component: SessionDetailComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
