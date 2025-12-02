$( function() {
    $( document ).tooltip({
    	// position: {
      //   my: "left top",
      //   at: "right+5 top-5",
      //   collision: "none"
      // },
    	//trigger: 'click'
    	items: '[data-tooltip]', // Targets elements with data-tooltip attribute
	    content: function() {
	        return $(this).data('tooltip');
	    },
      track: true
    });
  });


$(".new-table-search-ui .search-filter .form-ctrol").keyup(function(){
	
	if($(this).val().length > 1){
		console.log('sd');
		$(".new-table-search-ui .search-filter .in-go").addClass('active');
	}else{
		$(".new-table-search-ui .search-filter .in-go").removeClass('active');
	}

});


$( function() {
	    $( ".datepicker" ).datepicker({
	      showOn: "button",
	      buttonImage: "assets/images/calendar.svg",
	      buttonImageOnly: false,
	      buttonText: "Select date",
	      dateFormat: 'dd-mm-yy'
	    });
	  } );
$(".more-options-terget").on("click", function(ev) {
	console.log('clicked');
	$(".dropdown-options").fadeOut();
	$(".sn_dotteddropdown-options").fadeOut();
    $(this).parent().find(".dropdown-options").fadeIn(1000);
	 ev.stopPropagation();
});

/*$(".popup-btn").click(function(){
		var attr = $(this).attr('rel');
		$("#"+attr).fadeIn();
	});*/

jQuery(".popup-btn").on('click',function(){
	$(".defult-popup").fadeOut(1000);
	var rel=jQuery(this).attr('rel');
	jQuery("#"+rel).fadeIn();
});

$(".popup-inner .close, .close-btn").click(function(){
	$(".defult-popup").fadeOut(1000);
});


//body scroll off for popup 

$(document).ready(function() {


  toggleBodyClass();

  setInterval(toggleBodyClass, 100);

  function toggleBodyClass() {
    if ($('.defult-popup').is(':visible')) {
      $('body').addClass('no_scroll_body');
    } else {
      $('body').removeClass('no_scroll_body');
    }
  }

});




// 


(function($){
	$(window).on("load",function(){

		$(".CustomCategoryScroll").mCustomScrollbar(); 
		$(".CustomChildCategoryScroll").mCustomScrollbar();

		$(".table-scroll, .popup-scroll").mCustomScrollbar();
		/*$(".search-vhicle-table-inner").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "x"
		});*/





		$(".fixedScroll").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "x"
		});

	

		

		/*$(".destroyScroll").mCustomScrollbar('destroy');*/

		$(".data-browser-table-wrap-scroll").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "x"
		});


		$(".material-management-table, .vertical-scroll").mCustomScrollbar({
			axis:"x",
		});

		$(".more-filter-popup .popup-inner").mCustomScrollbar({
			axis:"y",
		});
		
		$(".chnage_role_scroll .popup-inner").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "y"
		});	

		$(".revelidation_popup_inner").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "y"
		});

	

		$(".asset-revelidation-scroll").mCustomScrollbar({
			// scrollbarPosition:"outside",
			axis:"x",
		});	

			$(".inspection-elements-scroll").mCustomScrollbar({
			// scrollbarPosition:"outside",
			axis:"x",
		});	

   $(".certification-provider-scroll").mCustomScrollbar({
			// scrollbarPosition:"outside",
			axis:"x",
		});	

    $(".documents-table-scroll").mCustomScrollbar({
			// scrollbarPosition:"outside",
			axis:"x",
		});	

		$(".userBox").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis:"x",
		});	

		// $(".sn-class .popup-inner").mCustomScrollbar({
		// 	scrollbarPosition:"outside",
		// 	axis:"y",
		//  });	

	 });
})(jQuery);

if($(window).width() <= 1200){	
	$('.tab_menu  i').click( function(e){
		$(this).toggleClass('active');
		$(this).next('ul').toggleClass('active');
		e.stopPropagation();
	})
	$('.tab_menu ul').click( function(e){
		e.stopPropagation();
	})
	$(document).click(function(){
		$('.tab_menu ul, .tab_menu  i').removeClass('active');
	});

}



 // (function($){
 //        $(window).on("load",function(){
 //          $(".asset-register-popup-scroll-content").mCustomScrollbar();
          
 //        });
 //      })(jQuery);





