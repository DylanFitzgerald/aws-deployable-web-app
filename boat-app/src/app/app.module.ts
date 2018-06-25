import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {WebcamModule} from 'ngx-webcam';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BoatsComponent } from './components/boats/boats.component';

import { DataService } from './services/data.service';
import { HomeComponent } from './components/home/home.component';
import { CameraComponent } from './components/camera/camera.component';

const appRoutes: Routes = [  
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'boats', component: BoatsComponent},
  {path: 'camera', component: CameraComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BoatsComponent,
    HomeComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    WebcamModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

