/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "Paper Crown",
    "Prom Queen",
    "Good Die Young",
    "Found/Tonight"
    ];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imgs = [
    "https://i.ytimg.com/vi/ppSBq1wmhyM/maxresdefault.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51k2iBm2Y0L._SS500.jpg",
    "https://i.ytimg.com/vi/86gqR7yohZg/sddefault.jpg#404_is_fine",
    "https://i.ytimg.com/vi/2aQykuIaJVI/hqdefault.jpg"
    ];
var artist = [
    "Alec Benjamin",
    "Molly Kate Kestner",
    "Molly Kate Kestner",
    "Lin-Manuel Miranda and Ben Platt"
    ];
var songLengths = [
    "3:21",
    "3:58",
    "3:38",
    "3:13"
    ];
var songLinks=[
    "https://www.youtube.com/watch?v=mzmjdntlRJk",
    "https://www.youtube.com/watch?v=0x03NDSGOTA",
    "https://www.youtube.com/watch?v=2y-Az1IIizQ",
    "https://www.youtube.com/watch?v=2aQykuIaJVI"
    ];    


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
        songs.forEach(function(people){
            $("#songs").append("<p>"  + people  + "</p>");
        });
        imgs.forEach(function(people){
            $("#images").append("<div>" + "<img src='" + people + "'>" + "</div>");
        });
        artist.forEach(function(people){
            $("#artists").append("<p>" + people + "</p>")
        });
        songLengths.forEach(function(people){
            $("#lengths").append("<p>" + people + "</p>")
        });
        songLinks.forEach(function(people){
            $("#links").append("<div>" + "<a href='" + people + "'><img src ='https://xen.com.au/wp-content/uploads/youtube-new-logo.png'></a>" + "</div>")
        });
}

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#links").empty();
    $("#lengths").empty();
    // Use jQuery to empty all of the remaining divs
}

function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    //within button click
    // collect each value of inputs using the id
    // push the values to each array
     imgs.push($("#image").val());
     songs.push($("#song").val());
     artist.push($("#artist").val());
     songLengths.push($("#length").val());
     songLinks.push($("#link").val());

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
