import { WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
//package com.in28minutes.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit, inject } from '@angular/core';//'./app.component';

//import { AppComponent } from '../app.component';

//@ComponentScan(
//      value = "com.in28minutes.springboot.web")
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    standalone: true,
    imports: [RouterLink]
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(WelcomeDataService);


  message = 'Some Welcome Message'
  welcomeMessageFromService: string = ''
  name = ''

  // void init() {
  ngOnInit() {
    //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }


  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error: any) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }
}

export class Class1 {

}

export class Class2 {

}