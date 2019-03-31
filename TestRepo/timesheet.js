var cartoonArray = ["HIIT", "KICKBOXING", "PILATES", "CROSSFIT", "YOGA", " WEIGHT TRAINING", "SPINNING", "ZUMBA ", "CALASTHETICS"];
var channelIdArray = ["UCAxW1XT0iEJo0TYlRfn6rYQ","UCa9_TpiSkqYwcr35uh5N7Og","UCBINFWq52ShSgUFEoynfSwg","UCUSI-3qy0rx0b3f-thKqNcA","UCFKE7WVJfvaHW5q283SxchA","UCe0TLA0EsQbE-MjuHXevj2A","UCuTaETsuCOkJ0H_GAztWt0Q","UC4GTYUQEZSQ-28KNX7I0ngw","UCZIIRX8rkNjVpP-oLMHpeDw"]


function createButtons() {
   
   $("#cartoon-view").empty();

   for (var i = 0; i < cartoonArray.length; i++) {

      var movieName = cartoonArray[i];
      var channelId= channelIdArray[i];

      var buttonCreate = $(
         '<button/>',
         {
            class: "cartoonTitle",
            'data-name': movieName,
            'channelId': channelId,
            click: alertMovieName
         }
      );

      buttonCreate.text(movieName);
   
      $("#cartoon-view").append(buttonCreate);

   }

}

$("#add-movie").on("click", function (event) {
   event.preventDefault();

   var movieName = $("#name-input").val().trim();
   cartoonArray.push(movieName);
   createButtons();
   

});

$( document ).ready(function() {
   createButtons();
});


function alertMovieName() {

   $('.images').empty();

   var cartoonTitle = $(this).attr("data-name");
   var channelIdStringForMyQuery= $(this).attr("channelId")

  

   var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&channelId="+channelIdStringForMyQuery+"&q=" + cartoonTitle + "&type=video&key=AIzaSyCRKBaWuXHkfpm1NX2uT2AhcUievnGtH6A";

   //GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=abs&key={YOUR_API_KEY}

   console.log(queryURL);

   $.ajax({
      url: queryURL,
      method: "GET"
   }).then(function (response) {

      console.log(response)

      var dataResults = response.items;

      for (var i = 0; i < dataResults.length; i++) {

         var imgData = dataResults[i];

         var displayGif = $(
            "</iframe>",
            {
               src: imgData.id.videoId,
               width: 300,
               height: 250,
               // 'data-play-url': imgData.images.original.url,
               // click: function() {
               //    var playUrl = $(this).attr("data-play-url");
               //    var currentSrc = $(this).attr("src");
               //    $(this).attr('src', playUrl);
               //    $(this).attr('data-play-url', currentSrc);
               // }
            }
         );


         $(".images").prepend(displayGif);

      }

   });
}