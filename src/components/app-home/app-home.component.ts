import { Component, EventEmitter, OnInit } from '@angular/core';
import { ISlimScrollOptions } from '../../ngx-slimscroll/classes/slimscroll-options.class';
import { SlimScrollEvent } from '../../ngx-slimscroll/classes/slimscroll-event.class';

@Component({
  selector: 'app-home',
  templateUrl: 'app-home.component.html'
})
export class AppHomeComponent implements OnInit {
  options: ISlimScrollOptions;
  imageOptions: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;

  constructor() {
    this.options = {
      barBackground: '#C9C9C9',
      gridBackground: '#D9D9D9',
      barBorderRadius: '10',
      barWidth: '6',
      gridWidth: '2'
    };

    this.imageOptions = {
      barBackground: '#C9C9C9',
      gridBackground: '#D9D9D9',
      barBorderRadius: '10',
      barWidth: '6',
      gridWidth: '2',
      alwaysVisible: false
    };

    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
  }

  ngOnInit() {
    // this.play();
  }

  play(): void {
    let event = new SlimScrollEvent({
      type: 'scrollToBottom',
      duration: 2000,
      easing: 'inOutQuad'
    });

    setTimeout(() => {
      this.scrollEvents.emit(event);

      setTimeout(() => {
        event = new SlimScrollEvent({
          type: 'scrollToTop',
          duration: 3000,
          easing: 'outCubic'
        });

        this.scrollEvents.emit(event);

        setTimeout(() => {
          event = new SlimScrollEvent({
            type: 'scrollToPercent',
            percent: 80,
            duration: 1000,
            easing: 'linear'
          });

          this.scrollEvents.emit(event);

          setTimeout(() => {
            event = new SlimScrollEvent({
              type: 'scrollTo',
              y: 200,
              duration: 4000,
              easing: 'inOutQuint'
            });

            this.scrollEvents.emit(event);
          }, 2000);
        }, 4000);
      }, 3000);
    }, 3000);
  }
}
