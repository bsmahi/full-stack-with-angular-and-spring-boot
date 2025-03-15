import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class MenuComponent implements OnInit {
  hardcodedAuthenticationService = inject(HardcodedAuthenticationService);


  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
