/**
 * @author Sharanya Haridas
 */
<h1>My Very Favorite Beverages</h1>

		<script>
/* The purpose of this program is to create
			 *a list of 4 beverages with at least 4 specific properties
			 *and from that list create new two new lists
			 * one my favorites and
			 * two the rest 			 */

			var myBeverages = [{"name": "Latte", "flavor":"coffee", "brand": "Starbucks", "temperature":"hot"}, 
			{"name":"Frappe", "flavor":"coffee", "brand":"Barista", "temperature":"cold"}, 
			{"name":"HotChocolate", "flavor":"chocolate", "brand":"Starbucks", "temperature":"hot"},
			{"name":"TobleroneShake", "flavor":"chocolate", "brand":"CocoaTree", "temperature":"cold"}]
			console.log(myBeverages);

		
			
			/*these are lists i will sort my beverages into*/


			var myFaves=[]
			var theRest=[]

		

			/*for every beverage in my list, check its flavor
			 * if its coffee add to myFaves, otherwise add to theRest */


			for (var i=0; i<4; i++){
				console.log(i);
			var currentBeverage = myBeverages [i];
			console.log(currentBeverage);
			if (currentBeverage.flavor =="coffee"){
				console.log(currentBeverage);
			myFaves.push(currentBeverage);
			}else{theRest.push(currentBeverage); }
			console.log("finished list");
			console.log(myFaves);
			console.log(theRest);
			}

		</script>
