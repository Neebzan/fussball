import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './features/player-list/player-list.component';
import { MatchHistoryComponent } from './features/match-history/match-history.component';
import { EnterMatchComponent } from './features/enter-match/enter-match.component';

const routes: Routes = [
  {path: "player-list", component: PlayerListComponent},
  {path: "match-history", component: MatchHistoryComponent},
  {path: "enter-match", component: EnterMatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
