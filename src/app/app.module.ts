import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BirdsComponent } from './birds/birds.component';
import { BirdListComponent } from './birds/bird-list/bird-list.component';
import { BirdItemComponent } from './birds/bird-list/bird-item/bird-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BirdsService } from './birds/birds.service';
import { BirdDetailComponent } from './birds/bird-detail/bird-detail.component';
import { BirdStartComponent } from './birds/bird-start/bird-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { BirdTeamComponent } from './birds/bird-team/bird-team.component';
import { BirdPhotographerComponent } from './birds/bird-photographer/bird-photographer.component';
import { BirdViaponticaComponent } from './birds/bird-viapontica/bird-viapontica.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageDialogComponent } from './birds/dialogs/image-dialog/image-dialog.component';
import { BirdViaaristotelisComponent } from './birds/bird-viaaristotelis/bird-viaaristotelis.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdsComponent,
    BirdListComponent,
    BirdItemComponent,
    BirdDetailComponent,
    BirdStartComponent,
    BirdTeamComponent,
    BirdPhotographerComponent,
    BirdViaponticaComponent,
    ImageDialogComponent,
    BirdViaaristotelisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [BirdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
