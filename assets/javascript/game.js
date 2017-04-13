$(document).ready(function(){
		
		var targetscore = 0;
		var valueArray = new Array(4);	
		var randomcrystalvalue = 0;
		var totalscore = 0;
		var wins = 0;
		var losses = 0;
		var gamenbr = 0;

		function gamestart() {
			
			gamenbr = gamenbr + 1;
			
			targetscore = Math.floor(Math.random()*(129-19+1)+19);

			$("#random-number").html(targetscore);

			totalscore = 0;
			$("#totalscore").html(totalscore);

			for (var i = 0; i < 4; i++) {
				//sometimes the numbers generated may cause a no-win situation.
				valueArray[i] = Math.floor(Math.random()*(12-1+1)+1);
			}
			
			alert("Game " + gamenbr );
		}
		
		gamestart();

		$(".imgbutton_container button").click(function() {
        var index = $(this).parent().children().length - $(this).nextAll().length;
        console.log(index);
        console.log ($(this).attr('id'));
        index = index - 1;
        totalscore = totalscore + valueArray[index];
		$("#totalscore").html(totalscore);
		if (totalscore == targetscore) {
			wins = wins + 1;
			$("#wins").html("wins : " + wins);
			alert("Great - You Win");
			gamestart();
		} else if (totalscore > targetscore) {
			losses = losses + 1;
			$("#losses").html("losses : " + losses);
			alert("Sorry - You Lost. Better Luck Next Time");
			gamestart();
		}
    });
});