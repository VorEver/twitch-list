var streamList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var live = true;
var dead = true;

$(document).ready(function() {
$("#showLive").on("click",showLive);
$("#showDead").on("click",showDead);
$("#showAll").on("click",showAll);
});
function showLive(){
  live = true;
  dead = false;
  showList();
};
function showDead(){
  live = false;
  dead = true;
  showList();
};
function showAll(){
  live = true;
  dead = true;
  showList();
};
function showList() {
  var entry;
  var which;
  $("#streamers").html("");
  streamList.forEach( function(listing){
    entry = "";
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/'+ listing +'?callback=?', function(stuff) {
      console.log(stuff);
      if(stuff.stream && live) { 
        // we append a listing for a live channel
       	entry = '<div class="streamStuff">';
       	entry += '<h3>' + stuff.stream.channel.display_name + '</h3>';
       	// make it an action item
       	entry += '<a href='+  stuff.stream.channel.url; 
       	entry += ' target="_blank"><h3>' + stuff.stream.game;
       	entry += '</h3></a></div>';
       	$("#streamers").append(entry);
      };
      if(!stuff.stream && dead) {
      	// we append a listing for a dead channel
      	entry = '<div class="streamStuff">';
       	entry += '<h3>' + listing + '</h3>';
       	entry += '<h3>- offline -</h3></div>';
       	$("#streamers").append(entry);
      };
    });
  }
)};
