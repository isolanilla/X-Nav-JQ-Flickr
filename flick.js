$(document).ready(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";


  $.getJSON(flickerAPI, {
		tags: "fuenlabrada",
		tagmode: "any",
		format: "json"
    })

  .done(function(data) {
			$.each(data.items, function(i, item) {
				$("<img>").attr("src", item.media.m).appendTo("#images");

			});
    });
    
   $("#send").click(function(event) {

		$.getJSON(flickerAPI, {
		tags: $("#input").val();,
		tagmode: "any",
		format: "json"
    	})
		.done(function(data) {
			$.each(data.items, function(i, item) {
				$("<img>").attr("src", item.media.m).appendTo("#images");

			});
		}); 
   });
});
