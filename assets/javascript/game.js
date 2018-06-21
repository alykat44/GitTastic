$(function(){
    renderButtons(searchArray,'searchButton','#buttonsArea');
    
})


var searchArray = ["Vanilla Ice Cream", "Chocolate Chip Ice Cream", "Strawberry Ice Cream", "Red Velvet Ice Cream", "Orange Sherbert", "Lemon Ice Cream", "Pistachio Ice Cream"];

//loops through topic array and creates the buttons.
function renderButtons(searchArray,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    for (var i = 0; i < searchArray.length; i++) {
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

//  giphy API
$(document).on('click','.searchButton',function(){
    var type = $(this).data('type');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+
    type+"&api_key=417be88504ad4ce597509bda6982daab&limit=10";
    $.ajax({url: queryURL,method: "GET"})
    .done(function(response) {
        for (var j=0; j<response.data.length; j++) {
            var searchDiv = $('<div class="search-item">');
            var rating = response.data[j].rating;
            var p = $("<p>").text("Rating: " + rating);
            var animated = response.data[j].images.fixed_height.url;
            var still = response.data[j].images.fixed_height_still.url;
            var image = $('<img>');
            image.attr('src',still);
            image.attr('data-still',still);
            image.attr('data-animated',animated);
            image.attr('data-state','still');
            image.addClass('searchImage');
            searchDiv.append(p);
            searchDiv.append(image);
            $("#searches").prepend(searchDiv);
        }
    })
})
  
//Click animation
$(document).on('click','.searchImage',function(){
    var state = $(this).attr('data-state');
    if(state == 'still'){
        $(this).attr('src',$(this).data('animated'));
        $(this).attr('data-state','animated');
    } else {
        $(this).attr('src',$(this).data('still'));
        $(this).attr('data-state','still');
    }
})

// Add button and new input

    $("#addTheme").on("click", function(event) {
    event.preventDefault();
    var topic = $("#addtheme-input").val().trim().
    console.log(trim)
    topics.push(topic)
    renderButtons(topics);

    $("#addtheme-form")[0].reset();

     
    
    
});
