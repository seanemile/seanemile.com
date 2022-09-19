import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  profileColumSize = 2;
  profileRowSize = 2;

  socialsColumSize = 1;
  socialsRowSize = 1;

  projectColumSize = 1;
  projectRowSize = 2;

  article1ColumSize = 2;
  article1RowSize = 1;

  article2ColumSize = 2;
  article2RowSize = 1;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe()
  .subscribe(
    result => {
     if (result) {
        this.profileColumSize = 3;
        this.profileRowSize = 1;

        this.socialsColumSize = 3;
        this.socialsRowSize = 1;

        this.projectColumSize = 3;
        this.projectRowSize = 1;

        this.article1ColumSize = 3;
        this.article1RowSize = 1;

        this.article2ColumSize = 3;
        this.article2RowSize = 1;
      }
    }
    )

  constructor(private breakpointObserver: BreakpointObserver) {}
}
