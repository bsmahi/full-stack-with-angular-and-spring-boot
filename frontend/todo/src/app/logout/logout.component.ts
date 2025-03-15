import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css'],
    standalone: true
})
export class LogoutComponent implements OnInit {
  private hardcodedAuthenticationService = inject(HardcodedAuthenticationService);


  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}
