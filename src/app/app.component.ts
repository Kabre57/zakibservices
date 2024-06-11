import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
})
export class AppComponent implements OnInit {
  location: any;
  routerSubscription: any;
  reloading = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.recallJsFuntions();
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  recallJsFuntions() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) { }
    });
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe((event) => {

        // <!--Jquery JS-- >
        this.loadScript("..assets/js/jquery-3.6.0.min.js");
        // < !--Bootstrap JS-- >
        this.loadScript("..assets/js/bootstrap.bundle.min.js");
        //  < !--Gsap -->
        this.loadScript("..assets/js/gsap.min.js");
        this.loadScript("..assets/js/ScrollTrigger.min.js");
        this.loadScript("..assets/js/ScrollSmoother.min.js" );
        this.loadScript("..assets/js/SplitText.min.js" );
        // < !--Swiper Carousel JS-- >
         this.loadScript("..assets/js/swiper-bundle.min.js");
        // < !--Magnific Popup JS-- >
        this.loadScript("..assets/js/jquery.magnific-popup.min.js");
        // < !--Odometer JS-- >
         this.loadScript("..assets/js/odometer.min.js");
         this.loadScript("..assets/js/viewport.jquery.js");
        // < !--Mean menu JS-- >
        this.loadScript("..assets/js/jquery.meanmenu.min.js");
        // < !--Main JS-- >
        this.loadScript("..assets/js/main.js" );

        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        // window.scrollTo(0, 0);
      });
  }

}