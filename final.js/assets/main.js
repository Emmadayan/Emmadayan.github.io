window.addEventListener('DOMContentLoaded', function(){

    attachEvents();

    
    $.getJSON( "http://localhost:3000/photos", function( data ) {

        data.map(function(val, i) {
            $('.gallery').append(`<a class="carousel-item" href="${val.href}"><img src="${val.url}"></a>`);
        })
        
        // $( "<ul/>", {
        //   "class": "my-new-list",
        //   html: items.join( "" )
        // }).appendTo( "body" );
        $
      });

    var navOffset = $('ul').offset().top-50;

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();

        // console.log(scrollPos); 
        
        var stickNav = $("ul");
			stickyMenu(stickNav);

			var stickMenu = $(".menubar");
			stickyMenu(stickMenu);


			function stickyMenu(stick){
				if(scrollPos>= navOffset){
						stick.addClass("fixed");
					}
				
				else{
					stick.removeClass("fixed");
				}

			}	


    var links = [$(".link1"),$(".link2"),$(".link3")];

    var linkOne = $("#linkOne").offset().top-30;
    var linkTwo = $("#linkTwo").offset().top-30;
    var linkThree = $("#linkThree").offset().top-30;

    });

});


function addLinks(parent){
// `<img src="${josn.pant}"/>`
	parent.innerHTML += "<a href = '#home'>HOME</a>";
	parent.innerHTML += "<a href = '#linkOne'>LINK 1</a>"; 
	parent.innerHTML += "<a href = '#linkTwo'>LINK 2</a>";
	parent.innerHTML += "<a href = '#linkThree'>LINK 3</a>";

}

function attachEvents(){

    $('a').click(function() {


       var myTarget = $(this.hash);
       myTarget = myTarget.length && myTarget
                
      var targetOffset = myTarget.offset().top;
         $('html,body').animate({scrollTop: targetOffset}, 1000);

   });

}