// if($(window).width() > 1780){
// $(".sn-class").mCustomScrollbar({
// 			scrollbarPosition:"outside",
// 			axis: "y"
// 		});	
// }


if($(window).width() > 1780){
$(".asset-register-popup-scroll-content").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "y"
		});	
}


if($(window).width() > 1280){
$(".sn_tablink_scroll").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "x"
		});	
}

if($(window).width() < 1281){
$(".add-regime-inner").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "y"
		});	
}

if($(window).width() < 1281){
	$(".edit-regime-inner").mCustomScrollbar({
				scrollbarPosition:"outside",
				axis: "y"
			});	
	}





if($(window).width() < 1504){
$(".xyz-scroll").mCustomScrollbar({
			// scrollbarPosition:"outside",
			axis: "x"
		});	
}




if($(window).width() < 768){
	$(".fm-add-scan-popup-inner, .edit-new-scan").mCustomScrollbar({
				scrollbarPosition:"outside",
				axis: "y"
			});	
	}


if($(window).width() < 768){
	$(".advance-filter-inspection-scroll-content").mCustomScrollbar({
				scrollbarPosition:"outside",
				axis: "y"
			});	
	}




if($(window).width() > 700){
	$(".add-job-management-scroll ").mCustomScrollbar({
		axis: "y"
	});	
}

if($(window)){
	$("#add-assets-popup .popup-inner , #edit-assets-popup .popup-inner").mCustomScrollbar({
		axis: "y"
	});	
}







