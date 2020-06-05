import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart, RoutesRecognized, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd, NavigationCancel, NavigationError, GuardsCheckStart, GuardsCheckEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
constructor(private router:Router,private route: ActivatedRoute) { 
  // router.events.subscribe((event: Event) =>{
  //   if (event instanceof NavigationStart) {
  //       // Navigation started.
  //       debugger
  //      console.log('naivgationstart',event.url);
  //   }
  //  else if (event instanceof RoutesRecognized) {
  //   console.log('RoutesRecognized',event.url);

  //       // Router parses the URL and the routes are recognized.
  //   }
  //   else if (event instanceof RouteConfigLoadStart) {
  //      // Before the Router lazyloads a route configuration.
  //   }
  //   else if (event instanceof RouteConfigLoadEnd) {
  //      // Route has been lazy loaded.
  //   }
  //    else if (event instanceof NavigationEnd) {
  //       // Navigation Ended Successfully.
  //        console.log('navigationend',event.url);
  //   }
  //   else if (event instanceof NavigationCancel) {
  //     console.log('navigationcancel',event.url);

  //       // Navigation is canceled as the Route-Guard returned false during navigation.
  //   }
  //   else if (event instanceof GuardsCheckStart) {
  //     console.log('GuardsCheckStart',event.url);
  
  //         // Router parses the URL and the routes are recognized.
  //     }
  //     else if (event instanceof GuardsCheckEnd) {
  //       console.log('GuardsCheckEnd',event.url);
    
  //           // Router parses the URL and the routes are recognized.
  //       }
  //   else if (event instanceof NavigationError) {
  //       // Navigation fails due to an unexpected error.
  //         console.log(event.error);
  //   }

  // });
}
  
  ngOnInit() {
    this.data = this.route.snapshot.data;

  }
  gotoStudentList(){  
    this.router.navigate(['demo']);  
  }  
}
