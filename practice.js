var scores= [
[4,4,1,4,3,4,4,2,2,3],
[5,1,1,4,5,4,4,4,4,3],
[1,1,1,1,1,1,1,1,4,1],
[5,5,5,5,5,1,5,5,3,5]
]
//console.log(scores);
var differences = [];


var myScore = [1, 2, 3, 5, 3, 2, 1, 2, 5, 5]
//console.log(myScore);

//first we need to loop through the big array (scores) holding the individual arrays
for(i = 0; i < scores.length; i++) {

  //setting a variable to collect the differences between the preexisting values and the values we just collected
  var specificDifference = 0;

    //then we need to loop through individual arrays in scores
    for(var j = 0; j < scores[i].length; j++) {
      //differences.push(myScore[j]-scores[i][j]);
      console.log("myScore[j] is " + myScore[j] + " - " + "scores [i][j] is " + scores[i][j] + " = " + (myScore[j] - scores[i][j]));

      // get the absolute value
      console.log("our positive difference is " + Math.abs(myScore[j] - scores[i][j]))

      //let's add those differences together
      console.log("SpecificDfference is "+specificDifference + " + what we just got " + Math.abs(myScore[j] - scores[i][j]));
      specificDifference += Math.abs(myScore[j] - scores[i][j]);
      console.log("updated difference is " + specificDifference)
      console.log("---------------------------")

      //we want to push the difference to our new array "differences" when the for loop we're inside of is on its last instance
      if (j === (scores[i].length - 1)) {
        differences.push(specificDifference);
        console.log("push the difference");
      }
    }
  console.log("difference total " + specificDifference);
  console.log("***************************");
  console.log("this is the end of an array");
  console.log("***************************");
}
console.log(differences)
console.log(Math.min(...differences));


var lowestNumber = Math.min(...differences);
console.log(lowestNumber);
var indexNumberOfOurFriendMatch = differences.indexOf(lowestNumber);
console.log(indexNumberOfOurFriendMatch);
//

//jQuery.post( url [, data ] [, success ] [, dataType ] )
 //post and get data from the link route API
/*$.post("/api/friends", {
  name: $('#name').val(),
  photo: $('#photo').val(),
  scores: [$('#q0').val(), $('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val()]
}, function() {
});
});
/*$.get("/api/friends", function() {
///loop through friends in the route
      for (i = 0; i < data.length - 1; i++) {
        var matchScore = 0;

      for (x = 0; x < data[i].score.length; j++) {
          var difference = 0;
//console.log(data[i].score.length);
//need the difference between the scores
        difference = data[i].scores[x] - bestFriend.scores[x];
        Math.abs(difference)

        matchScore = matchScore + difference;
//console.log(difference);
    }
    matchArray.push(matchArray);
    console.log(matchArray);
  }
  //    for (b = 0; b < matchArray[b]; < bestFriend) {
  //      if (matchArray[b] < superFriend) {
  //        superFriend = matchArray[b];
        }
      }
    }

      console.log(superFriend);
      console.log("Least matches")
      console.log(matchArray.indexOf(superFriend));
      friend = matchArray.indexOf(superFriend));
      console.log(data[bff].name);
      $('#friendName').append(data[friend].name);
      $('#friendPhoto').attr('src', data[friend].photo);
//need index string comparison

});
  $('superFriendModal').modal("change");
  return false;

//need the location of the url first!
//get and post answers first


//need to compare friends w the user need values, VALUES!! .val
//find the difference for each one
//compare smaller scores and differnces
//compare user with characters
//submit answers
//compare user with the characters scores
*/
