import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  /** Based on the screen size, switch from standard to one column per row */
  destroyed = new Subject<void>();

  profileColumSize = 2;
  profileRowSize = 1;

  socialsColumSize = 2;
  socialsRowSize = 1;

  projectColumSize = 2;
  projectRowSize = 1;

  article1ColumSize = 2;
  article1RowSize = 1;

  article2ColumSize = 2;
  article2RowSize = 1;


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

             this.socialsColumSize = 4;
             this.socialsRowSize = 1;

             this.projectColumSize = 4;
             this.projectRowSize = 1;

             this.article1ColumSize = 4;
             this.article1RowSize = 1;

             this.article2ColumSize = 4;
             this.article2RowSize = 1;

          }else if (query  === "(min-width: 600px) and (max-width: 959.98px)"){

             this.profileColumSize = 4;
             this.profileRowSize = 2;

             this.socialsColumSize = 2;
             this.socialsRowSize = 1;

             this.projectColumSize = 2;
             this.projectRowSize = 1;

             this.article1ColumSize = 4;
             this.article1RowSize = 1;

             this.article2ColumSize = 4;
             this.article2RowSize = 1;


          } else if(query  === "(min-width: 960px) and (max-width: 1279.98px)"){

             this.profileColumSize = 3;
             this.profileRowSize = 2;

             this.socialsColumSize = 1;
             this.socialsRowSize = 1;

             this.projectColumSize = 1;
             this.projectRowSize = 1;

             this.article1ColumSize = 2;
             this.article1RowSize = 1;

             this.article2ColumSize = 2;
             this.article2RowSize = 1;

          } else if(query  === "(min-width: 1280px) and (max-width: 1919.98px)"){

             this.profileColumSize = 3;
             this.profileRowSize = 2;

             this.socialsColumSize = 1;
             this.socialsRowSize = 1;

             this.projectColumSize = 1;
             this.projectRowSize = 1;

             this.article1ColumSize = 3;
             this.article1RowSize = 1;

             this.article2ColumSize = 3;
             this.article2RowSize = 1;

          } else if(query  === "(min-width: 1920px)"){

             this.profileColumSize = 3;
             this.profileRowSize = 2;

             this.socialsColumSize = 1;
             this.socialsRowSize = 1;

             this.projectColumSize = 1;
             this.projectRowSize = 1;

             this.article1ColumSize = 3;
             this.article1RowSize = 1;

             this.article2ColumSize = 3;
             this.article2RowSize = 1;

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
