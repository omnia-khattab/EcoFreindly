import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*$(window).scroll(function(){
      let scroll = $(window).scrollTop();
      let headerOffset=$(".navbar").height();
      let screenWidth=screen.width;
      /*first if condition to make the logo color black for mobile view
      if(screenWidth>800){ 
          if(scroll>headerOffset){
              $(".navbar").css("background-color","#fff");
              $(".navbar .navbar-brand img").css("filter", "invert(0%)");
              $(".navbar .nav-item a").css("color","#5D6162");
          }
          else{
              $(".navbar").css("background-color","transparent");
              $(".navbar .navbar-brand img").css("filter", "invert(100%)");
              $(".navbar .nav-item a").css("color","#fff");
          }
        }
        
        else{
          /*remove the filter to return the logo to black
          $(".navbar .navbar-brand img").css("filter", "invert(0%)");
        }
      
  });*/
  }
    

}
