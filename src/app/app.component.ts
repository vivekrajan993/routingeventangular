import { Component } from '@angular/core';
import { Router, Event,NavigationStart, RoutesRecognized, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title:string="appworkd";
     count=0;
  constructor(private router: Router) {
     
 router.events.subscribe((event: Event) =>{
   console.log(event);

  if (event instanceof NavigationStart) {
      // Navigation started.
      console.log(event);

     console.log(event.url);
  }
 else if (event instanceof RoutesRecognized) {
   
      // Router parses the URL and the routes are recognized.
  }
  else if (event instanceof RouteConfigLoadStart) {
  //   console.log(event.route);
  //console.log(event.url);
  console.log(router.url);
  

  this.count++;
  console.log(this.count);
  }
  else if (event instanceof RouteConfigLoadEnd) {
     // Route has been lazy loaded.
       console.log(router.url);

     this.count--;

     console.log(this.count);



  }
   else if (event instanceof NavigationEnd) {
      // Navigation Ended Successfully.
      console.log(event);

       console.log(event.url);
  }
  else if (event instanceof NavigationCancel) {
      // Navigation is canceled as the Route-Guard returned false during navigation.
  }
  else if (event instanceof NavigationError) {
     console.log(event);
      // Navigation fails due to an unexpected error.
        console.log(event.error);
  }
  
});
}

}