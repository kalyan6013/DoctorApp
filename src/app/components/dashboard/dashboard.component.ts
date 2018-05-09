import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
declare const $;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user={
    qualification:'',
    specialization:'',
    email:'',
    phone:'',
    

}

constructor() { }

  ngOnInit() {
    function timectrl($scope) {
      $scope.time = new Date();
  }
  
    
    // $('.continue').click(function(){
    //   $('.nav-tabs > .active').next('li').find('a').trigger('click');
    // });
    // $('.back').click(function(){
    //   $('.nav-tabs > .active').prev('li').find('a').trigger('click');
    // });
    console.log('Hello World!');

  }
  
}
