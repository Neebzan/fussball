import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss'],
  viewProviders: [MatExpansionPanel],
})
export class MatchItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
