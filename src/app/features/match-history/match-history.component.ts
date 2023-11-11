import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatchService } from './match.service';
import { MatTableDataSource } from '@angular/material/table';
import { Match } from './models';
import { Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
  viewProviders: [MatExpansionPanel],
})
export class MatchHistoryComponent implements OnInit {
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private matchSerice: MatchService
  ) {}

  dataSource = new MatTableDataSource<Match>();

  ngOnInit(): void {
    this.matchSerice.getMatches().subscribe((matches) => {
      this.dataSource.data = matches;
    });
  }

  columnsToDisplay = ['Played', 'Standing'];

  sortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
