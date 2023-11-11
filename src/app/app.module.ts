import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './features/player-list/player-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Angular material
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

// Components
import { MainNavComponent } from './core/main-nav/main-nav.component';
import { MatchHistoryComponent } from './features/match-history/match-history.component';
import { EnterMatchComponent } from './features/enter-match/enter-match.component';
import { AddPlayerComponent } from './features/player-list/add-player/add-player.component';

// Services
import { PlayerService } from './features/player-list/player.service';
import { MatchItemComponent } from './features/match-history/match-item/match-item.component';
import { MatchStandingComponent } from './features/match-history/match-standing/match-standing.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    MainNavComponent,
    MatchHistoryComponent,
    EnterMatchComponent,
    AddPlayerComponent,
    MatchItemComponent,
    MatchStandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
  providers: [PlayerService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
