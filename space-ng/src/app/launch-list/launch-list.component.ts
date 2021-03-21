import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {
pastLaunches$;
  constructor(private pastLaunchesService: PastLaunchesListGQL) {
    this.pastLaunches$ = this.pastLaunchesService
    .fetch({limit: 1000})
    .pipe(
      map(
        res => res.data.launchesPast
      )
    )
   }

  ngOnInit(): void {
  }

}