$(document).ready(function(){
	$(".rolr-popup-terget").click(function(){
		var attr = $(this).attr('rel');
		$("#"+attr).fadeIn();
	});
	$(function() {
		$('#chkveg').multiselect({
			includeSelectAllOption: true,
		});
	});
	
	$(".checkbox-select").click(function(){
		$(this).text($('#chkveg').val())
		$(".multiselect-native-select").toggleClass('show');
	});
	
	$('.assign-form-page').click(function(e){
	    $('#assign-table').show();
		$('.team-table').hide();
	     e.stopPropagation();
	});
	
	$("#assign-table").click(function(e){
		e.stopPropagation();
	});
	
	$(document).click(function(){
		$("#assign-table").hide();
		$('.team-table').show();
	});
	
	 $('.demo-pie-3').pieChart({
		barColor: '#42b1f5',
		trackColor: '#ebebeb',
		lineCap: 'square',
		lineWidth: 20,
		onStep: function (from, to, percent) {
			$(this.element).find('.pie-value').text(Math.round(percent) + '%');
		}
	});
	var scrolled=0;
    $(".scroll-down").on("click" ,function(){
		scrolled=scrolled+300;
		$(".settings-options").animate({
			scrollTop:  scrolled
	   });
	});
	$(".settings-left .settings-options a").click(function(){
		$(".settings-options a").removeClass('active');
		$(this).addClass('active');
		var attibute = $(this).attr('rel');
		$(".settings-forms").hide();
		$('#'+attibute).show();
	});
	
	$(".sn_role_details .settings-options ul li a").click(function(){
		$(".sn_role_details .settings-options ul li a").parent().removeClass('active');
		$(this).parent().addClass('active');
	});
	

	$(".view-btns button").click(function(){
		var attibute = $(this).attr('rel');
		$(".view-wrap").hide();
		$('#'+attibute).show();
		$('.'+attibute).show();
	});
	
	/*$('ul.tabs li.tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li.tab-link').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});*/
	
	$('ul.sn_tab li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.sn_tab li').removeClass('current');
		$('.sn_form_tab').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	$('ul.sn_dashboard_tab li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.sn_dashboard_tab li').removeClass('current');
		$('.sn_form_dashboard_tab').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	
	$('ul.libray-tablinks li').click(function(){
		var tab_id = $(this).attr('data-libray');
		$('ul.libray-tablinks li').removeClass('current');
		$('.librayTab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('ul.status-btn-links li').click(function(){
		var tab_id = $(this).attr('data-status');

		if(tab_id == 'status-tab-1'){$(".view-btns").fadeIn();}else{$(".view-btns").fadeOut();}

		$('ul.status-btn-links li').removeClass('current');
		$('.status-tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

	});
	
	$('.dropdown-options ul li a').click(function(){
		var tab_id = $(this).attr('data-status');
		$('ul.status-btn-links li').removeClass('current');
		$('.status-tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

	});
	
	$(".duration-btns button").click(function(e) {
		$(".duration-btns button").removeClass('active');
        $(this).addClass('active');
    });
	$(".view-btns button").click(function(e) {
		$(".view-btns button").removeClass('active');
        $(this).addClass('active');
    });
    

    $(".accodian-icon").click(function(e){
		var targetrow = $(this).parent().parent().closest('tr').next('.children');
		$(this).toggleClass('open');
		if($(this).parent().parent().hasClass('open')){
			console.log( 'if' );
			$(this).parent().parent().removeClass('open');
				targetrow.find('.collasp-div').slideUp('slow', function(){
			});
		}else{
			console.log( 'else' );
			$(this).parent().parent().addClass('open');
			targetrow.show().find('.collasp-div').slideDown('slow', function(){
			  if (!$(this).is(':visible')) {
				targetrow.hide();
			  }
			});
		}
    });
	
	$(".filter-box").click(function(e){
		e.stopPropagation();
	});

	$(document).click(function(){
		$(".filter-box").fadeOut();
	});

	$(".sn_moreopttion").click(function(e) {
		$(".dropdown-options").fadeOut();
		$(this).parent().next(".sn_dotteddropdown-options").fadeToggle();
	 	e.stopPropagation();
    });

    $(document).click(function(){
		$(".sn_dotteddropdown-options").fadeOut();
	});

	
	$(document).click(function(){
		$(".dropdown-options").fadeOut();
	});
	
	$( function() {
		var dateFormat = "dd-mm-yy",
		  from = $( ".startDate" )
			.datepicker({
			  changeMonth: true,
			  changeYear: true,
			  numberOfMonths: 1,
			  maxDate: '0',
			  dateFormat: 'dd-mm-yy'
			})
			.on( "change", function() {
			  to.datepicker( "option", "minDate", getDate( this ) );
			}),
		  to = $( ".endDate" ).datepicker({
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			maxDate: '0',
			dateFormat: 'dd-mm-yy'
		  })
		  .on( "change", function() {
			from.datepicker( "option", "maxDate", getDate( this ) );
		  });
	 
		function getDate( element ) {
		  var date;
		  try {
			date = $.datepicker.parseDate( dateFormat, element.value );
		  } catch( error ) {
			date = null;
		  }
	 
		  return date;
		}
	  });

	$(".file-tree").filetree();
	
	$(".slideLeft-btn").click(function() {
		$(this).toggleClass('active-slide');
        $(".welcome-sidebar").toggleClass('slide-out');
        $("main").toggleClass('sidebar_on');
		$(".left-contentbar, .dashbord-footer").toggleClass('slide-in');
    });
	
	  $(function() {
		$('#current_emails').text($('#invite_email').val());
		$('#invite_email').multiple_emails();
		$('#invite_email').change( function(){
			$('#current_emails').text($(this).val());
		});
	});

	$(function() {
		$('#current_emails').text($('.invite_email').val());
		$('.invite_email').multiple_emails();
		$('.invite_email').change( function(){
			$('#current_emails').text($(this).val());
		});
	});
	
	if (window.location.href.indexOf("?incoming-data") > -1) {
		$("ul.tabs li").removeClass('current');
		$(".tab-content").removeClass('current');
		$("ul.tabs li[data-tab='tab-2']").addClass('current');
		$("#tab-2").addClass('current');
	}
	if (window.location.href.indexOf("?data-browser") > -1) {
		$("ul.tabs li").removeClass('current');
		$(".tab-content").removeClass('current');
		$("ul.tabs li[data-tab='tab-3']").addClass('current');
		$("#tab-3").addClass('current');
	}
});


$(window).load(function(){
	$("#page-loader").fadeOut();
	//$("#popup-middle-loader").fadeOut();

	var iconmenu = $(".icon-menu").width();
	var sidebarmenu = $('.sidemenu-bar').width();
	$('.sub-menu').css('min-width',sidebarmenu - iconmenu-5 +'px');
	var windowwidth= $(window).width();
	if(	windowwidth < 1281 ){
		$('.tham-box-wrap .tham-box').each(function(index) {
			$(this).find('.status ul li').each(function(intIndex) {
				var imgsrc = $(this).children('img').attr('src');
				var imgsrc = imgsrc.replace('-icon','-icon-2x');
				$(this).children('img').attr('src',imgsrc);
            });
        });
	}
	
});

$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });

  //***** All Popup Script *****//

	$(".popup-inner .close").click(function(){
	$("#filter-popup").fadeOut(1000);
	});

	 $(".popup-inner .close").click(function(){
		$("#admin-popup").fadeOut(1000);
	 });

	//***** All Popup Script End *****//
	
});

