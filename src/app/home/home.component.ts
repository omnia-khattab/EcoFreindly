import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#carousel_one').owlCarousel(
      {
        margin:20,
        items:4,
        loop:true,
        dots:false,
        nav:true,
        autoHeight:true,
        responsiveClass:true,
        responsive:{
          0:{
              items:1          },
          600:{
              items:3
          },
          1000:{
              items:4,
              
          }
      }
      });

      $('.carousel_two').owlCarousel(
        {
          margin:20,
          items:4,
          loop:true,
          dots:false,
          nav:true,
          autoHeight:true,
          responsiveClass:true,
          responsive:{
            0:{
                items:1          },
            600:{
                items:2,
                margin:3,
            },
            1000:{
                items:3,
            }
            ,
            1100:{
                items:4,
            }
        }
        });
    $('.carousel_three').owlCarousel({
      items:1,
      loop:true,
      responsiveClass:true,
          responsive:{
            0:{
                items:1          },
            600:{
                items:1
            },
            1000:{
                items:1
            }
          }
    });
      /*Filter*/
      
      /*$('#filterOptions li span').click(function() {
          // fetch the class of the clicked item
          var ourClass = $(this).attr('class');
      
          // reset the active class on all the buttons
          $('#filterOptions li').removeClass('active');
          // update the active state on our clicked button
          $(this).parent().addClass('active');
          // hide all elements that don't share ourClass
          $('#nav_list_wrapper').children('div:not(.' + ourClass + ')').hide();
          // show all elements that do share ourClass
          $('#nav_list_wrapper').children('div.' + ourClass).show();
        return false;
      });*/

  }


  
}
