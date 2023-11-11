import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
  viewProviders: [MatExpansionPanel],
})
export class MatchHistoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
