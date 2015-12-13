		/*	Multiline comment
			Author: Sedar Olmez
			GREEK REACTION*/
			var clickedTime;
			var createdTime;
			var reactionTime;
			
			function makeBox(){
				
				setTimeout(function(){
					
					var top = Math.random();
					top = top * 400;
					var left = Math.random();
					left = left * 1080;
					
					var randomNumber = Math.floor(Math.random() * 5) + 1;
					var imgName = "img_" + randomNumber + ".png";
					document.getElementById("imageid").style.top = top+"px";
					document.getElementById("imageid").style.left = left+"px";
					document.getElementById("imageid").src = "Images"+"/"+imgName;
					document.getElementById("imageid").style.display = "inline";
					createdTime = Date.now();
					
				}, randomNumber());
			}
			
			function randomNumber(){
				var x = Math.random();
				x = x * 3000;
				return x;
			}
			
			document.getElementById("imageid").onclick=function(){
				clickedTime = Date.now();
				reactionTime = (clickedTime - createdTime)/1000;
				document.getElementById("time").innerHTML = reactionTime;
				this.style.display="none";	
				makeBox();	
			}
			makeBox();