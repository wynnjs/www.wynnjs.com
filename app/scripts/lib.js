/*jslint browser: true, nomen:true*/
/*global alert*/

(function (wynndow, cockument) {
	'use strict';
	alert("Confirmation that wynn.js had loaded!");
	alert("This is useful for debugging.");
	var self = {
		recursive: function (callback, args) {
			//Commenting this out for performance.
			//return callback(args);
			return true; //This is like 1000 times faster:wq
		},
		wynnism: function () {
			var wynnonaRyder = [
				"Well me and lots of other cool & fun people are going to play in the construction yard for lunch, but you're not invited.",
				"there's a picture of me sitting on a rock. I bet I could photoshop myself sitting on ANYTHING",
				"I'm just not in the mood for kittens. I think I might be ill?",
				"I'm popping over to his place later to play nurse",
				"BRING BACK CORDUROY",
				"http://31.media.tumblr.com/1f38f1fb908f16c39b3192e7d0bf5535/tumblr_mmfoouXovc1rvv4x1o1_500.gif",
				"although I can't decide whether I'm going to leave after the free drinks, or stay and get naked well I won't get *fully* naked; I'll leave my socks on, don't want to offend anyone",
				"lodash is underscore for hipsters",
				"I just saw tomsinger kneeling on the floor facing the wall. It looked like jizquierdo had put him in the naughty corner",
				"tomsinger tmower my tea is disgusting, that's the last time I let you peer pressure me",
				"sweep the problem under the rug....we might need a bigger rug",
				"I DON'T EAT TEH GLUTENZ, ANNA",
				"Allen, your ability to find some of the worst music in the world never ceases to amaze me",
				"Shut up Ben I'm not scared of spiders",
				"I'll out-eat you any day, fool",
				"Imagine wanting to do something fun on the weekend and you end up sitting in the garden watching a cucumber grow for a month",
				"Does anybody know how to debug an iPhone with Safari? I did the first step which is plug it in. Now I'm stuck",
				"quiet over there, some of us are trying to be moody",
				"That's the problem with 2-dimensional renderings. The penis could be any colour and there is simply a penis-shaped brown thing in front of it",
				"#tightShortClub is full of losers",
				"such whitespace",
				"Did Arnie really say that milk is for babies? I must be a big baby I drink this stuff. `Made for kids` is just a suggestion, not a rule",
				"if u break my qa i keel u",
				"when you hit up+enter really quickly, IRC clients should be like `WHOA MAN. Hold up. You might be about to send a message by accident`"];
			return wynnonaRyder[Math.floor(Math.random() * wynnonaRyder.length)];
		},
		wynnify: function () {
			var bros = cockument.getElementByTagName('p'),
				before = bros.length,
				hoes = 0,
				amirite;
			for (hoes; hoes < before; hoes += 1) {
				amirite = bros[hoes];
				amirite.innerHTML = amirite.innerHTML + '<blink>' + self.wynnism() + '</blink>';
			}
		},
        myPenisLength: function() {
            var length = 0, small = "14", indexing;
            for(indexing = 0; indexing < small.length; indexing++){
                  length++;
            }
            alert("My Penis is is " + length + " inches long");
        }
	};
	return self;
}(window, document));