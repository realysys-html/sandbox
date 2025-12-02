
(function($){
	$(window).on("load",function(){
		$(".table-scroll, .popup-scroll").mCustomScrollbar();
		$(".search-vhicle-table-inner").mCustomScrollbar({
			scrollbarPosition:"outside",
			axis: "x"
		});
		
		// $("#resizable").resizable();
	});
})(jQuery);

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
	$(".tham-footer .eye").click(function(){
		$(".view-btns button").removeClass('active');
		$(".view-btns button + button").addClass('active');
		$(".view-wrap").hide();
		$('#grid-view').show();
	});
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
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
		//console.log(tab_id);
		$('ul.status-btn-links li').removeClass('current');
		$('.status-tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

	});
	
	$('ul.teamtabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.teamtabs li').removeClass('current');
		$('.teamtab-content').removeClass('current');
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
    var iconmenu = $(".icon-menu").width();
    $(".sidemenu-bar .icon-menu > ul > li > a").click(function(){
    	$('.sidemenu-bar .icon-menu > ul > li > a').removeClass('clicked');
    	$('.sub-menu').animate({
    		left: -100+'%',
    	},500);
    	if( $(this).hasClass('clicked') ){
    		
	    	// $('.sub-menu').animate({
	    	// 	left: -100+'%',
	    	// },500);
    	}else{
    		$(this).addClass('clicked');
    		$(this).next('.sub-menu').animate({
	    		left: iconmenu+2+'px',
	    	},500);
    	}
    });
	
    $('.menu-toggle, .overlay').click(function(){
    	$(this).toggleClass('open');
    	$('.sidemenu-bar .icon-menu > ul > li > a').removeClass('clicked');
    	// $('.sub-menu').animate({
    	// 	left: -150+'%',
    	// },500);
    	if($(this).hasClass('open')){
			$(".overlay").fadeIn(1000);
    		$('.sidemenu-bar').animate({
	    		left: 0,
	    	},500);
    	}else{
			$(".overlay").fadeOut(1000);
    		$('.sidemenu-bar').animate({
	    		left: -150+'%',
	    	},500);
    	}
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
	
	$(".filter-btn").click(function(e){
		$(".filter-box").fadeIn();
		 e.stopPropagation();
	});
	
	$(".filter-box").click(function(e){
		e.stopPropagation();
	});
	
	$(document).click(function(){
		$(".filter-box").fadeOut();
	});
	
	$(".more-options-terget").click(function(ev) {
		$(".dropdown-options").fadeOut();
		$(".sn_dotteddropdown-options").fadeOut();
        $(this).parent().find(".dropdown-options").fadeIn(1000);
		 ev.stopPropagation();
    });
	$(".sn_moreopttion").click(function(e) {
		$(".dropdown-options").fadeOut();
		$(this).parent().next(".sn_dotteddropdown-options").fadeToggle();
	    //$(this).parent().find(".sn_dotteddropdown-options").fadeIn(1000);
	 	e.stopPropagation();
    });

    $(document).click(function(){
		$(".sn_dotteddropdown-options").fadeOut();
	});

	
	$(document).click(function(){
		$(".dropdown-options").fadeOut();
	});
	
	$( function() {
		var dateFormat = "dd/mm/yy",
		  from = $( ".startDate" )
			.datepicker({
			  defaultDate: "+1w",
			  changeMonth: true,
			  changeYear: true,
			  numberOfMonths: 1,
			  dateFormat: 'dd/mm/yy'
			})
			.on( "change", function() {
			  to.datepicker( "option", "minDate", getDate( this ) );
			}),
		  to = $( ".endDate" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			dateFormat: 'dd/mm/yy'
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
		//alert("found it");
		$("ul.tabs li").removeClass('current');
		$(".tab-content").removeClass('current');
		$("ul.tabs li[data-tab='tab-2']").addClass('current');
		$("#tab-2").addClass('current');
	}
	if (window.location.href.indexOf("?data-browser") > -1) {
		//alert("found it");
		$("ul.tabs li").removeClass('current');
		$(".tab-content").removeClass('current');
		$("ul.tabs li[data-tab='tab-3']").addClass('current');
		$("#tab-3").addClass('current');
	}

});


$(window).load(function(){
	$("#page-loader").fadeOut();
	
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

	$(".menu-toggle, .icon-menu").click(function(e){
		e.stopPropagation();
	});
	
	$(document).click(function(){
		$(".menu-toggle").removeClass('open');
		$(".overlay").fadeOut(1000);
		$('.sidemenu-bar').animate({left: -100+'%',},1000);
		$('.sub-menu').animate({left: -100+'%',},1000);
	});
	
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


 //  $('.confirmation-txt').hide();
	// $('.confirmation-btn').click(function(){
	// 	$("#password-popup form").fadeOut();
	// 	$('.confirmation-txt').fadeIn();
	// });
	
	// $(".new-library").click(function(){
	// 	$("#newLibrary-popup").fadeIn();
	// });
	
	// $(".delete-member-btn").click(function(){
	// 	$("#deleteMember-popup").fadeIn();
	// });
	
	// $('.invite-btn').click(function(){
	// 	$("#inviteMember-popup").fadeIn();
	// });
	// $('.add-user-group').click(function(){
	// 	$("#add-user-group-popup").fadeIn();
	// });
	  
	// $(".filter-box .submit-btn").click(function(){
	// 	$("#filter-popup").fadeIn(1000);
	// });
	// $(".popup-inner .close").click(function(){
	// 	$("#filter-popup").fadeOut(1000);
	// });

	// $(".kb_view").click(function(){
	// 	$("#s-popup").fadeIn(1000);
	// });
	// $(".popup-inner .close").click(function(){
	// 	$("#s-popup").fadeOut(1000);
	// });
	
	// $(".role").click(function(){
	// 	$("#admin-popup").fadeIn(1000);
	// });
	// $(".popup-inner .close").click(function(){
	// 	$("#admin-popup").fadeOut(1000);
	// });
	// $(".reset-btn").click(function(){
	// 	$("#password-popup").fadeIn(1000);
	// });
	// $(".popup-inner .close").click(function(){
	// 	$(".defult-popup").fadeOut(1000);
	// });
	
	
	// $(".reset-confirmation-btn").click(function(e) {
	// 	$("#password-popup").fadeOut();
 //        $("#reset-confirm-password-popup").fadeIn();
 //    });
	
	// $("#deleteMember-popup .delete-confirm-yes").click(function(e) {
	// 	$("#deleteMember-popup").fadeOut();
 //        $("#deleted-confirm-popup").fadeIn();
 //    });
	// $("#admin-popup .site-btn").click(function(e) {
	// 	$("#admin-popup").fadeOut();
 //        //$("#changerole-confirm-popup").fadeIn();
 //    });


 //     $(".popup-terget").click(function() {
 //    	var thisAttr = $(this).attr('rel');
	// 	$(".defult-popup").fadeOut();
 //        $("#"+thisAttr).fadeIn();
 //    });
	

	// $(".popup-inner .close").click(function(){
	// 	$(".defult-popup").fadeOut(1000);
	// });


	// $(".defult-popup").on('blur',function(){
	//     $(this).fadeOut(300);
	// });

	// $(".popup-terget, .popup-inner, .dropdown-options ul li a, .popup-triger, #viewprofile-popup").click(function(e){
	// 	// #viewprofile-popup
	// 	e.stopPropagation();
	// });

	// $(document).click(function(){
	// 	$('.defult-popup').fadeOut(1000);
	// });

	//***** All Popup Script End *****//
	
});




$(".enquery-icon").on('mouseover',function(){
	$(this).next('.blue-tooltip').fadeIn(500);
});
$(".enquery-icon").on('mouseleave',function(){
	$(this).next('.blue-tooltip').fadeOut(500);
});