function showTooltip (area) {
	$(area).fadeIn(500);
}
function hideTooltip (area) {
	$(area).fadeOut(500);
}



$(".sidemenu-bar .icon-menu > ul > li > a").click(function(){
	$('.sidemenu-bar .icon-menu > ul > li > a').removeClass('clicked');
	$(".sub-menu").removeClass('slide-in');
	if( $(this).hasClass('clicked') ){
    	$(this).next(".sub-menu").addClass('slide-in');
	}else{
		$(this).addClass('clicked');
		$(this).next(".sub-menu").addClass('slide-in');
	}
});


$(".sidemenu-bar .icon-menu > ul > li > ul > li > a").click(function(){

	$(this).toggleClass( "showed" );
	$(this).next(".sub-menu").slideToggle("slow");
	
	// if( $(this).hasClass('clicked') ){
	// 		$(this).removeClass('clicked');
  //   	$(this).next(".sub-menu").slideUp();
	// }else{
	// 	$(this).addClass('clicked');
	// 	$(this).next(".sub-menu").slideDown();
	// }
});

$('.menu-toggle').click(function(){
	$(".menu-toggle").toggleClass('open');
	$(".sidemenu-bar").toggleClass('slide-in');
	$(".sub-menu").removeClass('slide-in');
	$('.sidemenu-bar .icon-menu > ul > li > a').removeClass('clicked');
	if($(this).hasClass('open')){
		$(".overlay").fadeIn(1000);
	}else{
		$(".overlay").fadeOut(1000);
	}
});

$(".overlay").click(function(){
	$(".menu-toggle").removeClass('open');
	$(".sidemenu-bar").removeClass('slide-in');
	$(".sub-menu").removeClass('slide-in');
	$('.sidemenu-bar .icon-menu > ul > li > a').removeClass('clicked');
	$(this).fadeOut(1000);
});

$(".nfc-input-group .append-group").on("click", function(){
	$(this).addClass('on');
});
$(".select-group select").click(function(){
	$(this).toggleClass('on');
});

$(document).ready(function () {
  jQuery('.status ul li span:contains("Closed")').parent().addClass('closed-issue');
  jQuery('.status ul li span:contains("Issue Open")').parent().addClass('open-issue');
  jQuery('.status ul li span:contains("Defected Rectified")').parent().addClass('defected_rectified');
});


//--script for storage
$(".storage-hit").click(function(){
    $("#buy-more-storage").fadeOut(1000);
    $(".storage-dtl").fadeIn(1000);
    $(".new-use-box").fadeOut(1000);
});
$("#Storage-successfully, .invite-popup .close").click(function(){
    $("#buy-more-storage").fadeOut(1000);
    $(".storage-dtl").fadeOut(1000);
    $(".new-use-box").fadeIn(1000);
});
//--script for License
$(".Licenses-hit").click(function(){
    $("#buy-more-licenses").fadeOut(1000);
    $(".license-dtl").fadeIn(1000);
    $(".new-use-box").fadeOut(1000);
});
$("#Licenses-successfully, .invite-popup .close").click(function(){
    $("#buy-more-licenses").fadeOut(1000);
    $(".license-dtl").fadeOut(1000);
    $(".new-use-box").fadeIn(1000);
});
$(".dtl-cancel").click(function(){
    $(".storage-dtl").fadeOut(1000);
    $(".license-dtl").fadeOut(1000);
    $(".new-use-box").fadeIn(1000);
});
//-------------ens-script----

//----------Strat script for---site, meterial, job management-----


$('.cancel-jobs').click(function(){
	$('.add-jobs-mange').fadeOut('slow');
})

$('.cancel-jobs-edit').click(function(){
	$('.edit-job-mange').fadeOut('slow');
})

