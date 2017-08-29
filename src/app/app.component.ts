import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {MdSidenav, MdSidenavModule} from '@angular/material';
import {Router} from '@angular/router';


const SMALL_WIDTH_BREAKPOINT = 840;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  constructor(private _router: Router) {
  }

  ngOnInit() {
    // 路由变化之后关闭navbar
    this._router.events.subscribe(() => {
      console.log('event!');
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    })
  }

  isScreenSmall() {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}
