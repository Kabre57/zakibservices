import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import lottie from 'lottie-web';
import { filter } from 'rxjs/operators';

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
    this.loadScript('assets/js/jquery.min.js');
    this.loadScript('assets/js/bootstrap.min.js');
    this.loadScript('assets/js/jquery.nice-select.min.js');
    this.loadScript('assets/js/jquery.fancybox.js');
    this.loadScript('assets/js/isotope.js');
    this.loadScript('assets/js/appear.js');
    this.loadScript('assets/js/wow.js');
    this.loadScript('assets/js/TweenMax.min.js');
    this.loadScript('assets/js/swiper.min.js');
    this.loadScript('assets/js/jquery.ajaxchimp.min.js');
    this.loadScript('assets/js/parallax-scroll.js');
    this.loadScript('assets/js/jquery-ui-1.9.2.custom.min.js');
    
    this.loadScript('assets/js/odometer.min.js');
    this.loadScript('assets/js/script.js');


    this.loadAnimation();
    this.loadCustomScripts();
  }

  public loadScript(url: string) {
    const body = document.getElementsByTagName('body')[0];
    const script = document.createElement('script');
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  loadAnimation() {
    const animationContainer = document.getElementById('animationContainer');
    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animation.json'
      });
    }
  }

  recallJsFuntions() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) { }
    });
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe((event) => {
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        //    window.scrollTo(0, 0);
      });
  }

  loadCustomScripts() {
    // Code JavaScript personnalisé ici
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        const movetopElement = document.getElementById('movetop');
        if (movetopElement) {
          movetopElement.style.display = 'block';
        }
      } else {
        const movetopElement = document.getElementById('movetop');
        if (movetopElement) {
          movetopElement.style.display = 'none';
        }
      }
    }
    // Ajoutez ici les autres scripts personnalisés que vous souhaitez exécuter
    window.addEventListener('scroll', scrollFunction);
  }
}