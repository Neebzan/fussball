import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements AfterViewInit, OnInit {
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private playerService: PlayerService
  ) {
    this.playerService.getPlayers();
  }
  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((players) => {
      this.dataSource.data = players;
    });
  }

  dataSource = new MatTableDataSource<Player>();

  columnsToDisplay = ['Name', 'Initials', 'Rating'];

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

  OpenAddPlayerDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerComponent, {});

    dialogRef.afterClosed().subscribe((_) => {
      console.log('dialog closed');
    });
  }
}
