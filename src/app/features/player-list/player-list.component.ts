import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Player } from './models';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements AfterViewInit {
  public PLAYERS: Player[] = [
    {
      Name: 'Esben Juul Dalsgaard',
      Initials: 'ESJD',
      Rank: 5,
      Rating: 1025,
    },
    {
      Name: 'Morten Roager Sjælland',
      Initials: 'MORS',
      Rank: 1,
      Rating: 1075,
    },
  ];

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  dataSource = new MatTableDataSource(this.PLAYERS);

  columnsToDisplay = ['Rank', 'Name', 'Initials', 'Rating'];

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  sortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