$('.cancel-site-management').click(function(){
	$('.add-site-mange').fadeOut('slow');  
})
$('.cancel-add-mete').click(function(){
	$('.add-materialt').fadeOut('slow');  
})
$('.cancel-edit-mate').click(function(){
	$('.edit-materialt').fadeOut('slow');  
})

if($(window).width() <= 1025){
	$(".job-manager-table-inner").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis: "x"
	});
	$(".job-manager-table-inner").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis: "x"
	});
	$(".user_table_scroll").mCustomScrollbar({
		axis:"x",
	});	
}
if($(window).width() <= 800){	
	$(".material-management-table-inner").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis: "x"
	});
	$(".parent_pdf_scroller .popup-inner").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis:"xy",
	});	
}

if($(window).width() <= 700){	
	$(".add-jobs-mange .popup-inner").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis: "y"
	});
}
if($(window).width() <= 600){	
	$(".add-materialt-inner").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis: "x"
	});
	
	$("#fullpage").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis: "xy"
	});
}

if($(window).width() <= 500){	
	$("#add_address_management .add-site-management-inner, #edit_address_management .add-site-management-inner").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis: "y"
	});
}

if($(window).width() <= 1600){	
	$("#edit_vehicle_popup .popup-inner, #add_vehicle_popup .popup-inner").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis: "y"
	});
	
}
(function($){
	$(window).on("load",function(){
		$(".site-manager-table-inner").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "x"
		});
	});
	
	$(".job-popup-table-inner").mCustomScrollbar({
		scrollbarPosition:"outside",
		axis: "x"
	});
	$( "#date" ).datepicker({
		dateFormat: 'dd-mm-yy',
		maxDate: 0
	});
	$( "#dateSelect" ).datepicker({
		dateFormat: 'dd-mm-yy',
		maxDate: 0
	});
	$( "#dateSelectOne" ).datepicker({
		dateFormat: 'dd-mm-yy',
		maxDate: 0
	});
	$( "#dateSelectTwo" ).datepicker({
		dateFormat: 'dd-mm-yy',
		maxDate: 0
	});
	$( "#dateSelectThree" ).datepicker({
		dateFormat: 'dd-mm-yy',
		maxDate: 0
	});
	$( "#dateSelectFour" ).datepicker({
		dateFormat: 'dd-mm-yy',
		maxDate: 0
	});
	$( "#dateSelectFive" ).datepicker({
		dateFormat: 'dd-mm-yy',
		maxDate: 0
	});
	$( "#editSupplydate" ).datepicker({
		dateFormat: 'dd-mm-yy',
		maxDate: 0
	});
	$( "#submit_date" ).datepicker({
		dateFormat: 'dd-mm-yy',
		minDate: 0
	});
	$( "#edit_submit_date" ).datepicker({
		dateFormat: 'dd-mm-yy',
		minDate: 0
	});
	$( "#copy_submit_date" ).datepicker({
		dateFormat: 'dd-mm-yy',
		minDate: 0
	});

})(jQuery);

$( function() {
    $( ".has-date-pic2" ).datepicker({
		dateFormat: 'dd-mm-yy',
	});
} );

$(".rivised-dropdwn-arrow").click(function(){
    	$(this).toggleClass('open');
    	$(this).parent().parent().parent().next("tr").find('.collasp-div-child').slideToggle();
    });
//----------end script for---site, meterial, job management-----

$('.slider-single').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: false,
 	fade: false,
 	adaptiveHeight: true,
 	infinite: true,
 	initialSlide:4,
	useTransform: true,
 	speed: 400,
 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 	draggable:false
 });

 $('.slider-nav')
 	.on('init', function(event, slick) {
 		$('.slider-nav .slick-slide.slick-current').addClass('is-active');
 	})
 	.slick({
		  centerMode: true,
		  centerPadding: '60px',
		  slidesToShow: 9,
		  initialSlide:4,
		  infinite: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 9
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
 	});



 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
 	$('.slider-nav').slick('slickGoTo', currentSlide);
 	var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
 	$('.slider-nav .slick-slide.is-active').removeClass('is-active');
 	$(currrentNavSlideElem).addClass('is-active');
 });


 $('.slider-nav').on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	var goToSingleSlide = $(this).data('slick-index');

 	$('.slider-single').slick('slickGoTo', goToSingleSlide);
 });

//  responsive tab menu

$('.responsive-menu-button').click(function() {
	$('.responsive-tab-menu').toggleClass('active'); 
  });





