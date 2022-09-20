import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnDestroy {
  /** Based on the screen size, switch from standard to one column per row */
  destroyed = new Subject<void>();

  profileColumSize = 4;
  profileRowSize = 1;


  constructor(private breakpointObserver: BreakpointObserver) {
  this.breakpointObserver.observe(
    [
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]
    )
    .pipe(takeUntil(this.destroyed))
    .subscribe(results => {
      console.log(results);
    for (const query of Object.keys(results.breakpoints)) {
        if (results.breakpoints[query]){
          if(query === "(max-width: 599.98px)"){
             this.profileColumSize = 4;
             this.profileRowSize = 1;

          }else if (query  === "(min-width: 600px) and (max-width: 959.98px)"){

             this.profileColumSize = 2;
             this.profileRowSize = 1;

          } else if(query  === "(min-width: 960px) and (max-width: 1279.98px)"){

             this.profileColumSize = 1;
             this.profileRowSize = 1;

          } else if(query  === "(min-width: 1280px) and (max-width: 1919.98px)"){

             this.profileColumSize = 1;
             this.profileRowSize = 1;

          } else if(query  === "(min-width: 1920px)"){

             this.profileColumSize = 1;
             this.profileRowSize = 1;

          }
        }
        }
    })
  }


  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
