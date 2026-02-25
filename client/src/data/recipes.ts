import { Recipe } from "@shared/schema";

export const recipes: Recipe[] = [
  // =====================================================
  // FRY STATION RECIPES
  // =====================================================

  // FRY STATION - PREP INSTRUCTIONS
  {
    id: "fry-shift-checklist",
    name: "Fry Station Shift Checklist",
    station: "fry",
    category: "prep",
    contentType: "checklist",
    description: "Start-of-shift checklist for the Fry Station. Ensure all items are stocked and prepped before service.",
    instructions: [
      "ON TOP (Station Line):",
      "• Chicken Tenders",
      "• Chicken Breasts",
      "• Burger Patties",
      "• Cube Steak",
      "• Egg Wash (for breading)",
      "• Pickles, sliced",
      "• Green Tomatoes, sliced",
      "• Country Potatoes",
      "• Egg Wash for Seafood",
      "• Alligator Portions",
      "• Crawfish Portions",
      "• Shrimp Portions",
      "• Calamari Portions",
      "• Catfish Filets",
      "",
      "FRYER SETUP:",
      "• Fryer temperature set to 370°F",
      "• Oil level checked and clean",
      "",
      "BREADING STATION:",
      "• Seasoned Flour for Meats",
      "• Seasoned Flour for Calamari",
      "• Panko Mix",
      "• Fish Fry (Corn Meal)",
      "• Cajun Seasoning"
    ],
    tips: "Check and restock all proteins at the start of each shift. Keep backups labeled with name, date, and item in the low-boy. Maintain fryer temperature at 370°F for consistent results."
  },
  {
    id: "fry-prep-general",
    name: "General Preparations",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Essential setup and general guidelines for the fry station.",
    instructions: [
      "Ensure that all proteins in the low-boy refrigerator are fully stocked, with a labeled backup supply on the bottom shelf of the produce fridge.",
      "Labels must indicate the individual responsible for preparation, date, and item name.",
      "The fryer temperature should be set to 370°F."
    ],
    tips: "Always check and restock proteins at the start of each shift."
  },
  {
    id: "fry-prep-alligator",
    name: "Alligator Prep",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Preparation instructions for marinating and portioning alligator meat.",
    ingredients: [
      "1 lb raw alligator meat",
      "1 cup buttermilk",
      "2 tbsp Cajun Seasoning"
    ],
    instructions: [
      "Butterfly cut thick pieces of raw alligator meat and remove any adipose tissue or silver skin.",
      "Combine 1 lb of trimmed alligator with 1 cup buttermilk and 2 tbsp Cajun Seasoning.",
      "Marinate for a minimum of one hour, extending up to overnight.",
      "Segment the marinated meat into 3 oz portions, cutting into roughly 1.5 x 1.5-inch squares (approximately 8 pieces)."
    ],
    portionSize: "3 oz (8-9 pieces per portion)"
  },
  {
    id: "fry-prep-catfish",
    name: "Catfish Prep",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Initial preparation and temperature guidelines for catfish fillets.",
    instructions: [
      "Thaw catfish under cold running water or refrigerate overnight.",
      "Inspect each fillet for bones and trim off any fat.",
      "Divide the fillet lengthwise along its center seam.",
      "After cooking, verify that the fillet's internal temperature reads between 135-145°F in two different spots."
    ],
    internalTemp: "135-145°F",
    portionSize: "6 oz fillet"
  },
  {
    id: "fry-prep-crawfish",
    name: "Crawfish Prep",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Thawing and preparation for fried crawfish.",
    instructions: [
      "Thaw the 1lb frozen bags of crawfish under cold running water or overnight in the refrigerator.",
      "Strain to remove excess liquid.",
      "Coat three bags of crawfish individually in cornmeal batter.",
      "Proceed to seafood wash and return to Zatarain's cornmeal batter for a second coat.",
      "Ensure full coverage, shaking off excess before frying.",
      "Fry until the crawfish begin to float (approximately 60 seconds). Do not overcook."
    ],
    portionSize: "1 oz per serving",
    cookTime: "~60 seconds"
  },
  {
    id: "fry-prep-cube-steak",
    name: "Cube Steak (CFS) Prep",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Preparation for Chicken Fried Steak cube steaks.",
    instructions: [
      "Certified Angus Beef, never frozen, vacuum-sealed for optimum freshness.",
      "Unseal the vacuum bags and gently lay each steak onto a sheet of deli paper.",
      "When refilling stock, always use a fresh container to avoid spoilage from residue."
    ],
    portionSize: "6 oz"
  },
  {
    id: "fry-prep-flour-mix",
    name: "Flour Mix",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Seasoned flour blend for breading.",
    yield: "7 cups",
    cookTime: "2 minutes prep",
    ingredients: [
      "6 cups flour",
      "1/2 cup SPG seasoning"
    ],
    instructions: [
      "Hand-mix all ingredients until well combined.",
      "Transfer and store in a sizeable mixing bowl."
    ]
  },
  {
    id: "fry-prep-panko-mix",
    name: "Panko Mix",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Panko and flour breading mixture.",
    yield: "3 cups",
    cookTime: "2 minutes prep",
    ingredients: [
      "2 cups Panko crumbs",
      "1 cup flour",
      "1 tbsp Tony Chachere's seasoning"
    ],
    instructions: [
      "Manually mix all components until well integrated.",
      "Store the mix in a plastic container for future use."
    ]
  },
  {
    id: "fry-prep-fried-pickles",
    name: "Fried Pickles Prep",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Preparing pickles for frying.",
    instructions: [
      "Remove the stem from each whole pickle.",
      "Pare a thin strip of skin lengthwise and slice the pickle using a #6 setting on the slicer.",
      "Reserve skin strips for tartar sauce.",
      "Transfer slices to a plastic container and submerge in pickle juice."
    ],
    portionSize: "5 per order"
  },
  {
    id: "fry-prep-pork-chop",
    name: "Paw Paw's Pork Prep",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Preparing center-cut pork tenderloin chops.",
    instructions: [
      "Source chops from a center-cut pork tenderloin.",
      "Slice each chop to approximately 1/2-inch thickness.",
      "Size may vary based on loin dimensions."
    ],
    portionSize: "4 oz"
  },
  {
    id: "fry-prep-shrimp",
    name: "Shrimp Prep",
    station: "fry",
    category: "prep",
    contentType: "prep",
    description: "Thawing and portioning shrimp for frying.",
    instructions: [
      "Thaw shrimp under cold running water and drain excess water using a strainer.",
      "Portion 8 shrimp per bag.",
      "Individually coat 2 bags of shrimp in cornmeal batter.",
      "Dip in seafood wash and recoat in Zatarain's cornmeal batter.",
      "Ensure full batter coverage without wet spots.",
      "Shake off excess batter prior to frying.",
      "Lower the fully-loaded fryer basket into preheated oil.",
      "Fry until shrimp float (approximately 60 seconds); avoid overcooking."
    ],
    portionSize: "8 ea per serving",
    cookTime: "~60 seconds"
  },

  // FRY STATION - APPETIZERS
  {
    id: "fry-boudin-balls",
    name: "Boudin Balls",
    station: "fry",
    category: "appetizers",
    contentType: "recipe",
    description: "Golden-fried boudin balls with a crispy double-batter coating. A Cajun classic packed with pork, rice, and spices.",
    ingredients: [
      "10 oz Boudin mix",
      "2 cups seasoned flour mix",
      "4 cups egg wash",
      "4 oz Boudin ranch (for dipping)"
    ],
    instructions: [
      "Take a #20 scoop and fill it with the boudin mixture. Press firmly to compress.",
      "Use a flat edge to scrape off excess mixture, leveling it with the edges.",
      "Drop onto a plate with seasoned flour mix. Form into a ball shape.",
      "Dredge in egg wash, then back into seasoned flour mix.",
      "Repeat flour-egg-flour process for a double batter.",
      "Ensure each boudin ball is thoroughly coated with no wet areas.",
      "Place all five coated balls in a fry basket, ensuring they are not touching.",
      "Carefully lower into the oil. After 30 seconds, gently shake the basket.",
      "Cook until internal temperature reaches 145°F (approximately 7 minutes).",
      "Remove and drain excess oil.",
      "Serve in a sandwich basket with Boudin ranch sauce on the side."
    ],
    tips: "The double-dip battering gives you a crust with crunch and attitude, while the inside delivers a boudin mix packed with flavor.",
    internalTemp: "145°F",
    cookTime: "~7 minutes",
    portionSize: "5 balls per order"
  },
  {
    id: "fry-fried-green-tomatoes",
    name: "Fried Green Tomatoes",
    station: "fry",
    category: "appetizers",
    contentType: "recipe",
    description: "Crispy golden fried green tomato slices with a seasoned panko coating.",
    ingredients: [
      "1 green tomato",
      "4 oz seasoned flour",
      "2 cups egg wash",
      "4 oz seasoned flour/panko mix"
    ],
    instructions: [
      "Slice a whole green tomato into 5 even slices, discarding the end pieces.",
      "Coat each slice in seasoned flour, ensuring full coverage.",
      "Dredge the floured slice in egg wash.",
      "Coat in seasoned flour/panko mix, gently patting the mixture onto the surface.",
      "Ensure no wet areas and even coating.",
      "Carefully place each slice in the frying basket one at a time.",
      "Fry until golden brown and crispy."
    ],
    portionSize: "5 slices per order"
  },
  {
    id: "fry-fried-pickles",
    name: "Fried Pickles",
    station: "fry",
    category: "appetizers",
    contentType: "recipe",
    description: "Tangy pickle paddles breaded to perfection with a crispy coating. Served with cool, creamy ranch.",
    ingredients: [
      "5 pickle slices, cut to ¼ inch paddles",
      "6 oz seasoned flour",
      "2 cups egg wash",
      "4 cups seasoned flour/panko mix",
      "4 oz Ranch dressing (for serving)"
    ],
    instructions: [
      "Coat each pickle paddle in seasoned flour, ensuring full coverage.",
      "Dredge the floured pickle in egg wash.",
      "Coat in seasoned flour/panko mix, gently patting the mixture.",
      "Ensure no wet areas and even coating on each pickle.",
      "Carefully place each paddle in the frying basket one at a time.",
      "Fry until golden brown and crispy (a few minutes per side).",
      "Remove and place on paper towel-lined plate to drain.",
      "Serve in a sandwich basket with ranch dressing for dipping."
    ],
    tips: "The cool, creamy ranch is the yin to the pickle's yang, rounding out the flavors perfectly.",
    portionSize: "5 pickle paddles per order"
  },
  {
    id: "fry-gator-bites",
    name: "Gator Bites",
    station: "fry",
    category: "appetizers",
    contentType: "recipe",
    description: "Exotic marinated alligator bites with a crispy coating, served on a bed of serrano slaw with white remoulade.",
    ingredients: [
      "3 oz marinated alligator, cut into 8 pieces",
      "6 oz seasoned flour",
      "2 cups egg wash",
      "4 cups seasoned flour/panko mix",
      "4 oz Serrano Slaw",
      "2 oz White Remoulade"
    ],
    instructions: [
      "Coat each piece of alligator with seasoned flour.",
      "Dredge the floured alligator in egg wash.",
      "Coat with flour and Panko mix (2:1 ratio), ensuring full coverage.",
      "Press each piece to form a flat patty.",
      "Fry for approximately 2 minutes until firm and golden brown.",
      "Remove and drain on paper towel-lined plate.",
      "Place a 3 oz bed of serrano slaw on center of plate.",
      "Arrange Gator Bites on top of the slaw.",
      "Serve with a 2 oz ramekin of white remoulade for dipping."
    ],
    tips: "Crispy on the outside yet tender inside, each bite is a mini-vacation to the bayou.",
    cookTime: "~2 minutes",
    portionSize: "8 pieces (3 oz)"
  },
  {
    id: "fry-starter-sampler",
    name: "Starter Sampler",
    station: "fry",
    category: "appetizers",
    contentType: "recipe",
    description: "A gastronomic road trip through the American South featuring Boudin Balls, Gator Bites, Fried Pickles, and your choice of dip.",
    ingredients: [
      "Customer's choice: Crawfish Dip or Spinach Dip",
      "2 Boudin Balls",
      "4 Gator Bites",
      "4 Fried Pickles",
      "Diced green onions (for garnish)",
      "White remoulade, ranch, and Boudin ranch (for serving)"
    ],
    instructions: [
      "Place a bowl of chosen dip (Crawfish or Spinach) in center of a large platter.",
      "Arrange Boudin Balls around one quarter of the platter.",
      "Place Gator Bites on another quarter of the platter.",
      "Put Fried Pickles on a third quarter of the platter.",
      "Garnish the dip with diced green onions.",
      "Serve with sides of white remoulade, ranch, and Boudin ranch."
    ],
    tips: "This isn't just food; this is Southern culture, deep-fried and served on a plate."
  },

  // FRY STATION - ENTREES
  {
    id: "fry-cajun-fried-catfish",
    name: "Cajun Fried Catfish",
    station: "fry",
    category: "entrees",
    contentType: "recipe",
    description: "Double-dipped catfish fillets with Zatarain's cornmeal batter, capturing the soul of Southern cooking.",
    ingredients: [
      "7 oz catfish fillet",
      "2 cups Zatarain's cornmeal batter",
      "2 cups seafood wash",
      "Frying oil (as needed)"
    ],
    instructions: [
      "Heat frying oil in deep fryer to around 350°F (175°C).",
      "Split the catfish fillet lengthwise into two even pieces.",
      "Coat each fillet in Zatarain's cornmeal batter.",
      "Dip into seafood wash, ensuring completely wet.",
      "Transfer back to cornmeal batter for second coating.",
      "Ensure each fillet is fully and evenly coated with no wet patches.",
      "Gently shake off excess batter.",
      "Lower filled basket into preheated oil.",
      "Fry until rich golden-brown and internal temp reaches 135°F (5-7 minutes)."
    ],
    tips: "The double dip into Zatarain's gives it a crunch that's pure poetry, while the seafood wash ensures moist, flavorful flesh.",
    internalTemp: "135°F",
    cookTime: "5-7 minutes",
    portionSize: "7 oz fillet"
  },
  {
    id: "fry-chicken-atchafalaya",
    name: "Fried Chicken Atchafalaya",
    station: "fry",
    category: "entrees",
    contentType: "recipe",
    description: "Cajun-fried chicken breast topped with crawfish étouffée, served over white rice. Prep time: 10 minutes.",
    ingredients: [
      "1/2 chicken breast, boneless and skinless",
      "1 tsp Cajun seasoning",
      "1 cup all-purpose flour",
      "1/2 tsp garlic powder",
      "1/2 tsp onion powder",
      "Salt and freshly ground black pepper, to taste",
      "Vegetable oil, for frying",
      "1/2 cup crawfish étouffée (prepared)",
      "Cooked white rice, for serving",
      "Chopped parsley or green onions, for garnish"
    ],
    instructions: [
      "FRY CHICKEN:",
      "Flatten and fry a 1/2 chicken breast using regular preparation.",
      "Remove the chicken from the oil and let it drain on a wire rack or paper towels.",
      "",
      "SERVE:",
      "Place a serving of cooked white rice on a plate.",
      "Lay the fried chicken breast on top of the rice.",
      "Warm the crawfish étouffée according to its preparation instructions and pour it over the fried chicken.",
      "Serve immediately, garnished with chopped parsley or green onions if desired."
    ],
    portionSize: "1/2 chicken breast, 1/2 cup étouffée"
  },
  {
    id: "fry-chicken-fried-steak",
    name: "Chicken Fried Steak",
    station: "fry",
    category: "entrees",
    contentType: "recipe",
    description: "Double-battered cube steak fried to golden-brown perfection, smothered in rich sausage gravy. Pure Americana.",
    ingredients: [
      "6 oz cube steak",
      "2 cups seasoned flour",
      "2 cups egg wash",
      "5 oz sausage gravy",
      "Frying oil (as needed)"
    ],
    instructions: [
      "Place the 6 oz cube steak in flour mix.",
      "Gently press into flour, ensuring even thickness and doubling its diameter. Prevent tearing.",
      "Fully submerge the steak in egg wash.",
      "Transfer back to flour mix, ensuring entirely covered without pressing flour into meat.",
      "Ensure it's dry with no wet patches.",
      "Repeat the process for a double batter.",
      "Gently place battered steak into 350°F oil.",
      "After 1 minute, turn over. After another minute, turn again and fry 30 more seconds (total 2:30).",
      "Remove and drain excess oil.",
      "Plate the steak and generously cover with 5 oz warm sausage gravy."
    ],
    tips: "What really elevates it to culinary magic is the rich, hearty sausage gravy that blankets the steak.",
    internalTemp: "145°F",
    cookTime: "2 minutes 30 seconds",
    portionSize: "6 oz"
  },
  {
    id: "fry-beer-battered-catfish",
    name: "Beer Battered Catfish",
    station: "fry",
    category: "entrees",
    contentType: "recipe",
    description: "Catfish fillets in a light, crispy beer batter with a dark golden-brown finish.",
    ingredients: [
      "7 oz catfish fillet",
      "2 cups beer batter"
    ],
    instructions: [
      "Split the catfish fillet lengthwise into two equal parts.",
      "Dredge each fillet in beer batter, ensuring full coverage.",
      "While holding the fillet over the batter, gently scrape off excess using your fingers.",
      "Before dropping into fryer, submerge and wave back and forth through hot oil 5-6 times.",
      "This waving motion helps prevent sticking to fryer's bottom.",
      "Fry until dark golden-brown and internal temp reaches 135°F."
    ],
    tips: "Named after Texas railroad pioneer Leander 'Catfish' Brown, it's a perfect union of Southern cooking and local history.",
    internalTemp: "135°F",
    portionSize: "7 oz fillet"
  },
  {
    id: "fry-paw-paws-pork-chop",
    name: "Paw Paw's Pork Chop",
    station: "fry",
    category: "entrees",
    contentType: "recipe",
    description: "A culinary heirloom - double-dredged pork tenderloin with a golden crispy crust, drizzled with mushroom gravy.",
    ingredients: [
      "4 oz pork tenderloin",
      "2 cups seasoned flour mix",
      "2 cups egg wash",
      "4 oz mushroom gravy",
      "1 tbsp dried parsley (for garnish)"
    ],
    instructions: [
      "Place the pork chop in flour mix, ensuring even coat. Gently pat flour onto meat.",
      "Immerse in egg wash, ensuring entire surface is wet.",
      "Return to flour mix, pressing flour onto surface using palm. Flip and repeat.",
      "Fry for about 1 minute on each side until internal temp reaches 145°F.",
      "Place cooked pork chop to side of round plate.",
      "Drizzle with mushroom gravy.",
      "Sprinkle with dried parsley for garnish."
    ],
    tips: "Don't skip the dried parsley; it's that small detail that catapults a good meal into greatness. Pair with mashed potatoes and steamed green beans.",
    internalTemp: "145°F",
    cookTime: "~2 minutes",
    portionSize: "4 oz"
  },
  {
    id: "fry-shell-beach-platter",
    name: "Shell Beach Platter",
    station: "fry",
    category: "entrees",
    contentType: "recipe",
    description: "A bounty of fried catfish, shrimp, and crawfish that captures the essence of Louisiana's Lake Borgne waters.",
    ingredients: [
      "7 oz catfish",
      "8 ea shrimp",
      "1 oz crawfish tails",
      "2 oz Tartar Sauce",
      "2 oz Cocktail Sauce",
      "1 lemon wedge"
    ],
    instructions: [
      "Cook the catfish, fried shrimp, and fried crawfish as previously described.",
      "Arrange the cooked items on a round plate.",
      "Accompany with tartar and cocktail sauces.",
      "Finish with a lemon wedge on the side."
    ],
    tips: "Like casting a line in Lake Borgne near Shell Beach with Paw Paw. Serve with coleslaw and fries, and you're right back on that boat."
  },
  {
    id: "fry-sheridan-shrimp",
    name: "Sheridan Shrimp",
    station: "fry",
    category: "entrees",
    contentType: "recipe",
    description: "16 shrimp double-coated in Zatarain's-infused cornmeal, fried to perfection. A tribute to New Orleans' Sheridan Ave.",
    ingredients: [
      "16 ea shrimp",
      "2 cups Zatarain's batter",
      "2 cups seafood wash",
      "1 leaf lettuce (for garnish)",
      "2 oz Tartar Sauce",
      "2 oz Cocktail Sauce",
      "1 lemon wedge"
    ],
    instructions: [
      "Individually coat each shrimp from two bags in cornmeal batter.",
      "Dip into seafood wash, then recoat with cornmeal batter.",
      "Ensure complete coverage with no wet spots remaining.",
      "Shake off any excess batter.",
      "Place all shrimp into fryer basket, submerge in hot oil simultaneously.",
      "Once shrimp float (around 60 seconds), promptly remove to avoid overcooking.",
      "Arrange a round plate with leaf lettuce garnish.",
      "Place all 16 shrimp atop the lettuce.",
      "Accompany with tartar or cocktail sauces and a lemon wedge."
    ],
    tips: "This Sheridan Shrimp is a bite of New Orleans heritage. Whether as a starter or main, these shrimp carry the heart of the Big Easy.",
    cookTime: "~60 seconds",
    portionSize: "16 shrimp"
  },

  // FRY STATION - SIDES
  {
    id: "fry-french-fries",
    name: "French Fries",
    station: "fry",
    category: "sides",
    contentType: "recipe",
    description: "Crispy, golden perfection. A simple indulgence that spans cultures and cuisines.",
    yield: "5 oz side order | 3 oz kids order",
    instructions: [
      "Fill the fryer basket with the appropriate amount of fries.",
      "Drop the basket into hot oil and fry for 2 minutes.",
      "After frying, lift the basket and allow fries to air dry for 30 seconds.",
      "Place fries in a lined shallow bowl and keep warm under a heat lamp."
    ],
    tips: "Two minutes in hot oil, a brief moment to breathe, and voilà—crispy, golden perfection.",
    cookTime: "2 minutes",
    portionSize: "5 oz (side) / 3 oz (kids)"
  },
  {
    id: "fry-fried-okra",
    name: "Fried Okra",
    station: "fry",
    category: "sides",
    contentType: "recipe",
    description: "The Southern staple you never knew you needed. Crispy, golden, with an earthy taste.",
    yield: "5 oz side order | 3 oz kids order",
    instructions: [
      "Fill the fryer basket with the appropriate amount of okra.",
      "Drop the basket into hot oil and fry for 4 minutes.",
      "After frying, lift the basket and allow okra to air dry for 30 seconds.",
      "Place fried okra in a lined shallow bowl and keep warm under a heat lamp."
    ],
    tips: "Four minutes in the fryer and these pods are transformed. Perfect as a side, and even better as a guilty pleasure.",
    cookTime: "4 minutes",
    portionSize: "5 oz (side) / 3 oz (kids)"
  },
  {
    id: "fry-onion-rings",
    name: "Onion Rings",
    station: "fry",
    category: "sides",
    contentType: "recipe",
    description: "Crunchy exterior with a sweet, tender heart. The unsung heroes of American comfort food.",
    yield: "6 Onion Rings",
    ingredients: [
      "1 onion",
      "Seasoned flour (as needed)",
      "Egg wash (as needed)"
    ],
    instructions: [
      "Cut onions into rings approximately 1/2 inch in width.",
      "Thoroughly coat 6 onion rings in seasoned flour.",
      "Drench the floured rings in egg wash.",
      "Coat in seasoned flour again. Ensure no moist patches.",
      "Hold basket over hot oil, gently drop each ring one by one into the oil.",
      "This method ensures rings do not stick together.",
      "Fry for 1 minute, then use tongs to flip each one.",
      "Continue frying for additional 30 seconds.",
      "Lift basket and allow to air dry for 30 seconds.",
      "Serve immediately or keep warm under heat lamp."
    ],
    tips: "With a crunchy exterior and a sweet, tender heart, they defy all negative stereotypes.",
    cookTime: "1 minute 30 seconds",
    portionSize: "6 rings per order"
  },
  {
    id: "fry-sweet-potato-fries",
    name: "Sweet Potato Fries",
    station: "fry",
    category: "sides",
    contentType: "recipe",
    description: "Nutty, sweet, with just enough Tony Chachere's spice to keep things interesting.",
    yield: "4 oz",
    ingredients: [
      "4 oz sweet potato fries",
      "Tony Chachere's Seasoning (to taste)"
    ],
    instructions: [
      "Drop sweet potato fries into fryer basket.",
      "Submerge for 2 minutes or until desired crispness.",
      "Remove fries and season evenly with Tony Chachere's seasoning.",
      "Serve hot."
    ],
    tips: "Forget the regular fries; this is an upgrade—nutty, sweet, with just enough spice.",
    cookTime: "2 minutes",
    portionSize: "4 oz"
  },

  // FRY STATION - KIDS MENU
  {
    id: "fry-chicken-nuggets",
    name: "Chicken Nuggets",
    station: "fry",
    category: "kids",
    contentType: "recipe",
    description: "Fresh chicken, perfectly fried—a gateway to culinary badassery. Not just any nuggets.",
    yield: "4 chicken nuggets and ½ order of fries",
    ingredients: [
      "1 chicken breast",
      "Seasoned flour (as needed)",
      "Egg wash (as needed)",
      "Frying oil",
      "½ order of fries"
    ],
    instructions: [
      "Cut the chicken breast in half. Store one half for later.",
      "Cut the remaining half into 4 equal parts.",
      "Dip each piece into seasoned flour, ensuring full coating.",
      "Dip into egg wash, ensuring full coverage.",
      "Dip back into seasoned flour for second coating. No wet spots.",
      "Preheat fryer to 350°F (175°C).",
      "Drop coated pieces into hot oil and fry for 2 minutes until golden brown.",
      "Remove and drain on paper towels.",
      "Serve hot with half order of fries."
    ],
    tips: "These are something any self-respecting adult would gladly steal off a kid's plate.",
    cookTime: "2 minutes",
    portionSize: "4 nuggets + ½ fries"
  },
  {
    id: "fry-mini-corndogs",
    name: "Mini Corndogs & Fries",
    station: "fry",
    category: "kids",
    contentType: "recipe",
    description: "Golden, crispy mini corndogs with a side of fries. A kid's menu classic done right.",
    yield: "4 mini corndogs and ½ order of fries",
    ingredients: [
      "4 frozen mini corndogs",
      "½ order of fries"
    ],
    instructions: [
      "Take 4 mini corndogs from freezer and place on microwave-safe plate.",
      "Microwave for 20 seconds to partially thaw.",
      "Transfer to fryer basket.",
      "Deep-fry until they rise to surface (about 1 minute). Should be golden brown and crispy.",
      "Remove and drain excess oil.",
      "Serve with half order of fries."
    ],
    cookTime: "~1 minute frying",
    portionSize: "4 corndogs + ½ fries"
  },
  {
    id: "fry-catfish-nuggets",
    name: "Catfish Nuggets",
    station: "fry",
    category: "kids",
    contentType: "recipe",
    description: "Kid-sized portions of our famous Cajun fried catfish. All the flavor, perfectly sized.",
    ingredients: [
      "Catfish pieces (kid portion)",
      "Zatarain's cornmeal batter",
      "Seafood wash",
      "½ order of fries"
    ],
    instructions: [
      "Cut catfish into kid-sized nugget portions.",
      "Coat in Zatarain's cornmeal batter.",
      "Dip into seafood wash.",
      "Return to cornmeal batter for second coating.",
      "Ensure full coverage with no wet spots.",
      "Fry until golden brown and internal temp reaches 135°F.",
      "Serve with half order of fries."
    ],
    internalTemp: "135°F",
    portionSize: "Kid portion + ½ fries"
  },

  // FRY STATION - PORTION GUIDES
  {
    id: "fry-portions-seafood",
    name: "Seafood Portion Guide",
    station: "fry",
    category: "portions",
    contentType: "prep",
    description: "Quick reference for seafood portions across all Cajun-inspired dishes.",
    instructions: [
      "Crawfish Étouffée Cup: 1 bag of crawfish",
      "Crawfish Étouffée Bowl: 3 bags of crawfish",
      "Shrimp Étouffée Cup: ½ bag of shrimp",
      "Shrimp Étouffée Bowl: 2 bags of shrimp",
      "Seafood Gumbo Cup: ½ bag shrimp, ½ bag crawfish",
      "Seafood Gumbo Bowl: 1½ bags shrimp, 1 bag crawfish",
      "Seafood Jambalaya Half: ½ bag shrimp, ½ bag crawfish",
      "Seafood Jambalaya Whole: 2 bags shrimp, 1 bag crawfish",
      "Shrimp & Grits: 2 bags of shrimp",
      "Crawfish Monica: 2 bags crawfish, 1 bag shrimp",
      "Cajun Colette, Shrimp: 2 bags of shrimp",
      "Shrimp Caesar: 2 bags of shrimp",
      "Add Shrimp: 1 bag of shrimp",
      "Add Crawfish: 1 bag of crawfish"
    ]
  },
  {
    id: "fry-portions-general",
    name: "General Portion Guide",
    station: "fry",
    category: "portions",
    contentType: "prep",
    description: "Complete portion reference for all fry station items.",
    instructions: [
      "Alligator: 3 oz, cut into 8-9 1-inch cubes",
      "Boudin Balls: Use a #20 scoop",
      "Catfish: 6 oz fillet",
      "Chicken: 8 oz fillet, trim the fat",
      "Cole Slaw Cabbage: Cut on #4",
      "Crawfish: 1 oz",
      "Cube Steak: 6 oz",
      "French Fries: 5 oz",
      "Onion Rings: Cut on #21, 8 rings per order",
      "Pickles: Cut on #6",
      "Pork Chop: 4 oz portions",
      "Shrimp: 8 ea",
      "Sweet Potato Fries: 4.5 oz frozen"
    ],
    tips: "When using the slicer, always turn the dial past the desired setting to a higher number and then turn it back to the target number for precise portion sizes."
  },

  // =====================================================
  // SAUTÉE STATION RECIPES
  // =====================================================

  // SAUTÉE STATION - PREP INSTRUCTIONS
  {
    id: "sautee-shift-checklist",
    name: "Sautée Station Shift Checklist",
    station: "sautee",
    category: "prep",
    contentType: "checklist",
    description: "Start-of-shift checklist for the Sautée Station. Ensure all items are stocked and prepped before service.",
    instructions: [
      "ON TOP (Station Line):",
      "• Jalapeños, diced",
      "• Ham, chopped",
      "• Smoked Sausage, sliced",
      "• Bacon Bits",
      "• Trinity, cooked",
      "• Bell Pepper, chopped",
      "• Yellow Onion, chopped",
      "• Mushrooms, sliced",
      "• Tomatoes, chopped",
      "• Sun Dried Tomatoes, chopped",
      "• Red Onions, chopped",
      "• Green Onions, sliced",
      "• Heavy Cream",
      "• Garlic, minced",
      "• Shredded Mozzarella",
      "• Parmesan",
      "• Cheddar",
      "• Butter, cubed",
      "• Corn pack",
      "• Cream for corn",
      "",
      "DOWN BELOW (Low-Boy):",
      "• NY Strips, cut",
      "• Seafood Gumbo",
      "• Backups for all top items"
    ],
    tips: "Check and restock all items at the start of each shift. Label all backups with name, date, and item. Keep your station organized—mise en place is the key to a smooth service."
  },

  // SAUTÉE STATION - COOKING TIPS
  {
    id: "sautee-tip-balance",
    name: "Out of Balance Flavors",
    station: "sautee",
    category: "tips",
    contentType: "prep",
    description: "How to prevent unbalanced or unappealing flavors in your dishes.",
    instructions: [
      "Always taste as you cook - your palate is the control factor.",
      "Recipes don't always call for the 'right' amount of seasoning.",
      "Cooking times are estimates - results vary based on ingredients, stove, and altitude.",
      "Adjust seasoning throughout the cooking process, not just at the end."
    ],
    tips: "Think that experienced cooks don't forget this most basic rule? Even pros have coated pineapple in salt instead of sugar!"
  },
  {
    id: "sautee-tip-boil-vs-simmer",
    name: "Boil vs Simmer",
    station: "sautee",
    category: "tips",
    contentType: "prep",
    description: "Understanding the difference between boiling and simmering.",
    instructions: [
      "Simmering: A bubble breaks the surface every second or two.",
      "Boiling: More vigorous bubbling than a simmer.",
      "Boiling meat makes it tough and dry, even though it seems faster.",
      "For stews and braises, simmer for a couple of hours rather than boiling for 45 minutes."
    ],
    tips: "Meat cooked too quickly in liquid ironically turns out very dry and tough."
  },
  {
    id: "sautee-tip-hot-pans",
    name: "Hot Pans",
    station: "sautee",
    category: "tips",
    contentType: "prep",
    description: "Why proper pan temperature is essential for sautéing.",
    instructions: [
      "A hot pan is essential for sautéing veggies or creating a great crust.",
      "Hot pans help prevent food from sticking.",
      "If you think your pan is hot enough, step back and heat it a couple more minutes.",
      "When you're about ready to call the fire department, then add oil and proceed."
    ],
    tips: "The inexperienced or hurried cook will barely heat the pan before adding oil - this leads to no sizzle and pale food."
  },
  {
    id: "sautee-tip-leave-it-alone",
    name: "Leave it Alone",
    station: "sautee",
    category: "tips",
    contentType: "prep",
    description: "Why you shouldn't constantly flip and poke your food.",
    instructions: [
      "Resist the temptation to turn, poke, and flip constantly.",
      "Food won't develop a nice crust unless you let it cook undisturbed.",
      "If you can't slide a spatula cleanly under the crust, it's too early to turn.",
      "The food will release from the pan when it's ready - don't try to pry it."
    ],
    tips: "If you try to pry up the food too early, the crust will stick to the pan, not the food."
  },
  {
    id: "sautee-tip-caramelize",
    name: "Caramelize",
    station: "sautee",
    category: "tips",
    contentType: "prep",
    description: "How to properly caramelize onions.",
    instructions: [
      "Cook over medium-low to low heat for a long time, maybe up to an hour.",
      "If you crank the heat to speed up the process, you'll get a different product.",
      "High heat gives onions that are crisp-tender and browned but lacking translucence.",
      "True caramelized onions are meltingly tender and sweet."
    ],
    tips: "Know that caramelized onions take time, and plan to cook them when you can give them the time they need."
  },
  {
    id: "sautee-tip-meat-thermometer",
    name: "Meat Thermometer",
    station: "sautee",
    category: "tips",
    contentType: "prep",
    description: "Why using a meat thermometer is essential.",
    instructions: [
      "The meat thermometer is one of the most valuable kitchen tools you can own.",
      "Temperatures don't lie and appearances can deceive.",
      "Digital probe thermometers allow you to set a desired temperature.",
      "The heat-proof wire allows monitoring without opening the oven door."
    ],
    tips: "A probe thermometer eliminates frequent opening of the oven door, which speeds cooking."
  },
  {
    id: "sautee-tip-dry-meat",
    name: "Dry Meat",
    station: "sautee",
    category: "tips",
    contentType: "prep",
    description: "How to prevent meat from drying out.",
    instructions: [
      "Plan for meat to rest at room temperature after cooking.",
      "Resting allows juices to redistribute throughout the meat.",
      "Small cuts like steak need 5 minutes rest time.",
      "Whole birds or rib roasts need 20-30 minutes rest time.",
      "Tent meat loosely with foil to keep it warm."
    ],
    tips: "This resting rule applies equally to an inexpensive skirt steak or a premium dry-aged, grass-fed steak."
  },

  // SAUTÉE STATION - APPETIZERS
  {
    id: "sautee-bens-gumbo-cup",
    name: "Ben's Gumbo Cup",
    station: "sautee",
    category: "appetizers",
    contentType: "recipe",
    description: "A cup of rich seafood gumbo with shrimp and crawfish, served over rice.",
    yield: "6 oz soup",
    ingredients: [
      "4 oz Seafood gumbo base",
      "4 ea Shrimp",
      "½ oz Crawfish",
      "½ oz Green onion, diced"
    ],
    instructions: [
      "Combine all ingredients in sauté pan.",
      "Bring to simmer, do not boil.",
      "Place 2 tbsp of white rice in a small soup cup.",
      "Microwave for 30 seconds.",
      "Fill soup cup with gumbo to 1/4 inch from the top.",
      "Garnish with a pinch of diced green onions and filé."
    ],
    portionSize: "6 oz"
  },
  {
    id: "sautee-bens-gumbo-bowl",
    name: "Ben's Gumbo Bowl",
    station: "sautee",
    category: "appetizers",
    contentType: "recipe",
    description: "A hearty bowl of seafood gumbo with shrimp and crawfish, served over a mound of rice.",
    yield: "12 oz bowl",
    ingredients: [
      "12 oz Seafood gumbo base",
      "12 ea Shrimp",
      "1 oz Crawfish",
      "1 oz Green onion, diced"
    ],
    instructions: [
      "Combine all ingredients in sauté pan.",
      "Bring to simmer, do not boil.",
      "Fill a small soup cup with white rice.",
      "Microwave for 1 minute.",
      "Quickly turn over soup cup into a large soup bowl and carefully lift cup.",
      "Keeping the rice in a formed mound, pour gumbo from pan into bowl.",
      "Garnish with a pinch of diced green onions and filé."
    ],
    portionSize: "12 oz"
  },
  {
    id: "sautee-crawfish-dip",
    name: "Crawfish Dip",
    station: "sautee",
    category: "appetizers",
    contentType: "recipe",
    description: "Creamy, cheesy crawfish dip served with toasted French bread sticks.",
    yield: "10 oz boat and 1 six-inch French loaf",
    instructions: [
      "Split 1 six-inch French loaf lengthwise and coat the inside with butter.",
      "Toast until golden brown then cut into quarters creating 8 equal sized bread sticks.",
      "Slice the bread, do not smash it.",
      "Fill a boat to 1/4 inch from the top with crawfish dip.",
      "Wrap the whole boat with plastic wrap, microwave for 1:30.",
      "Remove plastic and top with mozzarella cheese.",
      "Place in oven until cheese is completely melted. DO NOT microwave cheese.",
      "Place on an oval plate with the bread sticks.",
      "Garnish with diced green onions."
    ]
  },
  {
    id: "sautee-etouffee-cup",
    name: "Étouffée Cup",
    station: "sautee",
    category: "appetizers",
    contentType: "recipe",
    description: "A cup of classic Louisiana étouffée with your choice of shrimp or crawfish.",
    yield: "6 oz soup",
    ingredients: [
      "1 oz Butter",
      "1 oz Trinity",
      "½ oz Tomato, diced",
      "1 tbsp Étouffée seasoning",
      "4 oz Veggie stock",
      "½ tbsp Heavy cream",
      "4 ea Shrimp OR 1 oz Crawfish tails",
      "2 tbsp White rice",
      "½ tbsp Green onions, diced"
    ],
    instructions: [
      "Combine butter, trinity, and tomato in a small sauté pan and simmer until trinity is tender.",
      "Add 1 tbsp Étouffée seasoning and blend until a pasty roux.",
      "Add 4 oz cold veggie stock and heavy cream.",
      "Whisk with rubber spatula scraping all flour stuck to the bottom of the pan.",
      "Add 4 shrimp OR 1oz bag crawfish.",
      "Bring to simmer, do not boil, stirring constantly.",
      "Place 2 tbsp of white rice in a small soup cup.",
      "Microwave for 30 seconds.",
      "Fill soup cup with Étouffée to 1/4 inch from the top.",
      "Garnish with a pinch of diced green onions."
    ],
    portionSize: "6 oz"
  },
  {
    id: "sautee-etouffee-bowl",
    name: "Étouffée Bowl",
    station: "sautee",
    category: "appetizers",
    contentType: "recipe",
    description: "A full bowl of rich Louisiana étouffée with shrimp or crawfish over rice.",
    yield: "12 oz bowl",
    ingredients: [
      "2 oz Butter",
      "2 oz Trinity",
      "1 oz Tomato, diced",
      "3 tbsp Étouffée seasoning",
      "12 oz Veggie stock",
      "1 tbsp Heavy cream",
      "12 ea Shrimp OR 3 oz Crawfish tails",
      "8 oz White rice",
      "1 oz Green onions, diced"
    ],
    instructions: [
      "Combine butter, trinity, and tomato in a small sauté pan and simmer until trinity is tender.",
      "Add 3 tbsp Étouffée seasoning and blend until a pasty roux.",
      "Add 12 oz cold veggie stock and 1 tbsp heavy cream.",
      "Whisk with rubber spatula scraping all flour stuck to the bottom of the pan.",
      "Add 12 shrimp OR 3-1oz bags crawfish.",
      "Bring to simmer, do not boil.",
      "Fill a small soup cup with white rice.",
      "Microwave for 1 minute.",
      "Quickly turn over soup cup into a large soup bowl and carefully lift cup.",
      "Keeping the rice in a formed mound, pour Étouffée from pan into bowl.",
      "Garnish with a pinch of diced green onion."
    ],
    portionSize: "12 oz"
  },
  {
    id: "sautee-spinach-artichoke-dip",
    name: "Spinach Artichoke Dip",
    station: "sautee",
    category: "appetizers",
    contentType: "recipe",
    description: "Creamy spinach and artichoke dip topped with melted cheese, served with toasted bread.",
    yield: "10 oz boat and 1 seven-inch French loaf",
    instructions: [
      "Split 1 seven-inch French loaf lengthwise and coat the inside with butter.",
      "Toast until golden brown then cut into quarters creating 8 equal sized bread sticks.",
      "Slice the bread, do not smash it.",
      "Fill a boat to 1/4 inch from the top with artichoke dip.",
      "Place 3 artichoke hearts in the top of the dip.",
      "Wrap the whole boat with plastic wrap, microwave for 1:30.",
      "Remove plastic and top with mozzarella cheese.",
      "Place in oven until cheese is completely melted. DO NOT microwave cheese.",
      "Place on an oval plate with the bread sticks.",
      "Garnish with diced green onions."
    ]
  },

  // SAUTÉE STATION - ENTREES
  {
    id: "sautee-creole-duck-breast",
    name: "Creole Duck Breast with Abita Beer Glaze",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Farm-raised duck breast with sour apples and stout beer glaze. As meaty and delicious as a good steak.",
    yield: "4 servings",
    cookTime: "About 35 minutes",
    ingredients: [
      "2 farm-raised duck breasts (8-10 oz each)",
      "1 tsp salt",
      "½ tsp freshly ground black pepper",
      "2 Pink Lady or Honey Crisp apples",
      "1 cup champagne vinegar",
      "1 cup granulated sugar",
      "1 bottle Abita Turbo Dog (or other stout beer)",
      "3 tbsp light brown sugar",
      "1 cinnamon stick"
    ],
    instructions: [
      "PREP:",
      "Preheat oven to 400°F.",
      "Score the fat on duck breast with sharp knife - don't cut through to meat.",
      "Season with salt and pepper.",
      "",
      "RENDER FAT:",
      "Place duck in sauté pan over medium to medium-high heat.",
      "Render fat until brown and crispy, about 15 minutes.",
      "Remove excess fat as it renders (save for later use).",
      "",
      "PREPARE APPLES:",
      "Slice apples into 8 wedges each, remove seeds and core.",
      "Combine champagne vinegar and sugar in small saucepan, bring to boil.",
      "Add apples, reduce heat, simmer 10 minutes.",
      "",
      "ROAST:",
      "Transfer simmered apples to pan with duck.",
      "Turn duck to meat side.",
      "Roast in oven 6-8 minutes.",
      "",
      "MAKE GLAZE:",
      "Transfer duck and apples to platter.",
      "Skim fat from pan.",
      "Add beer, cinnamon stick, and brown sugar.",
      "Simmer until sauce thickens.",
      "Return apples to sauce.",
      "",
      "SERVE:",
      "Slice duck breasts.",
      "Serve with apples and sauce."
    ],
    tips: "Any stout or bitter beer will work. Save the rendered duck fat - it's liquid gold for roasting potatoes or vegetables."
  },
  {
    id: "sautee-nola-bbq-shrimp",
    name: "New Orleans BBQ Shrimp",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Creole-seasoned Gulf shrimp in rich, buttery Worcestershire cream sauce. Serve with crusty bread for dipping.",
    yield: "4-6 servings",
    ingredients: [
      "3 lbs large Gulf shrimp, in shells",
      "2 tbsp Creole seasoning, divided",
      "Cracked black pepper",
      "2 tbsp olive oil",
      "¼ cup chopped onions",
      "2 tbsp minced garlic",
      "3 bay leaves",
      "3 lemons, peeled and sectioned",
      "2 cups water",
      "½ cup Worcestershire sauce",
      "¼ cup dry white wine",
      "¼ tsp salt",
      "2 cups heavy cream",
      "2 tbsp butter",
      "Fresh biscuits for serving",
      "1 tbsp chopped chives"
    ],
    instructions: [
      "PREP SHRIMP:",
      "Peel shrimp, leaving tails attached. Reserve shells.",
      "Season shrimp with 1 tbsp Creole seasoning and cracked pepper.",
      "Coat well with hands. Refrigerate while making sauce.",
      "",
      "MAKE SAUCE BASE:",
      "Heat 1 tbsp oil in large pot over high heat.",
      "Sauté onions and garlic 1 minute.",
      "Add reserved shrimp shells, remaining Creole seasoning, bay leaves, lemons, water, Worcestershire, wine, salt, and pepper.",
      "Bring to boil, reduce heat, simmer 30 minutes.",
      "Cool 15 minutes, strain into small saucepan (should be about 1½ cups).",
      "",
      "FINISH SAUCE:",
      "Place strained sauce over high heat.",
      "Add cream and bring to simmer.",
      "Reduce until sauce coats back of spoon.",
      "",
      "COOK SHRIMP:",
      "Heat remaining 1 tbsp oil in skillet over high heat.",
      "Add seasoned shrimp, cook until pink, about 2-3 minutes per side.",
      "Add to sauce with butter, stir to combine.",
      "",
      "SERVE:",
      "Spoon into bowls, garnish with chives.",
      "Serve with fresh biscuits for dipping."
    ],
    tips: "The shrimp shells are essential for building flavor in the sauce base. Serve with plenty of crusty bread - the sauce is the star!"
  },
  {
    id: "sautee-surf-and-turf",
    name: "Steak in Creamy Cajun Shrimp Sauce (Surf and Turf)",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Seared steak topped with shrimp in a creamy Cajun Parmesan sauce.",
    ingredients: [
      "2 tablespoons oil",
      "1 pound steak (such as strip loin, rib eye, etc.)",
      "Cajun seasoning to taste",
      "2 tablespoons butter",
      "8 ounces shrimp, peeled and deveined",
      "4 cloves garlic, chopped",
      "¼ cup chicken broth (or dry white wine)",
      "1 cup heavy cream",
      "2 teaspoons Dijon mustard",
      "1 tablespoon Cajun seasoning (or to taste)",
      "¼ cup Parmigiano Reggiano (Parmesan cheese), grated",
      "1 tablespoon lemon juice",
      "1 tablespoon parsley, chopped"
    ],
    instructions: [
      "Heat the oil in a large skillet over medium-high heat, add the steaks, seasoned with Cajun seasoning to taste, and sear until lightly browned on both sides and cooked to the desired level of doneness, before setting aside.",
      "Reduce the heat to medium, add the butter and let it melt before adding the shrimp and cooking until just pink on both sides, about 1-2 minutes per side, and set aside.",
      "Add the garlic and cook until fragrant, about a minute.",
      "Add the broth and deglaze the pan by scraping up any brown bits from the bottom with a wooden spoon as the broth sizzles.",
      "Add the cream, mix in the Dijon mustard and Cajun seasoning, bring to a boil and let simmer for a minute.",
      "Mix in the cheese and let it melt into the sauce.",
      "Mix in the lemon juice, parsley and shrimp and serve over the steaks!"
    ]
  },
  {
    id: "sautee-als-chicken",
    name: "Al's Chicken",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Perfectly grilled Montreal-seasoned chicken breast with balsamic reduction.",
    ingredients: [
      "1 full chicken breast",
      "Montreal seasoning",
      "Balsamic reduction"
    ],
    instructions: [
      "Choose a well-shaped full piece of chicken.",
      "Season both sides of chicken breast with Montreal seasoning.",
      "Place on char grill for 2 minutes.",
      "Rotate 45° and cook for 2 more minutes.",
      "Flip breast over and cook to 165°F.",
      "Place on the side of a round plate.",
      "Squeeze a small amount of balsamic reduction on the chicken."
    ],
    internalTemp: "165°F",
    cookTime: "~6-8 minutes"
  },
  {
    id: "sautee-angry-pasta",
    name: "Angry Pasta",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Spicy rigatoni with smoked sausage, ham, and bacon in a creamy Parmesan sauce.",
    ingredients: [
      "1 oz Butter",
      "1 oz Veg stock",
      "2 oz Trinity",
      "¼ oz Garlic",
      "8 slices Smoked sausage",
      "2 oz Diced ham",
      "2 oz Bacon bits",
      "1 tbsp Angry seasoning",
      "1 cup Heavy cream",
      "½ cup Parmesan cheese",
      "9 oz Rigatoni",
      "1 oz Butter pat"
    ],
    instructions: [
      "Combine butter, trinity, meats, and seasoning; simmer for 3 minutes until trinity is tender.",
      "Add cream and Parmesan and mix well.",
      "Cook on medium heat until sauce begins to simmer and thicken.",
      "Add pre-cooked rigatoni noodles.",
      "Thoroughly mix sauce and noodles until completely coated.",
      "Add one butter pat and mix in until completely melted.",
      "Served in large pasta bowl, garnish with green onion."
    ]
  },
  {
    id: "sautee-bayou-pasta",
    name: "Bayou Pasta",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Creamy Cajun pasta with artichokes, asparagus, and your choice of alligator or shrimp.",
    ingredients: [
      "1 oz Butter",
      "½ tsp Jambalaya seasoning",
      "2 oz Veg stock",
      "2 oz Trinity",
      "5 ea Artichoke hearts",
      "1 oz Diced tomato",
      "3 oz Alligator (optional)",
      "3 Asparagus spears",
      "8 oz Heavy cream",
      "½ cup Parmesan cheese",
      "9 oz Rigatoni",
      "1 oz Butter pat"
    ],
    instructions: [
      "Combine butter, seasoning, trinity, and artichokes in a large sauté pan.",
      "If ticket calls for alligator, add 3 oz gator here.",
      "Simmer until trinity tender (bell peppers should turn dull in color).",
      "Cut asparagus into thirds and add to pan.",
      "If ticket calls for shrimp, add 2 shrimp portions here and simmer until pink.",
      "Add one 8 oz scoop of Alfredo sauce.",
      "Add pre-cooked fettuccine noodles.",
      "Thoroughly mix sauce and noodles until completely coated.",
      "Add 1-2 oz of water if necessary for a creamy, loose texture.",
      "Serve in large pasta bowl, garnish with green onion."
    ]
  },
  {
    id: "sautee-cajun-chicken-alfredo-orzo",
    name: "One-Pot Cajun Chicken Alfredo Orzo",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Creamy Cajun-spiced chicken with orzo pasta in a rich Parmesan Alfredo sauce, all made in one pot.",
    yield: "4 servings",
    cookTime: "30 minutes",
    ingredients: [
      "1 tablespoon olive oil",
      "1 tablespoon butter",
      "1 lb boneless, skinless chicken breasts, diced",
      "2 teaspoons Cajun seasoning",
      "Salt and pepper, to taste",
      "3 cloves garlic, minced",
      "1 small yellow onion, diced",
      "1½ cups dry orzo pasta",
      "2¼ cups chicken broth",
      "½ cup heavy cream",
      "1 cup grated Parmesan cheese",
      "½ teaspoon smoked paprika (optional, for added depth)",
      "¼ teaspoon red pepper flakes (optional, for heat)",
      "½ cup chopped fresh parsley (for garnish)"
    ],
    instructions: [
      "Heat olive oil and butter in a large deep skillet or Dutch oven over medium-high heat.",
      "Season diced chicken with Cajun seasoning, salt, and pepper. Add to the pan and sear until browned and cooked through, about 5-6 minutes. Remove chicken and set aside.",
      "In the same pan, add garlic and onion. Cook for 2-3 minutes until fragrant and translucent.",
      "Add dry orzo and toast for 1-2 minutes, stirring constantly.",
      "Pour in chicken broth and bring to a gentle simmer. Reduce heat to low, cover, and cook for 10-12 minutes, stirring occasionally, until orzo is tender.",
      "Stir in heavy cream, Parmesan, smoked paprika, and red pepper flakes (if using). Return cooked chicken to the pot and mix well until creamy and thickened, about 2-3 minutes.",
      "Garnish with fresh parsley and extra Parmesan if desired. Serve hot."
    ]
  },
  {
    id: "sautee-bistro-medallion",
    name: "Bistro Medallion",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Pan-seared filet medallions with a golden crust, served with bleu butter.",
    ingredients: [
      "½ oz Butter",
      "½ oz Vegetable oil",
      "1 Bistro filet",
      "SPG seasoning",
      "Bleu butter (for serving)"
    ],
    instructions: [
      "Heat ½ oz butter and ½ oz vegetable oil in a small sauté pan.",
      "Coat 1 Bistro filet with SPG to create a crust on the meat.",
      "Place in the pan and sear until all sides are browned.",
      "Place entire pan in a 400° oven for 4 minutes.",
      "Turn steak over and cook for 4 minutes.",
      "Be sure to adjust cooking time based on the size of the cut.",
      "Allow steak to rest for 1 minute.",
      "Slice into 5 even medallions.",
      "Place on the side on a round plate in an arc.",
      "Serve with a side of softened Bleu butter."
    ],
    cookTime: "~10 minutes"
  },
  {
    id: "sautee-cajun-colette-pasta",
    name: "Cajun Colette Pasta",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Penne with bacon, sun-dried tomatoes, and Cajun spice in a creamy Parmesan sauce.",
    ingredients: [
      "1 oz Butter",
      "1 oz Red onion",
      "¼ oz Garlic",
      "1 oz Bacon bits",
      "1 oz Sun-dried tomatoes",
      "1 cup Heavy cream",
      "½ cup Parmesan cheese",
      "½ tbsp Cajun spice",
      "9 oz Penne Rigate",
      "1 oz Butter pat"
    ],
    instructions: [
      "Combine 1oz butter, red onions, sun-dried tomatoes and bacon in a large sauté pan.",
      "Simmer for 2 minutes until onions begin to turn translucent.",
      "Add garlic and simmer for 1 minute.",
      "Add cream and Parmesan and mix well.",
      "Cook on medium heat until sauce begins to simmer and thicken.",
      "Add Cajun spice and thoroughly mix with sauce.",
      "If the recipe calls for shrimp, add 2 shrimp portions and simmer until pink.",
      "Add pre-cooked penne noodles.",
      "Add two butter pats and mix in until completely melted.",
      "Thoroughly mix sauce and noodles until completely coated.",
      "Serve in large pasta bowl, garnish with green onions."
    ]
  },
  {
    id: "sautee-blackened-catfish",
    name: "Blackened Catfish",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Pan-blackened catfish fillet with a deep red Cajun spice crust.",
    ingredients: [
      "1 oz Butter",
      "1 catfish fillet",
      "Cajun spice"
    ],
    instructions: [
      "Heat 1oz of butter in a large sauté pan.",
      "Coat each side of a catfish fillet with Cajun spice, shake loose.",
      "Place belly side down in the butter.",
      "Keep the fish loose ensuring it doesn't stick to the pan.",
      "Once the seasoning in the pan is blackened, turn the fish over.",
      "Fish should be a deep red color, but not burned.",
      "Place the entire pan in a 400° oven for 7 minutes."
    ],
    cookTime: "~10 minutes total",
    internalTemp: "145°F"
  },
  {
    id: "sautee-catfish-jambalaya",
    name: "Catfish Jambalaya",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Blackened catfish served over jambalaya and topped with étouffée.",
    instructions: [
      "Heat 1 oz of butter in a large sauté pan.",
      "Coat each side of a catfish fillet with Cajun spice, shake loose.",
      "Place belly side down in the butter; keep the fish loose.",
      "Once the seasoning is blackened, turn the fish over.",
      "Fish should be a deep red color, but not burned.",
      "Place the entire pan in a 400° oven for 7 minutes.",
      "While fish is cooking, prepare a half Jambalaya and a cup of étouffée.",
      "Plate the half Jambalaya on a round plate on the side.",
      "Place the blackened catfish thicker side first on top of the Jambalaya.",
      "Top the catfish with the cup of étouffée.",
      "Allow the étouffée to fill the other side of the plate.",
      "Garnish with green onion."
    ]
  },
  {
    id: "sautee-chicken-sausage-jambalaya",
    name: "Chicken and Sausage Jambalaya",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Classic Louisiana jambalaya with chicken and smoked sausage.",
    ingredients: [
      "2 oz Trinity",
      "¼ oz Garlic",
      "2 ea Jambalaya Pack (1½ oz chicken, 1½ oz sausage each)",
      "4 oz Marinara",
      "4 oz Tomato juice",
      "2 lg Stewed tomato",
      "½ tbsp Worcestershire",
      "½ tsp Jambalaya seasoning",
      "1½ cups White Rice"
    ],
    instructions: [
      "Combine all ingredients except rice to a large sauté pan.",
      "Shred the stewed tomato by hand and discard core.",
      "Simmer until chicken is firm.",
      "Add white rice and mix thoroughly.",
      "Ensure any rice clusters are completely broken up.",
      "Served in large pasta bowl, garnish with green onion."
    ]
  },
  {
    id: "sautee-crawfish-monica",
    name: "Crawfish Monica",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "New Orleans Jazz Fest classic - pasta shells with crawfish and shrimp in creamy Cajun sauce.",
    ingredients: [
      "1 oz Butter",
      "1 tsp Garlic, minced",
      "1 oz Red Onion, diced",
      "1 oz Tomatoes, diced",
      "2 oz Crawfish tails",
      "8 ea Shrimp",
      "9 oz Pasta shells",
      "1 tbsp Cajun spice",
      "1 cup Heavy cream",
      "½ cup Parmesan, shredded",
      "1 oz Green onions, diced (divided)"
    ],
    instructions: [
      "Combine 1oz of butter and red onions in a large sauté pan.",
      "Simmer for 2 minutes until onions begin to turn translucent.",
      "Add garlic and remaining 1 oz butter. Simmer for 1 minute.",
      "Add cream and Parmesan and mix well.",
      "Cook on medium heat until sauce begins to simmer and thicken.",
      "Add shrimp and crawfish, cooking for about 1 minute until shrimp turn pink.",
      "Add Conchiglie, seasoning, ½ of green onions, mix well.",
      "Simmer 3-4 minutes until cream thickens.",
      "Served in large pasta bowl, garnish with remaining green onion."
    ]
  },
  {
    id: "sautee-duck-carrollton",
    name: "Duck Carrollton",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Pan-seared duck breast with raspberry cassis and cabernet reduction.",
    ingredients: [
      "5 oz Duck breast",
      "¼ cup Raspberry cassis",
      "¼ cup Trinity Oaks cabernet",
      "4 each Raspberries"
    ],
    instructions: [
      "Place duck breast in a small cold sauté pan skin side down.",
      "Turn to medium heat and render fat until skin is crispy golden brown, about 8 minutes.",
      "Flip over duck breast to skin side up.",
      "Place entire pan in a 400° oven for 7 minutes.",
      "Remove pan from oven and remove breast from pan.",
      "Set breast on cutting board to rest.",
      "Return pan to medium high heat and add cassis, cabernet and raspberries.",
      "Reduce sauce for 3-4 minutes until thickened.",
      "Slice duck into 5 even medallions.",
      "Place on the side on a round plate in an arc and top with raspberry reduction."
    ],
    cookTime: "~18-20 minutes"
  },
  {
    id: "sautee-grillades-and-grits",
    name: "Grillades and Grits",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "New Orleans brunch classic - braised beef medallions in rich gravy over creamy grits.",
    ingredients: [
      "1 tbsp Vegetable oil",
      "5 oz Flat iron steak",
      "½ cup Étouffée seasoning",
      "2 oz Trinity",
      "1 oz Tomatoes, diced",
      "1 pinch Garlic, minced",
      "1 tbsp Red wine vinegar",
      "1 cup Beef stock",
      "1 tbsp Parsley"
    ],
    instructions: [
      "Pound out the steak until it is about ¼ inch thick.",
      "Cut into 9 equal pieces.",
      "Dredge the pieces of beef in the étouffée seasoning, shaking off excess.",
      "Heat the oil in a stainless steel skillet over medium-high heat until hot but not smoking.",
      "Place the beef in the skillet and fry on both sides until browned.",
      "Transfer the beef to a plate.",
      "Sauté the trinity in the skillet until soft and translucent, about 3 minutes.",
      "Add the garlic and tomatoes and sauté for 2 minutes, scraping up any browned bits.",
      "Add 1 tbsp étouffée seasoning and whisk constantly.",
      "Add the beef broth and red wine vinegar, whisking continually until smooth.",
      "Return the beef to the skillet and bring to a simmer.",
      "Reduce heat to low and simmer for 6 minutes or until meat is very tender.",
      "Stir in the parsley and simmer for another 2 minutes.",
      "Serve the grillades and gravy ladled over hot grits."
    ]
  },
  {
    id: "sautee-shells-cheese",
    name: "Shells & Cheese",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Creamy shell pasta with melted cheddar, topped with breadcrumbs.",
    ingredients: [
      "½ oz Butter",
      "1 cup Heavy Cream",
      "½ cup Cheddar Cheese",
      "9 oz Shell pasta",
      "¼ tsp SPG",
      "½ oz Butter chip"
    ],
    instructions: [
      "Mix butter, cream, pasta and cheese in a large sauté pan over medium heat.",
      "Mix until cheese is melted and add SPG to taste.",
      "Remove from heat and add butter chip, stir until completely melted.",
      "Top with a pinch of mozzarella, a pinch of cheddar, and a pinch of breadcrumbs.",
      "Place in 400° oven until cheese is melted."
    ]
  },
  {
    id: "sautee-shrimp-crawfish-jambalaya",
    name: "Shrimp and Crawfish Jambalaya",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Seafood jambalaya loaded with shrimp and crawfish.",
    ingredients: [
      "2 oz Trinity",
      "4 oz Marinara",
      "4 oz Tomato juice",
      "2 lg Stewed tomato",
      "½ tbsp Worcestershire",
      "8 ea Shrimp",
      "2 oz Crawfish tails",
      "½ tsp Jambalaya seasoning",
      "1½ cups White Rice"
    ],
    instructions: [
      "Combine all ingredients except seafood and rice to a large sauté pan.",
      "Shred the stewed tomato by hand and discard core.",
      "Add shrimp and crawfish, cooking for about 1 minute until shrimp turn pink.",
      "Add white rice and mix thoroughly.",
      "Ensure any rice clusters are completely broken up.",
      "Served in large pasta bowl, garnish with green onion."
    ]
  },
  {
    id: "sautee-pompano-duarte",
    name: "Pompano Duarte",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Pan-seared pompano fillets topped with Louisiana Gulf shrimp in an herb beurre blanc sauce.",
    yield: "6 servings",
    ingredients: [
      "¼ cup clarified butter",
      "6 small pompano fillets, skinless (about 6 oz each)",
      "Salt and pepper",
      "¾ cup Garlic Butter with Herbsaint (see Batch recipes)",
      "1 lb Louisiana Gulf shrimp, peeled and deveined",
      "1 tsp fresh oregano, finely chopped",
      "1 tsp fresh thyme, finely chopped",
      "1 tsp fresh basil, finely chopped",
      "1 tsp red pepper flakes",
      "1 tsp black pepper, coarsely cracked",
      "½ cup diced tomatoes, canned, peeled and drained",
      "1 cup Beurre Blanc Sauce, warm (see Batch recipes)"
    ],
    instructions: [
      "PREP:",
      "Preheat oven to low heat and place 6 dinner plates inside to warm.",
      "Have Garlic Butter, herbs, spices, tomatoes, and Beurre Blanc ready near stove.",
      "",
      "COOK POMPANO:",
      "Place very large skillet over high heat and add clarified butter.",
      "Season fillets with salt and pepper.",
      "Sauté without crowding, 2-3 minutes per side until golden.",
      "Transfer to platter and keep warm in oven, loosely covered with foil.",
      "",
      "MAKE SAUCE:",
      "Add Garlic Butter to same skillet over medium heat.",
      "Add shrimp and cook until pink, about 2 minutes.",
      "Spoon off excess butter from pan.",
      "Add oregano, thyme, basil, red pepper flakes, black pepper, and tomatoes.",
      "Cook 2 minutes, stirring occasionally.",
      "Stir in warm Beurre Blanc Sauce.",
      "",
      "SERVE:",
      "Place pompano on warmed plates.",
      "Spoon sauce and shrimp over the fish.",
      "Serve immediately."
    ],
    tips: "Work in batches if skillet isn't large enough - don't crowd the fish. Have all components prepped and ready before cooking."
  },
  {
    id: "sautee-crab-oscar",
    name: "Crab Oscar",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Award-winning steakhouse classic - NY strip topped with jumbo lump crab, asparagus, and hollandaise sauce.",
    ingredients: [
      "1 NY strip steak (10-12 oz)",
      "Salt and freshly ground black pepper",
      "2 tbsp olive oil or butter",
      "4 oz jumbo lump crab meat",
      "2 tbsp butter (for crab)",
      "4-5 asparagus spears, trimmed",
      "1 tbsp butter (for asparagus)",
      "Pinch of Old Bay seasoning",
      "1 tsp lemon juice",
      "Hollandaise sauce (see Batch recipes)"
    ],
    instructions: [
      "PREPARE ASPARAGUS:",
      "Sauté asparagus in 1 tbsp butter over medium heat until tender-crisp, about 3-5 minutes.",
      "Season with salt and pepper. Set aside and keep warm.",
      "",
      "PREPARE CRAB:",
      "Gently warm jumbo lump crab meat in 2 tbsp butter over low heat.",
      "Add a pinch of Old Bay and squeeze of lemon juice.",
      "Be careful not to break up the crab lumps. Keep warm.",
      "",
      "COOK FILET:",
      "Pat steak dry and season generously with salt and pepper.",
      "Heat cast iron skillet over medium-high heat with oil.",
      "Sear filet 4 minutes per side until nicely browned.",
      "Transfer to 450°F oven for 6-8 minutes for medium-rare (internal temp 130°F).",
      "Let rest 5 minutes before plating.",
      "",
      "ASSEMBLE:",
      "Place filet on plate.",
      "Top with 4-5 asparagus spears arranged neatly.",
      "Add generous portion of warm lump crab meat on top.",
      "Drizzle hollandaise sauce over the entire dish.",
      "Garnish with flaky sea salt and serve immediately."
    ],
    tips: "Use fresh jumbo lump crab for best presentation. Let steak rest at room temperature 20-30 minutes before cooking. Traditional layering: steak → asparagus → crab → sauce.",
    internalTemp: "130°F for medium-rare",
    portionSize: "10-12 oz NY strip, 4 oz crab"
  },
  {
    id: "sautee-chicken-piccata",
    name: "Chicken Piccata with Penne and Artichokes",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Pan-seared chicken breast with a lemon-caper-artichoke sauce over penne pasta. Prep time: 10 minutes.",
    ingredients: [
      "1/2 chicken breast, boneless and skinless",
      "1/4 cup all-purpose flour",
      "Salt and freshly ground black pepper, to taste",
      "2 tbsp olive oil",
      "1/4 cup white wine",
      "1 tbsp capers, rinsed and drained",
      "1/4 cup artichoke quarters, drained",
      "2 tbsp fresh lemon juice",
      "2 tbsp heavy cream",
      "1 tbsp unsalted butter",
      "4.5 oz penne pasta, cooked",
      "2 tbsp chopped fresh parsley",
      "Lemon slices, for garnish"
    ],
    instructions: [
      "PREPARE CHICKEN:",
      "Flatten the chicken breast to an even thickness of about 1/4 inch using a meat mallet or rolling pin.",
      "Season both sides of the chicken with salt and pepper.",
      "Dredge the chicken in flour, shaking off any excess.",
      "",
      "COOK CHICKEN:",
      "Heat the olive oil in a skillet over medium-high heat.",
      "Once the oil is hot, add the chicken and cook for about 3-4 minutes on each side, or until golden brown and cooked through.",
      "Remove the chicken from the skillet and set aside on a plate.",
      "",
      "MAKE SAUCE:",
      "In the same skillet, add the white wine and bring to a simmer, using it to deglaze the pan and scrape up any browned bits from the bottom.",
      "Stir in the capers, artichoke quarters, and lemon juice, and simmer for about 2-3 minutes to allow the sauce to reduce slightly.",
      "Add the butter and heavy cream, swirling the skillet to melt the butter and blend the cream into the sauce.",
      "",
      "COMBINE AND SERVE:",
      "Add the cooked penne to the sauce in the skillet, tossing to coat the pasta evenly.",
      "Plate the sauced penne, then top with the chicken breast.",
      "Sprinkle chopped parsley over the top and serve immediately, garnished with lemon slices."
    ],
    portionSize: "1/2 chicken breast, 4.5 oz pasta"
  },
  {
    id: "sautee-chicken-sausage-maque-choux",
    name: "Chicken and Sausage Maque Choux",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Serves: 1. Preparation time: 10 minutes.",
    ingredients: [
      "1.5 oz chicken, cut into bite-sized pieces",
      "1.5 oz smoked sausage, sliced",
      "1 oz mixed \"trinity\" (chopped onion, green bell pepper, celery)",
      "1/2 oz bell pepper, chopped",
      "1/2 oz red onion, chopped",
      "1 teaspoon minced garlic",
      "1 cup corn kernels, fresh or frozen",
      "1/2 tablespoon Cajun seasoning",
      "1 tablespoon vegetable oil",
      "2 tablespoons heavy cream"
    ],
    instructions: [
      "Heat butter: In a medium skillet, heat the clarified butter over medium-high heat.",
      "Sauté Protein: Add the chicken and smoked sausage to the skillet. Sauté until the chicken is golden and nearly cooked through, about 5-7 minutes.",
      "Add Vegetables: Incorporate the \"trinity\" mix, additional bell pepper, and red onion to the skillet. Cook until the vegetables are softened, about 5 minutes.",
      "Garlic and Seasoning: Stir in the minced garlic and cook for about 1 minute until fragrant. Sprinkle the Cajun seasoning evenly over the contents of the skillet and mix thoroughly.",
      "Simmer with Corn: Add the corn kernels to the skillet and stir well to combine all the ingredients. Increase heat to high, and allow corn to slightly brown, about 5 minutes.",
      "Enrich with Cream: Stir in the heavy cream and continue to cook for an additional 2 minutes, allowing the dish to thicken slightly and the flavors to meld beautifully."
    ]
  },
  {
    id: "sautee-shrimp-scampi",
    name: "Shrimp Scampi",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Classic shrimp scampi with garlic, white wine, and butter over penne pasta.",
    ingredients: [
      "1 bag portioned shrimp",
      "4.5 oz penne pasta",
      "1 oz ladle veggie stock",
      "1 oz ladle clarified butter",
      "1 oz white wine",
      "1 oz fresh diced tomato",
      "1 tsp seasoning mix",
      "1 butter pod",
      "1 tbsp heavy cream",
      "1/4 tsp chopped garlic",
      "1 tsp chopped green onions",
      "1 lemon wedge"
    ],
    instructions: [
      "On a large sautée pan, add the clarified butter and shrimp. Let it get hot.",
      "Add garlic, seasoning mix, and white wine. Let it reduce.",
      "Add veggie stock and let it get hot.",
      "Squeeze lemon over the pan.",
      "Add diced tomatoes and cooked penne pasta.",
      "Toss to combine all ingredients.",
      "Add the heavy cream and butter pod.",
      "Fold the pasta to let the butter melt and coat everything.",
      "Serve in a salad bowl and garnish with chopped green onions."
    ],
    portionSize: "1 bag shrimp, 4.5 oz pasta"
  },
  {
    id: "sautee-shrimp-and-grits",
    name: "Shrimp and Grits",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Southern comfort classic - Cajun shrimp over creamy jalapeño cheddar grits.",
    ingredients: [
      "2 cups Veggie stock",
      "1 cup Milk",
      "¾ cup Polenta",
      "½ oz Diced jalapeño",
      "½ tbsp Salt",
      "1 cup Cheddar cheese",
      "2 portions Shrimp",
      "½ tbsp Cajun Spice",
      "½ oz Butter"
    ],
    instructions: [
      "Combine stock, milk, polenta, jalapeños, and salt in a medium saucepot.",
      "Bring to a boil.",
      "Continue stirring to ensure the polenta does not stick to the bottom.",
      "Use the whisk to scrape any grits off of the bottom before they burn.",
      "Boil until grits are thick, about 15 minutes.",
      "Add one-cup cheddar and stir thoroughly.",
      "Sauté 2 bags of shrimp with ½ tbsp Cajun Spice and ½ oz butter.",
      "Pour grits into large pasta bowl.",
      "Make a + with cheddar and green onions.",
      "Pour shrimp on center."
    ],
    cookTime: "~15 minutes for grits"
  },
  {
    id: "sautee-southwest-shells-cheese",
    name: "Southwest Shells & Cheese",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Creamy shell pasta with jalapeños and bacon, topped with melted cheese.",
    ingredients: [
      "½ oz Butter",
      "1 oz Jalapeños, diced",
      "1 oz Bacon bits",
      "2 oz Vegetable stock",
      "1 cup Heavy Cream",
      "½ cup Cheddar Cheese",
      "9 oz Shell pasta",
      "¼ tsp SPG",
      "½ oz Butter chip"
    ],
    instructions: [
      "Combine butter, jalapeños, bacon and stock in large sauté pan over medium high heat.",
      "Simmer until jalapeños are tender and stock is cooked out.",
      "Mix in cream, pasta and cheese and reduce to medium heat.",
      "Mix until cheese is melted and add SPG to taste.",
      "Remove from heat and add butter chip, stir until completely melted.",
      "Top with a pinch of mozzarella, a pinch of cheddar, and a pinch of breadcrumbs.",
      "Place in 400° oven until cheese is melted."
    ]
  },
  {
    id: "sautee-steak-st-charles",
    name: "Steak St. Charles",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Pan-seared flat iron steak with garlic, sun-dried tomatoes, and red wine demi-glace.",
    ingredients: [
      "1 oz Vegetable oil",
      "5 oz Flat iron steak",
      "Salt and pepper",
      "1 oz Cold butter chips",
      "½ tsp Minced garlic",
      "½ oz Sun-dried tomatoes",
      "1 tbsp Red wine vinegar",
      "½ cup Beef stock"
    ],
    instructions: [
      "Heat ½ oz vegetable oil in a small sauté pan.",
      "Lightly coat a 5 oz flat iron steak with salt and pepper.",
      "When the pan begins to smoke, place in the pan and sear on each side for 3 minutes for medium rare.",
      "When the steak is about one minute from being finished add 1 oz cold butter chips.",
      "Remove from the pan and place the steak on a cutting board to rest.",
      "Spoon about a tablespoon of butter from the pan to the top of the steak.",
      "Pour out the remaining butter and oil from the pan and return to heat.",
      "Add minced garlic, sun dried tomatoes, and deglaze with red wine vinegar.",
      "Add beef stock and reduce until almost syrupy.",
      "Remove from heat and add 1 oz cold butter.",
      "Cut steak into 6 equal medallions.",
      "Once butter is completely melted pour over sliced steak."
    ],
    cookTime: "~8-10 minutes"
  },

  // SAUTÉE STATION - SIDES
  {
    id: "sautee-asparagus",
    name: "Asparagus",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Grilled asparagus spears with butter and hollandaise.",
    yield: "7-8 spears",
    ingredients: [
      "8 Asparagus Spears",
      "½ oz Butter",
      "⅛ tsp SPG",
      "Hollandaise (for topping)"
    ],
    instructions: [
      "On the flattop grill add butter and asparagus spears.",
      "Season with SPG.",
      "Cook until hot and slightly browned.",
      "Serve in a boat topped with Hollandaise."
    ]
  },
  {
    id: "sautee-crawfish-mac-cheese",
    name: "Crawfish Mac & Cheese",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Creamy mac and cheese loaded with Cajun crawfish.",
    yield: "4½ oz Portion",
    ingredients: [
      "1 oz Crawfish tails",
      "½ tbsp Cajun spice",
      "½ oz Butter",
      "¼ oz Butter",
      "½ cup Heavy Cream",
      "2 oz Cheddar Cheese",
      "4½ oz Macaroni",
      "1 Pinch of SPG"
    ],
    instructions: [
      "In a small sauté pan add crawfish, Cajun spice, and ½ oz butter.",
      "Simmer until crawfish is hot.",
      "Add ¼ oz butter, cream, cheese, and macaroni.",
      "Add a pinch of SPG.",
      "Melt cheese on medium heat until fully incorporated.",
      "Overcooking will cause the cheese to separate.",
      "Pour into a 10 oz boat.",
      "Top with a pinch of mozzarella, a pinch of cheddar, and a pinch of breadcrumbs.",
      "Place in 400° oven until cheese is melted."
    ]
  },
  {
    id: "sautee-dirty-rice",
    name: "Dirty Rice",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Classic Cajun dirty rice with seasoned ground meat.",
    yield: "6 oz",
    instructions: [
      "Fill 1 soup cup with dirty rice.",
      "Microwave for 60 seconds.",
      "Serve immediately."
    ],
    portionSize: "6 oz"
  },
  {
    id: "sautee-fondant-potatoes",
    name: "Fondant Potatoes (Pommes Fondantes)",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Meltingly tender, buttery potatoes with crispy golden faces braised in stock with thyme and garlic.",
    yield: "4 servings",
    cookTime: "35-40 minutes",
    ingredients: [
      "4 large starchy potatoes (Russet, Yukon Gold, or King Edward) - about 2-2½ lbs total",
      "4 tbsp unsalted butter, cut into small cubes",
      "2 tbsp neutral oil (vegetable, canola, or grapeseed)",
      "1 cup (240 ml) chicken stock (or vegetable stock for vegetarian)",
      "3-4 garlic cloves, lightly smashed",
      "2-3 sprigs fresh thyme (or ½ tsp dried)",
      "1 sprig fresh rosemary (optional)",
      "Kosher salt and freshly ground black pepper"
    ],
    instructions: [
      "PREP THE POTATOES:",
      "Peel the potatoes. Trim the ends so each piece is a uniform cylinder (about 2 inches tall). Cut into 1½-2 inch thick rounds (you should get 2-3 per potato). Pat very dry with paper towels - moisture prevents browning.",
      "",
      "SEAR THE FACES:",
      "Heat the oil in a heavy oven-safe skillet over medium-high heat until shimmering. Season potato cylinders generously with salt and pepper. Place them flat-side down (don't crowd; work in batches if needed). Cook without moving 6-8 minutes until deep golden brown. Flip and repeat on the second flat side.",
      "",
      "BUILD THE BRAISE:",
      "Reduce heat to medium-low. Scatter butter cubes around the potatoes; it will melt and foam. Add garlic, thyme, and rosemary. Tilt the pan and baste the potatoes with the foaming butter for 30-60 seconds.",
      "",
      "ADD STOCK & OVEN-FINISH:",
      "Pour in the stock - it should come about halfway up the potatoes (add a splash more if needed). Bring to a gentle simmer. Cover with a tight lid or foil and transfer to a 375°F preheated oven. Bake 20-25 minutes until a skewer slides through with no resistance.",
      "",
      "CRISP THE EDGES (optional but recommended):",
      "Remove lid/foil. Increase oven to 425°F or return skillet to medium-high stovetop. Baste again and cook 5-7 minutes until the stock reduces to a glossy butter sauce and the edges crisp up.",
      "",
      "SERVE:",
      "Transfer potatoes to a warm platter. Spoon the reduced butter-stock sauce over the top. Garnish with fresh thyme leaves and flaky salt. Serve immediately."
    ],
    tips: "Make-ahead: Sear the potatoes, cool, and refrigerate. Finish with butter/stock/oven when ready. For extra flavor, add a splash of white wine with the stock, or finish with grated Parmesan. If potatoes are browning too fast on the stove, lower the heat - patience yields the best crust."
  },
  {
    id: "sautee-green-beans",
    name: "Green Beans",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Sautéed green beans with garlic, bacon, and green onions.",
    yield: "3½ oz",
    ingredients: [
      "½ tbsp Butter",
      "1 pinch Garlic",
      "1 pinch Green onions",
      "1 pinch Bacon bits",
      "1 oz Water",
      "3½ oz Green beans"
    ],
    instructions: [
      "In a small sauté pan add butter, garlic, green onions, bacon bits, and water.",
      "Add green beans.",
      "Cook on high heat until water is completely evaporated.",
      "Cook until bacon is crisp again.",
      "Do not brown the beans."
    ]
  },
  {
    id: "sautee-grilled-potatoes",
    name: "Grilled Potatoes",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Pan-fried quartered potatoes with caramelized red onions.",
    yield: "12-15 pieces",
    ingredients: [
      "½ oz Clarified Butter",
      "12-15 pieces Potatoes (quartered)",
      "1 oz Red Onion",
      "⅛ tsp SPG"
    ],
    instructions: [
      "Pour ½ oz butter in a small sauté pan on high heat.",
      "Place 12-15 quartered potato pieces into hot butter and brown one side.",
      "Season with a pinch of SPG.",
      "Add red onions and toss with potato.",
      "Sweat onions and brown the other side of the potatoes.",
      "Strain any excess butter out of the pan before serving."
    ]
  },
  {
    id: "sautee-jalapeno-corn",
    name: "Jalapeño Corn",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Creamy corn with jalapeños and cream cheese.",
    yield: "1 cup",
    ingredients: [
      "¼ oz Butter",
      "1 cup Corn prep",
      "2 oz Cream prep",
      "1 oz Water"
    ],
    instructions: [
      "In a small sauté pan add butter, corn prep, cream prep, and water.",
      "Melt cream cheese and mix thoroughly until pan is simmering.",
      "Serve in a 10 oz boat."
    ]
  },
  {
    id: "sautee-jalapeno-mac-cheese",
    name: "Jalapeño Mac & Cheese",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Creamy mac and cheese with spicy jalapeños and crispy bacon.",
    yield: "4½ oz",
    ingredients: [
      "1 oz Diced jalapeños",
      "1 oz Bacon bits",
      "½ oz Water",
      "¼ oz Butter",
      "½ cup Heavy Cream",
      "2 oz Cheddar Cheese",
      "4½ oz Macaroni",
      "1 Pinch of SPG"
    ],
    instructions: [
      "In a small sauté pan add jalapeños, bacon bits, and water.",
      "Simmer until jalapeños are tender and the bacon is crisp.",
      "Add butter, cream, cheese, and macaroni.",
      "Add a pinch of SPG.",
      "Melt cheese on medium heat until fully incorporated.",
      "Overcooking will cause the cheese to separate.",
      "Pour into a 10 oz boat.",
      "Top with a pinch of mozzarella, a pinch of cheddar, and a pinch of breadcrumbs.",
      "Place in 400° oven until cheese is melted."
    ]
  },
  {
    id: "sautee-mac-cheese",
    name: "Mac & Cheese",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Classic creamy macaroni and cheese with a crispy breadcrumb top.",
    yield: "4½ oz",
    ingredients: [
      "¼ oz Butter",
      "½ cup Heavy Cream",
      "2 oz Cheddar Cheese",
      "4½ oz Macaroni",
      "1 Pinch of SPG"
    ],
    instructions: [
      "In a small sauté pan add butter, cream, cheese, and macaroni.",
      "Add a pinch of SPG.",
      "Melt cheese on medium heat until fully incorporated.",
      "Overcooking will cause the cheese to separate.",
      "Pour into a 10 oz boat.",
      "Top with a pinch of mozzarella, a pinch of cheddar, and a pinch of breadcrumbs.",
      "Place in 400° oven until cheese is melted."
    ]
  },
  {
    id: "sautee-mashed-potatoes",
    name: "Mashed Potatoes",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Creamy mashed potatoes served with the appropriate gravy.",
    yield: "#8 Scoop",
    instructions: [
      "Serve as a side using a #8 level scoop.",
      "Top with gravy if accompanying entrée calls for gravy.",
      "Top with sausage gravy if served with chicken fried steak.",
      "Top with mushroom gravy if served with smoked meatloaf."
    ]
  },

  // SAUTÉE STATION - KIDS MENU
  {
    id: "sautee-kids-chicken-nuggets",
    name: "Chicken Nuggets",
    station: "sautee",
    category: "kids",
    contentType: "recipe",
    description: "Hand-breaded chicken nuggets served with fries.",
    yield: "4 chicken nuggets, ½ order of fries",
    instructions: [
      "Cut one breast in half and return one half to storage container.",
      "Cut the remaining half into 4 equal parts.",
      "Coat each part in seasoned flour.",
      "Drop into egg wash, then coat in flour again.",
      "Make sure there are no wet spots exposed.",
      "Cook in fryer for 2 minutes.",
      "Served with ½ order of fries."
    ],
    cookTime: "2 minutes"
  },
  {
    id: "sautee-kids-grilled-cheese",
    name: "Grilled Cheese",
    station: "sautee",
    category: "kids",
    contentType: "recipe",
    description: "Classic grilled cheese sandwich with Texas toast and cheddar.",
    yield: "1 sandwich with ½ order of fries",
    instructions: [
      "Pour ½ oz of butter on the flat-top and place 2 slices of Texas toast in the butter.",
      "Do not use the butter wheel as the bread is very soft.",
      "Toast the bread until golden brown, then turn over to toast the other side.",
      "Cover one piece of bread with 2 oz of cheddar cheese and close the sandwich.",
      "Microwave for 20 seconds.",
      "Place back on the flat-top grill and toast both sides of the sandwich.",
      "Cut the same way as the Reuben and BLT.",
      "Served with a half order of fries."
    ]
  },
  {
    id: "sautee-kids-corndogs-fries",
    name: "Corndogs & Fries",
    station: "sautee",
    category: "kids",
    contentType: "recipe",
    description: "Mini corndogs with a side of fries.",
    yield: "4 corndogs, ½ order of fries",
    instructions: [
      "Remove 4 corndogs from the freezer.",
      "Cook in microwave for 20 seconds.",
      "Place in fryer basket and fry until floating, about 1 minute.",
      "Serve on an oval plate with ½ order of fries."
    ],
    cookTime: "~1 minute"
  },
  {
    id: "sautee-kids-catfish-nuggets",
    name: "Catfish Nuggets",
    station: "sautee",
    category: "kids",
    contentType: "recipe",
    description: "Kid-sized catfish nuggets with double cornmeal batter.",
    yield: "4 catfish nuggets, ½ order of fries",
    instructions: [
      "Cut a single catfish fillet in half lengthwise down the seam.",
      "Cut one-half fillet into quarters.",
      "Coat each piece in cornmeal batter.",
      "Remove and place in seafood wash.",
      "Remove and place back in the Zatarain's cornmeal batter.",
      "Ensure that each piece is fully coated with no wet areas.",
      "Extra batter should be shaken loose before placing in the fryer basket.",
      "Place catfish pieces in the basket then drop the basket in oil all at once.",
      "Cook until golden brown and 155°F."
    ],
    internalTemp: "155°F"
  },
  {
    id: "sautee-kids-corndogs-mac",
    name: "Corndogs & Mac & Cheese",
    station: "sautee",
    category: "kids",
    contentType: "recipe",
    description: "Mini corndogs served with creamy mac and cheese.",
    yield: "2 corndogs, 4½ oz mac & cheese",
    ingredients: [
      "2 Corndogs",
      "¼ oz Butter",
      "½ cup Heavy Cream",
      "2 oz Cheddar Cheese",
      "4½ oz Macaroni",
      "1 Pinch of salt"
    ],
    instructions: [
      "In a small sauté pan add butter, cream, cheese, and macaroni.",
      "Add a pinch of salt.",
      "Melt cheese on medium heat until fully incorporated.",
      "Overcooking will cause the cheese to separate.",
      "Pour mac and cheese into a 10 oz boat.",
      "Prepare corndogs and serve alongside."
    ]
  },

  // =====================================================
  // BATCH STATION RECIPES
  // =====================================================

  // BATCH STATION - COOKING TIPS
  {
    id: "batch-cooking-white-wine",
    name: "Cooking with White Wine",
    station: "batch",
    category: "tips",
    contentType: "prep",
    description: "Guide to selecting the right white wine for different dishes - cream sauces, seafood, and vegetables.",
    ingredients: [
      "CREAM SAUCES & GRAVIES: Rich dry whites (Chardonnay)",
      "SEAFOOD & SHELLFISH: Crisp dry whites (Pinot Grigio, Vinho Verde)",
      "VEGETABLES: Light dry whites (Sauvignon Blanc, Viognier)"
    ],
    instructions: [
      "WHITE MEAT, CREAM SAUCES & GRAVIES:",
      "Use rich dry whites like Chardonnay for cream sauces, gravy, and chicken.",
      "Cook wine separately and reduce to half before adding cream.",
      "Most recipes call for 1/2 cup to 3/4 cup of wine.",
      "Regularly taste while cooking to balance acidity and avoid sour sauce.",
      "",
      "SEAFOOD & SHELLFISH:",
      "Use crisp dry whites like Pinot Grigio for a fruity, mineral character.",
      "Add wine to broth to steam or poach mussels, clams, and oysters.",
      "Be careful not to over-extract - a little acidity cuts through fatty fish.",
      "",
      "VEGETABLES:",
      "Use light dry whites like Sauvignon Blanc for herbal, floral notes.",
      "Splash wine in sauté pan to deglaze after cooking vegetables.",
      "Great for artichoke, tomato dishes, chard, eggplant, peppers, mushrooms.",
      "Add butter and lemon for perfect balance.",
      "",
      "GENERAL TIPS:",
      "Add a few tbsp wine to marinades to tenderize meat.",
      "The longer you cook, the less alcohol remains (up to 2.5 hrs to fully remove).",
      "Open, refrigerated white wine is drinkable for 1 week, good for cooking for 2 weeks."
    ],
    tips: "For cream sauces, always reduce wine separately before adding cream to avoid curdling and balance acidity."
  },

  // BATCH STATION - PIES & PASTRY
  {
    id: "batch-classic-boudin",
    name: "Classic Boudin",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Traditional Louisiana boudin - pork and rice sausage with Cajun seasonings. Can be stuffed in casing, made into balls, or served as rice dressing.",
    yield: "Large batch (freezer-friendly)",
    ingredients: [
      "10 lbs pork roast (pork butt works)",
      "4 medium onions (3 whole for boiling, 1 raw for grinding)",
      "5 shallots, whole",
      "2 bell peppers, whole",
      "3 bunches green onion, chopped fine",
      "1 bunch fresh parsley, chopped fine",
      "1 tsp white pepper",
      "2 tbsp salt",
      "1½ tbsp black pepper",
      "5 tbsp cayenne",
      "9¾ cups cooked rice",
      "1 package sausage casing",
      "Breadcrumbs (for boudin balls)"
    ],
    instructions: [
      "BOIL MEAT:",
      "In large stockpot, combine pork roast, 5 whole shallots, 3 whole onions, and 2 whole bell peppers.",
      "Cover with water and boil until meat separates from bone.",
      "Remove roast and trim fat. Reserve stock for cooking rice.",
      "",
      "GRIND:",
      "Using meat grinder, grind together the cooked meat with boiled onions, shallots, and peppers.",
      "Also grind in 1 additional raw onion.",
      "",
      "SEASON:",
      "Return meat mixture to pot.",
      "Add green onion and parsley (both chopped fine).",
      "Add white pepper, salt, black pepper, and cayenne.",
      "Stir thoroughly.",
      "",
      "ADD RICE:",
      "Stir in cooked rice.",
      "Keep consistency 'wet' but not too wet to handle.",
      "",
      "FINISH:",
      "Stuff into casing, make boudin balls, or serve as rice dressing.",
      "",
      "TO REHEAT FROM FROZEN:",
      "For links: Boil in water for 10 minutes.",
      "For balls: Roll in breadcrumbs before freezing, then deep fry until golden or bake at 350°F for 20 minutes, turning once."
    ],
    tips: "Pro tip: Cook your rice with the reserved pork cooking liquid for extra flavor. Most of this batch will freeze well for future use."
  },
  {
    id: "batch-natchitoches-meat-pie",
    name: "Classic Natchitoches Meat Pie",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Traditional Louisiana hand pies with seasoned beef and pork filling. Freeze before frying for best results.",
    yield: "28 meat pies",
    ingredients: [
      "FOR THE FILLING:",
      "2 tbsp vegetable oil, divided",
      "½ lb ground beef",
      "½ lb ground pork",
      "1 tsp dried oregano",
      "¾ tsp kosher salt",
      "½ tsp crushed red pepper",
      "¼ tsp black pepper",
      "⅛ tsp cayenne pepper",
      "2 tbsp all-purpose flour",
      "½ cup minced yellow onion",
      "2 cloves garlic, minced",
      "¼ cup finely chopped red bell pepper",
      "1 stalk celery, finely chopped",
      "",
      "FOR THE DOUGH:",
      "5¾ cups all-purpose flour",
      "2½ tsp salt",
      "1¼ tsp baking powder",
      "¾ cup lard",
      "2 large eggs",
      "1½ cups whole milk",
      "",
      "FOR ASSEMBLY:",
      "1 egg + 2 tbsp water (egg wash)",
      "Vegetable oil for frying"
    ],
    instructions: [
      "MAKE DOUGH:",
      "Whisk together flour, salt, and baking powder.",
      "Cut in lard until crumbly using pastry blender or forks.",
      "Whisk eggs and milk together, pour over flour mixture.",
      "Toss lightly until dough forms, knead twice, rest 10 minutes.",
      "Cover and refrigerate until using.",
      "",
      "MAKE FILLING:",
      "Heat 1 tbsp oil over medium heat.",
      "Add beef, pork, oregano, salt, red pepper, black pepper, and cayenne.",
      "Cook until browned and crumbly, about 6 minutes. Drain excess liquid.",
      "Sprinkle with flour and stir to combine.",
      "",
      "COOK VEGETABLES:",
      "In separate pan, heat remaining 1 tbsp oil.",
      "Cook onion until tender, about 2 minutes.",
      "Add garlic, bell pepper, and celery; cook 5 minutes.",
      "Stir into meat mixture. Cool completely.",
      "",
      "ASSEMBLE:",
      "Roll dough pieces to 5½-inch circles.",
      "Cut with 5-inch round cutter.",
      "Place 2 tbsp filling in center of each round.",
      "Brush edges with egg wash, fold over, press to seal.",
      "Crimp edges with fork, cut along edges with pastry wheel.",
      "Freeze pies before frying.",
      "",
      "FRY:",
      "Heat oil to 370°F (4 inches deep).",
      "Fry frozen pies 3 at a time until golden brown, about 2 minutes per side.",
      "Drain on wire rack."
    ],
    tips: "Freezing before frying is key - it helps the pies hold their shape and cook evenly. These freeze beautifully for make-ahead convenience."
  },
  {
    id: "batch-uncle-roger-fried-rice",
    name: "Uncle Roger's Egg Fried Rice",
    station: "batch",
    category: "sides",
    contentType: "recipe",
    description: "Veggie-loaded egg fried rice with cabbage, corn, and peppers. Add your choice of meat for a complete meal.",
    yield: "4-6 servings",
    ingredients: [
      "1 tbsp sesame oil",
      "2 garlic cloves, chopped",
      "1 piece ginger, chopped",
      "1 large onion, chopped",
      "2 celery stalks, chopped",
      "1 cup corn kernels",
      "2 carrots, chopped",
      "2 green bell peppers, diced",
      "1 cabbage, shredded",
      "3 eggs",
      "1 tbsp soy sauce",
      "Salt to taste",
      "Meat of your choice (optional)",
      "3 cups day-old cooked white rice",
      "Chopped spring onion for garnish"
    ],
    instructions: [
      "AROMATICS:",
      "Heat 1 tbsp sesame oil in skillet or wok.",
      "Add chopped garlic and ginger, fry for a few seconds.",
      "",
      "SAUTÉ VEGETABLES:",
      "Add onion and celery, sauté until softened.",
      "Stir in corn, carrots, bell peppers, and shredded cabbage.",
      "Sauté for a couple of minutes - don't overcook, leave some crunch.",
      "",
      "COOK EGGS:",
      "Move veggies to side of pan.",
      "Pour in 3 eggs and scramble until cooked.",
      "Mix eggs with vegetables.",
      "",
      "SEASON:",
      "Add 1 tbsp soy sauce and salt to taste.",
      "",
      "ADD MEAT (optional):",
      "Toss in meat of your choice.",
      "Let cook for a couple of minutes.",
      "",
      "FINISH:",
      "Stir in 3 cups day-old rice.",
      "Let cook for a few minutes.",
      "Turn off heat and garnish with chopped spring onion."
    ],
    tips: "Day-old rice is essential - fresh rice will be too wet and sticky. Keep vegetables slightly crunchy for best texture."
  },
  {
    id: "batch-fried-rice",
    name: "Fried Rice",
    station: "batch",
    category: "sides",
    contentType: "recipe",
    description: "Easy homemade fried rice ready in 30 minutes. Add chicken to make it a full meal.",
    yield: "2 servings",
    cookTime: "25 minutes",
    ingredients: [
      "1 cup jasmine rice",
      "1¾ cup chicken broth (or water)",
      "3 tsp sesame oil, divided",
      "2 eggs",
      "⅓ cup shoestring carrots",
      "⅓ cup frozen peas",
      "¼ cup green onion, sliced (plus more for garnish)",
      "⅓ cup fresh bean sprouts",
      "3 tbsp soy sauce",
      "½ tsp ground mustard",
      "½ tsp minced ginger",
      "1 tsp minced garlic",
      "2 tsp molasses"
    ],
    instructions: [
      "COOK RICE:",
      "Heat chicken broth to boiling in saucepan.",
      "Add rice and turn down to simmer 15 minutes until liquid is gone and rice is fluffy.",
      "Remove from heat and set aside.",
      "",
      "MAKE SAUCE:",
      "While rice cooks, whisk together soy sauce, mustard, ginger, garlic, and molasses.",
      "Set aside.",
      "",
      "SCRAMBLE EGGS:",
      "Heat stir fry pan and add 1 tsp sesame oil.",
      "Crack eggs into pan and scramble.",
      "",
      "STIR FRY VEGETABLES:",
      "Add 1 tsp sesame oil to pan.",
      "Add carrots, green onion, peas, and bean sprouts.",
      "Stir fry 3-4 minutes.",
      "",
      "ADD RICE:",
      "Add remaining 1 tsp sesame oil and rice.",
      "Stir fry 3-4 minutes.",
      "Spread rice around pan and up sides so it's spread out as much as possible.",
      "",
      "FINISH:",
      "Add soy sauce mixture.",
      "Stir fry additional 3-4 minutes.",
      "Serve topped with green onions."
    ],
    tips: "Spread the rice thin in the pan for best results. Day-old rice works even better as it's drier. Add cooked chicken or shrimp to make it a complete meal."
  },
  {
    id: "batch-loaded-baked-potato-soup",
    name: "Loaded Baked Potato Soup",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Rich, creamy potato soup loaded with bacon, ham, cheddar, and sour cream. Ultimate comfort food.",
    yield: "8-10 servings",
    ingredients: [
      "9 slices thick cut bacon, diced",
      "12 tbsp butter",
      "⅔ cup all-purpose flour",
      "5 cups whole milk",
      "2 cups heavy cream",
      "1 cup buttermilk (Bulgarian if available)",
      "5 russet potatoes, baked, peeled and cubed",
      "½ cup scallions",
      "2 cups leftover ham, diced",
      "2 cups shredded extra sharp cheddar (freshly shredded)",
      "1 cup sour cream",
      "2 tsp coarsely ground black pepper",
      "1 tsp kosher salt"
    ],
    instructions: [
      "COOK BACON:",
      "Cook diced bacon in large skillet over medium heat until browned.",
      "Remove and set aside.",
      "",
      "MAKE ROUX:",
      "In large Dutch oven or stockpot, melt butter over med-low heat.",
      "Whisk in flour until smooth (no lumps).",
      "",
      "ADD LIQUIDS:",
      "Gradually stir in milk, cream, and buttermilk.",
      "Whisk constantly until incorporated and slightly thickened.",
      "Add potatoes and scallions.",
      "Bring to a boil, stirring frequently and scraping bottom.",
      "",
      "SIMMER:",
      "Turn heat to low simmer.",
      "Cover and cook 10 minutes.",
      "",
      "FINISH:",
      "Add ham, bacon, cheese, sour cream, salt, and pepper.",
      "Stir until cheese is melted.",
      "Serve immediately."
    ],
    tips: "Use freshly shredded cheese - pre-shredded cheese has anti-caking agents that prevent smooth melting. Bake potatoes ahead for faster prep."
  },
  {
    id: "batch-crawfish-corn-chowder",
    name: "Crawfish Corn Chowder",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Rich, creamy Louisiana crawfish and corn chowder with Cajun seasonings.",
    yield: "1 gallon (10-12 servings)",
    portionSize: "8-10 oz",
    ingredients: [
      "1 cup unsalted butter",
      "2 cups yellow onion, small dice",
      "1 cup celery, small dice",
      "1 cup red bell pepper, small dice",
      "2 tbsp garlic, minced",
      "1 cup all-purpose flour",
      "2 quarts veggie stock",
      "4 tbsp seafood base",
      "1 quart heavy cream",
      "6 cups whole kernel corn",
      "2 lb cream cheese",
      "2 lb crawfish tail meat (with fat)",
      "2 tbsp Cajun seasoning",
      "1 tsp smoked paprika",
      "½ tsp white pepper",
      "1 tsp granulated sugar",
      "Kosher salt to taste",
      "½ cup green onions, sliced (garnish)",
      "¼ cup flat-leaf parsley, chopped (garnish)"
    ],
    instructions: [
      "Melt butter in a heavy-bottom pot over medium heat.",
      "Add onion, celery, and bell pepper. Sweat until soft and translucent, approximately 8 minutes.",
      "Add garlic and cook 1 minute, stirring constantly.",
      "Sprinkle flour evenly over vegetables and stir continuously to form a light blond roux, 3-4 minutes.",
      "Gradually whisk in stock until smooth. Bring to a gentle simmer and cook 10 minutes to thicken.",
      "Stir in heavy cream, cream cheese, corn, seafood base, Cajun seasoning, smoked paprika, white pepper, and sugar. Simmer 10 minutes.",
      "Fold in crawfish tail meat. Simmer just until heated through, 5-7 minutes. Do not boil.",
      "Adjust seasoning with salt to taste.",
      "Garnish each portion with green onions and parsley."
    ],
    tips: "Do not boil after adding crawfish - it will make them tough. Use crawfish fat for extra flavor."
  },
  {
    id: "batch-bourbon-whiskey-sauce",
    name: "Bourbon Whiskey Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Rich, creamy bourbon sauce for bread pudding and desserts. Double the batch - it goes fast!",
    yield: "About 2 cups",
    ingredients: [
      "2 cups heavy cream",
      "½ cup whole milk",
      "½ cup granulated sugar",
      "2 tbsp cornstarch",
      "¾ cup bourbon (Kentucky Deluxe works great)",
      "Pinch salt",
      "2 tbsp unsalted butter"
    ],
    instructions: [
      "MAKE SLURRY:",
      "In small bowl, whisk cornstarch with ¼ cup of the bourbon until smooth.",
      "",
      "HEAT CREAM MIXTURE:",
      "In 1-quart saucepan over medium heat, combine cream, milk, and sugar.",
      "Pour in the cornstarch slurry.",
      "Bring to a boil.",
      "",
      "SIMMER:",
      "Once boiling, reduce heat to gentle simmer.",
      "Cook, stirring occasionally, for 5 minutes.",
      "",
      "FINISH:",
      "Remove from heat.",
      "Add salt.",
      "Stir in butter and remaining ½ cup bourbon.",
      "Serve warm over bread pudding."
    ],
    tips: "Double this recipe to start - it disappears fast! Use any bourbon you have on hand. Great over bread pudding, pecan pie, or vanilla ice cream."
  },
  {
    id: "batch-broccoli-cheese-soup",
    name: "Broccoli Cheese Soup",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Creamy, cheesy broccoli soup - a classic comfort food favorite.",
    yield: "8-10 servings",
    ingredients: [
      "1 cup chopped onion",
      "1 cup butter, cubed",
      "1 cup all-purpose flour",
      "1 tsp salt",
      "1 tsp pepper",
      "6 cups milk",
      "3 cups chicken broth",
      "4 cups broccoli florets",
      "2 cups shredded cheddar cheese"
    ],
    instructions: [
      "MAKE ROUX:",
      "In saucepan, sauté onion in butter until tender.",
      "Stir in flour, salt, and pepper until blended.",
      "",
      "ADD LIQUIDS:",
      "Gradually add milk and broth, stirring constantly.",
      "Bring to a boil.",
      "Cook and stir until thickened, about 2 minutes.",
      "",
      "ADD BROCCOLI:",
      "Add broccoli florets.",
      "Cook and stir until heated through.",
      "",
      "FINISH:",
      "Remove from heat.",
      "Stir in cheddar cheese until melted.",
      "Serve immediately."
    ],
    tips: "Don't boil after adding cheese or it may become grainy. For smoother soup, blend half before adding cheese."
  },
  {
    id: "batch-bacon-brown-sugar-pork-tenderloin",
    name: "Bacon-Brown Sugar Pork Tenderloin",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Sweet and savory pork tenderloin wrapped in bacon with a chutney-mustard glaze.",
    yield: "4 servings",
    cookTime: "25-30 minutes",
    ingredients: [
      "1 pork tenderloin (about 1½ lbs)",
      "3 tbsp brown sugar",
      "2 tsp kosher salt",
      "½ tsp smoked paprika",
      "¼ tsp cayenne pepper",
      "4-6 slices good-quality bacon",
      "1 tbsp canola oil",
      "¼ cup Major Grey's chutney",
      "2 tbsp whole grain or Dijon mustard",
      "Toothpicks for securing bacon"
    ],
    instructions: [
      "PREP:",
      "Preheat oven to 350°F.",
      "Remove silverskin from tenderloin with sharp knife.",
      "Pat tenderloin dry with paper towels.",
      "",
      "SEASON & WRAP:",
      "Combine brown sugar, salt, paprika, and cayenne.",
      "Rub all of mixture into the pork.",
      "Wrap with bacon strips, securing with toothpicks.",
      "",
      "SEAR:",
      "Heat canola oil in cast iron skillet over medium-high until sizzling.",
      "Add tenderloin and sear until deep caramel brown, 6-8 minutes.",
      "Do not disturb while searing.",
      "Flip and brown other side.",
      "",
      "GLAZE & ROAST:",
      "Mix chutney and mustard, brush generously over top.",
      "Transfer skillet to oven.",
      "Cook until internal temp reaches 140°F, about 10-14 minutes.",
      "",
      "REST & SERVE:",
      "Remove from oven, tent loosely with foil.",
      "Rest 10-15 minutes.",
      "Remove toothpicks, slice into ¼ to ½-inch pieces.",
      "Serve with leftover chutney on side."
    ],
    tips: "The resting time allows the tenderloin to finish cooking and juices to redistribute. Internal temp will rise to 145°F during rest."
  },
  {
    id: "batch-irish-beef-stew",
    name: "Slow Cooker Irish Beef Stew",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Ultimate comfort food - tender beef chunks with potatoes and carrots in thick, hearty gravy.",
    yield: "6-8 servings",
    cookTime: "7-8 hours on low, 4 hours on high",
    ingredients: [
      "1½ lb chuck roast, cut into 1½-inch pieces",
      "¼ cup flour",
      "2 tsp salt",
      "1 tsp pepper",
      "2 tbsp olive oil",
      "2 lbs Yukon Gold potatoes, halved or quartered",
      "1 lb baby carrots",
      "2 tbsp butter",
      "1 yellow onion, diced",
      "3 cloves garlic, minced",
      "3 cans beef broth (about 40 oz)",
      "1 small can tomato paste",
      "2 tbsp balsamic or red wine vinegar",
      "1 tbsp Worcestershire sauce",
      "2 tbsp cornstarch + 2 tbsp cold water",
      "1 tbsp dried thyme",
      "1 tsp dried parsley flakes",
      "2 bay leaves",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "COAT MEAT:",
      "Place beef chunks in gallon bag with flour, salt, and pepper.",
      "Shake until meat is coated.",
      "",
      "BROWN MEAT:",
      "Heat olive oil in heavy skillet.",
      "Brown meat on all sides, set aside.",
      "",
      "LAYER SLOW COOKER:",
      "Place potatoes and carrots in bottom of slow cooker.",
      "Layer browned meat on top.",
      "",
      "MAKE SAUCE:",
      "In same skillet, melt butter.",
      "Sauté onions and garlic.",
      "Stir in beef broth, tomato paste, vinegar, and Worcestershire.",
      "Mix cornstarch with cold water until smooth, add to skillet.",
      "Pour all contents over meat and vegetables.",
      "",
      "COOK:",
      "Add thyme, parsley, and bay leaves.",
      "Cook on low 7-8 hours or high 4 hours.",
      "30 minutes before serving, adjust seasonings.",
      "Remove bay leaves before serving.",
      "Garnish with fresh parsley."
    ],
    tips: "Pre-cut stew meat can be substituted for chuck roast. The flour coating helps thicken the gravy as it cooks."
  },
  {
    id: "batch-beef-birria",
    name: "Beef Birria",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Traditional Mexican braised beef in rich chile sauce. Perfect for tacos, quesadillas, or consommé.",
    yield: "7 lbs beef (serves 12-15)",
    ingredients: [
      "--- FOR THE BIRRIA ---",
      "7 lbs beef (chuck roast or beef cheeks)",
      "Salt and pepper to taste",
      "White onion, diced (for topping)",
      "Fresh cilantro, chopped (for topping)",
      "",
      "--- FOR THE SAUCE ---",
      "4 chiles ancho, stems and seeds removed",
      "12 guajillo peppers, stems and seeds removed",
      "4 chiles de arbol",
      "3 Roma tomatoes",
      "½ white onion",
      "5 garlic cloves",
      "1 cinnamon stick",
      "3 bay leaves",
      "1 tsp whole black pepper",
      "5 whole cloves",
      "1 tsp oregano",
      "½ tsp ground cumin",
      "1 tbsp beef bouillon",
      "2 cups beef broth",
      "¼ cup white vinegar",
      "Water as needed"
    ],
    instructions: [
      "PREPARE CHILES:",
      "Toast chiles ancho, guajillo, and de arbol in dry skillet until fragrant, about 30 seconds per side.",
      "Place toasted chiles in bowl and cover with hot water. Soak 20-30 minutes until softened.",
      "",
      "PREPARE AROMATICS:",
      "Roast tomatoes, onion half, and garlic in same skillet until charred on all sides.",
      "Toast cinnamon stick, bay leaves, black pepper, and cloves until fragrant.",
      "",
      "BLEND SAUCE:",
      "Drain chiles, reserving soaking liquid.",
      "Add chiles, roasted vegetables, spices, oregano, cumin, beef bouillon, beef broth, and vinegar to blender.",
      "Blend until smooth, adding soaking liquid as needed for consistency.",
      "Strain sauce through fine mesh sieve.",
      "",
      "PREPARE BEEF:",
      "Season beef generously with salt and pepper.",
      "Cut into large chunks if using chuck roast.",
      "",
      "BRAISE:",
      "Place beef in large Dutch oven or roasting pan.",
      "Pour chile sauce over beef, ensuring meat is covered.",
      "Cover tightly with lid or foil.",
      "Braise at 325°F for 3-4 hours until beef is fork-tender and falling apart.",
      "",
      "SERVE:",
      "Shred beef and return to consommé (braising liquid).",
      "Serve in tacos, quesadillas, or bowls with consommé.",
      "Top with diced white onion and fresh cilantro."
    ],
    tips: "Save the consommé for dipping tacos. For birria tacos, dip tortillas in consommé fat before grilling with cheese and meat."
  },
  {
    id: "batch-texas-red-chili",
    name: "Chili - Not Cheap",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Terlingua-style, beanless Texas red chili. Bold and spice-forward. Add beans only if desired.",
    yield: "Approx. 2 gallons",
    portionSize: "10-12 oz per serving",
    ingredients: [
      "--- PHASE I ---",
      "6 lb beef chuck tender or rump roast, cut into ⅜-inch cubes",
      "4 tbsp onion powder",
      "4 tbsp paprika (use 2 tbsp for milder heat)",
      "5½ tbsp cayenne pepper",
      "4 beef bouillon cubes",
      "3⅓ cups canned beef broth",
      "4 oz tomato sauce",
      "2 tbsp juice from cooked jalapeños",
      "2 quarts water (plus more as needed)",
      "",
      "--- PHASE II SPICES ---",
      "6½ tbsp chili powder",
      "2 tbsp ground cumin (fresh ground preferred)",
      "2 tsp garlic powder",
      "½ tsp white pepper",
      "¼ tsp salt"
    ],
    instructions: [
      "CUT BEEF:",
      "Cut beef into uniform ⅜-inch cubes.",
      "This small 'chunk' cut is traditional Terlingua style and promotes tenderness without grinding.",
      "",
      "BROWN MEAT:",
      "Brown meat in batches in a large, heavy Dutch oven over medium-high heat until well seared.",
      "Avoid overcrowding the pot so the meat browns rather than steams.",
      "A small amount of neutral oil or beef tallow may be used if needed.",
      "",
      "PHASE I SIMMER:",
      "Once all meat is browned, return it to the pot and add all Phase I ingredients.",
      "Stir thoroughly, bring to a gentle simmer, cover, and cook over low heat for approximately 2 hours, stirring occasionally.",
      "Add additional water as needed to maintain a thick but fluid consistency.",
      "Meat should be fork-tender before proceeding.",
      "",
      "PHASE II:",
      "Add all Phase II spices, stirring well to fully incorporate.",
      "Simmer uncovered or partially covered for an additional 30 minutes to allow the chili to thicken slightly and the flavors to fully bloom.",
      "",
      "FINISH:",
      "Taste and adjust seasoning only if necessary.",
      "This chili is intentionally bold and spice-forward."
    ],
    tips: "Traditional Texas red - no beans. Add beans during final 20-30 minutes if desired. If using ground meat, reduce Phase I cooking to 1½ hours. Heat is assertive by design - reduce cayenne and paprika for milder profile."
  },
  {
    id: "batch-ritz-carlton-potato-salad",
    name: "Ritz Carlton Potato Salad",
    station: "batch",
    category: "sides",
    contentType: "recipe",
    description: "Elegant potato salad with fresh herbs, lemon, and tarragon. Uses colorful heirloom potatoes.",
    yield: "4-6 servings",
    ingredients: [
      "1½ lbs small heirloom potatoes (purple, red, fingerling)",
      "2 ribs celery, chopped",
      "¼ cup mayonnaise",
      "2 tbsp finely chopped fresh chives",
      "½ tsp grated lemon zest",
      "1 tbsp fresh lemon juice",
      "½ tsp sugar",
      "1½ tsp fresh tarragon, finely chopped",
      "¼ tsp salt",
      "¼ tsp pepper"
    ],
    instructions: [
      "COOK POTATOES:",
      "Cover potatoes with water in large pot.",
      "Season well with salt.",
      "Bring to a boil, then simmer until tender, 12-20 minutes.",
      "",
      "MAKE DRESSING:",
      "While potatoes cook, combine in large bowl:",
      "Celery, mayonnaise, chives, lemon zest, lemon juice, sugar, salt, tarragon, and pepper.",
      "Stir together well.",
      "",
      "ASSEMBLE:",
      "Drain potatoes and cool completely.",
      "Halve or quarter potatoes.",
      "Add to dressing and toss to coat.",
      "Serve chilled or at room temperature."
    ],
    tips: "The colorful heirloom potatoes make this salad visually stunning. Cool potatoes completely before dressing to prevent them from breaking apart."
  },
  {
    id: "batch-spatchcocked-turkey",
    name: "Crisp-Skinned Spatchcocked Turkey with Gravy",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Butterflied roast turkey that cooks evenly with incredibly crisp skin. Includes pan gravy recipe.",
    yield: "12-14 lb turkey (10-12 servings)",
    cookTime: "About 80 minutes",
    ingredients: [
      "FOR THE TURKEY:",
      "1 whole turkey (12-14 lbs), butterflied (backbone removed)",
      "Backbone, neck, and giblets reserved for gravy",
      "2 tbsp vegetable oil, divided",
      "Kosher salt and black pepper",
      "",
      "FOR THE ROASTING PAN:",
      "3 large onions, roughly chopped",
      "3 large carrots, peeled and roughly chopped",
      "4 stalks celery, roughly chopped",
      "12 thyme sprigs",
      "",
      "FOR THE GRAVY:",
      "1½ quarts chicken or turkey broth",
      "2 bay leaves",
      "3 tbsp butter",
      "4 tbsp flour"
    ],
    instructions: [
      "PREP OVEN:",
      "Preheat oven to 450°F with rack in middle position.",
      "Line rimmed baking sheet with foil.",
      "Scatter ⅔ of onions, carrots, celery, and thyme on pan.",
      "Place wire rack on top of vegetables.",
      "",
      "PREP TURKEY:",
      "Pat turkey dry with paper towels.",
      "Rub with 1 tbsp oil and season liberally with salt and pepper.",
      "Tuck wing tips behind back.",
      "Place on rack, pressing down on breastbone to flatten.",
      "",
      "ROAST:",
      "Roast, rotating occasionally, until breast registers 150°F and thighs register 165°F.",
      "About 80 minutes total.",
      "",
      "MAKE GRAVY (while turkey roasts):",
      "Roughly chop neck, backbone, and giblets.",
      "Heat 1 tbsp oil in saucepan over high heat.",
      "Brown turkey parts about 5 minutes.",
      "Add remaining vegetables, cook 5 minutes more.",
      "Add broth, remaining thyme, and bay leaves. Simmer.",
      "",
      "FINISH GRAVY:",
      "In separate pan, melt butter over medium-high heat.",
      "Add flour and cook, stirring, until golden brown (about 3 minutes).",
      "Whisk in strained broth in thin stream.",
      "Simmer until reduced to about 1 quart (about 20 minutes).",
      "Season with salt and pepper.",
      "",
      "REST & SERVE:",
      "Rest turkey 20 minutes before carving.",
      "Strain pan juices, skim fat, whisk into gravy.",
      "Carve and serve with gravy."
    ],
    tips: "Spatchcocking ensures even cooking - dark meat reaches safe temp without overcooking breast. For best results, dry-brine turkey overnight before roasting."
  },
  {
    id: "batch-creamy-shrimp-soup",
    name: "Creamy Shrimp Soup",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Rich and creamy potato shrimp chowder with vegetables and parmesan. Can be made in Instant Pot or stovetop.",
    yield: "4-6 servings",
    ingredients: [
      "1 lb deveined shrimp",
      "3 tbsp unsalted butter, divided",
      "1 onion, minced",
      "2 garlic cloves, minced",
      "2 carrots, minced",
      "3 potatoes, diced",
      "2 celery ribs, diced",
      "1 bay leaf",
      "½ tsp paprika",
      "½ tsp cayenne pepper (optional)",
      "½ tsp dried thyme",
      "4 cups chicken stock (or vegetable stock)",
      "¼ cup cream cheese, softened",
      "¼ cup heavy cream",
      "Grated parmesan for garnish",
      "Fresh parsley, chopped, for garnish"
    ],
    instructions: [
      "COOK SHRIMP:",
      "Heat 1 tbsp butter in large pot over medium-high heat.",
      "Cook shrimp on both sides 4-7 minutes until opaque.",
      "Transfer to plate and set aside.",
      "",
      "SAUTÉ VEGETABLES:",
      "Add remaining 2 tbsp butter to pot.",
      "Cook onions, carrots, and celery 2-3 minutes.",
      "Add garlic and potatoes, cook 1 minute.",
      "",
      "ADD SEASONINGS:",
      "Add paprika, cayenne, thyme, and bay leaf.",
      "Cook 1 minute, stirring constantly.",
      "",
      "SIMMER:",
      "Add chicken stock and cream cheese.",
      "Bring to boil, then reduce heat and simmer until potatoes are tender (about 15-20 minutes).",
      "",
      "FINISH:",
      "Remove bay leaf.",
      "Stir in heavy cream until incorporated.",
      "Heat through and adjust seasonings to taste.",
      "",
      "SERVE:",
      "Ladle into bowls.",
      "Top with grilled shrimp, grated parmesan, and chopped parsley."
    ],
    tips: "For Instant Pot: Pressure cook 2 minutes after adding stock and cream cheese, then quick release. Stovetop method works equally well - just simmer longer."
  },
  {
    id: "batch-bean-bacon-soup",
    name: "Bean and Bacon Soup",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Hearty soup with great northern beans, smoked bacon, and vegetables. From the recipe collection of 33 years Executive Chef Richard von Eye, retired.",
    yield: "6-8 servings",
    cookTime: "1 hour 15 minutes",
    ingredients: [
      "8 oz smoked bacon, diced",
      "1 cup diced yellow onions",
      "1 cup diced carrots",
      "1 cup diced celery",
      "2 cloves garlic, minced",
      "4 cups chicken broth",
      "3 cans (15 oz each) great northern beans, drained and rinsed",
      "Salt and pepper to taste",
      "1 can (8 oz) tomato sauce"
    ],
    instructions: [
      "COOK BACON:",
      "Cook bacon in soup pot or Dutch oven until crisp.",
      "Remove with slotted spoon to paper towel lined plate.",
      "Discard all but about 2 tbsp bacon grease.",
      "",
      "SAUTÉ VEGETABLES:",
      "Add onions, carrots, and celery to hot bacon grease.",
      "Cook over medium heat until softened, about 5 minutes.",
      "Add garlic and cook 1 additional minute.",
      "",
      "SIMMER:",
      "Stir in chicken broth and beans.",
      "Season with salt and pepper.",
      "Bring to bubble, then reduce heat to low.",
      "Simmer for 1 hour.",
      "",
      "BLEND & FINISH:",
      "Remove half of soup to blender or food processor.",
      "Process until smooth.",
      "Return puree to pot and stir into remaining soup.",
      "Add tomato sauce and ¾ of reserved bacon.",
      "Stir to combine and adjust seasoning.",
      "Simmer until heated through, about 5 minutes.",
      "",
      "SERVE:",
      "Ladle into bowls and top with remaining bacon."
    ],
    tips: "Blending half the soup creates a creamy texture while keeping some beans whole for texture. Can be made ahead and reheated."
  },
  {
    id: "batch-chicken-pot-pie",
    name: "Chicken Pot Pie",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Classic comfort food with creamy chicken and vegetable filling in a flaky pie crust.",
    yield: "1 pie (6-8 servings)",
    cookTime: "45-60 minutes",
    ingredients: [
      "2 cups cooked chicken, diced or shredded",
      "3 tbsp unsalted butter",
      "1 medium onion, diced (about 1 cup)",
      "2 medium carrots, diced (about 1 cup)",
      "2 celery stalks, diced (about 1 cup)",
      "2 garlic cloves, minced",
      "⅓ cup all-purpose flour",
      "2 cups chicken broth",
      "1 cup whole milk or heavy cream",
      "1 cup frozen peas",
      "1 cup frozen corn (optional)",
      "1 tsp dried thyme (or 1 tbsp fresh)",
      "1 tsp dried parsley (or 1 tbsp fresh)",
      "Salt and black pepper (about ½ tsp each)",
      "1 tbsp Worcestershire sauce (optional)",
      "Pie crust - top and bottom (see Pie Crust recipe)"
    ],
    instructions: [
      "COOK VEGETABLES:",
      "Melt butter in large skillet or Dutch oven over medium heat.",
      "Add onion, carrots, and celery. Cook until softened, 5-7 minutes.",
      "Add garlic and cook 1 minute until fragrant.",
      "",
      "MAKE ROUX:",
      "Sprinkle flour over vegetables and stir to coat.",
      "Cook 1-2 minutes to remove raw flour taste.",
      "",
      "ADD LIQUIDS:",
      "Gradually pour in chicken broth, stirring constantly to prevent lumps.",
      "Add milk or cream. Bring to simmer.",
      "Cook until thickened, about 3-5 minutes.",
      "",
      "ADD CHICKEN & SEASONINGS:",
      "Stir in cooked chicken, peas, corn (if using), thyme, parsley, salt, pepper.",
      "Add Worcestershire sauce if using.",
      "Simmer 2-3 minutes to blend flavors. Adjust seasoning.",
      "",
      "COOL SLIGHTLY:",
      "Remove from heat and let filling cool slightly to prevent soggy crust.",
      "",
      "ASSEMBLE:",
      "Pour filling into prepared bottom pie crust.",
      "Cover with top crust, crimp edges to seal.",
      "Cut a few slits for steam to escape.",
      "",
      "BAKE:",
      "Bake at 375°F for 45-60 minutes until crust is golden and filling is bubbly.",
      "If edges brown too quickly, cover with foil or pie shield.",
      "",
      "REST:",
      "Let cool 10-15 minutes before serving to allow filling to set."
    ],
    tips: "For richer flavor, use half milk and half cream. Make filling up to a day ahead and refrigerate. Swap veggies as desired (mushrooms, green beans)."
  },
  {
    id: "batch-pie-crust",
    name: "Pie Crust",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Flaky homemade pie crust for pot pies, fruit pies, and quiches. Makes top and bottom crust.",
    yield: "2 crusts (top and bottom)",
    ingredients: [
      "2½ cups all-purpose flour",
      "1 tsp salt",
      "1 cup (2 sticks) unsalted butter, cold, cut into small cubes",
      "6-8 tbsp ice water"
    ],
    instructions: [
      "MIX DRY INGREDIENTS:",
      "In large bowl, combine flour and salt.",
      "",
      "CUT IN BUTTER:",
      "Add cold butter cubes.",
      "Using pastry cutter or fingers, cut butter into flour.",
      "Continue until mixture resembles coarse crumbs with pea-sized butter pieces.",
      "",
      "ADD WATER:",
      "Sprinkle 6 tbsp ice water over mixture.",
      "Stir gently with fork or hands until dough begins to come together.",
      "Add more water 1 tbsp at a time if needed - don't let it get too wet.",
      "",
      "FORM DOUGH:",
      "Divide dough into two equal portions.",
      "Shape into discs and wrap in plastic wrap.",
      "Refrigerate at least 1 hour (or up to 2 days).",
      "",
      "ROLL OUT:",
      "On lightly floured surface, roll one disc to fit 9-inch pie dish (about 12 inches diameter).",
      "Place in dish. Roll second disc for top crust.",
      "",
      "ASSEMBLE:",
      "Fill bottom crust with filling.",
      "Cover with top crust, trim excess, crimp edges to seal.",
      "Cut slits in top for steam to escape.",
      "",
      "BAKE:",
      "Follow recipe instructions, typically 375°F for 45-60 minutes until golden brown."
    ],
    tips: "Keep all ingredients cold for flaky crust. Add 1 tsp dried herbs (thyme) to flour for extra flavor. Brush top with egg wash (1 egg + 1 tbsp water) for golden finish."
  },

  // BATCH STATION - BREAD & ROLLS
  {
    id: "batch-texas-roadhouse-rolls",
    name: "Texas Roadhouse Dinner Rolls",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Soft, buttery dinner rolls served with sweet honey butter. A copycat of the famous Texas Roadhouse rolls.",
    yield: "12-16 rolls",
    cookTime: "12-15 minutes",
    ingredients: [
      "FOR THE ROLLS:",
      "1 cup warm milk (about 110°F)",
      "2¼ tsp active dry yeast (1 packet)",
      "¼ cup granulated sugar",
      "3½ to 4 cups all-purpose flour",
      "1 large egg",
      "¼ cup unsalted butter, melted and cooled",
      "1 tsp salt",
      "",
      "FOR THE HONEY BUTTER:",
      "½ cup unsalted butter, softened",
      "¼ cup honey",
      "¼ cup powdered sugar"
    ],
    instructions: [
      "PREPARE DOUGH:",
      "In small bowl, combine warm milk, sugar, and yeast.",
      "Let sit 5-10 minutes until frothy.",
      "In large bowl, combine 3½ cups flour, salt, egg, melted butter, and yeast mixture.",
      "Mix until soft dough forms.",
      "",
      "KNEAD:",
      "Knead on floured surface 8-10 minutes (or 5-6 min with stand mixer dough hook).",
      "Add more flour as needed until dough is smooth and elastic but slightly tacky.",
      "",
      "FIRST RISE:",
      "Place dough in lightly greased bowl, cover with clean towel.",
      "Let rise in warm place 1-2 hours until doubled in size.",
      "",
      "SHAPE ROLLS:",
      "Punch down dough and divide into 12-16 equal pieces.",
      "Shape each piece into a ball.",
      "Place on greased baking sheet, spaced slightly apart.",
      "Cover and let rise 30-45 minutes until puffed.",
      "",
      "BAKE:",
      "Preheat oven to 375°F.",
      "Bake 12-15 minutes until golden brown on top.",
      "Brush generously with melted butter as soon as they come out.",
      "",
      "MAKE HONEY BUTTER:",
      "Mix softened butter, honey, and powdered sugar until smooth.",
      "Serve with warm rolls."
    ],
    tips: "For extra soft rolls, brush with butter twice - once right out of the oven and again after 5 minutes."
  },
  {
    id: "batch-pistolette-rolls",
    name: "Homemade Pistolette Sandwich Rolls",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "A light and fluffy homemade pistolette French roll, suitable as both a side bread and for sandwiches.",
    yield: "12 rolls",
    cookTime: "25-30 minutes",
    ingredients: [
      "--- FOR THE 2 HOUR SPONGE ---",
      "1 cup warm water (100 to 110 degrees)",
      "2½ teaspoons rapid-rise yeast",
      "Pinch granulated sugar",
      "1½ cups bread flour",
      "",
      "--- FOR THE DOUGH ---",
      "1 cup warm water (100 to 110 degrees)",
      "1 tablespoon honey",
      "3 tablespoons olive oil",
      "2½ teaspoons salt",
      "4 cups bread flour"
    ],
    instructions: [
      "MAKE THE SPONGE:",
      "Proof the yeast by combining with the warm water and a pinch of sugar. Let sit for 5 minutes.",
      "Put the bread flour in your mixer bowl and stir in the water and yeast mixture. Cover the entire mixer bowl with a thick towel and let sponge bubble up for 2 hours. Okay to stir down if it begins to bubble up out of the bowl.",
      "",
      "MAKE THE DOUGH:",
      "To the sponge, add the water, honey, olive oil, salt and flour; stir to combine.",
      "Using dough hook, knead on low speed for 8 to 10 minutes until you have a good, elastic dough. Remove dough hook, spray top of dough with non-stick spray and cover entire mixer with a large, clear plastic bag and allow to rise 45 to 90 minutes or until about doubled.",
      "",
      "SHAPE THE ROLLS:",
      "Cover a baking pan with quick spritz of non stick spray and place a sheet of parchment paper in the pan.",
      "Turn dough out onto a lightly floured surface, and pull off 12 equal pieces of dough. Shape into oval rolls and place on parchment paper about an inch or so apart.",
      "Spray a sheet of plastic wrap with cooking spray and place on top of rolls to keep them from drying out and set in a draft free spot to allow to rise about 20 to 30 minutes until they puff up.",
      "",
      "BAKE:",
      "Preheat oven in the meantime to 400°F. If a crusty bottom is desired, place a baking stone in the lowest part of the oven when you preheat. You may also score rolls across the top or snip with scissors for a decorative affect if desired.",
      "Before placing the rolls in the oven, spritz them very lightly with water, place in oven and spritz inside of oven also to create a more crispy crust. For softer and shiny rolls, brush tops with melted butter or oil before baking.",
      "Bake for approximately 25 to 30 minutes until rolls are brown."
    ],
    tips: "Do use bread flour. Regular all purpose flour will make rolls more dense and not as light and fluffy. The right flour makes a difference!"
  },
  {
    id: "batch-candied-jalapenos",
    name: "Candied Jalapeños",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Sweet and spicy glazed jalapeño slices in a savory syrup.",
    yield: "~1½ cups",
    ingredients: [
      "Fresh jalapeños, thinly sliced - 1 cup",
      "White sugar - ¼ cup",
      "White vinegar - 2 tbsp",
      "Vegetable stock - ½ cup",
      "SPG seasoning - ½ tbsp"
    ],
    instructions: [
      "In a small saucepan, combine vegetable stock, sugar, vinegar, and SPG seasoning.",
      "Bring to a gentle simmer over medium heat, stirring until sugar fully dissolves.",
      "Add sliced jalapeños and cook 4-5 minutes, stirring occasionally, until syrup slightly thickens and peppers appear glossy and tender.",
      "Remove from heat and allow jalapeños to cool in the syrup.",
      "Store refrigerated, covered, up to 5 days."
    ]
  },
  {
    id: "sautee-chimichurri-surf-turf-bowl",
    name: "Chimichurri Surf & Turf Bowl",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Tender grilled steak and shrimp drizzled with vibrant chimichurri, served over your choice of rice with a colorful medley of bell peppers, onions, and zucchini.",
    ingredients: [
      "2 cups rice (white, dirty, or jambalaya)",
      "1/2 cup steak bites",
      "1 bag shrimp (8 pieces)",
      "1 cup zucchini, sliced",
      "2 tbsp pre-made chimichurri",
      "2 tbsp butter (divided)",
      "2 tbsp Cajun seasoning (divided)",
      "Green onion (for garnish)"
    ],
    instructions: [
      "Prepare the Protein: In a sauté pan, melt 1 tbsp butter and add 1 tbsp Cajun seasoning. Add the bag of shrimp and sauté until almost cooked (about 2-3 minutes per side). Add 1/2 cup steak bites and cook for an additional 2-3 minutes until browned. Remove from heat.",
      "Sauté the Veggies: In a separate pan, melt 1 tbsp butter and add 1 tbsp Cajun seasoning. Sauté the bell peppers, onions, and zucchini until tender (about 5-7 minutes).",
      "Assemble the Bowl: Heat the rice and place it in the bottom of a bowl. Arrange the steak and shrimp around the edges in a circle. Place the sautéed veggies in the center.",
      "Add Chimichurri: Spoon 2 tbsp of chimichurri over the steak and shrimp.",
      "Garnish: Sprinkle with chopped green onion for a fresh finish.",
      "Serve: Enjoy immediately while warm!"
    ]
  },
  {
    id: "batch-crab-boil-smoked-turkey",
    name: "Crab Boil Brined & Smoked Turkey Breast",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Louisiana-style smoked turkey breast with crab boil brine and Old Bay seasoning.",
    yield: "1 whole turkey breast",
    cookTime: "~3-4 hours",
    internalTemp: "165°F",
    ingredients: [
      "2 gallons water",
      "4 cups concentrated crab boil seasoning",
      "1 whole turkey breast (bone-in or boneless, as desired)",
      "Old Bay seasoning, as needed"
    ],
    instructions: [
      "Brine (Day 1):",
      "In a large container, combine water and crab boil seasoning.",
      "Submerge the turkey breast completely in the brine.",
      "Cover and refrigerate overnight (12-18 hours).",
      "Pre-Boil (Day 2):",
      "Remove the turkey breast from the brine. Discard brine.",
      "Place turkey breast in a stockpot, cover with fresh water, and bring to a boil.",
      "Reduce to a gentle boil and cook for 20 minutes.",
      "Remove turkey breast and pat completely dry with paper towels.",
      "Season & Smoke:",
      "Coat the turkey breast evenly with Old Bay seasoning.",
      "Place in smoker set to 225-250°F.",
      "Smoke until the internal temperature reaches 165°F at the thickest part of the breast.",
      "Rest & Serve:",
      "Remove from smoker and rest for 15-20 minutes before slicing."
    ],
    tips: "The crab boil brine infuses bold Louisiana flavor, while the quick pre-boil helps season the meat throughout and reduces smoking time. Old Bay adds a final coastal punch before the turkey takes on smoky depth. Perfect for a Cajun holiday table."
  },
  {
    id: "fry-cooked-chicken-wings",
    name: "Cooked Chicken Wings",
    station: "fry",
    category: "wings",
    contentType: "prep",
    description: "Steam-baked chicken wings ready for finishing by frying, grilling, or saucing.",
    yield: "Varies",
    cookTime: "45-60 minutes",
    internalTemp: "170°F on the bone",
    ingredients: [
      "Chicken wings, as needed",
      "Water, for steam bath"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Place a perforated steamer pan inside a larger hotel pan. Add enough water to the bottom pan to create steam without touching the wings.",
      "Arrange the chicken wings evenly in the steamer pan insert.",
      "Cover the entire pan tightly with a layer of cling film, followed by aluminum foil to seal in steam.",
      "Place the pan in the oven and cook until the internal temperature of the wings reaches 170°F on the bone, about 45-60 minutes depending on quantity.",
      "Remove from oven and carefully uncover. Wings are now fully cooked and ready for finishing (frying, grilling, or saucing)."
    ]
  },
  {
    id: "sautee-chicken-piccata-artichokes-penne",
    name: "Chicken Piccata with Artichokes & Penne",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Pan-seared chicken breast with a lemon-caper butter sauce, artichokes, and penne pasta.",
    yield: "1 portion",
    cookTime: "15 minutes",
    ingredients: [
      "1 oz butter",
      "½ chicken breast, pounded to even thickness",
      "Seasoned flour, as needed",
      "2 oz artichoke hearts, chopped",
      "1 tsp garlic, minced",
      "2 tbsp capers",
      "¼ cup white wine",
      "1 tbsp lemon juice",
      "4.5 oz cooked penne pasta",
      "1 tbsp cold butter (for mounting)",
      "Parmesan cheese, grated (for garnish)",
      "Green onions, sliced (for garnish)"
    ],
    instructions: [
      "Heat 1 oz butter in a sauté pan over medium-high heat.",
      "Dredge chicken breast in seasoned flour, shaking off excess.",
      "Sear chicken in the pan until golden brown on both sides and cooked through. Remove from pan and hold warm.",
      "Add artichokes, garlic, and capers to the pan. Sauté until garlic is lightly browned and aromatic.",
      "Deglaze the pan with white wine and reduce by half.",
      "Add lemon juice and the cooked penne pasta; toss well to coat.",
      "Turn off the heat and mount the sauce by stirring in 1 tbsp cold butter until glossy.",
      "Return chicken to the pan briefly to coat in sauce, then plate.",
      "Garnish with Parmesan cheese and sliced green onions."
    ]
  },
  {
    id: "fry-honey-sriracha-sauce",
    name: "Honey Sriracha Sauce",
    station: "fry",
    category: "wings",
    contentType: "recipe",
    description: "Sweet and spicy sauce with honey, Sriracha, and lime.",
    yield: "~1 gallon",
    cookTime: "10 minutes",
    ingredients: [
      "2 lbs butter",
      "2 cups honey",
      "2 cups brown sugar",
      "3 cups Sriracha sauce",
      "¾ cup soy sauce",
      "½ cup lime juice"
    ],
    instructions: [
      "In a saucepan, melt butter over medium heat.",
      "Stir in honey and brown sugar until dissolved.",
      "Add Sriracha, soy sauce, and lime juice; whisk until fully combined.",
      "Remove from heat, cool slightly, and transfer to storage containers.",
      "Refrigerate until ready to use."
    ]
  },
  {
    id: "fry-garlic-parmesan-rub",
    name: "Garlic Parmesan Rub",
    station: "fry",
    category: "wings",
    contentType: "prep",
    description: "Savory dry rub with Parmesan cheese, garlic, and Italian seasoning.",
    yield: "~11 cups",
    ingredients: [
      "10 cups Parmesan cheese, grated",
      "⅔ cup granulated garlic",
      "8 tbsp Italian seasoning",
      "⅓ cup kosher salt"
    ],
    instructions: [
      "Combine all ingredients in a large mixing bowl.",
      "Mix thoroughly until seasoning is evenly distributed.",
      "Transfer to a labeled container and refrigerate until needed."
    ]
  },
  {
    id: "fry-medium-wing-sauce",
    name: "Medium Wing Sauce",
    station: "fry",
    category: "wings",
    contentType: "recipe",
    description: "Classic buffalo-style wing sauce with butter blend and spices.",
    yield: "3 gallons",
    portionSize: "1 oz",
    cookTime: "15 minutes",
    ingredients: [
      "2 gallons Frank's RedHot sauce",
      "8 lbs butter blend (50% butter, 50% margarine)",
      "2 cups light brown sugar",
      "½ cup coarse black pepper",
      "½ cup crushed red chili flakes",
      "¾ cup cayenne pepper"
    ],
    instructions: [
      "In a large saucepan, melt the butter blend over medium heat until it begins to simmer. Remove from heat.",
      "Using a wand mixer on low speed, incorporate the brown sugar until dissolved.",
      "Add black pepper, chili flakes, and cayenne pepper. Blend to combine.",
      "Slowly add Frank's RedHot while continuing to emulsify with the wand mixer until smooth and fully incorporated.",
      "Do not allow the butter to cool during mixing.",
      "Transfer to a labeled container. Store refrigerated."
    ]
  },
  {
    id: "fry-new-orleans-voodoo-sauce",
    name: "New Orleans Voodoo Sauce",
    station: "fry",
    category: "wings",
    contentType: "recipe",
    description: "Bold, tangy Louisiana-style sauce with Worcestershire, vinegar, and spices.",
    yield: "~5 quarts",
    cookTime: "20 minutes",
    ingredients: [
      "½ cup minced garlic",
      "2 medium onions, minced",
      "4 tbsp black pepper",
      "½ cup canola oil",
      "4 cups Worcestershire sauce",
      "4 cups white sugar",
      "4 cups brown sugar",
      "4 cups apple cider vinegar",
      "1 cup cayenne pepper",
      "6 tbsp coriander",
      "6 tbsp onion powder",
      "6 tbsp ancho chile powder"
    ],
    instructions: [
      "In a large stockpot, heat canola oil over medium heat. Add onions and black pepper; sauté until onions are translucent.",
      "Stir in garlic and cook until lightly toasted.",
      "Add all remaining ingredients and bring to a full boil.",
      "Reduce heat and simmer briefly, stirring until sugars are fully dissolved and sauce is blended.",
      "Remove from heat. Cool and transfer to a labeled container. Store refrigerated."
    ]
  },
  {
    id: "sautee-catfish-jalapeno-grits",
    name: "Catfish & Jalapeño Grits",
    station: "sautee",
    category: "entrees",
    contentType: "recipe",
    description: "Blackened catfish over jalapeño cheese grits with Cajun cream sauce and candied jalapeños.",
    yield: "1 serving",
    cookTime: "15 minutes",
    ingredients: [
      "Jalapeño cheese grits, hot - 9 oz",
      "Catfish filet, blackened - 1 each (≈6-8 oz)",
      "Heavy cream - ½ cup",
      "Parmesan cheese, grated - ½ cup",
      "Cajun seasoning - ½ tbsp",
      "Candied jalapeños (see recipe) - 1 tbsp",
      "Butter or oil (for searing) - as needed"
    ],
    instructions: [
      "Prepare Grits: Hold 9 oz portion of hot jalapeño cheese grits for plating.",
      "Blacken Catfish: Heat butter or oil in a cast-iron skillet over medium-high heat. Season catfish filet with Cajun seasoning and cook 3-4 minutes per side until blackened and cooked through. Transfer to a cutting board and cut into three equal pieces.",
      "Make Cajun Cream Sauce: In the same pan (do not wipe clean), reduce heat to medium. Add heavy cream, Parmesan, and Cajun seasoning. Stir constantly until sauce thickens, about 2-3 minutes.",
      "Assemble: Spoon grits into a warm bowl. Stack the three pieces of blackened catfish over the center. Spoon Cajun cream sauce generously over the fish.",
      "Finish & Serve: Top with candied jalapeños and serve immediately."
    ]
  },
  {
    id: "batch-sauteed-apple-glaze",
    name: "Sautéed Apple Glaze",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Sweet cinnamon apple topping for waffles, pancakes, and desserts.",
    yield: "4 qt (≈1 gal)",
    cookTime: "15 minutes",
    ingredients: [
      "Granny Smith apples, peeled and ¼-inch diced - 12 each",
      "Butter blend - 2 cups (1 lb)",
      "Light brown sugar (packed) - 4 cups",
      "Ground cinnamon - 2 tbsp",
      "Kosher salt - 1 tbsp",
      "Lemon juice - ¼ cup"
    ],
    instructions: [
      "Melt butter blend in a tilt skillet or wide pot over medium heat.",
      "Add diced apples and sauté about 8 minutes, until soft and lightly golden.",
      "Stir in brown sugar, cinnamon, and salt; cook 2 minutes until sugar dissolves.",
      "Add lemon juice and simmer 5 minutes until the mixture thickens and turns syrupy.",
      "Remove from heat, cool slightly, and transfer to a 4-qt Cambro for storage."
    ]
  },
  {
    id: "breakfast-crispy-sweet-potato-hash-bowl",
    name: "Crispy Sweet Potato Hash Bowl",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Crispy fried sweet potatoes with bacon, peppers, and onions topped with eggs.",
    yield: "1 serving",
    cookTime: "8 minutes",
    ingredients: [
      "Sweet potato, ½-inch cubes - 2 cups",
      "Bacon bits, cooked - ¼ cup",
      "Red bell pepper, fine dice - 2 tbsp",
      "Yellow onion, fine dice - 2 tbsp",
      "Unsalted butter - 1 tbsp",
      "SPG seasoning - 1 pinch",
      "Eggs (any style) - 2 each",
      "Toast (choice) - 1 slice"
    ],
    instructions: [
      "Fry Sweet Potatoes Drop 2 cups sweet potato cubes in 350°F fryer 3-4 min until golden and crisp outside, tender inside. Drain on sav-a-day.",
      "Sauté Mix In small sauté pan over medium, melt 1 tbsp butter. Add 2 tbsp bell pepper + 2 tbsp onion; .Add ¼ cup bacon bits; , Season with 1 pinch SPG..",
      "Finish Hash Add fried sweet potatoes. Toss.",
      "Plate Place hash in bowl. Top with 2 eggs (any style). Serve with 1 slice toast on side."
    ]
  },
  {
    id: "batch-stuffed-mushroom-prep",
    name: "Stuffed Mushroom Prep",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Pre-roasted mushroom caps ready for stuffing.",
    yield: "30 mushrooms",
    cookTime: "20 minutes",
    ingredients: [
      "Large white mushrooms - 30 each",
      "Olive oil - 1 cup",
      "SPG seasoning - 2 tbsp"
    ],
    instructions: [
      "Prep Mushrooms: Remove stems from all mushrooms and discard or reserve for other use.",
      "Season: Place mushroom caps in a large mixing bowl. Add olive oil and SPG seasoning; toss gently to coat evenly.",
      "Roast: Arrange mushrooms open side up on a parchment-lined sheet pan.",
      "Cook: Bake at 350°F for 20 minutes, until tender and lightly browned.",
      "Cool: Remove from oven and allow to cool slightly before stuffing."
    ]
  },
  {
    id: "sautee-spinach-artichoke-stuffed-mushrooms",
    name: "Spinach & Artichoke Stuffed Mushrooms",
    station: "sautee",
    category: "appetizers",
    contentType: "recipe",
    description: "Pre-roasted mushroom caps filled with spinach artichoke dip and melted cheese.",
    yield: "30 stuffed mushrooms",
    cookTime: "15 minutes",
    ingredients: [
      "Pre-roasted mushroom caps (from prep) - 30 each",
      "Spinach & artichoke dip (prepared) - 5 cups",
      "Mozzarella cheese, shredded - 2 cups",
      "Parmesan cheese, grated - 1 cup",
      "Chopped parsley (for garnish) - as needed"
    ],
    instructions: [
      "Prepare Filling: In a bowl, mix prepared spinach & artichoke dip with mozzarella and half of the Parmesan cheese until evenly blended.",
      "Stuff Mushrooms: Using a scoop or spoon, fill each pre-roasted mushroom cap generously with the spinach-artichoke mixture, slightly mounding the top.",
      "Top: Sprinkle remaining Parmesan over each stuffed mushroom.",
      "Bake: Arrange on a parchment-lined sheet pan. Bake at 350°F for 15 minutes or until hot and golden brown on top.",
      "Garnish & Serve: Remove from oven, garnish lightly with chopped parsley, and serve immediately."
    ]
  },
  {
    id: "breakfast-salmon-benedict",
    name: "Salmon Benedict",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Blackened salmon on a toasted English muffin with sautéed spinach and poached eggs.",
    yield: "1 serving (2 open-faced halves)",
    cookTime: "8 minutes",
    ingredients: [
      "English muffin - 1 each",
      "Baby spinach - 1 cup",
      "Unsalted butter - 1 tbsp",
      "SPG seasoning - 1 pinch",
      "Blackened salmon filet (6 oz, cooked) - 1 each",
      "Eggs, poached - 2 each",
      "Hollandaise sauce - ¼ cup"
    ],
    instructions: [
      "Cook Salmon: Season and blacken salmon filet in a hot cast-iron skillet until cooked through. Cut in half.",
      "Toast Muffin: Split and toast English muffin until golden and crisp.",
      "Sauté Spinach: In a small pan over medium heat, melt butter. Add spinach and SPG seasoning. Sauté 45 seconds until just wilted; drain excess liquid.",
      "Assemble: Place toasted muffin halves on a warm plate. Top each with half of the sautéed spinach. Add one piece of salmon to each half, followed by one poached egg. Spoon hollandaise sauce generously over each egg.",
      "Serve: Plate neatly and serve immediately."
    ]
  },
  {
    id: "salad-lox-n-loaded-crostini",
    name: "Lox 'n Loaded Crostini",
    station: "salad",
    category: "appetizers",
    contentType: "recipe",
    description: "Toasted French bread crostini with herbed cream cheese, smoked salmon, and pickled garnishes.",
    yield: "4 servings (4 crostini)",
    ingredients: [
      "--- HERBED CREAM CHEESE SPREAD ---",
      "Full-fat cream cheese, softened - 24 oz",
      "Fresh dill, finely chopped - 4 tbsp",
      "Shallot bulb, finely minced - 1 each",
      "Capers, drained and roughly chopped - 3 tbsp",
      "Fresh lemon juice - 3 tbsp",
      "SPG seasoning - 2 tbsp",
      "",
      "--- FOR ASSEMBLY ---",
      "½ French loaf",
      "Butter (for toasting)",
      "1 oz folded smoked salmon (per crostini)",
      "Candied jalapeño slices",
      "Pickled red onion slices"
    ],
    instructions: [
      "HERBED CREAM CHEESE:",
      "Combine all ingredients in a mixing bowl and stir until smooth and evenly blended. Store refrigerated, covered, up to 5 days.",
      "",
      "ASSEMBLY:",
      "Slice Bread: Cut ½ French loaf on a sharp diagonal into four ½-inch-thick slices.",
      "Toast Crostini: Butter generously and toast on a griddle until deep golden and crisp.",
      "Build: Spread 1½ tbsp (≈0.4 oz) Herbed Cream Cheese on each crostini. Top with 1 oz folded smoked salmon.",
      "Garnish: Add two candied jalapeño slices and two pickled red onion slices to each crostini for presentation.",
      "Plate & Serve: Arrange 4 crostini neatly on a plate, wipe rim, and serve immediately."
    ]
  },
  {
    id: "batch-easy-candied-pecans",
    name: "Easy Candied Pecans",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Sweet and crunchy candied pecans for salads and desserts.",
    yield: "3 lb (≈12 cups)",
    ingredients: [
      "Pecan halves - 3 lb",
      "Egg whites - 3 each",
      "Granulated sugar - 2¼ cups",
      "Brown sugar - ¾ cup",
      "Kosher salt - 1 tbsp",
      "Ground cinnamon - 1 tbsp"
    ],
    instructions: [
      "Preheat oven to 300°F. Line a sheet pan with parchment paper.",
      "Whip egg whites in a large bowl until frothy.",
      "Add pecans and toss to coat evenly.",
      "In a separate bowl, combine both sugars, salt, and cinnamon. Fold into coated nuts.",
      "Spread in a single layer on the prepared pan. Bake 45 minutes, stirring every 15 minutes.",
      "Cool completely, break apart, and store in an airtight container."
    ]
  },
  {
    id: "batch-glazed-dinner-rolls",
    name: "Glazed Dinner Rolls with Sesame",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Soft, sweet dinner rolls with a lemon cream glaze and sesame seed topping.",
    yield: "12-16 rolls",
    ingredients: [
      "FOR THE DOUGH:",
      "450ml milk (15 fl oz)",
      "10g dried yeast (0.4 oz)",
      "100g sugar (3.5 oz)",
      "15ml vinegar (0.5 fl oz)",
      "50g butter (1.8 oz)",
      "10g salt (0.4 oz)",
      "800g all-purpose flour (28 oz total)",
      "2 eggs",
      "7g baking powder (0.2 oz)",
      "",
      "FOR THE EGG WASH:",
      "1 egg",
      "15ml milk (0.5 fl oz)",
      "15g sesame seeds (0.5 oz)",
      "",
      "FOR THE GLAZE:",
      "100g sugar (3.5 oz)",
      "15ml lemon juice (0.5 fl oz)",
      "50ml water (1.7 fl oz)",
      "5g salt (0.2 oz)",
      "70ml whipping cream (2.4 fl oz)"
    ],
    instructions: [
      "PREPARE DOUGH:",
      "Warm milk to 110°F, add yeast and a pinch of sugar. Let sit until frothy.",
      "In large bowl, combine flour, remaining sugar, salt, and baking powder.",
      "Add softened butter, eggs, vinegar, and yeast mixture.",
      "Mix until soft dough forms, then knead until smooth and elastic.",
      "",
      "FIRST RISE:",
      "Place dough in greased bowl, cover, and let rise 1-2 hours until doubled.",
      "",
      "SHAPE:",
      "Punch down dough and divide into 12-16 equal pieces.",
      "Shape into balls and place on greased baking sheet.",
      "Cover and let rise 30-45 minutes until puffed.",
      "",
      "EGG WASH:",
      "Beat egg with milk and brush over risen rolls.",
      "Sprinkle with sesame seeds.",
      "",
      "BAKE:",
      "Bake at 375°F for 15-20 minutes until golden brown.",
      "",
      "MAKE GLAZE:",
      "Combine sugar, lemon juice, water, and salt in saucepan.",
      "Cook over medium heat 5 minutes, stirring until sugar dissolves.",
      "Remove from heat and stir in whipping cream.",
      "Drizzle warm glaze over baked rolls."
    ],
    tips: "The vinegar helps create a tender crumb. Glaze can be made while rolls are baking."
  },
  {
    id: "batch-flour-tortillas",
    name: "Homemade Flour Tortillas",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Simple, soft flour tortillas from scratch. Perfect for tacos, burritos, or quesadillas.",
    yield: "16 tortillas",
    cookTime: "40 minutes",
    ingredients: [
      "3 cups all-purpose flour",
      "1 tsp kosher salt",
      "1 tsp baking powder",
      "⅓ cup olive oil or vegetable oil",
      "1 cup warm water"
    ],
    instructions: [
      "MIX DOUGH:",
      "Combine flour, salt, and baking powder in medium bowl.",
      "Make a well in center and add oil and water.",
      "Stir from bottom up until dough forms a shaggy ball.",
      "",
      "KNEAD:",
      "Turn dough onto lightly floured surface.",
      "Knead 1-2 minutes until smooth.",
      "",
      "DIVIDE & REST:",
      "Divide dough into 16 equal portions.",
      "Coat each piece with flour and form into a ball.",
      "Flatten with palm of hand.",
      "Cover with clean towel and rest at least 15 minutes (up to 2 hours).",
      "",
      "ROLL & COOK:",
      "Heat large pan over medium heat.",
      "Roll each dough piece into 6-7 inch circle, keeping surface lightly floured.",
      "Place in hot pan and cook 45 seconds to 1 minute until bottom has pale brown spots.",
      "Flip and cook 15-20 seconds more.",
      "",
      "KEEP WARM:",
      "Stack in covered container or zippered bag to keep soft.",
      "Serve warm."
    ],
    tips: "Don't stack uncooked tortillas - they'll stick together. Separate with parchment if needed. Store at room temp 24 hours or refrigerate up to 1 week."
  },
  {
    id: "batch-corned-beef-brine",
    name: "Corned Beef Brine",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Traditional brine for making homemade corned beef. Cure time: 5-10 days.",
    yield: "Enough for 4-6 lb brisket",
    ingredients: [
      "1 gallon water",
      "1½ cups kosher salt",
      "½ cup brown sugar",
      "1 tbsp pink curing salt (Prague Powder #1) - optional",
      "1 tbsp whole black peppercorns",
      "1 tbsp coriander seeds",
      "1 tbsp mustard seeds",
      "1 tsp allspice berries",
      "1 tsp whole cloves",
      "4-6 bay leaves",
      "1 tbsp juniper berries (optional)",
      "1 cinnamon stick (optional)",
      "4-6 garlic cloves, smashed",
      "1 beef brisket (4-6 lbs), trimmed of excess fat"
    ],
    instructions: [
      "TOAST SPICES (optional):",
      "In dry skillet over medium heat, lightly toast peppercorns, coriander, mustard seeds, allspice, and cloves 1-2 minutes until fragrant.",
      "",
      "PREPARE BRINE:",
      "In large pot, combine water, kosher salt, brown sugar, and pink curing salt (if using).",
      "Stir over medium heat until salt and sugar dissolve.",
      "Remove from heat and add toasted spices, bay leaves, juniper berries, cinnamon, and garlic.",
      "Cool to room temperature, then refrigerate until cold (below 40°F).",
      "",
      "SUBMERGE BRISKET:",
      "Place brisket in large non-reactive container (food-grade plastic bucket or stainless steel pot).",
      "Pour cold brine over meat, ensuring fully submerged.",
      "Weigh down with plate if needed.",
      "",
      "CURE:",
      "Refrigerate 5-10 days (about 1 day per pound).",
      "Flip brisket daily for even curing.",
      "",
      "RINSE & COOK:",
      "Remove from brine and rinse thoroughly under cold water.",
      "Pat dry.",
      "Simmer in water with additional spices for 3-4 hours until tender."
    ],
    tips: "Pink curing salt gives classic pinkish-red color - without it, meat will look grayish but taste great. Uncooked corned beef keeps in brine up to 2 weeks refrigerated. Traditionally served with cabbage, potatoes, and carrots."
  },

  {
    id: "batch-sourdough-bread",
    name: "Sourdough Bread",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Beginner-friendly sourdough with soft chewy crumb and crusty exterior. Total time: 22 hours (2 hr prep, 40 min bake).",
    yield: "1 loaf",
    cookTime: "40 minutes",
    ingredients: [
      "475g all-purpose flour (3½ cups)",
      "100g sourdough starter, active and bubbly (½ cup)",
      "325g water (1⅓ cups)",
      "10g salt (2 tsp)"
    ],
    instructions: [
      "PREPARE STARTER:",
      "Feed sourdough starter 4-12 hours before starting dough.",
      "Ensure it is active, bubbly, and passes the float test.",
      "",
      "MIX DOUGH:",
      "Combine warm water, active starter, salt, and flour in large mixing bowl.",
      "Mix with wooden spoon or hands until combined.",
      "Cover with plastic wrap or lid and rest 30 minutes to hydrate flour.",
      "",
      "STRETCH AND FOLD (3 rounds, 30 min apart):",
      "Grab edge of dough and pull up, stretching as you pull upward.",
      "Place stretched dough back into center.",
      "Turn bowl quarter turn and repeat. Do 4 stretches per round.",
      "Rest 30 minutes between each of 3 rounds.",
      "",
      "BULK FERMENT:",
      "Cover with lid, damp towel, or plastic wrap.",
      "Let dough ferment in warm place until doubled in size (6-12 hours).",
      "Be careful not to over-ferment.",
      "",
      "SHAPE:",
      "Place dough on lightly floured work surface.",
      "Fold dough onto itself and roll up, then shape into ball by spinning toward you.",
      "Optional: Let sit uncovered 15-20 minutes to prevent sticking.",
      "Turn over and shape by folding sides to meet in middle, pinch together.",
      "Repeat on other sides to create surface tension for good oven spring.",
      "",
      "COLD PROOF:",
      "Transfer to floured banneton or bowl with floured tea towel, seam side up.",
      "Cover with plastic and refrigerate 12-15 hours.",
      "(Alternative: Rise at room temperature 3-4 hours.)",
      "",
      "BAKE:",
      "Preheat Dutch oven in oven at 500°F for 1 hour.",
      "Remove dough from fridge right before baking.",
      "Place dough on parchment paper, dust with flour, and score with razor blade.",
      "Carefully transfer parchment and dough into hot Dutch oven.",
      "Cover with lid and bake 20 minutes.",
      "Remove lid, reduce temperature to 475°F, bake 15-25 minutes until golden brown."
    ],
    tips: "Dough may seem dry at first - resist adding water. Use wet hands during stretch and fold if sticky. Most accurate results come from using a kitchen scale. Longer cold proof in fridge gives better scoring and oven spring."
  },
  {
    id: "batch-sourdough-sandwich-bread",
    name: "Sourdough Sandwich Bread",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Soft sourdough sandwich bread with tangy flavor. Perfect for sandwiches with a more delicate bite than crusty loaves. Total time: 17 hours (20 min prep, 16 hr rise, 45 min bake).",
    yield: "2 loaves (24 servings)",
    cookTime: "45 minutes",
    ingredients: [
      "½ cup softened butter or coconut oil (113g)",
      "2 tbsp honey or sugar (42g honey or 24g sugar)",
      "1 tbsp salt (17g)",
      "1 cup active, bubbly sourdough starter (227g)",
      "2½ cups room temperature water (590g)",
      "8 cups all-purpose flour (1120g)"
    ],
    instructions: [
      "MIX INGREDIENTS:",
      "In a stand mixer, combine all ingredients, adding the flour last.",
      "Adjust flour as needed based on the starter's hydration.",
      "",
      "KNEAD THE DOUGH:",
      "Knead until the dough is smooth and elastic, about 10 minutes.",
      "Perform the windowpane test for doneness.",
      "",
      "BULK RISE:",
      "Let the dough rise in a warm place for 10-12 hours.",
      "",
      "DIVIDE AND SHAPE:",
      "Split the dough into two equal parts.",
      "Roll each piece into a rectangle, then roll up tightly.",
      "Place in greased or parchment-lined loaf pans.",
      "",
      "SECOND RISE:",
      "Allow the loaves to rise at room temperature for 2-4 hours until doubled in size.",
      "",
      "BAKE:",
      "Preheat oven to 375°F (190°C).",
      "Optionally, apply an egg wash for a golden crust.",
      "Bake for 45 minutes or until golden brown.",
      "",
      "COOL:",
      "Let the loaves cool completely before slicing."
    ],
    tips: "For best results, ensure your sourdough starter is active and bubbly. The long rise develops tangy flavor. Cool completely before slicing to prevent gummy texture."
  },

  // BATCH STATION - PREP INSTRUCTIONS
  {
    id: "batch-asparagus",
    name: "Asparagus Prep",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Blanched asparagus preparation for service.",
    yield: "15 orders",
    cookTime: "60 minutes prep",
    instructions: [
      "Bring 1 gallon of water to a rolling boil.",
      "Trim ends from asparagus so that spears are 5 inches.",
      "Add 3-4 bunches of asparagus.",
      "When asparagus is bright green but still crisp, shock in an ice bath.",
      "Strain and store in a 1/3 Lexan."
    ]
  },
  {
    id: "batch-green-beans",
    name: "Green Beans Prep",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Blanched green beans portioned for service.",
    yield: "12 portions",
    cookTime: "15 minutes prep",
    instructions: [
      "Bring 3 gallons of water to a rolling boil.",
      "Add 5 lb bag of raw green beans and ½ cup salt.",
      "When beans turn bright green and are no longer crisp, strain and add ice bath (8 minutes).",
      "Strain when cool and let dry.",
      "Portion into 3.5 oz portion bags."
    ],
    portionSize: "3.5 oz"
  },
  {
    id: "batch-grilled-potato",
    name: "Grilled Potato Prep",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Par-cooked potatoes ready for grilling.",
    yield: "30 cups",
    cookTime: "45 minutes prep",
    instructions: [
      "Quarter each potato then slice into ½ in pieces. Discard any pieces with dark bruises.",
      "Add to large pot and run under high-pressure water until it runs clear.",
      "Pour off excess water, add ½ cup of salt and place on high heat for 25 minutes bringing to a boil.",
      "Strain potatoes as soon as they are tender, DO NOT COOK UNTIL MUSHY.",
      "Add ice bath immediately to cool and strain until dry.",
      "Store in a ½ Lexan."
    ]
  },
  {
    id: "batch-pasta-boil",
    name: "Pasta Boil",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Par-cooked pasta ready for service.",
    yield: "20 portions",
    cookTime: "25 minutes prep",
    instructions: [
      "Bring 3 gallons of water to a rolling boil.",
      "Add 5 lb bag of dried pasta (penne or shell) and ½ cup salt.",
      "Stir pasta occasionally to ensure noodles do not stick together.",
      "Let boil for 9 minutes, remove from heat.",
      "Strain immediately and return to pot, add ice water.",
      "When ice has melted strain and toss with ¼ cup olive oil and let rest in strainer for a minimum of 20 minutes before portioning.",
      "Do not allow pasta to soak in the water for any extended time.",
      "Portion penne into 9 oz portions. Portion shells into 4.5 oz portions."
    ],
    portionSize: "9 oz penne / 4.5 oz shells"
  },
  {
    id: "batch-white-rice",
    name: "White Rice",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Basic white rice preparation.",
    yield: "30 cups",
    cookTime: "40 minutes prep",
    ingredients: [
      "20 cups Water",
      "10 cups Basmati Rice"
    ],
    instructions: [
      "In a medium stockpot bring water to a rolling boil.",
      "Add rice and stir occasionally ensuring no rice is stuck to the bottom of the pot.",
      "Bring back to a rolling boil, cover and turn off.",
      "Let sit covered for 22 minutes. DO NOT REMOVE LID.",
      "Cool on a large sheet tray.",
      "Store in a medium ½ Lexan."
    ]
  },
  {
    id: "batch-dirty-rice",
    name: "Dirty Rice",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Cajun-style dirty rice with pork sausage.",
    yield: "30 cups",
    cookTime: "40 minutes prep",
    ingredients: [
      "10 cups Trinity",
      "3 lbs Pork Sausage",
      "2 cups Vegetable Stock",
      "4 cups Green onions, diced",
      "1 cup Parsley",
      "1 tbsp Red pepper flake",
      "¼ cup SPG",
      "25 cups White Rice"
    ],
    instructions: [
      "Combine trinity, stock, and sausage in a large saucepot on high heat.",
      "Use a potato masher to completely break up sausage.",
      "When stock is completely evaporated remove from heat.",
      "Add rice, green onions, parsley, red pepper, and SPG.",
      "Cool on a large sheet tray in the reach in cooler.",
      "Store in a medium ½ Lexan."
    ]
  },
  {
    id: "batch-grits",
    name: "Jalapeño Cheddar Grits",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Creamy jalapeño cheddar grits.",
    yield: "20 cups",
    cookTime: "45 minutes prep",
    ingredients: [
      "12 cups Veggie stock",
      "6 cups Milk",
      "3 cups Polenta",
      "3 oz Diced jalapeño",
      "2½ tbsp Salt",
      "4 cups Cheddar cheese"
    ],
    instructions: [
      "Combine stock, jalapenos, and salt to a medium saucepot and bring to a boil.",
      "Add milk, wait until boil and add the polenta. Do not let the polenta scorch.",
      "Once the grits start to pop add the 3 cups of cheddar cheese and stir thoroughly.",
      "Boil until grits are thick, about 10 minutes."
    ]
  },
  {
    id: "batch-mashed-potatoes",
    name: "Mashed Potatoes",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Creamy garlic mashed potatoes.",
    yield: "1 gallon",
    cookTime: "45 minutes prep",
    ingredients: [
      "6 lbs Potatoes",
      "1 lb Butter",
      "1 cup Heavy Cream",
      "1 cup Milk",
      "Salt to taste",
      "1 tbsp Granulated Garlic",
      "1 tbsp White Pepper"
    ],
    instructions: [
      "Peel potatoes and quarter. Cover with water in a pot and add ¼ cup of salt.",
      "Boil potatoes until soft, about 25 minutes from when you turn on the flame.",
      "Strain and press all potatoes through potato ricer into large mixing bowl.",
      "Add and mix all remaining ingredients until fully incorporated.",
      "Taste and add 1-2 tbsp of salt as needed.",
      "Cool and store, heat as needed."
    ],
    portionSize: "#8 scoop"
  },
  {
    id: "batch-jambalaya-rice",
    name: "Jambalaya Rice",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Cajun jambalaya rice base.",
    yield: "2 gallons",
    cookTime: "1 hour prep",
    ingredients: [
      "11 cups White Rice (uncooked)",
      "6 cups Trinity",
      "1 cup Bacon Fat",
      "2 tbsp Cajun Spice",
      "4 tbsp Garlic Chopped",
      "1 tbsp Jambalaya Seasoning",
      "10 cups Jambalaya Sauce",
      "4 tbsp SPG",
      "10 cups Water",
      "2 tbsp Chicken Base"
    ],
    instructions: [
      "In a large stock pot, sauté trinity in bacon fat until translucent.",
      "Add remaining ingredients except for water and rice.",
      "Once sauce begins to simmer add water and bring to a boil.",
      "Add rice and bring to a boil again, stirring frequently.",
      "Do not allow rice to stick to the bottom of the pot.",
      "Cover pot and bring heat down to the lowest setting.",
      "Remove from heat and let stand covered for 15 minutes.",
      "Cool on a sheet tray."
    ]
  },
  {
    id: "batch-boudin-balls",
    name: "Boudin Balls Mix",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Boudin ball mixture for frying.",
    yield: "Multiple orders",
    cookTime: "10 minutes prep",
    ingredients: [
      "8 cups Dirty Rice",
      "2 cups Cheddar",
      "1½ cups Flour",
      "½ cup Veggie Stock",
      "1 tbsp SPG",
      "1 tbsp Cajun Spice"
    ],
    instructions: [
      "Mix all ingredients by hand in a large bowl.",
      "Fill a #20 scoop and compress the mix tightly into the scoop.",
      "Scrape the top of the scoop to make it level.",
      "Form into a ball with your hands and store in a ½ Lexan.",
      "Store and chill immediately."
    ],
    portionSize: "5 per order"
  },
  {
    id: "batch-crab-stuffing",
    name: "Crab Stuffing",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Lump crab cake mixture.",
    yield: "20 cakes",
    cookTime: "10 minutes prep",
    ingredients: [
      "1 lb Lump crab",
      "2 tbsp Bread crumb",
      "1 cup Panko Bread crumb",
      "1 tsp Tabasco",
      "1 each Egg",
      "1/3 cup Mayo",
      "2 tbsp Red Onion (fine diced)",
      "2 tbsp Bell Pepper (fine diced)",
      "2 tsp Parsley",
      "1 each Fresh Lemon Juice",
      "1 tsp Tony Chachere's",
      "1 tsp Dijon",
      "2 tsp Clarified Butter"
    ],
    instructions: [
      "In a large mixing bowl, pick through the crabmeat, removing any bits of shell.",
      "Gently mix all remaining ingredients by hand in a large bowl.",
      "Fill a #20 scoop and compress the mix tightly into the scoop.",
      "Scrape the top of the scoop to make it level.",
      "Form into a ball with your hands and store in a ½ Lexan.",
      "Coat with fine panko and fire on flattop."
    ]
  },
  {
    id: "batch-crawfish-stuffing",
    name: "Crawfish Stuffing",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Crawfish stuffing for various dishes.",
    yield: "10 cups",
    cookTime: "10 minutes prep",
    ingredients: [
      "2 lbs Crawfish tails",
      "5 cups Mozzarella",
      "4 tbsp Cajun Spice",
      "1 tbsp Tabasco",
      "1 tbsp Garlic Powder",
      "2½ cups Panko",
      "2 tbsp Parsley"
    ],
    instructions: [
      "Drain crawfish and press into a sieve leaving crawfish dry.",
      "Mix all ingredients by hand in a large bowl.",
      "Fill a #20 scoop and compress the mix tightly into the scoop.",
      "Scrape the top of the scoop to make it level.",
      "Form into a ball with your hands and store in a ½ Lexan."
    ]
  },
  {
    id: "batch-croutons",
    name: "Croutons",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Homemade herb croutons.",
    yield: "10 cups",
    cookTime: "15 minutes prep",
    ingredients: [
      "10 cups Bread pieces",
      "2 oz Butter, clarified",
      "1 tbsp Basil",
      "2 tbsp Parsley",
      "1 tbsp SPG"
    ],
    instructions: [
      "Cut bread ends and pieces into ½ in cubes.",
      "Place cubes in a large mixing bowl and toss while coating with butter.",
      "Continue tossing butter coated pieces and dust with remaining ingredients.",
      "Place on large sheet tray and bake for 8 minutes at 350°."
    ]
  },
  {
    id: "batch-meatloaf",
    name: "Meatloaf",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Smoked meatloaf with BBQ glaze.",
    yield: "12 loaves",
    cookTime: "1½ hours prep",
    ingredients: [
      "10 lbs Ground Beef",
      "5 each Eggs",
      "1 cup Yellow Onion",
      "2 tbsp Garlic, granulated",
      "2 tbsp Dry mustard",
      "2 tbsp Chili powder",
      "1 tbsp White pepper",
      "1 tbsp Black pepper",
      "1 tbsp Salt",
      "¼ cup Worcestershire",
      "3 cups Panko",
      "1 cup Ketchup (sauce)",
      "1 cup BBQ Sauce (sauce)"
    ],
    instructions: [
      "Purée all ingredients except beef in blender.",
      "Mix purée and beef in large mixing bowl by hand.",
      "Using the 3 bread molds, press 3.3 lbs of beef into mold and knock out onto a medium greased sheet pan.",
      "Mix ketchup and BBQ sauce together and brush loaves until coated.",
      "Place in smoker at 225° for one hour.",
      "Brush loaves again and rotate the pans.",
      "Place back in smoker at 225° for 30 more minutes.",
      "Remove and let cool before individually wrapping all 3 loaves."
    ]
  },
  {
    id: "batch-pulled-pork",
    name: "Pulled Pork",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Smoked pulled pork.",
    yield: "10 lbs",
    cookTime: "14 hours prep",
    ingredients: [
      "10 lbs Pork butt",
      "2 cups Pulled pork rub"
    ],
    instructions: [
      "Split the pork butt onto two medium sheet pans and coat all exposed surfaces with seasoning rub.",
      "Place in smoker for 12 hours at 225°. Add new hickory woodchips every few hours.",
      "Alternate the top and bottom pans when adding new wood chips to ensure even cooking.",
      "Shred meat and place any un-rendered pieces of fat in a large saucepot. Simmer on medium heat until remaining fat is rendered.",
      "Add contents of saucepot back into the shredded pork and mix thoroughly.",
      "Shred meat into bite size pieces and portion into 5 oz bags."
    ],
    portionSize: "5 oz"
  },
  {
    id: "batch-red-beans",
    name: "Red Beans",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Louisiana-style red beans with sausage and ham.",
    yield: "3 gallons",
    cookTime: "5 hours prep",
    ingredients: [
      "3 lbs Red kidney beans",
      "10 cups Trinity",
      "10 cups Smoked sausage",
      "2 cups Ham, diced",
      "½ cup Bacon bits",
      "¼ cup Garlic, minced",
      "1/8 cup Salt",
      "1/8 cup Tony Chachere's",
      "½ tbsp Tabasco",
      "¼ cup Basil",
      "¼ cup Black pepper",
      "4 each Bay leaf",
      "5½ qt Water"
    ],
    instructions: [
      "Soak red beans in 1½ gallons of water for 12 hours.",
      "Drain and rinse red beans.",
      "Slice smoked sausage on a bias into ¼ in slices.",
      "Combine all ingredients with remaining 2 gallons of water.",
      "Bring to boil, stirring every few minutes.",
      "Reduce heat and let simmer down to 3 gallons."
    ]
  },
  {
    id: "batch-pickled-onions",
    name: "Pickled Onions",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Quick pickled red onions.",
    yield: "10 orders",
    cookTime: "20 minutes prep",
    ingredients: [
      "1½ cups White vinegar",
      "¼ cup Sugar",
      "1 tbsp Salt",
      "2 each Bay leaf",
      "½ tbsp Allspice",
      "1 tbsp Clove",
      "1 tbsp Chili powder",
      "2 each Red onion"
    ],
    instructions: [
      "Slice onions on the slicer on #4.",
      "Combine all ingredients in a medium saucepot and bring to a boil.",
      "Reduce heat and simmer for 2 minutes.",
      "Remove from heat and cool completely before serving."
    ]
  },
  {
    id: "batch-potato-salad",
    name: "Potato Salad",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Creamy tarragon potato salad.",
    yield: "16 orders",
    cookTime: "20 minutes prep",
    ingredients: [
      "6 lbs Fingerling potatoes",
      "4 ribs Celery, diced",
      "1 cup Mayonnaise",
      "½ cup Green onion",
      "1 tbsp Lemon zest, grated",
      "¼ cup Lemon juice",
      "1 tbsp Sugar",
      "2 tbsp Fresh tarragon, diced",
      "1 tsp Salt",
      "1 tsp Pepper"
    ],
    instructions: [
      "Cover potatoes with water in a large pot and season well with salt. Bring to a boil, and then simmer until tender, 12-20 minutes.",
      "While potatoes cook, stir together celery, mayonnaise, chives, lemon zest, lemon juice, sugar, salt, tarragon and pepper in a large bowl.",
      "Drain potatoes and cool completely, then halve or quarter. Add to dressing and toss to coat."
    ]
  },
  {
    id: "batch-chicken-salad",
    name: "Chicken Salad",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Classic chicken salad with grapes and herbs.",
    yield: "18 portions",
    cookTime: "10 minutes prep",
    ingredients: [
      "10 each Chicken Breast, grilled",
      "2¼ cups Mayo",
      "2 each Celery stalk",
      "½ cup Green Onion",
      "2 tbsp Dill",
      "2 tbsp Thyme",
      "1 cup Red Grapes",
      "2 tbsp SPG"
    ],
    instructions: [
      "Dice chicken into ¼ in cubes.",
      "Dice celery and green onions, but not quite minced.",
      "Cut grapes in half.",
      "Mince thyme and dill very fine.",
      "Combine all ingredients and chill overnight before serving."
    ]
  },
  {
    id: "batch-olive-salad",
    name: "Olive Salad",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Mediterranean olive salad for muffulettas.",
    yield: "8 cups",
    cookTime: "30 minutes prep",
    ingredients: [
      "3 cups Green olives, pitted",
      "1 cup Kalamata olives",
      "2 cups Giardiniera",
      "2 tbsp Capers",
      "6 tbsp Garlic, minced",
      "¼ cup Celery, diced",
      "2 tbsp Parsley",
      "1 tbsp Oregano",
      "½ tbsp Red pepper flake",
      "¼ cup Red wine vinegar",
      "½ cup Pimento",
      "1/8 cup Green onion, diced",
      "1 cup Olive oil"
    ],
    instructions: [
      "Pulse green olives in food processor and set aside.",
      "Pulse Kalamata olives in food processor and set aside.",
      "Pulse giardiniera in food processor and set aside.",
      "Pulse remaining ingredients in food processor to a fine dice and move to a large mixing bowl.",
      "Combine all ingredients and mix by hand.",
      "Store in deep ¼ lexan and cover with olive oil."
    ]
  },
  {
    id: "batch-serrano-slaw",
    name: "Serrano Slaw",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Spicy serrano coleslaw.",
    yield: "1 gallon",
    cookTime: "20 minutes prep",
    ingredients: [
      "6 lbs Cabbage, shredded",
      "2 cups Mayonnaise",
      "12 oz Serrano Slurry",
      "2 each Carrot, julienned",
      "1 tbsp SPG"
    ],
    instructions: [
      "Remove outer leaves and core of cabbage.",
      "Slice using width #4 on the slicer.",
      "Combine all ingredients and mix thoroughly.",
      "Store in 6 in ¼ Lexan."
    ]
  },
  {
    id: "batch-breakfast-sausage",
    name: "Breakfast Sausage",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "House-made breakfast sausage patties.",
    yield: "90 patties",
    cookTime: "20 minutes prep",
    ingredients: [
      "10 lbs Ground pork sausage",
      "½ cup SPG",
      "½ cup Sriracha sauce"
    ],
    instructions: [
      "In a large mixing bowl combine all ingredients and mix thoroughly.",
      "Portion into 1.75 oz meatballs and store in a ½ Lexan."
    ],
    portionSize: "1.75 oz"
  },

  // BATCH STATION - SAUCES & DRESSINGS
  {
    id: "batch-balsamic-reduction",
    name: "Balsamic Reduction",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Sweet and tangy balsamic glaze.",
    yield: "1 quart",
    cookTime: "30 minutes prep",
    ingredients: [
      "3 cups Balsamic Vinegar",
      "½ cup Honey",
      "1 cup Granulated sugar",
      "2 tbsp Soy sauce"
    ],
    instructions: [
      "Bring Balsamic Vinegar and Sugar to a boil over medium heat.",
      "Lower heat. Simmer for 20 minutes.",
      "Add honey and Soy Sauce.",
      "Cool and store."
    ]
  },
  {
    id: "batch-balsamic-vinaigrette",
    name: "Balsamic Vinaigrette",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "House balsamic vinaigrette dressing.",
    yield: "1 quart",
    cookTime: "10 minutes prep",
    ingredients: [
      "3 cups Balsamic Vinegar",
      "3 cups Olive Oil",
      "2 tbsp Garlic, chopped",
      "1 tbsp Oregano, dried",
      "4 tbsp Dijon Mustard",
      "2 tbsp SPG"
    ],
    instructions: [
      "Add all ingredients except oil in a food processor.",
      "Run on high and slowly add oil.",
      "Store and chill immediately."
    ]
  },
  {
    id: "batch-bleu-butter",
    name: "Bleu Butter",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Compound butter with bleu cheese and rosemary.",
    yield: "5 cups",
    cookTime: "10 minutes prep",
    ingredients: [
      "2 lbs Butter, softened",
      "1 cup Bleu cheese crumbles",
      "2 tbsp Rosemary, minced",
      "1 tbsp Salt"
    ],
    instructions: [
      "Combine all ingredients in stand mixer.",
      "Mix on high until smooth and fully incorporated."
    ]
  },
  {
    id: "batch-bleu-cheese-dressing",
    name: "Bleu Cheese Dressing",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Creamy bleu cheese dressing.",
    yield: "1 quart",
    cookTime: "10 minutes prep",
    ingredients: [
      "2 cups Bleu Cheese crumbles",
      "1½ cups Mayonnaise",
      "1½ cups Sour cream",
      "1 tbsp SPG",
      "½ cup Milk"
    ],
    instructions: [
      "Combine all ingredients in food processor and mix on high until puréed.",
      "Store and chill immediately."
    ]
  },
  {
    id: "batch-garlic-confit",
    name: "Garlic Confit",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Rich, caramelized garlic spread. Spread this on bread, use it as a base for sauces, or incorporate it into your favorite dishes for a burst of caramelized garlic flavor.",
    yield: "About 1 cup",
    ingredients: [
      "1 cup garlic cloves, peeled",
      "2 cups water",
      "4 oz (1 stick) unsalted butter"
    ],
    instructions: [
      "Combine the garlic cloves and water in a medium saucepan.",
      "Bring to a boil over medium heat and cook until the water completely evaporates. This process will soften the garlic.",
      "Once the water has evaporated, add the butter to the saucepan.",
      "Continue to cook over medium heat, stirring occasionally, as the butter toasts and begins to emulsify with the softened garlic.",
      "Allow the mixture to cook until the garlic is golden and caramelized, forming a rich, spreadable paste."
    ],
    tips: "This versatile spread elevates any dish—feel free to \"spread this on the world.\""
  },
  {
    id: "batch-caesar-vinaigrette",
    name: "Caesar Vinaigrette",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Classic Caesar salad dressing.",
    yield: "2 cups",
    cookTime: "10 minutes prep",
    ingredients: [
      "2 cups Parmesan cheese",
      "½ cup Lemon juice",
      "2 tbsp Clam base",
      "1 tbsp Black pepper",
      "2 tbsp Worcestershire sauce",
      "16 each Egg yolk",
      "4 tbsp Garlic, minced",
      "2 tbsp Cajun spice",
      "2 cups Olive oil"
    ],
    instructions: [
      "Combine all ingredients except oil in a food processor.",
      "Run on high and slowly add oil.",
      "Store and chill immediately."
    ]
  },
  {
    id: "batch-cajun-butter",
    name: "Cajun Butter",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Spicy Cajun compound butter.",
    yield: "5 cups",
    cookTime: "10 minutes prep",
    ingredients: [
      "2 lbs Butter, softened",
      "2 tbsp Paprika",
      "2 tbsp Cajun spice",
      "2 tsp Cayenne",
      "1 tbsp White pepper"
    ],
    instructions: [
      "Combine all ingredients in stand mixer.",
      "Mix on high until smooth and fully incorporated."
    ]
  },
  {
    id: "batch-cocktail-sauce",
    name: "Cocktail Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Classic seafood cocktail sauce.",
    yield: "1 quart",
    cookTime: "10 minutes prep",
    ingredients: [
      "8 cups Ketchup",
      "½ cup Horseradish",
      "1/8 cup Worcestershire",
      "2 tbsp SPG"
    ],
    instructions: [
      "Combine all ingredients and whisk until completely incorporated.",
      "Store and chill immediately."
    ]
  },
  {
    id: "batch-fire-sauce",
    name: "Fire Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Extra spicy hot sauce blend.",
    yield: "1 quart",
    cookTime: "10 minutes prep",
    ingredients: [
      "6 each Jalapeño pepper, chopped",
      "6 each Serrano pepper, chopped",
      "4 cups Franks wing sauce",
      "¼ cup Tabasco",
      "½ cup Sriracha sauce",
      "1 tbsp White pepper",
      "2 tbsp Black pepper",
      "2 tbsp Cayenne pepper",
      "1 tbsp Garlic, minced",
      "2 tbsp Worcestershire",
      "1 tbsp Red pepper flakes"
    ],
    instructions: [
      "Combine all ingredients in blender and purée."
    ]
  },
  {
    id: "batch-fish-taco-aioli",
    name: "Fish Taco Aioli",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Creamy lime aioli for fish tacos.",
    yield: "1 cup",
    cookTime: "2 minutes prep",
    ingredients: [
      "½ cup Sour cream",
      "1/3 cup Mayo",
      "2 tbsp Lime juice",
      "1 tsp Garlic powder",
      "1 tsp Sriracha sauce"
    ],
    instructions: [
      "Combine all ingredients and whisk together.",
      "Refrigerate for 30 minutes before serving."
    ]
  },
  {
    id: "batch-hollandaise",
    name: "Hollandaise Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Classic hollandaise with Cajun twist.",
    yield: "3 cups",
    cookTime: "10 minutes prep",
    ingredients: [
      "1 dozen Eggs",
      "4 oz Butter, clarified",
      "1 each Lemon, juiced",
      "1 tsp Cajun Spice"
    ],
    instructions: [
      "Separate egg yolks into ¼ Lexan.",
      "Heat butter in microwave for 30 seconds.",
      "Blend yolks with immersion blender and slowly add hot butter.",
      "Add lemon juice and Cajun Spice and mix with immersion blender for 60 seconds."
    ]
  },
  {
    id: "batch-beer-cheese-sauce",
    name: "Beer Cheese Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Tangy cheddar cheese sauce with beer, peppers, and pimento. Great over baked fish or chicken wings.",
    yield: "About 2 cups",
    ingredients: [
      "1 cup beer, without foam",
      "¼ tsp dry mustard",
      "1 tsp Worcestershire sauce",
      "1 cup cheddar cheese, shredded",
      "2 tbsp cornstarch",
      "2 tbsp water",
      "1 tbsp butter",
      "¼ cup diced onion",
      "2 tbsp diced green pepper",
      "2 tbsp chopped pimento",
      "Dash hot sauce",
      "Slivered almonds for garnish (optional)"
    ],
    instructions: [
      "MAKE CHEESE BASE:",
      "In saucepan, warm beer, dry mustard, and Worcestershire sauce.",
      "Add shredded cheese and stir slowly until partially melted.",
      "",
      "THICKEN:",
      "Combine cornstarch with water.",
      "Add to cheese-beer mixture.",
      "Stir until thickened.",
      "",
      "SAUTÉ VEGETABLES:",
      "In separate pan, melt butter.",
      "Sauté onion, green pepper, and pimento until softened.",
      "Add to cheese-beer mixture.",
      "",
      "FINISH:",
      "Add dash of hot sauce.",
      "Serve over baked fish or chicken wings.",
      "Sprinkle with slivered almonds if desired."
    ],
    tips: "Let beer go flat or pour out foam for best results. Also great on baked chicken wings, pretzels, or as a dip."
  },
  {
    id: "batch-beurre-blanc",
    name: "Beurre Blanc Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Classic French white butter sauce with shallots and chives. Perfect for seafood dishes like Pompano Duarte.",
    yield: "About 1 cup",
    ingredients: [
      "⅓ cup dry white wine",
      "⅓ cup heavy cream",
      "1 large shallot, very finely chopped",
      "1½ sticks (6 oz) unsalted butter, cut into ½-inch cubes, softened",
      "½ tsp kosher salt",
      "⅛ tsp white pepper, freshly ground",
      "2 tbsp fresh chives, snipped",
      "2 tsp Crystal hot sauce"
    ],
    instructions: [
      "REDUCE:",
      "In small saucepan, combine wine, cream, and shallot.",
      "Bring to boil over medium-high heat, then reduce heat to low.",
      "Simmer gently until reduced to about 2 tbsp, watching carefully (about 10 minutes).",
      "Can set aside up to 1 hour before finishing.",
      "",
      "FINISH SAUCE:",
      "Place saucepan over low heat to warm through if needed.",
      "As soon as it's steaming, add all butter at once.",
      "Swirl pan or whisk continuously until butter is absorbed and sauce is smooth.",
      "Remove from heat immediately.",
      "Stir in salt, pepper, chives, and hot sauce."
    ],
    tips: "Use within 10 minutes or keep warm in double boiler over hot (not simmering) water for up to 1 hour, stirring occasionally."
  },
  {
    id: "batch-garlic-butter-herbsaint",
    name: "Garlic Butter with Herbsaint",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Rich garlic compound butter with Herbsaint liqueur and parsley. Used for Pompano Duarte and other seafood.",
    yield: "1½ cups",
    ingredients: [
      "3 sticks (12 oz) unsalted butter, room temperature",
      "6 cloves garlic, very finely chopped",
      "¼ cup Herbsaint liqueur (or Pernod)",
      "1 cup flat-leaf parsley, finely chopped",
      "Kosher salt to taste",
      "Freshly ground black pepper",
      "2 tsp Crystal hot sauce"
    ],
    instructions: [
      "In food processor or stand mixer, mix butter until smooth.",
      "Add chopped garlic and process until smooth.",
      "Add Herbsaint, chopped parsley, salt, pepper, and hot sauce.",
      "Mix until completely smooth and liqueur is fully absorbed (3-5 minutes in mixer, less in processor).",
      "Taste and adjust seasoning.",
      "Store refrigerated in airtight container."
    ],
    tips: "Can be made ahead and refrigerated for up to 2 weeks. Also freezes well for up to 3 months."
  },
  {
    id: "batch-garlic-bread-butter",
    name: "Garlic Bread Butter",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "House-made garlic butter for bread service. Double-boiler method for perfect flavor.",
    yield: "About 3 lbs",
    ingredients: [
      "3 lbs butter blend (not clarified, just 3 full blocks)",
      "3/4 cup minced garlic",
      "2 Tablespoons salt"
    ],
    instructions: [
      "Use two small handled sauce pans of the same size, add water to the bottom pan and use as a double boiler.",
      "Add all ingredients to the top pot and cook for 30-40 mins to get the perfect flavor, stirring occasionally.",
      "Use fine strainer and strain into cambro for storage.",
      "Please label so it doesn't get mistaken with clarified butter."
    ],
    cookTime: "30-40 min"
  },
  {
    id: "batch-bearnaise",
    name: "Béarnaise Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Classic French butter sauce with tarragon and shallots. Perfect for steaks and Crab Oscar.",
    yield: "About 1 cup",
    ingredients: [
      "FOR THE TARRAGON BASE:",
      "¼ cup dry white wine",
      "3 tbsp white wine vinegar",
      "¼ cup shallots, very finely chopped",
      "¼ tsp black pepper",
      "1½ tbsp fresh tarragon, chopped (divided)",
      "",
      "FOR THE SAUCE:",
      "8 oz unsalted butter, cut into cubes",
      "3 egg yolks",
      "3 tbsp water",
      "1 tbsp lemon juice (or more to taste)",
      "Pinch of salt"
    ],
    instructions: [
      "MAKE TARRAGON BASE:",
      "In small skillet over medium-low heat, combine wine, vinegar, shallots, black pepper, and ½ tbsp tarragon.",
      "Simmer until most liquid has evaporated but pan is not completely dry.",
      "Should have 1-2 tbsp liquid remaining.",
      "Set aside and cool to lukewarm.",
      "",
      "MELT BUTTER:",
      "Melt butter in small saucepan over low heat. Keep warm.",
      "",
      "MAKE SAUCE:",
      "In double boiler or heatproof bowl over simmering water, whisk egg yolks with water until pale and slightly thickened.",
      "Remove from heat.",
      "Very slowly drizzle in warm melted butter while whisking constantly.",
      "Continue until all butter is incorporated and sauce is thick and creamy.",
      "",
      "FINISH:",
      "Stir in the cooled tarragon base.",
      "Add remaining 1 tbsp fresh tarragon.",
      "Season with lemon juice and salt to taste.",
      "Serve immediately or keep warm in double boiler."
    ],
    tips: "Don't let eggs get too hot or they'll scramble. Add butter very slowly at first. If sauce breaks, whisk in 1 tbsp cold water. Keeps warm in thermos for up to 2 hours."
  },
  {
    id: "batch-honey-mustard",
    name: "Honey Mustard",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Sweet honey mustard sauce.",
    yield: "1 quart",
    cookTime: "10 minutes prep",
    ingredients: [
      "3 cups Mayonnaise",
      "½ cup Dijon Mustard",
      "1 cup Honey"
    ],
    instructions: [
      "Combine all ingredients in a food processor.",
      "Run on high for 30 seconds."
    ]
  },
  {
    id: "batch-horseradish-cream",
    name: "Horseradish Cream Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Creamy horseradish sauce for steaks.",
    yield: "1 cup",
    cookTime: "10 minutes prep",
    ingredients: [
      "1 cup Sour Cream",
      "1 tbsp Horseradish",
      "1 tsp Worcestershire",
      "1 pinch SPG"
    ],
    instructions: [
      "Combine all ingredients.",
      "Mix thoroughly by hand."
    ]
  },
  {
    id: "batch-jambalaya-sauce",
    name: "Jambalaya Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Base tomato sauce for jambalaya.",
    yield: "1 gallon",
    cookTime: "45 minutes prep",
    ingredients: [
      "1 gal Whole peeled tomatoes",
      "2 tbsp Olive oil",
      "1 cup Trinity, diced",
      "2 tbsp Garlic, minced",
      "¼ cup Sugar",
      "1 tbsp Parsley",
      "1 tbsp Basil",
      "1 tbsp Oregano",
      "3 tbsp Thyme",
      "3 ea Bay Leaves",
      "2 tbsp White Pepper",
      "2 tbsp Chicken Base",
      "1 tbsp SPG",
      "½ cup Worcestershire Sauce"
    ],
    instructions: [
      "Heat oil and trinity in medium stockpot and simmer until translucent.",
      "Add all remaining ingredients and bring to a boil, reduce heat and simmer for 20 minutes.",
      "Remove bay leaves.",
      "Puree sauce with immersion blender.",
      "Simmer for another 10 minutes, cool and store."
    ]
  },
  {
    id: "batch-marinara",
    name: "Marinara Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Classic Italian marinara sauce.",
    yield: "1 gallon",
    cookTime: "45 minutes prep",
    ingredients: [
      "1 gal Whole peeled tomatoes",
      "2 tbsp Olive oil",
      "1 cup Yellow onion, diced",
      "2 oz Carrot",
      "2 tbsp Garlic, minced",
      "¼ cup Sugar",
      "1 tbsp Parsley",
      "1 tbsp Basil",
      "1 tbsp Oregano",
      "1 tbsp SPG"
    ],
    instructions: [
      "Heat oil, onion, and carrots in medium stockpot and simmer until onions are translucent.",
      "Add all remaining ingredients and bring to a boil, reduce heat and simmer for 20 minutes.",
      "Puree sauce with immersion blender.",
      "Simmer for another 10 minutes, cool and store."
    ]
  },
  {
    id: "batch-mushroom-gravy",
    name: "Mushroom Gravy",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Rich mushroom gravy for steaks.",
    yield: "10 cups",
    cookTime: "30 minutes prep",
    ingredients: [
      "5 oz Butter",
      "½ cup Onion, diced",
      "2 tbsp Garlic, minced",
      "½ cup Mushrooms, chopped",
      "1 cup Flour",
      "3 tbsp Beef base",
      "1 tbsp Soy sauce",
      "1 tbsp Worcestershire sauce",
      "2 tbsp SPG",
      "10 cups Water"
    ],
    instructions: [
      "Combine butter, onion, garlic, and mushrooms to a medium saucepot.",
      "Simmer until onions are translucent.",
      "Add flour and mix into a roux.",
      "Cook until golden brown, stirring constantly.",
      "Add cold water and whisk until completely dissolved.",
      "Add soy sauce, Worcestershire, beef base, and SPG.",
      "Simmer until thickened."
    ]
  },
  {
    id: "batch-pulled-pork-sauce",
    name: "Pulled Pork Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Tangy BBQ sauce for pulled pork.",
    yield: "1 quart",
    cookTime: "20 minutes prep",
    ingredients: [
      "3 cups BBQ sauce",
      "2 cups White vinegar",
      "1 cup Yellow onion, diced",
      "1 tbsp Garlic, minced",
      "1 tbsp Red pepper flakes"
    ],
    instructions: [
      "Combine all ingredients in a medium saucepot and bring to a boil.",
      "Reduce heat and simmer for 20 minutes.",
      "Purée with immersion blender.",
      "Remove from heat and cool completely before serving."
    ]
  },
  {
    id: "batch-salsa-green",
    name: "Green Salsa",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Fire-roasted green tomatillo salsa.",
    yield: "1 quart",
    cookTime: "20 minutes prep",
    ingredients: [
      "8 each Green tomatoes",
      "½ cup Red onion",
      "4 each Serranos (large)",
      "1 tbsp SPG"
    ],
    instructions: [
      "Blacken tomatoes and peppers on the char-grill until tender.",
      "Once cooled remove excess burned or blackened skin and discard.",
      "Roughly chop all ingredients and combine in a food processor.",
      "Pulse until mixed and no longer chunky."
    ]
  },
  {
    id: "batch-salsa-red",
    name: "Red Salsa",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Fire-roasted red tomato salsa.",
    yield: "1 quart",
    cookTime: "20 minutes prep",
    ingredients: [
      "8 each Tomatoes",
      "½ cup Red onion",
      "3 each Jalapeños (large)",
      "1 each Serrano (large)",
      "1 tbsp SPG"
    ],
    instructions: [
      "Blacken tomatoes and peppers on the char-grill until tender.",
      "Once cooled remove excess burned or blackened skin and discard.",
      "Roughly chop all ingredients and combine in a food processor.",
      "Pulse until mixed and no longer chunky."
    ]
  },
  {
    id: "batch-sausage-gravy",
    name: "Sausage Gravy",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Creamy sausage gravy for biscuits.",
    yield: "1 gallon",
    cookTime: "40 minutes prep",
    ingredients: [
      "1 lb Butter",
      "1 cup Onion, diced",
      "1 lb Pork Sausage",
      "2 tbsp Garlic, minced",
      "2½ cups Flour",
      "1 gallon Milk",
      "3 tbsp SPG"
    ],
    instructions: [
      "Combine butter, sausage, garlic, and onion in a medium saucepot on medium heat, simmer until onions are translucent.",
      "Add flour and whisk into a roux, simmer flour for 2 minutes and ensure no dry flour remains.",
      "Add half of milk and whisk, making sure there are no clumps of flour.",
      "Simmer until milk thickens, add remaining milk and thicken again."
    ]
  },
  {
    id: "batch-serrano-slurry",
    name: "Serrano Slurry",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Spicy serrano dressing base.",
    yield: "1 quart",
    cookTime: "10 minutes prep",
    ingredients: [
      "1 cup Olive Oil",
      "1 cup White vinegar",
      "16 each Serrano pepper",
      "1 cup Dijon mustard"
    ],
    instructions: [
      "Combine all ingredients in food processor and mix on high until puréed."
    ]
  },
  {
    id: "batch-tartar-sauce",
    name: "Tartar Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Classic tartar sauce with jalapeño kick.",
    yield: "1 gallon",
    cookTime: "10 minutes prep",
    ingredients: [
      "1 gallon Mayonnaise",
      "1½ cups Sweet relish",
      "1 cup Dill Pickles",
      "1 cup Pickled Jalapeños",
      "2 cups Yellow Onion",
      "1 cup Dijon Mustard",
      "4 each Lemon"
    ],
    instructions: [
      "Squeeze all 4 lemons and add juice to a blender.",
      "Add all remaining ingredients except mayonnaise to the blender and purée.",
      "Combine purée and mayonnaise to a large mixing bowl and whisk by hand."
    ]
  },
  {
    id: "batch-thousand-island",
    name: "Thousand Island",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Classic Thousand Island dressing.",
    yield: "1 quart",
    cookTime: "10 minutes prep",
    ingredients: [
      "3 cups Mayonnaise",
      "1 cup Ketchup",
      "1½ cups Sweet relish",
      "1 tbsp Red onion, diced",
      "1 tbsp Garlic, chopped",
      "2 tbsp Worcestershire",
      "1 tbsp Salt"
    ],
    instructions: [
      "Combine all ingredients in a blender.",
      "Run on high for 30 seconds."
    ]
  },
  {
    id: "batch-white-remoulade",
    name: "White Remoulade",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Louisiana-style white remoulade sauce.",
    yield: "1 gallon",
    cookTime: "10 minutes prep",
    ingredients: [
      "1 gallon Mayonnaise",
      "2½ cups Yellow Onion, chopped",
      "2½ cups Green Onion, chopped",
      "2½ cups Celery, chopped",
      "¼ cup Parsley",
      "¼ cup Dijon",
      "1/3 cup Horseradish",
      "1/3 cup Dry mustard",
      "½ cup Garlic, minced",
      "½ cup Worcestershire",
      "1/3 cup White pepper",
      "1/3 cup Salt"
    ],
    instructions: [
      "Add all ingredients except mayonnaise to the blender and purée.",
      "Combine purée and mayonnaise to a large mixing bowl and whisk by hand."
    ]
  },

  // BATCH STATION - SOUPS
  {
    id: "batch-broccoli-cheese-soup-batch",
    name: "Broccoli Cheese Soup (Batch)",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Creamy broccoli cheddar soup.",
    yield: "1 gallon",
    cookTime: "20 minutes prep",
    ingredients: [
      "2 cups Onion, chopped",
      "2 cups Butter, cubed",
      "2 cups Flour",
      "2 tsp Salt",
      "2 tsp Pepper",
      "12 cups Milk",
      "6 cups Chicken broth",
      "8 cups Broccoli",
      "4 cups Cheddar cheese"
    ],
    instructions: [
      "In a small saucepan, sauté onion in butter until tender.",
      "Stir in the flour, salt, and pepper until blended; gradually add milk and broth.",
      "Bring to a boil; cook and stir until thickened, about 2 minutes.",
      "Add broccoli. Cook and stir until heated through.",
      "Remove from the heat; stir in cheese until melted."
    ]
  },
  {
    id: "batch-chicken-sausage-gumbo",
    name: "Chicken & Sausage Gumbo (Gran Jan's Gumbo)",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Gran Jan's traditional chicken and sausage gumbo.",
    yield: "3 gallons",
    cookTime: "3 hours prep",
    ingredients: [
      "4 cups Roux",
      "10 cups Trinity",
      "10 cups Smoked sausage",
      "10 lbs Chicken thighs",
      "½ cup Black pepper",
      "¼ cup Thyme",
      "½ cup Basil",
      "½ cup Parsley",
      "1/8 cup Tony Chachere's",
      "4 ea Bay leaves",
      "2 gallons Water",
      "4 tbsp Chicken Base"
    ],
    instructions: [
      "In a large stockpot BOIL the water, add crumbled roux stirring constantly until fully blended. DO NOT SCALD THE ROUX.",
      "Add the trinity and continue to stir until you have sweat the vegetables (simmer).",
      "Add chicken base scraping the bottom of the pot every few minutes to ensure the roux doesn't scald.",
      "Slice smoked sausage on a bias into ¼ in slices.",
      "Once thoroughly mixed, add smoked sausage, pepper, thyme, basil, parsley, Tony's, and bay leaves.",
      "Clean chicken thighs by removing excess fat, cartilage, and bone.",
      "Dice chicken into ¼ in cubes.",
      "Simmer and reduce down to 2½ gallons and add diced chicken.",
      "Simmer and reduce again back to 2½ gallons.",
      "Store in two 1½ gallon containers.",
      "Reduce temperature to 45° in less than 4 hours."
    ]
  },
  {
    id: "batch-seafood-gumbo",
    name: "Seafood Gumbo",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Ben's signature seafood gumbo.",
    yield: "3 gallons",
    cookTime: "2 hours prep",
    ingredients: [
      "4 cups Roux",
      "10 cups Trinity",
      "8 ea Tomato, diced",
      "5 qt Water",
      "1 cup Cabernet",
      "¼ cup Rosemary",
      "¼ cup Thyme",
      "½ cup Parsley",
      "¼ cup Basil",
      "½ tsp Cayenne",
      "¼ cup Salt",
      "¼ cup Pepper",
      "4 each Bay leaf",
      "4 tbsp Clam base"
    ],
    instructions: [
      "In a large stockpot BOIL the water, add crumbled roux stirring constantly until soft. DO NOT SCALD THE ROUX.",
      "Add the trinity and continue to stir until you have sweat the vegetables.",
      "Add all remaining ingredients and bring to a boil, scraping the bottom of the pot every few minutes to ensure the roux doesn't scald.",
      "Reduce heat and simmer down to 3 gallons."
    ]
  },
  {
    id: "batch-shrimp-chowder",
    name: "Shrimp Chowder",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Creamy Cajun shrimp chowder.",
    yield: "10 orders",
    cookTime: "20 minutes prep",
    ingredients: [
      "1 lb Shrimp",
      "3 tbsp Butter, divided",
      "1 cup Onion, minced",
      "2 tbsp Garlic, minced",
      "2 ea Carrots, minced",
      "3 ea Potatoes, diced",
      "2 ea Celery ribs, diced",
      "1 ea Bay leaf",
      "½ tsp Paprika",
      "½ tsp Cayenne pepper",
      "½ tsp Thyme",
      "4 cups Veggie stock",
      "¼ cup Cream cheese, softened",
      "¼ cup Heavy cream",
      "1 tbsp Parmesan, for garnish",
      "1 tbsp Parsley, for garnish"
    ],
    instructions: [
      "Sauté 1 tbsp of butter and cook the shrimp on both sides for 4-7 minutes or until they become completely opaque on the outside. Transfer the shrimp to a shallow plate and set aside.",
      "Heat the remaining 2 tablespoons of butter and cook the onions, carrot, and celery for 2-3 minutes. Add the garlic and diced potatoes and continue to cook for 1 minute before adding paprika, Cayenne pepper, and bay leaf. Cook for 1 minute more, stirring constantly, then add chicken stock and softened cream cheese.",
      "Add the heavy cream into the soup. Stir until the cream is incorporated and allow the chowder to heat through. Top with grated parmesan and chopped parsley for extra flavor."
    ]
  },
  {
    id: "batch-tomato-bisque",
    name: "Tomato Bisque",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Creamy tomato bisque with bacon.",
    yield: "1 gallon",
    cookTime: "20 minutes prep",
    ingredients: [
      "4 slices Bacon",
      "3 ribs Celery",
      "1 cup Onion",
      "1 cup Carrot",
      "1 cup Chardonnay",
      "½ tbsp Garlic, minced",
      "1 #10 can Stewed tomatoes",
      "4 cups Veggie stock",
      "4 cups Chicken stock",
      "2½ tbsp Basil",
      "1½ tbsp Parsley",
      "½ tbsp Black pepper",
      "1 each Bay leaf",
      "1 each Rosemary sprig",
      "1 each Thyme sprig",
      "1 cup Heavy cream"
    ],
    instructions: [
      "Render fat from bacon, reserve bacon.",
      "Add celery, carrot, onion, white wine, and garlic.",
      "Cook down white wine until syrupy in texture.",
      "Add tomatoes and blend with immersion blender.",
      "Add remaining ingredients, including bacon, except heavy cream and reduce on low for 30 minutes.",
      "Remove bay leaf, rosemary, and thyme before blending.",
      "Blend with immersion blender while adding heavy cream until creamy.",
      "Reduce to 42° within 3 hours."
    ]
  },
  {
    id: "batch-pepper-relish",
    name: "Pepper Relish",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Sweet, tangy, and slightly spicy condiment. Great as a topping for pomme purée or grilled proteins.",
    yield: "About 2 cups",
    ingredients: [
      "2 red bell peppers, finely diced",
      "1 yellow bell pepper, finely diced",
      "1 small red onion, finely diced",
      "1 jalapeño, seeded and minced (optional for heat)",
      "½ cup white wine vinegar",
      "¼ cup granulated sugar",
      "1 tsp mustard seeds",
      "½ tsp salt",
      "1 tbsp olive oil"
    ],
    instructions: [
      "SAUTÉ AROMATICS:",
      "Heat olive oil in a medium saucepan over medium heat.",
      "Add mustard seeds and cook until they start to pop, about 1 minute.",
      "",
      "COOK VEGETABLES:",
      "Add bell peppers, onion, and jalapeño (if using).",
      "Cook for 5-7 minutes until softened but still vibrant.",
      "",
      "SIMMER RELISH:",
      "Stir in vinegar, sugar, and salt.",
      "Bring to a simmer and cook for 10-15 minutes, stirring occasionally, until thickened and syrupy.",
      "",
      "COOL AND STORE:",
      "Remove from heat and let cool.",
      "Serve at room temperature or store in an airtight container in the fridge for up to 1 week."
    ],
    tips: "Adjust sugar or vinegar for a sweeter or tangier profile. Pairs beautifully with grilled fish, roasted chicken, or seared steak."
  },

  // BATCH STATION - APPETIZER PREPS
  {
    id: "batch-crawfish-dip",
    name: "Crawfish Dip",
    station: "batch",
    category: "appetizers",
    contentType: "recipe",
    description: "Creamy Cajun crawfish dip.",
    yield: "10 orders",
    cookTime: "20 minutes prep",
    ingredients: [
      "1 oz Butter",
      "2 cups Bell Pepper, chopped",
      "2 cups Green Onions, chopped",
      "2 tbsp Garlic, minced",
      "2 lbs Crawfish tails",
      "28 oz Pimento",
      "2 tbsp Tony Chachere's",
      "2 lbs Cream Cheese"
    ],
    instructions: [
      "Drain pimentos and crawfish.",
      "Crawfish should be pressed into a sieve leaving crawfish dry.",
      "Combine all ingredients in a medium saucepot on low heat.",
      "Heat until cream cheese is completely melted.",
      "Cool and store in a 1/3 Lexan."
    ]
  },
  {
    id: "batch-spinach-artichoke-dip",
    name: "Spinach-Artichoke Dip",
    station: "batch",
    category: "appetizers",
    contentType: "recipe",
    description: "Creamy spinach and artichoke dip.",
    yield: "10 orders",
    cookTime: "20 minutes prep",
    ingredients: [
      "2½ lbs Fresh spinach",
      "1 oz Clarified butter",
      "6 tbsp Garlic, minced",
      "2 lbs Cream cheese",
      "2 lbs Artichoke hearts",
      "1 cup Sour cream",
      "½ cup Mozzarella",
      "2 tbsp SPG"
    ],
    instructions: [
      "Pulse the artichoke hearts in a blender until diced.",
      "Combine spinach, garlic, and butter in a large saucepot on medium heat.",
      "When spinach has reduced by half, add remaining ingredients and simmer until cream cheese is completely melted.",
      "Cool and store in a 1/3 Lexan."
    ]
  },
  {
    id: "batch-crabmeat-cheesecake",
    name: "Crabmeat Cheesecake",
    station: "batch",
    category: "appetizers",
    contentType: "recipe",
    description: "Savory crabmeat cheesecake appetizer.",
    yield: "1 9-in cake",
    cookTime: "1 hour prep",
    ingredients: [
      "1 sleeve Ritz crackers",
      "½ cup Parmesan, shredded",
      "2 slices Bacon",
      "1 cup Yellow onion",
      "1 cup Green onions",
      "¼ cup Butter melted",
      "24 oz Cream cheese room temp",
      "3 ea Eggs",
      "1 cup Whipping cream",
      "1 lb Lump crabmeat",
      "2 cups Swiss Cheese, shredded"
    ],
    instructions: [
      "Crush one sleeve of ritz cracker mix in melted butter and parmesan. Press mix into pie dish or 9-in springform pan to make crust.",
      "Drain crabmeat and put on the side.",
      "Cook bacon, in left over bacon grease cook diced onion.",
      "Mix onions, green onion, bacon, cream cheese, cream, Swiss and eggs together in kitchen add mixer or with electric whisk.",
      "After everything's mixed fold in drained crab meat.",
      "Pour mixture over crust and bake on 375° until solid and light golden brown. About 30-40 minutes (will still be jiggly).",
      "Let cool then place in fridge overnight."
    ]
  },

  // BATCH STATION - BREAKFAST ITEMS
  {
    id: "batch-french-toast-batter",
    name: "French Toast Batter",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Classic French toast egg batter.",
    yield: "1 quart",
    cookTime: "5 minutes prep",
    ingredients: [
      "4 each Eggs",
      "½ cup Sugar",
      "1 tsp Salt",
      "2 tbsp Cinnamon",
      "2 tsp Vanilla Extract",
      "1 cup Milk",
      "½ cup Heavy Cream"
    ],
    instructions: [
      "Combine all ingredients into a large mixing bowl and whisk until smooth."
    ]
  },
  {
    id: "batch-pancake-batter",
    name: "Pancake Batter",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Fluffy pancake batter.",
    yield: "2 gallons",
    cookTime: "10 minutes prep",
    ingredients: [
      "5 lb bag Pancake mix",
      "4 each Eggs",
      "1/8 cup Vanilla Extract",
      "¼ cup Vegetable oil"
    ],
    instructions: [
      "In a large mixing bowl, combine all ingredients and whisk until smooth."
    ]
  },
  {
    id: "batch-cheddar-garlic-biscuits",
    name: "Cheddar Garlic Biscuits",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Flaky cheddar garlic drop biscuits.",
    yield: "9 biscuits",
    cookTime: "3 hours prep",
    ingredients: [
      "2 cups Flour",
      "1 tbsp Sugar",
      "1 tsp Salt",
      "¼ tsp Baking soda",
      "1 tbsp Baking powder",
      "½ cup Vegetable shortening",
      "1 tbsp Garlic, minced",
      "7/8 cup Buttermilk",
      "2 cups Cheddar, shredded"
    ],
    instructions: [
      "Preheat oven to 425°. Grease a 9x9x2 baking pan and set aside.",
      "To a large bowl, sift together flour, sugar, salt, baking powder and baking soda and set aside.",
      "With a fork, stir garlic pulp into the shortening until blended.",
      "With hands, rub garlic/shortening mixture into flour mixture until crumbly using thumbs and fingers, scooping up dry mixture from the bottom as you go. Slowly stir in buttermilk and using a large spatula, turn mixture over until combined but don't over mix. Dough will be sticky. Fold in cheddar cheese.",
      "Transfer dough onto a floured surface and knead 4-5 times working a little flour into the dough, don't knead too much. Shape into an 8-inch circle, about 1-1/2 to 2 inches thick.",
      "Cut out dough circles and place in prepared biscuit pan. Roll any dough scraps into balls and pat down to fit in pan.",
      "Bake 10-12 minutes or until biscuits are golden on top.",
      "While biscuits are baking melt 1/4 cup butter, parsley, and salt. Soon as biscuits come out of oven, whisk butter/parsley mixture again to blend and pour evenly over tops of warm biscuits."
    ]
  },

  // BATCH STATION - EGG WASHES
  {
    id: "batch-egg-wash-meats",
    name: "Egg Wash for Meats",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Egg wash for breading meats.",
    yield: "8 cups",
    cookTime: "5 minutes prep",
    ingredients: [
      "4 cups Milk",
      "16 each Eggs",
      "¼ cup SPG"
    ],
    instructions: [
      "Combine all ingredients and whisk until completely incorporated."
    ]
  },
  {
    id: "batch-egg-wash-seafood",
    name: "Egg Wash for Seafood",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Beer-based egg wash for seafood.",
    yield: "5 cups",
    cookTime: "5 minutes prep",
    ingredients: [
      "4 cups Milk",
      "10 each Eggs",
      "12 oz Budweiser",
      "1 tbsp Salt",
      "1 tsp Cayenne pepper",
      "1 each Lemon, juiced",
      "1 tbsp Dijon mustard"
    ],
    instructions: [
      "Combine all ingredients in a 1/3 Lexan.",
      "Use the immersion blender to mix all ingredients."
    ]
  },
  {
    id: "batch-flour-mix",
    name: "Seasoned Flour Mix",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "All-purpose seasoned flour for breading.",
    yield: "7 cups",
    cookTime: "2 minutes prep",
    ingredients: [
      "6 cups Flour",
      "½ cup SPG"
    ],
    instructions: [
      "Combine all ingredients and mix by hand.",
      "Use and store in a large mixing bowl."
    ]
  },
  {
    id: "batch-panko-mix",
    name: "Panko Breading Mix",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Seasoned panko breadcrumb mixture.",
    yield: "3 cups",
    cookTime: "2 minutes prep",
    ingredients: [
      "2 cups Panko breadcrumbs",
      "1 cup Flour",
      "1 tbsp Tony Chachere's"
    ],
    instructions: [
      "Mix all ingredients by hand.",
      "Store in and use in a 1/3 plastic Lexan."
    ]
  },
  {
    id: "batch-fried-green-tomatoes-marinade",
    name: "Fried Green Tomatoes Marinade",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Buttermilk marinade for green tomatoes.",
    yield: "3 cups",
    cookTime: "2 minutes prep",
    ingredients: [
      "4 cups Buttermilk",
      "2 tbsp Cajun Spice"
    ],
    instructions: [
      "Combine all ingredients and whisk by hand.",
      "Slice tomatoes to ¼ in and place in a 1/3 size Lexan.",
      "Pour over tomatoes with buttermilk mixture and let soak a minimum of 30 minutes before use."
    ]
  },
  {
    id: "batch-jalapeno-corn",
    name: "Jalapeño Corn",
    station: "batch",
    category: "sides",
    contentType: "recipe",
    description: "Creamy jalapeño corn.",
    yield: "11 portions",
    cookTime: "10 minutes prep",
    ingredients: [
      "80 oz Frozen corn",
      "1 cup Jalapeños, pickled"
    ],
    instructions: [
      "Finely dice jalapenos.",
      "Mix two 40 oz bags of frozen corn with 1 cup diced pickled jalapeños.",
      "Portion 1 cup (8 oz) of corn mix per portion bag."
    ],
    tips: "For cream prep: Combine 4 cups cream cheese, 4 cups heavy cream, and 4 tbsp SPG in a small saucepot. Cook on medium heat until cream cheese is completely melted. Cool and store.",
    portionSize: "1 cup"
  },
  {
    id: "batch-sweet-cream",
    name: "Sweet Cream",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Sweetened whipped cream for desserts.",
    yield: "½ quart",
    cookTime: "5 minutes prep",
    ingredients: [
      "½ qt Heavy Cream",
      "¼ cup Confectioners' sugar"
    ],
    instructions: [
      "Combine sugar and cream in a large squeeze bottle.",
      "Mix with immersion blender until thickened, but not quite whipped cream."
    ]
  },

  // DESSERTS STATION
  {
    id: "batch-carrot-cake",
    name: "To Die For Carrot Cake",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Incredibly moist carrot cake with cream cheese frosting. No oil or butter needed - uses applesauce!",
    yield: "16 slices (9x13 pan)",
    cookTime: "35-40 minutes",
    ingredients: [
      "FOR THE CAKE:",
      "1¼ cups unsweetened applesauce (or oil)",
      "2 cups granulated sugar",
      "3 eggs, room temperature",
      "2 cups all-purpose flour",
      "1 tsp baking soda",
      "1½ tsp baking powder",
      "½ tsp salt",
      "1 tsp cinnamon",
      "2 cups grated carrots",
      "1 cup sweetened shredded coconut",
      "1 cup chopped nuts (optional)",
      "1 tsp vanilla",
      "1 cup crushed pineapple in juice (not drained)",
      "",
      "FOR THE FROSTING:",
      "½ cup butter, softened",
      "8 oz cream cheese, softened",
      "1 tsp vanilla",
      "1 lb powdered sugar",
      "Toasted pecans or coconut for topping"
    ],
    instructions: [
      "MAKE BATTER:",
      "Preheat oven to 350°F.",
      "Combine applesauce, sugar, and eggs.",
      "Add flour, baking soda, baking powder, salt, and cinnamon.",
      "Stir in carrots, coconut, nuts, vanilla, and pineapple.",
      "",
      "BAKE:",
      "Pour into greased 9x13 pan (or two 9-inch rounds).",
      "Bake 35-40 minutes until toothpick comes clean.",
      "Cool 10 minutes in pan, then remove to cooling rack.",
      "Cool completely before frosting.",
      "",
      "MAKE FROSTING:",
      "Beat butter and cream cheese until fluffy.",
      "Add vanilla and powdered sugar.",
      "Beat until smooth.",
      "",
      "FROST & SERVE:",
      "Spread frosting on cooled cake.",
      "Top with toasted pecans or coconut.",
      "Refrigerate 1 hour before serving for best results."
    ],
    tips: "Line pans with parchment for easy release. The pineapple adds incredible moisture - don't drain it!"
  },
  {
    id: "batch-banana-cake",
    name: "Best Banana Cake",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Soft, moist, and rich banana cake topped with lemon cream cheese frosting.",
    yield: "15 servings (9x13 pan)",
    cookTime: "60-70 minutes",
    ingredients: [
      "FOR THE CAKE:",
      "1⅓ cup mashed bananas",
      "2½ tbsp lemon juice, divided",
      "1½ cups milk",
      "3 cups flour",
      "½ tbsp baking soda",
      "¼ tsp salt",
      "⅔ cup butter, softened",
      "1 cup white sugar",
      "½ cup brown sugar",
      "3 large eggs",
      "1 tsp vanilla",
      "",
      "FOR THE FROSTING:",
      "8 oz cream cheese",
      "⅓ cup butter, softened",
      "3-3½ cups powdered sugar",
      "1 tsp lemon juice",
      "1½ tsp lemon zest"
    ],
    instructions: [
      "PREP:",
      "Preheat oven to 350°F. Grease and flour 9x13 pan.",
      "Place 1½ tbsp lemon juice in measuring cup, top to 1½ cups with milk. Set aside.",
      "Mix mashed banana with 1 tbsp lemon juice. Set aside.",
      "",
      "MAKE BATTER:",
      "Beat butter and both sugars until combined.",
      "Add eggs one at a time and vanilla.",
      "Mix on high until light and fluffy.",
      "Combine flour, baking soda, and salt.",
      "Alternate adding flour mixture and milk to egg mixture.",
      "Stir just until combined - don't overmix.",
      "Fold in bananas. Pour into pan.",
      "",
      "BAKE:",
      "Put in oven and reduce heat to 300°F.",
      "Bake 60-70 minutes until toothpick comes clean.",
      "For extra moistness: place in freezer 45 minutes.",
      "Cool completely before frosting.",
      "",
      "MAKE FROSTING:",
      "Cream butter and cream cheese until fluffy.",
      "Add lemon zest and juice.",
      "Add powdered sugar gradually until desired consistency.",
      "Spread over cooled cake."
    ],
    tips: "Cooking time varies by oven - check at 55 minutes. The freezer trick makes it exceptionally moist!"
  },
  {
    id: "batch-german-chocolate-cake",
    name: "German Chocolate Cake",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic chocolate layer cake with signature coconut-pecan frosting.",
    yield: "12-16 servings",
    cookTime: "30-35 minutes",
    ingredients: [
      "FOR THE CAKE:",
      "2 cups all-purpose flour",
      "2 cups sugar",
      "¾ cup cocoa",
      "2 tsp baking powder",
      "1½ tsp baking soda",
      "1 tsp salt",
      "1 cup milk",
      "½ cup vegetable oil",
      "2 eggs",
      "2 tsp vanilla extract",
      "1 cup boiling water",
      "",
      "FOR THE FROSTING:",
      "1 cup evaporated milk",
      "1 cup granulated sugar",
      "3 egg yolks, beaten with 1 tsp water",
      "½ cup butter",
      "1 tsp vanilla extract",
      "1 cup chopped pecans",
      "1 cup flaked coconut",
      "1 tbsp cornstarch"
    ],
    instructions: [
      "MAKE CAKE:",
      "Preheat oven to 350°F. Grease and flour two 9-inch round pans.",
      "Combine flour, sugar, cocoa, baking powder, baking soda, and salt.",
      "Add milk, oil, eggs, and vanilla. Mix on medium until combined.",
      "Reduce to low, add boiling water slowly.",
      "Beat on high 1 minute.",
      "Divide between pans.",
      "Bake 30-35 minutes until toothpick comes clean.",
      "Cool 10 minutes, remove from pans, cool completely.",
      "",
      "MAKE FROSTING:",
      "In large saucepan, mix evaporated milk and cornstarch.",
      "Add sugar, egg yolks, butter, and vanilla.",
      "Cook over low-medium heat, stirring constantly.",
      "Bring to slow boil, stir until thick (about 12 minutes).",
      "Remove from heat, stir in pecans and coconut.",
      "Cool 1 hour (frosting thickens as it cools).",
      "",
      "ASSEMBLE:",
      "Layer cake with frosting between layers and on top.",
      "Refrigerate for easy slicing."
    ],
    tips: "Double the frosting recipe if you want extra decoration. This frosting is thick and rich - a little goes a long way!"
  },
  {
    id: "batch-angel-food-cake",
    name: "Lemony Angel Food Cake",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Light, airy angel food cake with bright lemon flavor and lemon cream topping.",
    yield: "10-12 servings",
    cookTime: "45-50 minutes",
    ingredients: [
      "FOR THE CAKE:",
      "1 cup sifted cake flour (not self-rising)",
      "1½ cups sugar, divided",
      "12 large egg whites",
      "2 tbsp finely grated lemon zest",
      "1 tbsp + 1 tsp fresh lemon juice",
      "1 tsp cream of tartar",
      "1 tsp pure vanilla extract",
      "¼ tsp salt",
      "",
      "FOR THE LEMON CREAM:",
      "½ cup fresh lemon juice",
      "½ cup sugar",
      "1 tbsp cake flour",
      "¼ tsp salt",
      "1½ cups heavy cream, chilled",
      "1 tbsp finely grated lemon zest"
    ],
    instructions: [
      "MAKE CAKE:",
      "Preheat oven to 325°F, rack in lower third.",
      "Sift flour with ½ cup sugar.",
      "",
      "WHIP WHITES:",
      "Whisk egg whites on medium until frothy, about 1 minute.",
      "Add lemon zest, juice, cream of tartar, vanilla, and salt.",
      "Whisk until soft peaks form, about 2½ minutes.",
      "Gradually add remaining 1 cup sugar while mixing.",
      "Increase to medium-high, whisk until firm peaks form, about 7 minutes.",
      "",
      "FOLD & BAKE:",
      "Sprinkle ⅓ of flour mixture over whites, gently fold.",
      "Repeat with remaining flour in 2 additions.",
      "Transfer to 10-inch angel food pan.",
      "Run knife through batter to remove air bubbles.",
      "Bake 45-50 minutes until tester comes clean.",
      "Invert onto cooling legs, cool 1½-2 hours.",
      "",
      "MAKE LEMON CREAM:",
      "Whisk lemon juice, sugar, flour, and salt in saucepan over medium-high.",
      "Bring to boil, whisk 1 minute until thick.",
      "Cool completely in ice bath.",
      "Whip cream with lemon zest to medium peaks.",
      "Fold whipped cream into lemon mixture in thirds.",
      "Frost cake and serve."
    ],
    tips: "Angel food cake must cool upside down to prevent deflating. Unfrosted cake keeps 2 days in airtight container."
  },
  {
    id: "batch-chocolate-chip-cookies",
    name: "Perfect Chocolate Chip Cookies",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Perfectly soft and chewy chocolate chip cookies. Chill dough for best results.",
    yield: "45 cookies",
    cookTime: "11 minutes",
    ingredients: [
      "1 cup unsalted butter, melted and cooled 10 minutes (226g)",
      "1¼ cup brown sugar, tightly packed (250g)",
      "½ cup granulated sugar (100g)",
      "1 large egg + 1 egg yolk (room temperature)",
      "1½ tsp vanilla extract",
      "2¾ cups all-purpose flour (350g)",
      "2 tsp cornstarch",
      "1 tsp baking soda",
      "¾ tsp salt",
      "1¾ cup semisweet chocolate chips (300g)",
      "Additional chocolate chips for tops (optional)"
    ],
    instructions: [
      "MIX WET:",
      "Combine melted butter and both sugars in large bowl. Stir very well.",
      "Add egg and egg yolk, stir well.",
      "Stir in vanilla extract. Set aside.",
      "",
      "MIX DRY:",
      "In separate bowl, whisk together flour, cornstarch, baking soda, and salt.",
      "",
      "COMBINE:",
      "Gradually add flour mixture to wet ingredients.",
      "Stir well so all flour is absorbed.",
      "Stir in chocolate chips.",
      "",
      "CHILL:",
      "Refrigerate dough for 30 minutes.",
      "",
      "BAKE:",
      "Preheat oven to 350°F. Line cookie sheets with parchment.",
      "Scoop dough by rounded 1½ tbsp onto sheets, 2 inches apart.",
      "Bake 11 minutes - cookies may seem soft in centers, that's OK.",
      "Press additional chocolate chips into tops while warm if desired.",
      "Cool completely on cookie sheets."
    ],
    tips: "Don't overbake - cookies firm up as they cool. Bring eggs to room temperature quickly by placing in warm water 10-15 minutes. Cornstarch is the secret to chewy texture."
  },
  {
    id: "batch-mckenzies-buttermilk-donuts",
    name: "McKenzie's Buttermilk Drop Donuts",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic New Orleans donut balls from the beloved McKenzie's Bakery. Simple, delicious, and perfect with powdered sugar glaze.",
    yield: "About 30 donut holes",
    cookTime: "10 minutes",
    ingredients: [
      "DRY INGREDIENTS:",
      "1 cup all-purpose flour",
      "2 tsp sugar",
      "1 tsp baking powder",
      "¼ tsp baking soda",
      "½ tsp ground ginger",
      "½ tsp ground nutmeg",
      "",
      "WET INGREDIENTS:",
      "1 egg",
      "½ cup buttermilk",
      "",
      "FOR FRYING:",
      "Canola oil for deep frying",
      "",
      "OPTIONAL TOPPINGS:",
      "Powdered sugar glaze",
      "Cinnamon-sugar mixture"
    ],
    instructions: [
      "MIX DRY:",
      "Whisk together flour, sugar, baking powder, baking soda, ginger, and nutmeg in medium bowl.",
      "",
      "ADD WET:",
      "Add egg and buttermilk to dry ingredients.",
      "Stir just until moistened - don't overmix.",
      "",
      "FRY:",
      "Heat canola oil to 350°F in deep pan or fryer.",
      "Drop batter by spoonfuls into hot oil.",
      "Fry until golden brown (they'll turn over by themselves as they cook).",
      "Remove and drain on paper towels.",
      "",
      "FINISH:",
      "Dip in powdered sugar glaze, shake in cinnamon-sugar mixture, or enjoy plain."
    ],
    tips: "Keep oil temperature steady at 350°F for best results. Best served fresh and warm. Recipe from McKenzie's Bakery, now made by Tastee Donuts."
  },
  {
    id: "batch-bananas-foster",
    name: "Bananas Foster",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic New Orleans flambéed dessert created at Brennan's in 1951. Caramelized bananas in rum sauce over vanilla ice cream.",
    yield: "4 servings",
    cookTime: "15 minutes",
    ingredients: [
      "¼ cup butter",
      "1 cup brown sugar",
      "½ tsp cinnamon",
      "¼ cup banana liqueur",
      "4 firm bananas, halved lengthwise then halved crosswise",
      "¼ cup dark rum",
      "4 scoops vanilla ice cream"
    ],
    instructions: [
      "MAKE CARAMEL:",
      "Combine butter, brown sugar, and cinnamon in 12-inch cast iron skillet.",
      "Place over low heat and cook, stirring, until sugar dissolves.",
      "",
      "ADD BANANAS:",
      "Stir in banana liqueur.",
      "Place banana pieces in pan.",
      "Cook until bananas soften and begin to brown, about 10 minutes.",
      "",
      "FLAMBÉ:",
      "Carefully add dark rum to the pan.",
      "Continue cooking until rum is hot.",
      "Ignite with a long match to flambé.",
      "Allow flames to subside naturally.",
      "",
      "SERVE:",
      "Lift bananas from pan and place 4 pieces over each scoop of ice cream.",
      "Generously spoon warm sauce over the ice cream.",
      "Serve immediately."
    ],
    tips: "Use firm bananas that aren't too ripe. Keep your face away when flambéing. The flames will die down on their own as the alcohol burns off."
  },
  {
    id: "batch-oatmeal-cookies",
    name: "Larry's Oatmeal Cookies",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic chewy oatmeal cookies. Add chocolate chips, butterscotch chips, or peanut butter chips for variations.",
    yield: "3 dozen cookies",
    cookTime: "8-11 minutes",
    ingredients: [
      "1¼ cups (2½ sticks) butter, softened",
      "¾ cup firmly packed brown sugar",
      "½ cup granulated sugar",
      "1 egg",
      "1 tsp vanilla",
      "1½ cups all-purpose flour",
      "1 tsp baking soda",
      "½ tsp salt (optional)",
      "3 cups oats (quick or old fashioned, uncooked)"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "In large bowl, beat butter and sugars until creamy.",
      "Add egg and vanilla; beat well.",
      "Add combined flour, baking soda, and salt; mix well.",
      "Add oats; mix well.",
      "Drop dough by rounded tablespoonfuls onto ungreased cookie sheets.",
      "Bake 8-9 minutes for chewy cookies, or 10-11 minutes for crisp cookies.",
      "Cool 1 minute on cookie sheets.",
      "Remove to wire rack and cool completely.",
      "Store tightly covered."
    ],
    tips: "Don't eat too much raw dough - it's addictive! Add 1 cup chocolate chips, butterscotch chips, or peanut butter chips for variations."
  },
  {
    id: "batch-apple-pie",
    name: "Apple Pie",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic homemade apple pie.",
    yield: "1 pie",
    cookTime: "60 minutes prep",
    ingredients: [
      "1 cup Sugar",
      "½ tsp Salt",
      "1 tsp Nutmeg",
      "1 tsp Cinnamon",
      "1 tsp Lemon juice",
      "¼ cup Apple juice",
      "1/3 cup Corn starch",
      "¼ cup Butter, melted",
      "5 cups Honeycrisp apples",
      "2 ea Pie crust"
    ],
    instructions: [
      "Heat oven to 350°F. Place 1 piecrust in ungreased 9-inch pie plate. Press firmly against side and bottom.",
      "In large bowl, gently mix filling ingredients; spoon into crust-lined pie plate. Top with second crust. Wrap excess top crust under bottom crust edge, pressing edges together to seal, flute. Cut slits or shapes in several places in top crust.",
      "Bake 40 to 45 minutes or until apples are tender and crust is golden brown. Cover edge of crust with 2- to 3-inch-wide strips of foil after first 15 to 20 minutes of baking to prevent excessive browning. Cool on cooling rack at least 2 hours before serving."
    ]
  },
  {
    id: "batch-berry-crumble",
    name: "Berry Crumble",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Mixed berry crumble with oat topping.",
    yield: "20 servings",
    cookTime: "90 minutes prep",
    ingredients: [
      "4 lbs Fresh Berries",
      "1 cup Sugar",
      "2 each Lemon, juiced",
      "4 tbsp Flour",
      "1 tsp Cinnamon",
      "1 cup Pecans, chopped (topping)",
      "1 cup Flour (topping)",
      "1¼ cups Oats (topping)",
      "½ cup packed Brown Sugar (topping)",
      "1 tsp Cinnamon (topping)",
      "¼ tsp Salt (topping)",
      "½ lb Butter, cubed (topping)"
    ],
    instructions: [
      "Core strawberries and cut into halves. Place all berries in a mixing bowl and toss with sugar, lemon juice, flour, and cinnamon.",
      "Pour into a lightly greased 9 by 13-inch baking dish and spread out into an even layer. Set aside.",
      "In another large bowl, mix the nuts, flour, oats, sugar, cinnamon, and salt for the topping. Using a pastry cutter or your fingers, gently work in the cold butter until pea-sized lumps are formed.",
      "Top berry mix evenly with mixture and bake until berries are bubbly and topping is golden brown, about 45 minutes, rotating once halfway through cooking."
    ]
  },
  {
    id: "batch-bread-pudding",
    name: "Bread Pudding",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Peach bread pudding with biscuits.",
    yield: "20 servings",
    cookTime: "90 minutes prep",
    ingredients: [
      "2½ lbs Peaches, Frozen",
      "4 cups Sugar (divided)",
      "2 tbsp Cinnamon",
      "1 cup Vegetable stock",
      "3 qt Heavy Cream",
      "1 tbsp Baking Powder",
      "12 ea Eggs",
      "¼ tbsp Vanilla Extract",
      "42 ea Biscuits"
    ],
    instructions: [
      "Combine peaches, 2 cups of sugar, cinnamon, and water in a large sauce pot and simmer until peaches are soft.",
      "Roughly chop peaches using mixing spoon. Set peaches aside.",
      "Run the biscuits through a food processor so that they are finely minced.",
      "Combine all ingredients in a large mixing bowl.",
      "Coat the bottom of your baking pan with non-stick spray.",
      "Pour all ingredients into full hotel pan.",
      "Dust the top of the mixture with cinnamon.",
      "Bake at 350°F for 90 minutes rotate at least once."
    ]
  },
  {
    id: "batch-brownies",
    name: "Brownies",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Fudgy chocolate brownies.",
    yield: "1 dozen",
    cookTime: "45 minutes prep",
    ingredients: [
      "12 cups Brownie mix",
      "3 cups Water, hot",
      "4 oz Butter, clarified"
    ],
    instructions: [
      "Mix brownie mix and water by hand with a whisk.",
      "Add 4oz of clarified butter and mix.",
      "Batter should resemble cake batter and should not be runny.",
      "Fill muffin tins to ¾ full.",
      "Bake at 350° for 30 minutes.",
      "Let cool and store in a large Ziploc bag with 3 slices of uncooked Texas toast."
    ]
  },
  {
    id: "batch-buttermilk-pie",
    name: "Buttermilk Pie",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic Southern buttermilk pie.",
    yield: "1 pie",
    cookTime: "30 minutes prep",
    ingredients: [
      "5 ea Eggs",
      "1 ea Egg Yolk",
      "½ tsp Salt",
      "2 cups Sugar",
      "2 tbsp Flour",
      "4 oz Butter, melted",
      "½ tsp Nutmeg",
      "1 cup Buttermilk",
      "1 tsp Lemon juice",
      "1 tsp Vanilla extract"
    ],
    instructions: [
      "Heat oven to 425°F.",
      "Place 1 piecrust in ungreased 9-inch pie plate. Press firmly against side and bottom.",
      "In the mixing bowl, add 5 eggs, egg yolk, and 2 cups of sugar. Mix gradually to the highest setting, mix for 3-5 minutes. Once blended into a creamy light green mixture, mix in one at a time, salt, nutmeg, vanilla extract, and lemon juice.",
      "Add the flour slowly and mix well. Add buttermilk and butter in 4 parts alternating between the two. Sprinkle with nutmeg. Bake 15 minutes.",
      "Reduce heat to 325 degrees, leaving oven door open for a minute or two. Cover pie loosely with foil. Bake until filling is set, 35 to 50 minutes. Let it cool to touch and place it in the fridge to set 6 hrs."
    ]
  },
  {
    id: "batch-cajun-cake",
    name: "Cajun Cake",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Pineapple cake with coconut pecan icing.",
    yield: "1 9x9 cake",
    cookTime: "30 minutes prep",
    ingredients: [
      "2 cups Flour",
      "1½ cups Sugar, granulated",
      "2 tsp Baking soda",
      "15 oz Pineapple, crushed",
      "½ cup Butter, melted (icing)",
      "¾ cup Sugar (icing)",
      "½ cup Milk (icing)",
      "1 tsp Vanilla (icing)",
      "1 cup Coconut, shredded (icing)",
      "1 cup Pecans, chopped (icing)"
    ],
    instructions: [
      "Preheat oven to 350°.",
      "In a large bowl, stir flour, 1½ cups sugar, and baking soda.",
      "Add pineapple and eggs and stir well to combine.",
      "Bake for 30-35 minutes.",
      "Begin icing once you remove cake from oven by heating butter, sugar, and milk to a boil. Stir often.",
      "Add vanilla, coconut, and pecans. Boil for about 2 to 3 more minutes.",
      "Pour over warm cake. Allow cake to cool for about 30 minutes to an hour before serving."
    ]
  },
  {
    id: "batch-cherry-pie",
    name: "Cherry Pie",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic cherry pie with almond extract.",
    yield: "1 pie",
    cookTime: "50 minutes prep",
    ingredients: [
      "1 cup Sugar",
      "½ tsp Salt",
      "¼ cup Corn starch",
      "2 oz Butter, melted",
      "1 tsp Almond extract",
      "4 cups Cherry filling, drained",
      "2 ea Pie crust"
    ],
    instructions: [
      "Heat oven to 350°F. Place 1 piecrust in ungreased 9-inch pie plate. Press firmly against side and bottom.",
      "In large bowl, gently mix filling ingredients; spoon into crust-lined pie plate. Top with second crust. Wrap excess top crust under bottom crust edge, pressing edges together to seal; flute. Cut slits or shapes in several places in top crust.",
      "Bake 40 to 45 minutes or until crust is golden brown. Cover edge of crust with 2- to 3-inch-wide strips of foil after first 15 to 20 minutes of baking to prevent excessive browning. Cool on cooling rack at least 2 hours before serving."
    ]
  },
  {
    id: "batch-chocolate-mousse",
    name: "Chocolate Mousse",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Rich chocolate mousse with Oreo crust.",
    yield: "12 desserts",
    cookTime: "20 minutes prep",
    ingredients: [
      "½ package Oreos",
      "3 oz Butter, melted",
      "6 each Eggs",
      "3 cups Whipped cream",
      "12 oz Chocolate chips",
      "2 tbsp Sugar",
      "2 tbsp Powdered sugar"
    ],
    instructions: [
      "Crush cookies and mix with melted butter. Press into a pie pan or separate into Old Fashioned glasses and refrigerate while preparing the filling.",
      "Melt chocolate chips.",
      "Whip 4 egg whites with 2 tablespoons of sugar till stiff.",
      "Whip 2 cups of the whipping cream with 2 heaping tablespoons of powdered sugar.",
      "Crack and beat remaining 2 eggs into a bowl with the 4 egg yolks.",
      "Mix melted chocolate a little at a time into the egg mixture.",
      "Slowly fold the whipped cream and meringue into the chocolate one giant scoop at a time, alternating between the two.",
      "Pour into glasses or pie pan. Chill 6 hours.",
      "Top with remaining sweetened and whipped whip cream and either chocolate curls or you can save some of the Oreo crumbs from the crust and sprinkle those on top."
    ]
  },
  {
    id: "batch-cookie-dough",
    name: "Cookie Dough",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Chocolate chip cookie dough.",
    yield: "4 cookie rolls",
    cookTime: "60 minutes prep",
    ingredients: [
      "1¾ lbs Butter (softened)",
      "2¼ lbs Brown Sugar",
      "13½ oz Granulated Sugar",
      "2¼ oz Honey",
      "6 ea Eggs",
      "3 lbs Flour",
      "1.2 oz Baking Powder",
      "¾ oz Salt",
      "1½ oz Vanilla Extract",
      "4 lbs Chocolate Chips"
    ],
    instructions: [
      "All dry ingredients should be measured by weight using a scale. Liquid ingredients are by fluid ounces.",
      "Using a large electric mixer, add ingredients one by one, as listed, until well incorporated. Only add one ingredient at a time and wait until ingredients are well mixed and smooth before moving on the next item on the list. Do not over mix.",
      "Move dough into a large mixing bowl and mix chocolate chips by hand.",
      "Divide into four equal parts and wrap in saran wrap, freeze."
    ]
  },
  {
    id: "batch-creme-brulee",
    name: "Crème Brûlée",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic vanilla crème brûlée.",
    yield: "10 each",
    cookTime: "60 minutes prep",
    ingredients: [
      "1 qt Heavy cream",
      "5 oz Vanilla extract",
      "6 each Eggs",
      "½ cup Sugar (granulated)",
      "¼ tsp Nutmeg, grated"
    ],
    instructions: [
      "Place the cream and nutmeg into a medium saucepan set over medium-high heat and bring to a boil.",
      "Remove from the heat, cover, and allow to sit for 15 minutes.",
      "In the mixer, whisk together 1/2 cup sugar and the egg yolks until well blended and it just starts to lighten in color.",
      "Add the cream a little at a time, whisking continually.",
      "Separate the liquid into 10 ramekins.",
      "Place the ramekins into a large hotel pan. Pour enough hot water into the pan to come halfway up the sides of the ramekins.",
      "Bake in a 350° oven just until the crème Brûlée is set, but still trembling in the center, 40 minutes.",
      "Remove the ramekins from the roasting pan and refrigerate for at least 2 hours."
    ]
  },
  {
    id: "batch-key-lime-pie",
    name: "Key Lime Pie",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic key lime pie with graham crust.",
    yield: "2 pies",
    cookTime: "50 minutes prep",
    ingredients: [
      "2 packages Graham Cracker",
      "½ cup Pecans",
      "½ cup Sugar",
      "6 oz Butter",
      "6 cans Condensed Milk",
      "1 cup Sour Cream",
      "1½ cups Key Lime Juice",
      "1 big lime Lime Zest"
    ],
    instructions: [
      "Heat oven to 350°F.",
      "Blend all crust ingredients (NOT THE BUTTER) in a food processor until fine.",
      "Press into pie pan and bake for 8 minutes.",
      "Mix juices and condensed milk by hand.",
      "Pour into graham cracker crust and bake for 8 minutes.",
      "Place in fridge covered overnight."
    ]
  },
  {
    id: "batch-lemon-chess-pie",
    name: "Lemon Chess Pie",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Southern lemon chess pie.",
    yield: "1 pie",
    cookTime: "30 minutes prep",
    ingredients: [
      "5 ea Eggs",
      "½ tsp Salt",
      "2 cups Sugar",
      "1 tbsp Flour",
      "2 tbsp Yellow corn meal",
      "¼ cup Butter, melted",
      "½ cup Lemon juice",
      "½ cup Milk"
    ],
    instructions: [
      "Heat oven to 350°F. Place 1 piecrust in ungreased 9-inch pie plate. Press firmly against side and bottom.",
      "In large bowl, gently mix filling ingredients; spoon into crust-lined pie plate.",
      "Cover pie loosely with foil. Bake until filling is set, 20-25 minutes. Transfer to a wire rack and let cool. Serve at room temperature."
    ]
  },
  {
    id: "batch-lemon-meringue-pie",
    name: "Lemon Meringue Pie",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic lemon meringue pie.",
    yield: "1 pie",
    cookTime: "30 minutes prep",
    ingredients: [
      "3 ea Egg yolks (filling)",
      "1½ cups Sugar (filling)",
      "1/3 cup plus 1 tbsp Cornstarch (filling)",
      "1½ cups Water (filling)",
      "3 tbsp Butter (filling)",
      "2 tsp Lemon zest (filling)",
      "½ cup Lemon juice (filling)",
      "3 ea Egg whites (meringue)",
      "¼ tsp Cream of tartar (meringue)",
      "6 tbsp Sugar (meringue)",
      "½ tsp Vanilla extract (meringue)"
    ],
    instructions: [
      "Heat oven to 350°F. Place 1 piecrust in ungreased 9-inch pie plate. Press firmly against side and bottom.",
      "To Make Lemon Filling: In a medium saucepan, whisk together 1 cup sugar, flour, cornstarch, and salt.",
      "Stir in water, lemon juice and lemon zest. Cook over medium-high heat, stirring frequently, until mixture comes to a boil.",
      "Stir in butter. Place egg yolks in a small bowl and gradually whisk in 1/2 cup of hot sugar mixture. Whisk egg yolk mixture back into remaining sugar mixture. Bring to a boil and continue to cook while stirring constantly until thick. Remove from heat. Pour filling into baked pastry shell.",
      "To Make Meringue: In a large bowl, whip egg whites until foamy. Add sugar, vanilla, and cream of tartar gradually, and continue to whip until stiff peaks form.",
      "Spread meringue over pie, sealing the edges at the crust.",
      "Bake in preheated oven for 10 minutes, or until meringue is golden brown."
    ]
  },
  {
    id: "batch-pecan-pie",
    name: "Pecan Pie",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic Southern pecan pie.",
    yield: "1 pie",
    cookTime: "1 hour 30 minutes prep",
    ingredients: [
      "3 each Eggs",
      "3 tbsp Heavy cream",
      "2 cups Brown sugar",
      "¾ cup Melted butter",
      "2 cups Pecans",
      "¼ tsp Cinnamon",
      "1 each Pie Shell"
    ],
    instructions: [
      "Preheat oven to 350.",
      "Beat eggs in a large mixing bowl. Add remaining ingredients, mix until smooth.",
      "Place pie shell in a 10-inch pie pan and press out any air bubbles.",
      "Trim any excess crust from the top edge of the pan and create a ridged texture with a fork.",
      "Pulse pecans in food processor until finely chopped.",
      "Add pecans to the egg mix, and then pour into pie shell.",
      "Place 8 half-pecan pieces evenly around the outer edge of the pie. Each 'pecan jewel' will be at the center of each piece once it's cut.",
      "Bake at 350° for 60 minutes.",
      "Once the pie has completely cooled overnight it can be cut.",
      "Divide by half and half again until there are 8 equal pieces with a 'pecan jewel' at the center of each piece.",
      "Care should be taken to slice the pie, not mash it so that each piece is cut cleanly."
    ]
  },
    {
    id: "batch-pumpkin-pie",
    name: "Pumpkin Pie",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "No-bake pumpkin pie.",
    yield: "8 slices",
    cookTime: "15 minutes prep",
    ingredients: [
      "1 10-in Graham Cracker Crust",
      "14oz can Pumpkin Pie Filling",
      "1 tsp Cinnamon",
      "8 oz Cream Cheese"
    ],
    instructions: [
      "In a medium mixing bowl, whip the cream cheese until fluffy.",
      "Add pumpkin pie filling and cinnamon. Mix until well combined.",
      "Fold in whipped topping and spread into prepared pie crust.",
      "Chill for at least 2 hours before serving.",
      "Garnish with whipped cream if desired."
    ]
  },
  {
    id: "batch-strawberry-cream-puffs",
    name: "Strawberry Cream Puffs",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Cream puffs with strawberry filling.",
    yield: "10 puffs",
    cookTime: "30 minutes prep",
    ingredients: [
      "2 cups Flour (dough)",
      "2 cups Water (dough)",
      "4 tsp Sugar (dough)",
      "1 cup Butter (dough)",
      "8 each Eggs (dough)",
      "2 cups Heavy Cream (filling)",
      "½ cup Powdered sugar (filling)",
      "1 tsp Vanilla extract (filling)",
      "¼ cup Strawberry purée (filling)",
      "Fresh Strawberries"
    ],
    instructions: [
      "In a large saucepan, bring water, butter, and sugar to a boil. Add flour all at once and stir until a smooth ball forms. Remove from the heat and beat in eggs, one at a time. Continue beating until mixture is smooth and shiny.",
      "Drop by tablespoonfuls 2-in. apart on a large ungreased baking sheet (make 10). Bake at 250° for about 35 minutes or until golden brown. Cool on a wire rack.",
      "For filling, combine berries and ¼ cup sugar. Chill 30 minutes.",
      "Beat cream and remaining sugar until stiff. Just before serving, cut tops off puffs. Combine berries and cream mixture. Fill cream puffs and replace tops. Sprinkle with confectioners' sugar and serve with additional berries."
    ]
  },
  {
    id: "batch-strawberry-puree",
    name: "Strawberry Purée",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Fresh strawberry purée for desserts.",
    yield: "2 cups",
    cookTime: "30 minutes prep",
    ingredients: [
      "1 lb Strawberries",
      "½ cup Sugar",
      "1 ea Lime Juice"
    ],
    instructions: [
      "Remove the stem from 1 lb fresh strawberries.",
      "Purée strawberries in blender.",
      "Combine all ingredients in a large sauté pan.",
      "Bring to boil, cool and store."
    ]
  },
  {
    id: "batch-buttermilk-donuts",
    name: "Buttermilk Drop Donuts",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Fried buttermilk drop donuts.",
    yield: "30 donuts",
    cookTime: "20 minutes prep",
    ingredients: [
      "1 cup Flour",
      "¼ cup Sugar, granulated",
      "½ tsp Baking soda",
      "1 tsp Baking powder",
      "Pinch Salt",
      "½ tsp Nutmeg",
      "1 tsp Vanilla extract",
      "½ cup Butter, melted",
      "½ cup Buttermilk"
    ],
    instructions: [
      "Whisk together the first 6 ingredients in a medium bowl.",
      "Add remaining ingredients to the dry and stir just until moistened well.",
      "Drop by spoonful in a steady 350° temperature pan of canola oil. Fry until golden. Remove and drain on paper toweling.",
      "Dip in powdered sugar glaze or shake in a cinnamon/sugar mixture; or just eat them plain."
    ]
  },

  // BATCH STATION - SEASONINGS
  {
    id: "batch-pastrami-rub",
    name: "Katz's Deli Pastrami Rub",
    station: "batch",
    category: "seasonings",
    contentType: "prep",
    description: "Classic NYC deli-style pastrami rub. Makes enough for a whole brisket (about 18 lbs) with some left over.",
    yield: "About ½ cup",
    ingredients: [
      "2 tbsp whole black peppercorns",
      "1 tbsp fresh coarsely ground black pepper",
      "1 tbsp whole coriander seeds",
      "1 tbsp coriander powder",
      "1 tbsp brown sugar",
      "1 tbsp paprika",
      "2 tsp garlic powder",
      "2 tsp onion powder",
      "½ tsp whole yellow mustard seeds",
      "½ tsp mustard powder"
    ],
    instructions: [
      "CRUSH SEEDS:",
      "Pour whole peppercorns, coriander seeds, and mustard seeds into zipper bag.",
      "Smash with bottom of saucepan until 'cracked' but not completely powdered.",
      "",
      "MIX:",
      "Blend together all spices (cracked and powdered).",
      "",
      "USE OR STORE:",
      "Store in airtight container.",
      "Apply generously to brined brisket before smoking/cooking."
    ],
    tips: "Paprika mostly adds color - substitute ancho powder or chili powder for more kick. Can omit anything except black pepper and coriander."
  },
  {
    id: "batch-angry-seasoning",
    name: "Angry Seasoning",
    station: "batch",
    category: "seasonings",
    contentType: "prep",
    description: "Extra spicy house seasoning blend.",
    ingredients: [
      "1½ cups Cayenne Pepper",
      "¼ cup Salt",
      "½ cup Black Pepper",
      "¼ cup Paprika",
      "1 cup Basil",
      "1½ cups Thyme, dried",
      "1½ cups Oregano, ground"
    ],
    instructions: [
      "Combine all ingredients and mix thoroughly.",
      "Store in airtight container."
    ]
  },
  {
    id: "batch-cajun-spice",
    name: "Cajun Spice",
    station: "batch",
    category: "seasonings",
    contentType: "prep",
    description: "House Cajun seasoning blend.",
    ingredients: [
      "½ cup Paprika",
      "2½ cups Salt",
      "2 cups Garlic powder",
      "1 cup Black pepper",
      "1 cup Onion powder",
      "1½ cups Cayenne pepper",
      "1 cup Oregano, dried",
      "1 cup Thyme, dried"
    ],
    instructions: [
      "Combine all ingredients and mix thoroughly.",
      "Store in airtight container."
    ]
  },
  {
    id: "batch-etouffee-seasoning",
    name: "Étouffée Seasoning",
    station: "batch",
    category: "seasonings",
    contentType: "prep",
    description: "Seasoned flour for étouffée.",
    ingredients: [
      "1 cup Cajun Spice",
      "3 cups Flour"
    ],
    instructions: [
      "Combine all ingredients and mix thoroughly.",
      "Store in airtight container."
    ]
  },
  {
    id: "batch-fish-taco-seasoning",
    name: "Fish Taco Seasoning",
    station: "batch",
    category: "seasonings",
    contentType: "prep",
    description: "Seasoning blend for fish tacos.",
    ingredients: [
      "½ cup Ground cumin",
      "½ cup Cayenne pepper",
      "1 cup Salt",
      "¼ cup Black Pepper"
    ],
    instructions: [
      "Combine all ingredients and mix thoroughly.",
      "Store in airtight container."
    ]
  },
  {
    id: "batch-jambalaya-seasoning",
    name: "Jambalaya Seasoning",
    station: "batch",
    category: "seasonings",
    contentType: "prep",
    description: "Spicy jambalaya seasoning blend.",
    ingredients: [
      "2 cups Cayenne Pepper",
      "1½ cups Salt",
      "1½ cups White Pepper",
      "1 cup Thyme, dried",
      "½ cup Black Pepper"
    ],
    instructions: [
      "Combine all ingredients and mix thoroughly.",
      "Store in airtight container."
    ]
  },
  {
    id: "batch-pulled-pork-rub",
    name: "Pulled Pork Rub",
    station: "batch",
    category: "seasonings",
    contentType: "prep",
    description: "Dry rub for smoked pulled pork.",
    ingredients: [
      "1 cup Dry mustard",
      "¼ cup Salt",
      "1/3 cup Cumin",
      "1/3 cup Chili powder",
      "1/3 cup White pepper",
      "1/3 cup Onion powder",
      "1 tsp Cayenne"
    ],
    instructions: [
      "Combine all ingredients and mix thoroughly.",
      "Store in airtight container."
    ]
  },
  {
    id: "batch-shrimp-scampi-seasoning",
    name: "Shrimp Scampi Seasoning",
    station: "batch",
    category: "seasonings",
    contentType: "prep",
    description: "Seasoning blend for shrimp scampi.",
    ingredients: [
      "¼ cup Red Pepper Flake",
      "½ cup Parsley",
      "¼ cup SPG"
    ],
    instructions: [
      "Combine all ingredients and mix thoroughly.",
      "Store in airtight container."
    ]
  },
  {
    id: "batch-spg",
    name: "SPG (Salt, Pepper, Garlic)",
    station: "batch",
    category: "seasonings",
    contentType: "prep",
    description: "Basic SPG seasoning blend.",
    ingredients: [
      "4 cups Salt",
      "4 cups Pepper",
      "4 cups Garlic, granulated"
    ],
    instructions: [
      "Combine all ingredients and mix thoroughly.",
      "Store in airtight container."
    ]
  },

  // BATCH STATION - PORTION GUIDES
  {
    id: "batch-seafood-portion-guide",
    name: "Seafood Portion Guide",
    station: "batch",
    category: "portions",
    contentType: "prep",
    description: "Standard seafood portions for all dishes.",
    instructions: [
      "Add Shrimp: 1 bag shrimp",
      "Add Crawfish: 1 bag crawfish",
      "Cajun Colette, Shrimp: 2 bags shrimp",
      "Crawfish Étouffée Cup: 1 bag crawfish",
      "Crawfish Étouffée Bowl: 3 bags crawfish",
      "Crawfish Monica: 2 bags crawfish, 1 bag shrimp",
      "Seafood Gumbo Cup: ½ bag shrimp, ½ bag crawfish",
      "Seafood Gumbo Bowl: 1½ bag shrimp, 1 bag crawfish",
      "Seafood Jambalaya Half: ½ bag shrimp, ½ bag crawfish",
      "Seafood Jambalaya Whole: 2 bags shrimp, 1 bag crawfish",
      "Shrimp & Grits: 2 bags shrimp",
      "Shrimp Étouffée Cup: ½ bag shrimp",
      "Shrimp Étouffée Bowl: 2 bags shrimp",
      "Shrimp Caesar: 2 bags shrimp",
      "Shrimp Quesadilla: 2 bags shrimp"
    ]
  },
  {
    id: "batch-general-portion-guide",
    name: "General Portion Guide",
    station: "batch",
    category: "portions",
    contentType: "prep",
    description: "Standard portions for all menu items.",
    instructions: [
      "When using the slicer always turn the dial past the desired setting to a higher number, and then turn back to the target number. Portion sizes should be precise.",
      "Alligator: 3 oz cut into 1x1 in cubes",
      "Boudin Balls: #20 scoop",
      "Catfish: 6 oz fillet",
      "Chicken: 8 oz fillet, fat trimmed",
      "Cole Slaw Cabbage: Cut on #4",
      "Corned Beef: 2 oz cut on #1.5",
      "Crawfish: 1 oz",
      "Cube Steak: 6 oz",
      "Dirty Rice: 1 cup",
      "Eggs Rachel: 2 - 1.75 oz patties",
      "French Fries: 5 oz",
      "Frenchuletta: 2 ea cut on #2",
      "Green Beans: 3 oz",
      "Grilled Potatoes: 12-15 pieces",
      "Hamburger Patty: 8 oz",
      "Ham Steaks: Cut on #8",
      "Jalapeño Corn: 1 cup",
      "Jambalaya Packs: 1.5 oz cubed chicken, 1.5 oz cubed sausage",
      "Shell Noodles: 4.5 oz",
      "Mashed Potatoes: #8 scoop",
      "Onion Rings: Cut on #21, 8 rings per order",
      "Onion Tanglers: Cut on #2",
      "Penne Pasta: 9 oz",
      "Pickles: Cut on #6",
      "Pork Chop: 4 oz portions",
      "Provolone: Cut on #2",
      "Pulled Pork: 5 oz",
      "Sausage Patties: 1.75 oz",
      "Serrano Slaw: 1 soup cup",
      "Shrimp: 8 ea",
      "Sweet Potato Fries: 4.5 oz frozen",
      "Tenderloin Sandwich: 3 oz cut on #1.5",
      "Tomatoes: Cut on #7"
    ]
  },

  // PAR LISTS
  {
    id: "batch-par-list-salad",
    name: "Par List - Salad/Grill Station",
    station: "batch",
    category: "portions",
    contentType: "prep",
    description: "Daily par levels for Salad/Grill station items. Use 'On Hand' column to track inventory.",
    instructions: [
      "CHEESES:",
      "• Provolone (sliced): 20 slices",
      "• Pepperjack (sliced): 10 slices",
      "• Swiss (sliced): 10 slices",
      "• Cheddar (grated): 6 cups",
      "• Parmesean (shredded): 2 cups",
      "• Mozzarella (grated): 2 cups",
      "",
      "PROTEINS:",
      "• Ham (sliced): 20 slices",
      "• Corned Beef (sliced): 10 slices",
      "• Burgers: 35 ea",
      "• Chicken Breast: 7 ea",
      "",
      "VEGETABLES:",
      "• Leaf Lettuce: 2 lb",
      "• Romaine (chopped): 5 lb",
      "• Tomatoes (sliced): 20 slices",
      "• Pickles (sliced): 3 cups",
      "• Red Onions (sliced): 3 cups",
      "• Red Onions (diced): 2 cups",
      "• Green Onions (diced): 1 cup",
      "• Trinity (diced): 6 cups",
      "• Jalapeños (diced): 2 cups",
      "• Mushrooms (sliced): 2 cups",
      "",
      "BREADS:",
      "• Burger Buns: 3 packs",
      "• French Bread 7 in: 50 ea",
      "• Tx Toast: 2 loaves",
      "• Croutons: 3 bags"
    ]
  },
  {
    id: "batch-par-list-sautee",
    name: "Par List - Sautée Station",
    station: "batch",
    category: "portions",
    contentType: "prep",
    description: "Daily par levels for Sautée station items. Use 'On Hand' column to track inventory.",
    instructions: [
      "PROTEINS:",
      "• Smoked Sausage (sliced): 3 cups",
      "• Sausage Links 7 in: 10 ea",
      "• Ham (diced): 1 cup",
      "• Pulled Pork: 20 cups",
      "• Crawfish: 4 cups",
      "• Shrimp: 4 cups",
      "• Paw Paws 4 oz: 8 ea",
      "• Meatloaf 6 oz: 5 ea",
      "",
      "PREPARED ITEMS:",
      "• Jambalaya Packs: 10 packs",
      "• Jambalaya Rice: 20 packs",
      "• Crawfish Dip: 6 ea",
      "• Spinach Dip: 4 cups",
      "• Dirty Rice: 25 cups",
      "• Red Beans: 20 cups",
      "• Seafood Gumbo: 2 gal",
      "• Chicken Gumbo: 2 gal",
      "• Jalapeño Corn: 2 gal",
      "• Jalapeño Grits: 1 gal",
      "• Green Beans: 10 ea",
      "• White Rice: 1 gal",
      "",
      "DAIRY & LIQUIDS:",
      "• Milk: 1 gal",
      "• Heavy Cream: 1/2 gal",
      "• Cream for Corn: 2 cups",
      "• Veggie Stock: 1 gal",
      "",
      "SAUCES & GRAVIES:",
      "• Cream Gravy: 1 gal",
      "• Brown Gravy: 1 gal",
      "",
      "MISC:",
      "• Garlic (minced): 1 cup",
      "• Bacon Bits: 2 cups",
      "• Mustard: 8 oz",
      "• Boiled Eggs: 20 ea",
      "• Asparagus: 5 lb",
      "• Frenchuletta Pack: 10 packs"
    ]
  },
  {
    id: "batch-par-list-fry",
    name: "Par List - Fry Station",
    station: "batch",
    category: "portions",
    contentType: "prep",
    description: "Daily par levels for Fry station items. Use 'On Hand' column to track inventory.",
    instructions: [
      "BATTERS & COATINGS:",
      "• Egg Wash: 2 cups",
      "• Seafood Wash: 2 cups",
      "• Beer Batter: 4 cups",
      "• Cornmeal Batter: 6 cups",
      "• Seasoned Flour: 8 cups",
      "• Panko Mix: 4 cups",
      "• Bread Crumbs: 10 cups",
      "",
      "PROTEINS:",
      "• Catfish Filets: 35 ea",
      "• Chicken Breast: 7 ea",
      "• Shrimp: 4 cups",
      "• Crawfish: 4 cups",
      "• Alligator: 3 oz - 8 ea",
      "• Cube Steak: 5 ea",
      "",
      "FRIED ITEMS:",
      "• Boudin Mix: 6 cups",
      "• Sliced Pickles: 3 cups",
      "• Onion Rings: 8 ea",
      "",
      "MISC:",
      "• Crab Cake Mix: 4 cups",
      "• Sauerkraut: 2 cups"
    ]
  },
  {
    id: "batch-par-list-expo",
    name: "Par List - Expo Station",
    station: "batch",
    category: "portions",
    contentType: "prep",
    description: "Daily par levels for Expo station items including dressings, desserts, and supplies.",
    instructions: [
      "DRESSINGS & SAUCES:",
      "• Ranch: 8 cups",
      "• Bleu Cheese: 4 cups",
      "• Honey Mustard: 4 cups",
      "• Balsamic Vinaigrette: 4 cups",
      "• 1000 Island: 2 cups",
      "• Balsamic Reduction: 2 oz",
      "• Caesar Dressing: 4 cups",
      "• Boudin Ranch: 2 cups",
      "• Remoulade: 4 cups",
      "• Pork Sauce: 2 cups",
      "• Fire Sauce: 2 cups",
      "• Tartar: 4 cups",
      "• Mayonnaise: 8 cups",
      "• Cocktail Sauce: 4 cups",
      "• Salsa: 4 cups",
      "",
      "DESSERTS:",
      "• Bread Pudding: 12 ea",
      "• Pecan Pie: 1/8th",
      "• Key Lime Pie: 1/8th",
      "• Cheesecake: 1/8th",
      "• Sweet Cream: 2 cups",
      "",
      "SIDES & GARNISHES:",
      "• Serrano Slaw: 8 cups",
      "• Cut Fruit: 6 oz",
      "• Kids Cookies: 30 ea",
      "• Strawberry Puree: 2 cups",
      "",
      "TO-GO SUPPLIES:",
      "• Lg To Go Boxes: 50 ea",
      "• Sm To Go Boxes: 50 ea",
      "• 8 oz Soup Cups: 30 ea",
      "• 4 oz Ramekin: 50 ea",
      "• 2 oz Ramekin: 50 ea",
      "• 8 oz Cup Lids: 30 ea",
      "• 4 oz Cup Lids: 50 ea",
      "• 2 oz Cup Lids: 50 ea",
      "• Lg Paper Bags: 1 ea",
      "• Sm Paper Bags: 1 ea",
      "• Beverage Napkins: 1 ea"
    ]
  },

  // =====================================================
  // SALAD STATION RECIPES
  // =====================================================

  // SALAD STATION - PO'BOYS & SANDWICHES
  {
    id: "salad-roast-beef-poboy",
    name: "New Orleans Roast Beef Po'Boy",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Classic New Orleans roast beef po'boy with debris gravy. The roast is slow-cooked until falling apart.",
    yield: "About 4 po'boys per batch",
    ingredients: [
      "FOR THE ROAST (batch prep):",
      "10 lb beef chuck",
      "10 garlic cloves, sliced thin",
      "Salt, black pepper, cayenne to taste",
      "1 cup vegetable oil",
      "5 small onions, diced",
      "5 cups beef stock",
      "5 cups chicken stock",
      "10 tbsp Worcestershire sauce",
      "5 tbsp hot sauce",
      "5 bay leaves",
      "",
      "FOR THE PO'BOY:",
      "French bread, cut ¾ through (not all the way)",
      "Mayonnaise",
      "Shredded lettuce",
      "Tomatoes, sliced",
      "Roast beef",
      "Debris gravy"
    ],
    instructions: [
      "PREP ROAST:",
      "Cut slits into roast every 3 inches (don't pierce through).",
      "Insert garlic slices into slits.",
      "Season all sides with salt, black pepper, and cayenne.",
      "",
      "SEAR:",
      "Heat oil in heavy Dutch oven over high heat until smoking.",
      "Carefully add roast, slit-side down.",
      "Brown very well on all sides - don't burn. Transfer to plate.",
      "",
      "BUILD BRAISE:",
      "Drain all but 1 tbsp oil from pan.",
      "Add onions and cook until almost brown.",
      "Return roast to pan, add stocks.",
      "Add water if needed to bring liquid ¾ up the roast.",
      "Add Worcestershire, hot sauce, and bay leaves.",
      "",
      "BRAISE:",
      "Bring to boil, then lower to simmer.",
      "Cover and slow simmer 3-4 hours until meat falls apart.",
      "",
      "MAKE DEBRIS GRAVY:",
      "Cut meat into very small slices (it will fall apart - that's the 'debris').",
      "Skim fat from cooking liquid.",
      "Add sliced meat to liquid and bring to full boil.",
      "Reduce until gravy coats back of spoon.",
      "Season with salt and pepper.",
      "",
      "ASSEMBLE PO'BOY:",
      "Spread mayonnaise generously on both halves of bread.",
      "Layer shredded lettuce on bottom half.",
      "Add tomatoes if desired.",
      "Pile on roast beef generously.",
      "Slather with debris gravy.",
      "Serve immediately."
    ],
    tips: "The 'debris' is the good stuff - all the little bits that fall apart. Cut bread only ¾ through for easier handling."
  },

  // SALAD STATION - SLAWS & SIDES
  {
    id: "salad-red-cabbage-apple-slaw",
    name: "Red Cabbage and Apple Slaw",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Crisp, tangy slaw with red cabbage, fresh apples, and creamy dressing. Perfect for sandwiches or tacos.",
    yield: "4-6 servings",
    ingredients: [
      "½ head red cabbage, thinly sliced (about 4 cups)",
      "2 medium apples (Granny Smith or Honeycrisp), julienned or thinly sliced",
      "1 small red onion, thinly sliced",
      "½ cup shredded carrots (optional)",
      "¼ cup chopped fresh parsley or cilantro",
      "⅓ cup mayonnaise or Greek yogurt",
      "2 tbsp apple cider vinegar",
      "1 tbsp honey or maple syrup",
      "1 tsp Dijon mustard",
      "Salt and pepper to taste",
      "¼ cup toasted nuts or seeds (walnuts, pecans, or sunflower seeds - optional)"
    ],
    instructions: [
      "PREPARE VEGETABLES & APPLES:",
      "Thinly slice red cabbage, apples, and red onion using sharp knife or mandoline.",
      "If using carrots, shred them.",
      "Place all in a large mixing bowl.",
      "",
      "MAKE DRESSING:",
      "In small bowl, whisk together mayonnaise (or Greek yogurt), apple cider vinegar, honey, and Dijon mustard until smooth.",
      "Season with salt and pepper to taste.",
      "",
      "COMBINE:",
      "Pour dressing over cabbage, apples, onion, and carrots (if using).",
      "Toss well to coat evenly.",
      "Add chopped parsley or cilantro and mix.",
      "",
      "OPTIONAL CRUNCH:",
      "Stir in toasted nuts or seeds for extra texture.",
      "",
      "CHILL & SERVE:",
      "Let slaw sit 10-15 minutes to meld flavors.",
      "Or refrigerate up to 1 hour for colder, crisper salad.",
      "Serve as side dish or topping for sandwiches or tacos."
    ],
    tips: "For tangier slaw, add splash of lemon juice or increase vinegar. Store leftovers in airtight container up to 2 days; stir before serving as dressing may settle."
  },

  // SALAD STATION - PREP INSTRUCTIONS
  {
    id: "salad-shift-checklist",
    name: "Salad/Grill Shift Checklist",
    station: "salad",
    category: "prep",
    contentType: "checklist",
    description: "Start-of-shift checklist for the Salad/Grill station. Ensure all items are stocked and prepped before service.",
    instructions: [
      "ON TOP (Station Line):",
      "• Green Leaf Lettuce",
      "• Tomatoes, sliced",
      "• Jalapeños, chopped",
      "• Bell Pepper, chopped",
      "• Red Onion, chopped",
      "• Red Onion, sliced",
      "• Pickles, sliced",
      "• Tomatoes, chopped",
      "• Bleu Cheese (2 oz portions)",
      "• Olive Salad",
      "• Cucumbers, chopped",
      "• Sliced Cheeses: Provolone, Swiss, Pepper Jack",
      "• Bacon Bits",
      "• Avocado",
      "• Mayo",
      "• Mustard",
      "",
      "DOWN BELOW (Low-Boy):",
      "• Frenchuletta Meats",
      "• Corned Beef",
      "• Turkey, sliced",
      "• Philly Planks"
    ],
    tips: "Check and restock all items at the start of each shift. Keep lettuce crisp and cold. Slice tomatoes fresh daily. Organize your station for speed—sandwiches and salads move fast during lunch rush."
  },

  // SALAD STATION - APPETIZERS
  {
    id: "salad-crawfish-dip",
    name: "Crawfish Dip",
    station: "salad",
    category: "appetizers",
    contentType: "recipe",
    description: "Creamy crawfish dip served with toasted French bread.",
    ingredients: [
      "10 oz crawfish dip",
      "1 six-inch French loaf",
      "Butter for bread",
      "Mozzarella cheese",
      "Diced green onions for garnish"
    ],
    instructions: [
      "Split 1 six-inch French loaf lengthwise and coat the inside with butter.",
      "Toast until golden brown then cut into quarters creating 8 equal sized bread sticks. Slice the bread, do not smash it.",
      "Fill a boat to 1/4 inch from the top with crawfish dip, wrap the whole boat with plastic wrap, microwave for 1:30.",
      "Remove plastic and top with mozzarella cheese. Place in oven until cheese is completely melted. DO NOT microwave cheese.",
      "Place on an oval plate with the bread sticks and garnish with diced green onions."
    ],
    portionSize: "10 oz boat with 8 bread sticks"
  },
  {
    id: "salad-spinach-artichoke-dip",
    name: "Spinach Artichoke Dip",
    station: "salad",
    category: "appetizers",
    contentType: "recipe",
    description: "Creamy spinach artichoke dip with toasted French bread.",
    ingredients: [
      "10 oz spinach artichoke dip",
      "1 seven-inch French loaf",
      "Butter for bread",
      "3 artichoke hearts",
      "Mozzarella cheese",
      "Diced green onions for garnish"
    ],
    instructions: [
      "Split 1 seven-inch French loaf lengthwise and coat the inside with butter.",
      "Toast until golden brown then cut into quarters creating 8 equal sized bread sticks. Slice the bread, do not smash it.",
      "Fill a boat to 1/4 inch from the top with artichoke dip, place 3 artichoke hearts in the top of the dip and wrap the whole boat with plastic wrap, microwave for 1:30.",
      "Remove plastic and top with mozzarella cheese. Place in oven until cheese is completely melted. DO NOT microwave cheese.",
      "Place on an oval plate with the bread sticks and garnish with diced green onions."
    ],
    portionSize: "10 oz boat with 8 bread sticks"
  },
  {
    id: "salad-starter-sampler",
    name: "Starter Sampler",
    station: "salad",
    category: "appetizers",
    contentType: "recipe",
    description: "Customer choice of crawfish or spinach dip with boudin balls, gator bites, and fried pickles.",
    ingredients: [
      "Crawfish or Spinach Dip (customer choice)",
      "2 boudin balls",
      "2 gator bites",
      "3 fried pickles"
    ],
    instructions: [
      "Prepare the customer's choice of crawfish or spinach dip according to standard recipe.",
      "Add 2 boudin balls from fry station.",
      "Add 2 gator bites from fry station.",
      "Add 3 fried pickles from fry station.",
      "Arrange attractively on serving platter."
    ]
  },

  // SALAD STATION - PO-BOYS AND SANDWICHES
  {
    id: "salad-cades-club",
    name: "Cade's Club",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Grilled or fried chicken breast on French bread with bacon, pepper-jack cheese, and boudin ranch.",
    ingredients: [
      "1 full chicken breast",
      "Montreal seasoning",
      "Seasoned flour (if fried)",
      "Egg wash (if fried)",
      "1 seven-inch French loaf",
      "Butter",
      "2 tbsp boudin ranch",
      "2 slices bacon",
      "2 slices pepper-jack cheese",
      "Tomato",
      "Lettuce"
    ],
    instructions: [
      "Lightly season a full chicken breast with Montreal seasoning and cook on char grill to 165°F.",
      "If fried, cut 1 breast into 6 strips, coat chicken in seasoned flour, dredge in egg wash, then coat in seasoned flour again, patting the flour gently into the surface.",
      "Ensure there are no wet areas and each strip is fully coated with flour.",
      "Place all strips in the fry basket together and drop all at once. Cook until internal temp is 165°F.",
      "Split 1 seven-inch French loaf lengthwise and coat the cut sides with butter using the butter wheel. Toast until golden brown.",
      "Spread 1 tbsp boudin ranch on both sides of bread.",
      "If grilled, cut breast in half and place on flat-top. Top with 2 slices of bacon and two slices of pepper-jack cheese.",
      "Pour a small amount of water on the flat top around the chicken stack to melt the cheese. Do not steam fried chicken.",
      "Place chicken, bacon, and cheese stack on bottom bun. Top with tomato, then lettuce.",
      "Close the sandwich with the top bun. Insert toothpick into the center of each half.",
      "Cut sandwich in half at a 20° angle and turn out. Be careful not to smash the bread while cutting.",
      "Place on round plate with center of sandwich facing the center of the plate."
    ],
    internalTemp: "165°F"
  },
  {
    id: "salad-half-cades-club",
    name: "Half Cade's Club",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Half portion of the Cade's Club sandwich.",
    instructions: [
      "Follow directions for the full Cade's club using only a half loaf of French bread, a split chicken breast, and half of the remaining ingredients."
    ]
  },
  {
    id: "salad-camilles-cali-club",
    name: "Camille's Cali Club",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Turkey club with avocado, bacon, and provolone on French bread.",
    ingredients: [
      "1 seven-inch French loaf",
      "Butter",
      "Mayo",
      "1/4 avocado",
      "2 portions (2 oz each) turkey",
      "2 slices bacon",
      "1 slice provolone (split in half)",
      "Tomato",
      "Lettuce"
    ],
    instructions: [
      "Split 1 seven-inch French loaf lengthwise and coat the cut sides with butter using the butter wheel. Toast until golden brown.",
      "Spread mayo on both sides of the bread.",
      "Slice 1/4 of an avocado into 5-6 even strips and lay out evenly on the bottom bun.",
      "Place 2 (2 oz) turkey portions on top of avocado.",
      "Place 2 slices of bacon and one slice of provolone split in half on top of turkey.",
      "Top with tomato, then lettuce.",
      "Close the sandwich with the top bun. Insert toothpick into the center of each half.",
      "Cut sandwich in half at a 20° angle and turn out. Be careful not to smash the bread while cutting.",
      "Place on round plate with center of sandwich facing the center of the plate."
    ]
  },
  {
    id: "salad-half-camilles-cali-club",
    name: "Half Camille's Cali Club",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Half portion of Camille's Cali Club.",
    instructions: [
      "Follow directions for the full Camille's using only a half loaf of French bread, a single 2 oz portion of turkey, and half of the remaining ingredients."
    ]
  },
  {
    id: "salad-blt",
    name: "BLT Sandwich",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Classic bacon, lettuce, and tomato sandwich on Texas toast.",
    ingredients: [
      "2 slices Texas toast",
      "1/2 oz butter",
      "4 slices bacon",
      "Lettuce",
      "Tomato",
      "Mayo"
    ],
    instructions: [
      "Pour 1/2 oz of butter on the flattop and place 2 slices of Texas toast in the butter.",
      "Do not use the butter wheel as the bread is very soft and you will leave finger impressions in the bread.",
      "Toast the bread until golden brown, and then turn over to toast the other side.",
      "Spread mayo on both slices of toast.",
      "Layer 4 slices of bacon, lettuce, and tomato on one slice.",
      "Close sandwich with the other slice of toast.",
      "Cut diagonally and serve."
    ]
  },
  {
    id: "salad-orleans-steak",
    name: "Orleans Steak Sandwich",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Seasoned steak sandwich on French bread with peppers, onions, and cheese.",
    ingredients: [
      "6 oz ribeye steak",
      "Montreal seasoning",
      "1 seven-inch French loaf",
      "Butter",
      "Sautéed peppers and onions",
      "2 slices provolone cheese",
      "Lettuce",
      "Tomato",
      "Mayo"
    ],
    instructions: [
      "Season 6 oz ribeye with Montreal seasoning and cook on char grill to desired temperature.",
      "Split French loaf lengthwise and coat with butter. Toast until golden brown.",
      "Spread mayo on both sides of bread.",
      "Place steak on bottom bun and top with sautéed peppers and onions.",
      "Add 2 slices provolone cheese and melt.",
      "Top with lettuce and tomato.",
      "Close sandwich and cut at 20° angle."
    ]
  },
  {
    id: "salad-reuben",
    name: "Reuben Sandwich",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Classic Reuben with corned beef, sauerkraut, Swiss cheese, and Thousand Island dressing.",
    ingredients: [
      "6 oz corned beef",
      "2 slices marble rye bread",
      "Butter",
      "2 slices Swiss cheese",
      "Sauerkraut",
      "Thousand Island dressing"
    ],
    instructions: [
      "Butter both sides of marble rye bread.",
      "Toast on flat-top until golden brown on one side.",
      "Heat corned beef on flat-top.",
      "Spread Thousand Island dressing on the untoasted sides of bread.",
      "Layer corned beef, sauerkraut, and Swiss cheese on one slice.",
      "Close sandwich and continue cooking until cheese melts and both sides are golden.",
      "Cut diagonally and serve."
    ]
  },
  {
    id: "salad-pulled-pork",
    name: "Pulled Pork Sandwich",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Smoked pulled pork with serrano slaw on a brioche bun.",
    ingredients: [
      "5 oz pulled pork",
      "1 brioche bun",
      "Butter",
      "BBQ sauce",
      "Serrano slaw"
    ],
    instructions: [
      "Toast brioche bun with butter until golden.",
      "Heat 5 oz pulled pork and toss with BBQ sauce.",
      "Place pulled pork on bottom bun.",
      "Top with serrano slaw.",
      "Close sandwich and serve."
    ],
    portionSize: "5 oz pulled pork"
  },
  {
    id: "salad-shrimp-poboy",
    name: "Shrimp Po-Boy",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Fried shrimp on French bread with remoulade sauce.",
    ingredients: [
      "8 fried shrimp",
      "1 seven-inch French loaf",
      "Butter",
      "Remoulade sauce",
      "Lettuce",
      "Tomato",
      "Pickles"
    ],
    instructions: [
      "Split French loaf lengthwise and coat with butter. Toast until golden brown.",
      "Spread remoulade sauce on both sides of bread.",
      "Place 8 fried shrimp on bottom bun.",
      "Top with lettuce, tomato, and pickles.",
      "Close sandwich and cut at 20° angle."
    ]
  },
  {
    id: "salad-gator-poboy",
    name: "Gator Po-Boy",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Fried alligator on French bread with remoulade sauce.",
    ingredients: [
      "1 portion fried alligator",
      "1 seven-inch French loaf",
      "Butter",
      "Remoulade sauce",
      "Lettuce",
      "Tomato",
      "Pickles"
    ],
    instructions: [
      "Split French loaf lengthwise and coat with butter. Toast until golden brown.",
      "Spread remoulade sauce on both sides of bread.",
      "Place fried alligator on bottom bun.",
      "Top with lettuce, tomato, and pickles.",
      "Close sandwich and cut at 20° angle."
    ]
  },
  {
    id: "salad-catfish-poboy",
    name: "Catfish Po-Boy",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Fried catfish on French bread with remoulade sauce.",
    ingredients: [
      "1 fried catfish fillet",
      "1 seven-inch French loaf",
      "Butter",
      "Remoulade sauce",
      "Lettuce",
      "Tomato",
      "Pickles"
    ],
    instructions: [
      "Split French loaf lengthwise and coat with butter. Toast until golden brown.",
      "Spread remoulade sauce on both sides of bread.",
      "Place fried catfish on bottom bun.",
      "Top with lettuce, tomato, and pickles.",
      "Close sandwich and cut at 20° angle."
    ]
  },
  {
    id: "salad-crawfish-poboy",
    name: "Crawfish Po-Boy",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Fried crawfish tails on French bread with remoulade sauce.",
    ingredients: [
      "1 portion fried crawfish tails",
      "1 seven-inch French loaf",
      "Butter",
      "Remoulade sauce",
      "Lettuce",
      "Tomato",
      "Pickles"
    ],
    instructions: [
      "Split French loaf lengthwise and coat with butter. Toast until golden brown.",
      "Spread remoulade sauce on both sides of bread.",
      "Place fried crawfish tails on bottom bun.",
      "Top with lettuce, tomato, and pickles.",
      "Close sandwich and cut at 20° angle."
    ]
  },

  // SALAD STATION - BURGERS
  {
    id: "salad-basic-burger",
    name: "The Basic Burger",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Classic burger with lettuce, tomato, onion, and pickles.",
    ingredients: [
      "6 oz burger patty",
      "1 brioche bun",
      "Butter",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickles",
      "Mayo",
      "Mustard"
    ],
    instructions: [
      "Season burger patty with salt and pepper. Cook on flat-top to desired temperature.",
      "Toast brioche bun with butter until golden.",
      "Spread mayo and mustard on bun.",
      "Place patty on bottom bun.",
      "Top with lettuce, tomato, onion, and pickles.",
      "Close burger and serve."
    ],
    portionSize: "6 oz patty"
  },
  {
    id: "salad-club-sandwich",
    name: "Traditional Club Sandwich",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Triple-decker club sandwich with turkey, ham, bacon, lettuce, tomato, and mayo on toasted bread.",
    ingredients: [
      "3 slices white or wheat bread",
      "4 oz sliced turkey breast",
      "2 oz sliced ham",
      "4 strips crispy bacon",
      "2 leaves green leaf lettuce",
      "2 slices tomato",
      "2 tbsp mayo",
      "Butter for toasting",
      "4 toothpicks or frilled picks"
    ],
    instructions: [
      "Toast all 3 slices of bread until golden brown.",
      "Spread mayo on one side of each slice.",
      "Layer turkey and ham on bottom slice, top with lettuce and tomato.",
      "Place middle slice of bread on top (mayo side up).",
      "Add bacon strips and remaining lettuce.",
      "Top with final slice of bread (mayo side down).",
      "Cut sandwich diagonally into quarters.",
      "Secure each quarter with a toothpick or frilled pick.",
      "Serve with fries or chips."
    ],
    portionSize: "4 oz turkey, 2 oz ham, 4 strips bacon"
  },
  {
    id: "salad-bacon-cheddar-burger",
    name: "Bacon Cheddar Burger",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Burger topped with bacon and cheddar cheese.",
    ingredients: [
      "6 oz burger patty",
      "1 brioche bun",
      "Butter",
      "2 slices bacon",
      "2 slices cheddar cheese",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickles"
    ],
    instructions: [
      "Season burger patty and cook on flat-top to desired temperature.",
      "Top with cheddar cheese and melt.",
      "Toast brioche bun with butter.",
      "Place patty on bottom bun.",
      "Top with bacon, lettuce, tomato, onion, and pickles.",
      "Close burger and serve."
    ]
  },
  {
    id: "salad-bastrop-burger",
    name: "Bastrop Burger",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Texas-style burger with jalapeños, pepper-jack, and BBQ sauce.",
    ingredients: [
      "6 oz burger patty",
      "1 brioche bun",
      "Butter",
      "2 slices pepper-jack cheese",
      "Pickled jalapeños",
      "BBQ sauce",
      "Onion rings",
      "Lettuce"
    ],
    instructions: [
      "Season burger patty and cook on flat-top to desired temperature.",
      "Top with pepper-jack cheese and melt.",
      "Toast brioche bun with butter.",
      "Spread BBQ sauce on bun.",
      "Place patty on bottom bun.",
      "Top with onion rings, jalapeños, and lettuce.",
      "Close burger and serve."
    ]
  },
  {
    id: "salad-bleu-squealer-burger",
    name: "Bleu Squealer Burger",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Burger with blue cheese crumbles and bacon.",
    ingredients: [
      "6 oz burger patty",
      "1 brioche bun",
      "Butter",
      "Blue cheese crumbles",
      "2 slices bacon",
      "Lettuce",
      "Tomato",
      "Onion"
    ],
    instructions: [
      "Season burger patty and cook on flat-top to desired temperature.",
      "Top with blue cheese crumbles while hot to slightly melt.",
      "Toast brioche bun with butter.",
      "Place patty on bottom bun.",
      "Top with bacon, lettuce, tomato, and onion.",
      "Close burger and serve."
    ]
  },
  {
    id: "salad-cowboy-burger",
    name: "Cowboy Burger",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Western-style burger with onion rings, bacon, and BBQ sauce.",
    ingredients: [
      "6 oz burger patty",
      "1 brioche bun",
      "Butter",
      "2 slices cheddar cheese",
      "2 slices bacon",
      "Onion rings",
      "BBQ sauce",
      "Lettuce"
    ],
    instructions: [
      "Season burger patty and cook on flat-top to desired temperature.",
      "Top with cheddar cheese and melt.",
      "Toast brioche bun with butter.",
      "Spread BBQ sauce on bun.",
      "Place patty on bottom bun.",
      "Top with bacon, onion rings, and lettuce.",
      "Close burger and serve."
    ]
  },
  {
    id: "salad-fire-burger",
    name: "Fire Burger",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Spicy burger with pepper-jack, jalapeños, and sriracha mayo.",
    ingredients: [
      "6 oz burger patty",
      "1 brioche bun",
      "Butter",
      "2 slices pepper-jack cheese",
      "Pickled jalapeños",
      "Fresh jalapeños",
      "Sriracha mayo",
      "Lettuce"
    ],
    instructions: [
      "Season burger patty and cook on flat-top to desired temperature.",
      "Top with pepper-jack cheese and melt.",
      "Toast brioche bun with butter.",
      "Spread sriracha mayo on bun.",
      "Place patty on bottom bun.",
      "Top with pickled and fresh jalapeños and lettuce.",
      "Close burger and serve."
    ],
    tips: "Warn customers this is very spicy!"
  },
  {
    id: "salad-mushroom-swiss-burger",
    name: "Mushroom and Swiss Burger",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Burger with sautéed mushrooms and Swiss cheese.",
    ingredients: [
      "6 oz burger patty",
      "1 brioche bun",
      "Butter",
      "2 slices Swiss cheese",
      "Sautéed mushrooms",
      "Lettuce",
      "Tomato",
      "Onion"
    ],
    instructions: [
      "Season burger patty and cook on flat-top to desired temperature.",
      "Top with Swiss cheese and sautéed mushrooms to melt cheese.",
      "Toast brioche bun with butter.",
      "Place patty on bottom bun.",
      "Top with lettuce, tomato, and onion.",
      "Close burger and serve."
    ]
  },

  // SALAD STATION - ENTREES
  {
    id: "salad-smoked-meatloaf",
    name: "Smoked Meatloaf",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "House-smoked meatloaf with brown gravy.",
    ingredients: [
      "8 oz smoked meatloaf slice",
      "Brown gravy",
      "Mashed potatoes",
      "Green beans"
    ],
    instructions: [
      "Slice 8 oz portion of smoked meatloaf.",
      "Heat in oven until warmed through.",
      "Plate with mashed potatoes and green beans.",
      "Top meatloaf with brown gravy."
    ],
    portionSize: "8 oz"
  },

  // SALAD STATION - SALADS
  {
    id: "salad-side-salad",
    name: "Side Salad",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Fresh mixed greens with tomato, cucumber, and choice of dressing.",
    ingredients: [
      "Mixed greens",
      "Diced tomatoes",
      "Sliced cucumbers",
      "Shredded cheese",
      "Croutons",
      "Choice of dressing"
    ],
    instructions: [
      "Place mixed greens in a small bowl.",
      "Top with diced tomatoes and sliced cucumbers.",
      "Add shredded cheese and croutons.",
      "Serve dressing on the side."
    ]
  },
  {
    id: "salad-side-caesar",
    name: "Side Caesar",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Classic Caesar salad with romaine, parmesan, and croutons.",
    ingredients: [
      "Romaine lettuce",
      "Shaved parmesan",
      "Croutons",
      "Caesar dressing"
    ],
    instructions: [
      "Place chopped romaine in a small bowl.",
      "Top with shaved parmesan and croutons.",
      "Serve Caesar dressing on the side."
    ]
  },
  {
    id: "salad-chef-salad",
    name: "Chef Salad",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Full salad with ham, turkey, cheese, eggs, and fresh vegetables.",
    ingredients: [
      "Mixed greens",
      "Sliced ham",
      "Sliced turkey",
      "Shredded cheddar cheese",
      "Hard-boiled egg",
      "Diced tomatoes",
      "Sliced cucumbers",
      "Croutons",
      "Choice of dressing"
    ],
    instructions: [
      "Place mixed greens in a large bowl.",
      "Arrange ham, turkey, and cheese on top.",
      "Add sliced hard-boiled egg.",
      "Top with tomatoes, cucumbers, and croutons.",
      "Serve dressing on the side."
    ]
  },
  {
    id: "salad-cajun-shrimp-caesar",
    name: "Cajun Shrimp Caesar Salad",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Caesar salad topped with Cajun-seasoned grilled shrimp.",
    ingredients: [
      "Romaine lettuce",
      "8 Cajun-seasoned shrimp",
      "Shaved parmesan",
      "Croutons",
      "Caesar dressing"
    ],
    instructions: [
      "Season 8 shrimp with Cajun seasoning and grill until cooked through.",
      "Place chopped romaine in a large bowl.",
      "Top with shaved parmesan and croutons.",
      "Arrange grilled shrimp on top.",
      "Serve Caesar dressing on the side."
    ]
  },

  // SALAD STATION - SIDES
  {
    id: "salad-asparagus",
    name: "Asparagus",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Grilled asparagus with butter and seasonings.",
    ingredients: [
      "1 bunch asparagus",
      "Butter",
      "Salt and pepper",
      "Lemon juice"
    ],
    instructions: [
      "Trim woody ends from asparagus.",
      "Toss with butter, salt, and pepper.",
      "Grill until tender-crisp with char marks.",
      "Finish with a squeeze of lemon juice."
    ]
  },
  {
    id: "salad-crawfish-mac-cheese",
    name: "Crawfish Mac & Cheese",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Creamy mac and cheese with Louisiana crawfish tails.",
    ingredients: [
      "Mac and cheese base",
      "Crawfish tails",
      "Cajun seasoning",
      "Green onions"
    ],
    instructions: [
      "Prepare mac and cheese base.",
      "Fold in seasoned crawfish tails.",
      "Top with Cajun seasoning and diced green onions."
    ]
  },
  {
    id: "salad-dirty-rice",
    name: "Dirty Rice",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Cajun-style rice with ground meat and seasonings.",
    instructions: [
      "Heat prepared dirty rice in sauté pan.",
      "Portion into serving container."
    ]
  },
  {
    id: "salad-french-fries",
    name: "French Fries",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Classic crispy French fries.",
    instructions: [
      "Drop frozen fries in 370°F fryer.",
      "Cook until golden brown and crispy.",
      "Season with salt immediately after removing from fryer."
    ]
  },
  {
    id: "salad-green-beans",
    name: "Green Beans",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Seasoned green beans.",
    instructions: [
      "Heat prepared green beans.",
      "Portion into serving container."
    ]
  },
  {
    id: "salad-grilled-potatoes",
    name: "Grilled Potatoes",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Seasoned grilled potato wedges.",
    ingredients: [
      "Potato wedges",
      "Butter",
      "Seasoning blend"
    ],
    instructions: [
      "Toss potato wedges with butter and seasoning.",
      "Grill until golden and cooked through."
    ]
  },
  {
    id: "salad-jalapeno-corn",
    name: "Jalapeño Corn",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Sweet corn with jalapeños and butter.",
    ingredients: [
      "Sweet corn",
      "Diced jalapeños",
      "Butter",
      "Salt"
    ],
    instructions: [
      "Heat corn with butter in sauté pan.",
      "Add diced jalapeños.",
      "Season with salt and serve."
    ]
  },
  {
    id: "salad-jalapeno-cheese",
    name: "Jalapeño & Cheese",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Creamy jalapeño cheese side.",
    instructions: [
      "Heat prepared jalapeño cheese.",
      "Portion into serving container."
    ]
  },
  {
    id: "salad-mac-cheese",
    name: "Mac & Cheese",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Creamy homemade macaroni and cheese.",
    instructions: [
      "Heat prepared mac and cheese.",
      "Portion into serving container."
    ]
  },
  {
    id: "salad-mashed-potatoes",
    name: "Mashed Potatoes",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Creamy mashed potatoes.",
    instructions: [
      "Heat prepared mashed potatoes.",
      "Portion into serving container."
    ]
  },
  {
    id: "salad-onion-rings",
    name: "Onion Rings",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Crispy beer-battered onion rings.",
    instructions: [
      "Drop frozen onion rings in 370°F fryer.",
      "Cook until golden brown and crispy.",
      "Season with salt."
    ]
  },
  {
    id: "salad-serrano-slaw",
    name: "Serrano Slaw",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Spicy coleslaw with serrano peppers.",
    ingredients: [
      "Shredded cabbage",
      "Serrano peppers",
      "Slaw dressing"
    ],
    instructions: [
      "Mix shredded cabbage with minced serrano peppers.",
      "Toss with slaw dressing.",
      "Refrigerate until service."
    ],
    portionSize: "1 soup cup"
  },
  {
    id: "salad-sweet-potato-fries",
    name: "Sweet Potato Fries",
    station: "salad",
    category: "sides",
    contentType: "recipe",
    description: "Crispy sweet potato fries.",
    instructions: [
      "Drop frozen sweet potato fries in 370°F fryer.",
      "Cook until crispy.",
      "Season with salt."
    ],
    portionSize: "4.5 oz frozen"
  },

  // SALAD STATION - KIDS MENU
  {
    id: "salad-kids-chicken-nuggets",
    name: "Chicken Nuggets (Kids)",
    station: "salad",
    category: "kids",
    contentType: "recipe",
    description: "Crispy chicken nuggets for kids.",
    instructions: [
      "Drop 5 chicken nuggets in 370°F fryer.",
      "Cook until golden brown and internal temp reaches 165°F.",
      "Serve with fries and dipping sauce."
    ],
    internalTemp: "165°F"
  },
  {
    id: "salad-kids-grilled-cheese",
    name: "Grilled Cheese (Kids)",
    station: "salad",
    category: "kids",
    contentType: "recipe",
    description: "Classic grilled cheese sandwich for kids.",
    ingredients: [
      "2 slices white bread",
      "2 slices American cheese",
      "Butter"
    ],
    instructions: [
      "Butter both sides of bread slices.",
      "Place cheese between bread slices.",
      "Grill on flat-top until golden brown and cheese is melted.",
      "Cut diagonally and serve with fries."
    ]
  },
  {
    id: "salad-kids-corndogs-fries",
    name: "Corndogs & Fries (Kids)",
    station: "salad",
    category: "kids",
    contentType: "recipe",
    description: "Mini corndogs with French fries.",
    instructions: [
      "Drop 4 mini corndogs in 370°F fryer.",
      "Cook until golden brown.",
      "Serve with fries and ketchup/mustard."
    ]
  },
  {
    id: "salad-kids-catfish-nuggets",
    name: "Catfish Nuggets (Kids)",
    station: "salad",
    category: "kids",
    contentType: "recipe",
    description: "Bite-sized fried catfish nuggets for kids.",
    instructions: [
      "Cut catfish into nugget-sized pieces.",
      "Bread with seasoned flour using standard breading procedure.",
      "Fry at 370°F until golden and cooked through.",
      "Serve with fries and tartar sauce."
    ]
  },
  {
    id: "salad-kids-corndogs-mac",
    name: "Corndogs & Mac (Kids)",
    station: "salad",
    category: "kids",
    contentType: "recipe",
    description: "Mini corndogs with mac and cheese.",
    instructions: [
      "Drop 4 mini corndogs in 370°F fryer.",
      "Cook until golden brown.",
      "Serve with a side of mac and cheese."
    ]
  },

  {
    id: "salad-watercress-salad",
    name: "Watercress Salad",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Fresh, peppery, and light salad with Dijon vinaigrette. Perfect alongside grilled proteins.",
    yield: "4 servings",
    ingredients: [
      "4 cups watercress, washed and tough stems removed",
      "1 small shallot, thinly sliced",
      "½ cup cherry tomatoes, halved",
      "2 tbsp extra-virgin olive oil",
      "1 tbsp lemon juice or white wine vinegar",
      "1 tsp Dijon mustard",
      "Salt and freshly ground black pepper to taste",
      "Optional: ¼ cup shaved Parmesan or toasted walnuts"
    ],
    instructions: [
      "PREPARE DRESSING:",
      "In a small bowl, whisk together olive oil, lemon juice, Dijon mustard, a pinch of salt, and black pepper until emulsified.",
      "",
      "TOSS SALAD:",
      "In a large bowl, combine watercress, shallot, and cherry tomatoes.",
      "Drizzle with dressing and toss gently to coat.",
      "",
      "SERVE:",
      "Divide among plates and top with shaved Parmesan or walnuts, if using.",
      "Serve immediately to maintain watercress's crispness."
    ],
    tips: "Add a few drops of truffle oil to the dressing for an elevated flavor. Pairs well with pomme purée and pepper relish."
  },

  // SALAD STATION - PREP INSTRUCTIONS
  {
    id: "salad-prep-bread-toasting",
    name: "Bread Toasting Guidelines",
    station: "salad",
    category: "prep",
    contentType: "prep",
    description: "Proper technique for toasting bread for sandwiches and po-boys.",
    instructions: [
      "All breads should be coated with butter using at least 4 passes on the butter wheel and placed on the flat-top.",
      "It is important to create a crisp seal on the bread that is golden brown in color.",
      "This prevents juices and sauces from softening and collapsing the sandwich or burger.",
      "Hamburger buns should be toasted on both sides, though butter is not necessary on the baked sides of the bun.",
      "All burgers and sandwiches should be as tall as possible and care should be taken not to smash the sandwich when cutting."
    ],
    tips: "A properly toasted bread is key to a great sandwich - it provides structure and prevents sogginess."
  },

  // =====================================================
  // BREAKFAST STATION RECIPES
  // =====================================================

  // BREAKFAST - SHIFT CHECKLIST
  {
    id: "breakfast-shift-checklist",
    name: "Breakfast Station Shift Checklist",
    station: "breakfast",
    category: "prep",
    contentType: "checklist",
    description: "Start-of-shift checklist for the Breakfast Station. Ensure all items are stocked and prepped before service.",
    instructions: [
      "EGGS & DAIRY:",
      "• Whole eggs (large)",
      "• Scrambled eggs (2 quarts)",
      "• Clarified butter",
      "• Hollandaise sauce (hot & ready)",
      "• Cream gravy",
      "• Sausage gravy",
      "• Jalapeño cheese grits (hot well)",
      "• Veggie stock (4 quarts)",
      "",
      "MEATS & SEAFOOD:",
      "• Bacon strips",
      "• Bacon bits",
      "• Breakfast sausage patties",
      "• Chopped cooked breakfast sausage",
      "• Ham steaks",
      "• Diced ham",
      "• Cube steak",
      "• Chicken tenders",
      "• Fried chicken strips",
      "• Corned beef (minced)",
      "• Shrimp (medium)",
      "• Crawfish tails",
      "• Crab stuffing / crab cakes",
      "",
      "POTATOES, BREAD & GRAINS:",
      "• Boiled potatoes (country potatoes)",
      "• Hash browns (prepped)",
      "• English muffins",
      "• Biscuits (baked or dough)",
      "• French loaf (French toast)",
      "• Tortillas (10-inch)",
      "• Pancake batter",
      "• Waffle batter",
      "• Oatmeal",
      "• Texas toast",
      "",
      "CHEESES:",
      "• Cheddar cheese (shredded)",
      "• Swiss cheese (sliced)",
      "• Provolone cheese",
      "• Pepper Jack cheese",
      "",
      "VEGETABLES & PRODUCE:",
      "• Yellow onions",
      "• Red onions",
      "• Bell peppers",
      "• Jalapeños",
      "• Mushrooms",
      "• Tomatoes",
      "• Spinach",
      "• Asparagus",
      "• Green onions",
      "• Parsley",
      "• Garlic (minced)",
      "",
      "FRUIT & GARNISH:",
      "• Strawberries",
      "• Pineapple",
      "• Apples",
      "• Grapes",
      "• Bananas (optional oatmeal)",
      "• Berries (optional oatmeal)",
      "• Powdered sugar",
      "• Paprika",
      "",
      "DRY GOODS & SEASONING:",
      "• Kosher salt",
      "• Black pepper",
      "• Cajun seasoning",
      "• SPG seasoning",
      "• White vinegar",
      "",
      "HOT LINE / SERVICE CHECK:",
      "• Fryer hot & filtered",
      "• Flat top seasoned",
      "• Waffle iron preheated",
      "• Steam well stocked (grits, gravy, breakfast sausage, gumbo, red beans)",
      "• Egg station fully stocked",
      "• Garnish station set"
    ],
    tips: "Print this checklist, laminate it, and post it at AM prep sign-off. If an item isn't checked, breakfast isn't ready."
  },
  // BREAKFAST - CLASSIC NEW ORLEANS EGGS
  {
    id: "breakfast-eggs-hussarde",
    name: "Eggs Hussarde",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Classic New Orleans brunch - poached eggs on Holland rusks with grilled ham, tomato, Marchand de Vin sauce, and Hollandaise.",
    yield: "1 serving",
    ingredients: [
      "2 large thin slices ham, grilled",
      "2 Holland rusks (or toasted English muffins)",
      "¼ cup Marchand de Vin sauce",
      "2 slices tomato, grilled",
      "2 eggs, soft poached",
      "¾ cup Hollandaise sauce (see Batch recipes)",
      "Paprika for garnish"
    ],
    instructions: [
      "Place Holland rusks on serving plate.",
      "Lay a large slice of grilled ham across each rusk.",
      "Cover ham with Marchand de Vin sauce.",
      "Place grilled tomato slice on top.",
      "Top each with a soft poached egg.",
      "Generously cover with Hollandaise sauce.",
      "Garnish with a sprinkling of paprika.",
      "Serve immediately."
    ],
    tips: "The key is the layering: rusk, ham, Marchand de Vin, tomato, egg, Hollandaise. A New Orleans classic! MARCHAND DE VIN SAUCE: A classic French reduction sauce associated with New Orleans Creole cuisine, designed to complement steak. Features a base of red wine, shallots, and reduced beef stock or demi-glace. SIMPLE RED WINE REDUCTION (Quick Version): Ideal for a fast steak dinner. Ingredients: 1 tbsp butter, ¼ cup chopped shallots, 1 tbsp minced garlic, ¼ cup dry red wine, 1 cup demi-glace. Directions: Melt butter; sauté shallots and garlic until soft. Add red wine and simmer until reduced by half. Stir in the demi-glace and simmer for 2-5 minutes until thickened."
  },
  {
    id: "breakfast-eggs-sardou",
    name: "Eggs Sardou",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Classic New Orleans brunch - poached eggs on artichoke hearts with creamed spinach and Hollandaise.",
    yield: "1 serving",
    ingredients: [
      "1 cup creamed spinach, piping hot",
      "2 artichoke bottoms, warmed in salted water",
      "2 eggs, poached",
      "¾ cup Hollandaise sauce (see Batch recipes)"
    ],
    instructions: [
      "Make a base of hot creamed spinach on serving plate.",
      "Place warmed artichoke bottoms on top of spinach.",
      "Put a poached egg in each artichoke cup.",
      "Top generously with Hollandaise sauce.",
      "Serve immediately."
    ],
    tips: "Named after French playwright Victorien Sardou - created at Antoine's restaurant in 1908. The artichoke cups cradle the eggs perfectly."
  },
  {
    id: "breakfast-eggs-st-denis",
    name: "Eggs St. Denis",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Classic New Orleans brunch - poached eggs on Holland rusks with grilled ham and Marchand de Vin sauce.",
    yield: "1 serving",
    ingredients: [
      "2 Holland rusks (or English muffins/buttered toast)",
      "2 slices grilled ham",
      "2 eggs, poached",
      "1 cup Marchand de Vin sauce"
    ],
    instructions: [
      "Place rusks on a luncheon plate.",
      "Place grilled ham across both rusks.",
      "While poaching eggs, keep rolling them over so whites cover whole egg and begin to puff.",
      "Place eggs over ham.",
      "Top generously with Marchand de Vin sauce.",
      "Serve immediately."
    ],
    tips: "English muffins or buttered toast may be substituted for Holland rusks. Poach eggs in hot lard or oil for traditional preparation. MARCHAND DE VIN SAUCE: A classic French reduction sauce associated with New Orleans Creole cuisine, designed to complement steak. Features a base of red wine, shallots, and reduced beef stock or demi-glace. SIMPLE RED WINE REDUCTION (Quick Version): Ideal for a fast steak dinner. Ingredients: 1 tbsp butter, ¼ cup chopped shallots, 1 tbsp minced garlic, ¼ cup dry red wine, 1 cup demi-glace. Directions: Melt butter; sauté shallots and garlic until soft. Add red wine and simmer until reduced by half. Stir in the demi-glace and simmer for 2-5 minutes until thickened."
  },

  // BREAKFAST - ENTREES
  {
    id: "breakfast-belgian-waffle",
    name: "Belgian Waffle",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Crispy Belgian waffle garnished with powdered sugar and fresh strawberry.",
    ingredients: [
      "3 oz pancake batter",
      "1 tbsp powdered sugar, for garnish",
      "1 strawberry, sliced, for garnish"
    ],
    instructions: [
      "Preheat the waffle iron.",
      "Pour the 3 oz of pancake batter into the center of the waffle iron. Close the lid and rotate the iron 180°.",
      "Cook until the waffle iron indicates it's done, which is typically signaled with a beep. This should take approximately 4 minutes.",
      "Carefully remove the waffle and place it on a serving plate.",
      "Garnish with a dusting of powdered sugar and place the sliced strawberry on top."
    ],
    cookTime: "4 minutes",
    tips: "Belgian Waffles are the unsung heroes of breakfast. A dash of powdered sugar, a slice of strawberry, and you've got yourself not just a meal, but a reason to be happy this morning."
  },
  {
    id: "breakfast-chicken-bacon-biscuit",
    name: "Chicken Bacon Biscuit",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Hearty breakfast biscuit with fried chicken, bacon, eggs, and cream gravy.",
    ingredients: [
      "2 bacon strips",
      "2 chicken tenders",
      "2 eggs",
      "1 biscuit",
      "8 oz cream gravy",
      "1 tsp parsley, finely chopped"
    ],
    instructions: [
      "In a pan over medium heat, fry the bacon strips until they achieve your desired level of crispiness. Once done, transfer them to a paper towel to remove excess grease.",
      "In the same pan, fry the split chicken breast strips. Ensure they turn golden brown and are cooked thoroughly, reaching an internal temperature of at least 165°F (74°C).",
      "While the chicken cooks, split the biscuit horizontally. Position the halves in a large bowl or plate with the cut side facing upwards.",
      "Arrange the crispy bacon strips over the biscuit halves.",
      "Add the fried chicken strips atop the bacon.",
      "In a separate pan, prepare the eggs to your preference—whether sunny side up, over easy, or scrambled.",
      "Gently place the cooked eggs over the chicken strips.",
      "In a saucepan, heat the cream gravy until warm but not boiling. Generously pour the gravy over the biscuit assembly, ensuring all ingredients are well covered.",
      "As a finishing touch, sprinkle the finely chopped parsley over the dish for a fresh burst of color and flavor."
    ],
    internalTemp: "165°F",
    tips: "This Chicken Bacon Biscuit isn't just breakfast, it's a culinary odyssey. Crispy bacon, tender chicken, and a biscuit soaked in cream gravy—it's a heart-stopping combination of flavors."
  },
  {
    id: "breakfast-eggs-cooking-methods",
    name: "Eggs - Cooking Methods",
    station: "breakfast",
    category: "tips",
    contentType: "prep",
    description: "Guide to cooking eggs: sunny side up, over easy, over medium, over hard, and poached.",
    ingredients: [
      "--- FRIED EGGS ---",
      "2 eggs",
      "1/2 oz clarified butter",
      "--- POACHED EGGS ---",
      "1-2 eggs",
      "Water (1 cup per egg)",
      "White vinegar (1 tbsp per 1 cup water)"
    ],
    instructions: [
      "SUNNY SIDE UP:",
      "Begin with a non-stick skillet on medium heat and add 1/2 oz of clarified butter.",
      "Carefully crack the eggs into the pan, placing them side by side.",
      "Within about a minute, the outer edges will turn white. Reduce the heat.",
      "Once the egg whites are thoroughly cooked, the sunny side up eggs are ready to serve.",
      "OVER EASY:",
      "Prepare the eggs as per the sunny side up instructions.",
      "Once the outer whites are set, carefully flip the eggs.",
      "Allow to cook for about 1 minute. The whites should be fully cooked, with the yolk remaining runny.",
      "OVER MEDIUM:",
      "Prepare the eggs as described for over easy.",
      "Flip the eggs every minute until the yolk is firm on the edges but remains runny in the center.",
      "OVER HARD:",
      "Prepare the eggs as described for over medium.",
      "Continue flipping the eggs every minute until the yolk is completely firm.",
      "POACHED:",
      "Pour water into a deep 2-quart saucier until it reaches an inch in depth. Add 1 tbsp of white vinegar per 1 cup of water.",
      "Bring the water mixture to a simmer over medium heat. Crack a cold, fresh large egg into a small ramekin.",
      "Using a spatula or spoon handle, stir the water swiftly in one direction to create a whirlpool effect.",
      "Carefully drop the egg into the center of the whirlpool.",
      "Allow the water to return to a simmer, then reduce the heat, cover the pan, and set a timer for 3 minutes.",
      "Once the timer goes off, gently remove the egg with a slotted spoon and serve immediately."
    ],
    cookTime: "3 minutes (poached)",
    tips: "Low heat after the initial set ensures whites cook through while keeping yolk runny. Fresh eggs work best for poaching. Use whirlpool method for single servings; for larger batches, use a 12-inch nonstick skillet without stirring."
  },
  {
    id: "breakfast-chicken-fried-steak-eggs",
    name: "Chicken Fried Steak and Eggs",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Crispy breaded cube steak with eggs, hash browns, and sausage gravy.",
    ingredients: [
      "3 oz cube steak",
      "3 oz sausage gravy",
      "4 oz hash browns",
      "1 slice toast, buttered (optional)",
      "Flour mix for dredging, as needed",
      "Egg wash, as needed",
      "Oil, for frying",
      "2 eggs"
    ],
    instructions: [
      "Heat frying oil to 350°F (175°C) in a deep-fryer or large frying pan.",
      "Coat the cube steak in the flour mix, patting gently to achieve a consistent layer.",
      "Drench the floured steak into the egg wash, ensuring thorough coverage.",
      "Re-coat the steak in the flour mix, patting lightly for a comprehensive coat. Ensure no moist areas are present.",
      "Carefully introduce the cube steak into the hot oil. Fry for about 2 minutes, flipping it every 30-45 seconds.",
      "Extract the steak, setting it on a wire rack or paper towel to remove surplus oil.",
      "While the steak is cooking, prepare your eggs to the customer's liking.",
      "Place the fried cube steak on the plate. Pour over the sausage gravy generously.",
      "Flank it with the eggs and breakfast side."
    ],
    cookTime: "2 minutes frying",
    tips: "Chicken Fried Steak and Eggs: it's the anti-vegan breakfast of champions. You've got your meat, your grease, and your gravy—three of the four major food groups right there."
  },
  {
    id: "breakfast-corned-beef-hash",
    name: "Corned Beef Hash",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Crispy hash browns with minced corned beef, peppers, onions, and eggs.",
    ingredients: [
      "1/2 oz clarified butter",
      "5 oz corned beef, minced",
      "4 oz hash browns",
      "2 oz bell pepper, diced",
      "2 oz yellow onion, diced",
      "2 eggs"
    ],
    instructions: [
      "In a medium non-stick sauté pan, heat the clarified butter over medium-high heat.",
      "Once the butter is simmering, add the minced corned beef, hash browns, diced bell pepper, and diced yellow onion to the pan.",
      "Cook, stirring occasionally, until the peppers and onions are tender and the hash browns are slightly crispy. This process will help to meld the flavors of the corned beef and vegetables, creating a cohesive hash.",
      "In a separate non-stick skillet, prepare the eggs according to the specified method on the order ticket. (For example, if the order specifies sunny side up, refer to the previous 'Eggs' instructions to cook them sunny side up.)",
      "Spoon the corned beef hash mixture onto a round plate, spreading it out into an even layer.",
      "Carefully position the cooked eggs on top of the hash."
    ],
    tips: "This Corned Beef Hash isn't just a meal; it's an experience. The crispy hash browns, the kick of the bell pepper, all drowned in the glory of clarified butter—this is what mornings should taste like."
  },
  {
    id: "breakfast-covered-smothered",
    name: "Covered and Smothered",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Fried potatoes with sausage patties, eggs, sausage gravy, cheese, and bacon bits.",
    ingredients: [
      "4 oz potatoes, quartered",
      "2 sausage patties",
      "2 eggs",
      "4 oz sausage gravy",
      "1 oz Cheddar cheese, shredded",
      "1 oz bacon bits"
    ],
    instructions: [
      "Preheat the fryer to the recommended temperature, typically around 350°F (175°C).",
      "Add the quartered potatoes and fry for approximately 5 minutes, or until they are golden brown and tender.",
      "Once cooked, remove the potatoes from the fryer, allowing any excess oil to drain. Transfer the potatoes to a large salad bowl.",
      "On a heated skillet or griddle, cook the sausage patties on each side until they are well-browned and cooked through.",
      "Position the cooked patties atop the potatoes in the bowl.",
      "In a separate skillet, prepare the eggs according to the method specified on the order ticket. (Refer to the 'Eggs' instructions for guidance.)",
      "Place the cooked eggs on top of the sausage patties.",
      "Pour the warm sausage gravy generously over the eggs, ensuring even coverage.",
      "Sprinkle shredded Cheddar cheese on top, followed by a scattering of bacon bits."
    ],
    cookTime: "5 minutes frying",
    tips: "If you want a breakfast that doesn't mess around, 'Covered and Smothered' is your jam. We're talking about a glorious mess of potatoes, sausage, eggs, and the pièce de résistance—sausage gravy."
  },
  {
    id: "breakfast-eggs-benedict",
    name: "Eggs Benedict",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Classic eggs Benedict with poached eggs, ham steak, and hollandaise on an English muffin.",
    ingredients: [
      "2 eggs",
      "1 English muffin, halved",
      "1 ham steak (for 2 quarters)",
      "3 tbsp Hollandaise sauce",
      "Pinch of paprika",
      "Parsley, finely chopped, for garnish"
    ],
    instructions: [
      "Bring water with a splash of vinegar to a gentle simmer in a skillet. Crack eggs separately into a bowl and slide them into the simmering water. Poach for 4 minutes or until whites are set but yolk remains runny. Remove using a slotted spoon and set aside on paper towels.",
      "Butter and toast English muffin halves on a preheated grill/skillet until golden. Grill 2 quarters of the ham steak until slightly seared on both sides.",
      "Place muffin halves on a plate. Add grilled ham, then a poached egg on each. Drizzle with Hollandaise sauce.",
      "Sprinkle with paprika and parsley."
    ],
    cookTime: "4 minutes poaching",
    tips: "Eggs Benedict—a dish that's practically an institution in the world of brunch. This recipe gets it right, bringing together all the key players: a perfectly poached egg, a slab of seared ham, and that luscious, sinful Hollandaise."
  },
  {
    id: "breakfast-egg-breakfast",
    name: "Egg Breakfast",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Classic egg breakfast with choice of sides - toast, bacon, sausage, hash browns, or fresh fruit.",
    ingredients: [
      "Eggs (quantity and style as per order)",
      "Specified sides (such as toast, bacon, sausage, hash browns, or fresh fruit, depending on the order)"
    ],
    instructions: [
      "Begin by heating a non-stick skillet over medium heat. Once hot, add a small amount of butter or oil. Cook the eggs as directed per the specific request on the order ticket, ensuring they are cooked evenly and to the desired consistency.",
      "While the eggs are cooking, prepare the specified sides. If toast is ordered, butter each side and toast them until golden brown. For meats like bacon or sausage, ensure they are cooked thoroughly until crispy or well-done, respectively. If hash browns are part of the order, fry them until they're golden and crispy. If fresh fruit is the side, ensure it's washed, sliced, and presented neatly.",
      "Carefully arrange the cooked eggs in the center of a round plate. Place the chosen sides around the eggs or as per presentation preferences."
    ],
    tips: "If you think breakfast is the most important meal of the day, then this Egg Breakfast is your new religion. Crisp hash browns, golden toast, perfectly cooked eggs—every element is crafted with the respect it deserves."
  },
  {
    id: "breakfast-eggs-rachel",
    name: "Eggs Rachel",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Poached eggs on crab cakes with asparagus and hollandaise sauce.",
    ingredients: [
      "2 large eggs",
      "4 oz crab stuffing",
      "4 fresh asparagus spears, halved",
      "3 tbsp Hollandaise sauce",
      "Paprika, for garnish",
      "Fresh parsley, chopped, for garnish"
    ],
    instructions: [
      "In a pot of gently simmering water, poach the eggs for about four minutes, ensuring the whites are set and yolks remain runny. Use a slotted spoon to transfer the eggs to a paper towel to drain.",
      "Heat a touch of butter on a flat-top grill or skillet over medium heat. Add the crab patties and cook until golden brown on both sides, ensuring they're heated through.",
      "In the same skillet, add more butter if necessary and sauté the asparagus halves until they are lightly browned yet still crisp.",
      "On a serving plate, position the crab cakes. Layer four asparagus pieces on each cake, followed by a poached egg. Drizzle with Hollandaise sauce and sprinkle with paprika and freshly chopped parsley."
    ],
    cookTime: "4 minutes poaching",
    tips: "If you're tired of the same old eggs and toast for breakfast, give Eggs Rachel a whirl. It's like Eggs Benedict went on a seaside vacation. The Hollandaise drizzle? That's your ticket to flavor town."
  },
  {
    id: "breakfast-florentine-omelet",
    name: "Florentine Omelet",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Fluffy omelet filled with spinach, mushrooms, bacon, and Swiss cheese.",
    ingredients: [
      "1/2 oz clarified butter",
      "2 oz fresh spinach",
      "1 oz fresh mushrooms, sliced",
      "1 oz bacon bits",
      "2 slices Swiss cheese",
      "3 eggs, scrambled"
    ],
    instructions: [
      "In a sauté pan over medium heat, melt the clarified butter. Introduce the sliced mushrooms, cooking until they turn golden and their moisture evaporates. Incorporate the spinach and bacon bits, sautéing further until spinach wilts to a deep green shade. Once done, set aside.",
      "In a non-stick skillet, melt another portion (1/2 oz) of clarified butter on medium heat. Introduce the whisked eggs, spreading them uniformly across the skillet's surface.",
      "As the omelet's periphery solidifies, tenderly elevate the edges, allowing the fluid egg to move below. Persist with this method until no runny egg remains on top.",
      "Once nearly set, allocate the prepared mushroom, bacon, and spinach filling to one omelet half. Place the Swiss cheese slices atop this mixture. Cautiously fold the omelet's unoccupied half over the filled section.",
      "Transfer the omelet onto a serving plate. Allow a brief rest, ensuring the cheese melts due to the remaining heat. Serve promptly."
    ],
    tips: "This isn't just an omelet; it's an ode to the rich flavors of classic Italian cuisine. With a medley of sautéed spinach, earthy mushrooms, and the satisfying crunch of bacon bits, you're already at the intersection of Comfort Street and Sophisticated Avenue."
  },
  {
    id: "breakfast-gardener-omelet",
    name: "Gardener Omelet",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Vegetable-packed omelet with peppers, onions, mushrooms, tomatoes, spinach, and Swiss cheese.",
    ingredients: [
      "1/2 oz clarified butter",
      "1 oz bell pepper, diced",
      "1 oz yellow onion, diced",
      "1 oz mushroom, sliced",
      "1 oz tomato, diced",
      "1 oz spinach",
      "2 slices Swiss cheese",
      "3 eggs, scrambled"
    ],
    instructions: [
      "In a small sauté pan on medium heat, combine bell peppers and onions, cooking until the peppers turn tender.",
      "Introduce mushrooms, tomatoes, and spinach to the mix. Continue to cook on medium heat until spinach assumes a dark green color and is reduced in volume.",
      "Coat a separate non-stick pan with the clarified butter and pour in the scrambled eggs.",
      "On medium heat, let the eggs settle until the edges firm up. Gently lift the omelet edges, allowing the uncooked eggs to seep underneath. Continue this process around the omelet until no runny egg remains.",
      "Drain any surplus liquid from the vegetable mixture in the small sauté pan. Flip the omelet, positioning the cooked vegetable mix onto its center.",
      "Place the Swiss cheese slices atop the vegetable-filled section of the omelet.",
      "Angle the pan towards a round plate's rim, folding the outer omelet portion over its top. Allow the omelet to gently slide onto the plate, serving immediately."
    ],
    tips: "Whoever said 'Eat your veggies' never had them wrapped up in an omelet like this. The Gardener Omelet is the perfect plate to kick off a day where you've got to be at the top of your game."
  },
  {
    id: "breakfast-gulf-coast-omelet",
    name: "Gulf Coast Omelet",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Cajun-style omelet with shrimp, crawfish, trinity, and provolone cheese.",
    ingredients: [
      "1/2 oz clarified butter",
      "1 oz stock",
      "1 oz crawfish tails",
      "4 shrimp",
      "1 oz trinity",
      "2 slices Provolone cheese",
      "3 eggs, scrambled"
    ],
    instructions: [
      "In a small sauté pan, combine clarified butter, stock, and trinity.",
      "Cook on high heat until the stock completely evaporates and the trinity is tender.",
      "Reduce to medium heat, then add the shrimp and crawfish tails. Continue cooking until the shrimp turns pink and firm.",
      "In a separate non-stick pan, melt 1/2 oz of clarified butter and pour in the scrambled eggs.",
      "Cook on medium heat. As the edges firm up, lift them gently, allowing the uncooked eggs to flow underneath. Repeat this around the omelet until no liquid egg remains.",
      "Flip the omelet and place the provolone cheese slices on top.",
      "Strain any excess butter from the seafood mixture and spread it over the cheese.",
      "Tilt the pan towards a round plate's edge, folding the omelet's outer part over its top. Gently let the omelet slide onto the plate, serving immediately."
    ],
    tips: "The Gulf Coast Omelet—this isn't your grandma's morning fare unless she's Cajun and a hell of a cook. Imagine the freshest catches from the Gulf, shrimp and crawfish, meeting the classic Southern 'Trinity' and all held together by a fluffy, golden omelet."
  },
  {
    id: "breakfast-lagniappe",
    name: "Lagniappe",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "The ultimate Southern breakfast platter with ham steak, sausage, bacon, eggs, hash browns, jalapeño cheese grits, and biscuit with gravy.",
    ingredients: [
      "1 ea ham steak",
      "2 ea sausage patties",
      "2 ea bacon strips",
      "4 oz hash browns",
      "4 oz jalapeño cheese grits",
      "1 ea biscuit",
      "3 oz sausage gravy"
    ],
    instructions: [
      "Place the ham steak, sausage patties, and bacon strips onto a preheated grill. Cook until both sides have achieved a golden-brown color, flipping once. Remove from grill and set aside, keeping warm.",
      "While the meats are cooking, prepare eggs to the specified doneness as per the order ticket or personal preference.",
      "To plate, carefully arrange the following items on a round serving plate:",
      "Place the ham steak at the center as the foundation.",
      "Surround with sausage patties, bacon strips, eggs, and hash browns.",
      "Position the biscuit prominently on the plate."
    ],
    tips: "If you're yearning for a gut-busting, soul-satisfying pile of all that's holy in American breakfast, look no further than 'Lagniappe.' In New Orleans, 'Lagniappe' is a Creole term that roughly means 'a little something extra,' and this dish certainly delivers more than you bargained for."
  },
  {
    id: "breakfast-lakeline-taco",
    name: "Lakeline Taco",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Breakfast taco with scrambled eggs, sausage, hash browns, jalapeño, and cheddar cheese.",
    ingredients: [
      "1/2 oz butter",
      "1/2 oz jalapeño, diced",
      "2 oz hash browns",
      "1 oz red onion",
      "1 ea sausage patty",
      "1/2 oz Cheddar cheese, shredded",
      "1 ea egg",
      "1 ea tortilla"
    ],
    instructions: [
      "In a pan over medium heat, melt the butter. Add the jalapeño, hash browns, and onions. Sauté until the hash browns are crispy.",
      "Dice the cooked sausage patty and introduce it to the pan. Add the egg, and stir, ensuring the egg evenly incorporates and cooks thoroughly with the mixture.",
      "Once the egg is cooked, remove the pan from the heat and evenly sprinkle the Cheddar cheese over the top, allowing the residual heat to slightly melt it.",
      "Meanwhile, place the tortilla on a flat top grill, letting it warm up. Once warm, transfer the egg mixture onto the tortilla, spreading it evenly. Fold or roll the tortilla to enclose the filling."
    ],
    tips: "The Lakeline Taco, a symphony of textures and flavors that screams 'morning indulgence.' You've got your hash browns, crisp as a dawn in the desert; the fire of jalapeños wakes you up better than a slap in the face."
  },
  {
    id: "breakfast-moodys-omelet",
    name: "Moody's Omelet",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Spicy omelet with sausage, jalapeño, peppers, mushrooms, tomato, spinach, and pepper jack cheese.",
    ingredients: [
      "1/2 oz butter, clarified",
      "1 ea sausage patty, diced",
      "1 oz jalapeño pepper, diced",
      "1 oz bell pepper, diced",
      "1 oz yellow onion, diced",
      "1 oz mushroom, sliced",
      "1 oz tomato, diced",
      "1 oz spinach",
      "2 slices pepper jack cheese",
      "3 ea eggs, scrambled"
    ],
    instructions: [
      "In a small sauté pan, melt the butter over medium heat. Add the diced sausage, jalapeños, bell peppers, and onions. Cook until the peppers become tender.",
      "Incorporate the mushrooms, tomatoes, and spinach. Continue to cook on medium heat until the spinach is dark green and has reduced in volume.",
      "In a separate non-stick pan, melt an additional 1/2 oz of clarified butter. Pour in the scrambled eggs, spreading them evenly.",
      "Once the edges of the eggs start to set, use a spatula to gently lift them, allowing the uncooked eggs to flow underneath. Repeat this around the omelet until no liquid egg remains on the surface.",
      "Ensure any excess liquid is drained from the vegetable and sausage mixture. Flip the omelet and pour this mixture onto the center.",
      "Lay the slices of pepper jack cheese over the vegetable and sausage filling.",
      "To plate the omelet, tilt the pan towards a round plate, then fold one side of the omelet over the filling. Gently slide the omelet onto the plate, presenting the fold on top for a neat appearance."
    ],
    tips: "Moody's Omelet isn't just a breakfast; it's a challenge—a dare to your tastebuds, if you will. With the fiery jalapeños and pepper jack cheese, you're not just waking up; you're igniting a gastronomic revolution in your mouth."
  },
  {
    id: "breakfast-pain-perdu",
    name: "Pain Perdu (French Toast)",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Classic French toast made with French bread, dusted with powdered sugar and garnished with fresh strawberries.",
    ingredients: [
      "1 French loaf (approximately 6 slices)",
      "French toast batter (quantity as needed)",
      "Garnish: powdered sugar",
      "Garnish: fresh strawberries, sliced"
    ],
    instructions: [
      "Take your French loaf and cut it into 6 equal parts on a bias.",
      "Quickly dredge each bread slice in the French toast batter, ensuring all sides, including the crust, are coated.",
      "Place the coated bread slices on a flat-top grill. Brown them evenly on all sides.",
      "Begin with the two end pieces of your toasted bread. Stack them on top of each other in the center of your serving plate to form a square base.",
      "Arrange the remaining four toasted slices around the central stack. Position them evenly, leaning them against the center stack to create a 'tipi' or pyramid-like structure.",
      "Lightly dust the assembled French toast with powdered sugar for a snowy finish.",
      "For a burst of color and added flavor, garnish with a sliced strawberry."
    ],
    tips: "Pain Perdu, or as we Americans crudely call it, French Toast, is a culinary redemption story, a Lazarus act for 'lost' bread. This recipe doesn't just revive old bread; it elevates it, anoints it in batter, and grills it to perfection."
  },
  {
    id: "breakfast-savory-waffles-fried-chicken",
    name: "Savory Waffles with Fried Chicken",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Savory cheddar and herb waffles topped with fried chicken strips and seasoned syrup.",
    yield: "8 waffles",
    ingredients: [
      "2 qts (64 oz) waffle batter",
      "2 cups cheddar cheese",
      "4 tbsp parsley, chopped",
      "2 tbsp thyme, chopped",
      "1 tbsp garlic, minced",
      "2 tbsp SPG",
      "16 fried chicken strips (2 per waffle)"
    ],
    instructions: [
      "Prepare the waffle batter and mix in the cheddar cheese, parsley, thyme, minced garlic, and SPG.",
      "Cook the waffles using 4 oz of batter for each.",
      "For the syrup, combine all the ingredients except the cream in a saucepan. Bring to a boil, then reduce the heat and simmer for 5 minutes. Stir in the cream after removing from heat.",
      "Serve each waffle with two fried chicken strips and 4 oz of the seasoned syrup, garnished with additional green onions."
    ],
    tips: "Seasoned Syrup Ingredients: 1 oz butter, 2 cups syrup, 3 tbsp chopped green onion, 3 tbsp bacon bits, 1 tbsp chopped thyme, 2 tsp SPG, 1 tbsp cream."
  },
  {
    id: "breakfast-short-stack",
    name: "Short Stack",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Two fluffy pancakes dusted with powdered sugar and garnished with fresh strawberries.",
    ingredients: [
      "6 oz Pancake batter (3 oz for each pancake)",
      "Garnish: powdered sugar",
      "Garnish: fresh strawberries, sliced"
    ],
    instructions: [
      "Preheat your flattop grill to medium-high heat.",
      "Pour 3 oz of the pancake batter onto the hot grill. Quickly and gently spread the batter out to an 8-inch diameter circle using the back of your ladle. This ensures an even and round pancake.",
      "Allow the pancake to cook until you observe the liquid surface is completely covered with bubbles. This indicates that the underside is golden and it's time to flip.",
      "Carefully flip the pancake over using a spatula. Cook for an additional two minutes or until the second side is also golden brown.",
      "On a plate, stack the two perfectly cooked pancakes on top of each other.",
      "Sprinkle the top of the short stack with a light dusting of powdered sugar.",
      "Garnish further with a sliced strawberry, positioning it at the center or the side, depending on your preferred presentation."
    ],
    tips: "The Short Stack—a dish so simple, yet so easy to screw up. But this recipe gets it right. Perfect circles of airy, fluffy pancakes that beg for the luscious bite of fresh strawberries and a dusting of powdered sugar."
  },
  {
    id: "breakfast-shrimp-grits-eggs",
    name: "Shrimp, Grits, and Eggs",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Southern classic with Cajun-seasoned shrimp over jalapeño cheese grits topped with eggs.",
    ingredients: [
      "2 eggs",
      "8 medium shrimp",
      "1/2 oz butter",
      "1/2 tbsp Cajun Seasoning",
      "10 oz jalapeño cheese grits",
      "1 tbsp green onions, chopped",
      "1 oz Cheddar cheese, shredded"
    ],
    instructions: [
      "Prepare the jalapeño cheese grits and transfer to a medium salad bowl.",
      "In a skillet, melt the butter, add shrimp and Cajun Seasoning. Sauté until shrimp turn pink and opaque.",
      "In a separate pan, cook the eggs to your liking.",
      "Over the grits, layer Cheddar and green onions in a cross pattern, place the eggs on top, and top with sautéed shrimp."
    ],
    tips: "Shrimp, Grits, and Eggs—now that's a plate that screams the soul of the South. Creamy jalapeño cheese grits set the stage for sautéed, Cajun-Seasoned shrimp, eggs the way you like 'em, and a scattering of Cheddar and green onions."
  },
  {
    id: "breakfast-stuffed-burrito",
    name: "Stuffed Burrito",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Loaded breakfast burrito with bacon, sausage, ham, potatoes, eggs, and pepper jack cheese. Optional smothered version with gravy.",
    ingredients: [
      "1/2 oz clarified butter",
      "1 oz chopped bacon",
      "1 oz chopped sausage",
      "1 oz diced ham",
      "1 oz diced potatoes",
      "2 eggs",
      "2 slices pepper jack cheese",
      "1 10-inch Tortilla",
      "(optional for smothered version)",
      "4 oz sausage gravy",
      "1 oz Cheddar cheese",
      "1 oz bacon bits"
    ],
    instructions: [
      "In a small sauté pan, melt the clarified butter. Add bacon, sausage, ham, and potatoes. Cook over medium heat until potatoes are browned.",
      "Crack in the eggs and reduce the heat. Stir until the eggs are firm.",
      "On a flattop grill, heat the tortilla. Lay the pepper jack cheese slices in the center.",
      "Place the cooked egg mixture on the cheese. Fold the sides of the tortilla and then roll from the bottom to form a burrito.",
      "For a smothered burrito (if mentioned on the order ticket): Pour sausage gravy over the top, sprinkle with Cheddar cheese and bacon bits."
    ],
    tips: "Stuffed Burrito—it's the indulgent breakfast that doesn't apologize for being an absolute flavor bomb. Opt for the 'smothered' version, and you've got yourself a meal that throws caution to the wind and just says, 'Yes, you can have it all.'"
  },
  {
    id: "breakfast-texas-omelet",
    name: "Texas Omelet",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Hearty omelet loaded with sausage, ham, bacon, potatoes, jalapeño, and two cheeses, topped with sausage gravy.",
    ingredients: [
      "1/2 oz clarified butter",
      "1 oz sausage patty, diced",
      "1 oz ham, chopped",
      "2 oz bacon bits (divided)",
      "1 oz potatoes, chopped",
      "1 oz jalapeño pepper, diced",
      "2 oz pepper jack cheese",
      "4 eggs, scrambled",
      "3 oz sausage gravy",
      "1 oz Cheddar cheese"
    ],
    instructions: [
      "In a small sauté pan, melt butter. Add sausage, ham, 1 oz of bacon bits, potatoes, and jalapeños.",
      "Cook on medium heat until potatoes are browned.",
      "In a separate non-stick pan, melt 1/2 oz butter and add the scrambled eggs.",
      "Cook on medium heat until edges firm up. Lift the omelet edges, letting the liquid egg flow underneath. Repeat until no liquid egg remains.",
      "Pour the sautéed mixture from the first pan onto the center of the omelet.",
      "Top with pepper jack cheese. Fold the omelet and slide it onto a plate.",
      "Garnish with sausage gravy, Cheddar cheese, and the remaining 1 oz of bacon bits."
    ],
    tips: "The Texas Omelet. It's like Texas itself—big, audacious, and impossible to ignore. This isn't just breakfast; this is a full-on culinary event."
  },
  {
    id: "breakfast-texas-cheesesteak-omelet",
    name: "Texas Cheesesteak Omelet",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Philly-meets-Texas omelet with seasoned sirloin, peppers, onions, jalapeño, and pepper jack cheese.",
    ingredients: [
      "1/2 oz clarified butter",
      "1 slice Pepper Jack cheese",
      "1 oz bell pepper, chopped",
      "1 oz red onions, chopped",
      "1 oz jalapeño pepper, diced",
      "1 pinch of SPG",
      "4 oz beef sirloin, thin sliced",
      "3 ea eggs, scrambled"
    ],
    instructions: [
      "In a small sauté pan, combine butter, bell pepper, and red onions.",
      "Cook on medium heat until onions have clarified.",
      "Add sirloin to the pan and incorporate with the vegetables, simmer until meat is seared and browning.",
      "In a separate non-stick pan, melt 1/2 oz of butter and add the scrambled eggs.",
      "Cook on medium heat until edges firm up. Lift the omelet edges, letting the liquid egg flow underneath. Repeat until no liquid egg remains.",
      "Strain excess liquid from the meat mixture. Flip the omelet and pour the meat mixture onto its center.",
      "Top the meats with Pepper Jack cheese.",
      "Tilt the pan toward a plate's edge, fold the omelet, and slide it onto the plate."
    ],
    tips: "From the heart of Texas emerges a dish that marries the spirit of Philly with the embrace of a classic omelet. The Texas Cheesesteak Omelet is a tale of two cities on a plate."
  },
  {
    id: "breakfast-three-pigs-omelet",
    name: "Three Pigs Omelet",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Meat lover's omelet with sausage, ham, and bacon, topped with cheddar cheese.",
    ingredients: [
      "1/2 oz clarified butter",
      "1 oz sausage patty, diced",
      "1 oz ham, chopped",
      "1 oz bacon bits",
      "2 oz Cheddar cheese",
      "3 ea eggs, scrambled"
    ],
    instructions: [
      "In a small sauté pan, combine butter, sausage, ham, and bacon bits.",
      "Cook on medium heat until sausage is browned.",
      "In a separate non-stick pan, melt 1/2 oz of butter and add the scrambled eggs.",
      "Cook on medium heat until edges firm up. Lift the omelet edges, letting the liquid egg flow underneath. Repeat until no liquid egg remains.",
      "Strain excess liquid from the meat mixture. Flip the omelet and pour the meat mixture onto its center.",
      "Top the meats with Cheddar cheese.",
      "Tilt the pan toward a plate's edge, fold the omelet, and slide it onto the plate."
    ],
    tips: "The Three Pigs Omelet is a carnivore's waking dream, a morning manifesto that says, 'I reject cereal, and I embrace my primal needs.' It's sausage, ham, and bacon convening in a glorious symphony, underscored by Cheddar and wrapped in eggs."
  },
  {
    id: "breakfast-bacon-strips",
    name: "Bacon Strips",
    station: "breakfast",
    category: "sides",
    contentType: "recipe",
    description: "Crispy oven-baked bacon strips, 2 slices per order.",
    ingredients: [
      "Bacon slices"
    ],
    instructions: [
      "Preheat the oven to 350°F.",
      "Lay out the bacon slices side by side on a large sheet pan, ensuring they do not overlap.",
      "Place the sheet pan in the oven.",
      "Rotate the pan 180° every 8 minutes, ensuring even cooking.",
      "Continue baking for a total of 32 minutes or until the bacon reaches your desired crispiness.",
      "Once cooked, remove the bacon from the oven and let it drain on paper towels.",
      "Place two slices of Texas toast at the bottom of a plastic container.",
      "Stack the cooked bacon on top of the Texas toast.",
      "When serving, portion out 2 slices of bacon per order."
    ],
    tips: "If you think bacon's just a breakfast accessory, you're missing the whole damn point. These strips are the rock stars of the morning—a crash course in pure, unadulterated pleasure. Cooked to the precipice of crispiness, it's the swine in its most divine form."
  },
  {
    id: "breakfast-biscuits",
    name: "Biscuits",
    station: "breakfast",
    category: "sides",
    contentType: "recipe",
    description: "Fluffy, buttery Southern-style biscuits made from scratch.",
    yield: "20 Biscuits",
    ingredients: [
      "6 cups all-purpose flour",
      "2 tbsp sugar",
      "2 tbsp baking powder",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 1/2 cups unsalted butter, cut into small cubes",
      "2 1/2 cups buttermilk, cold"
    ],
    instructions: [
      "Preheat the oven to 450°F.",
      "In a large bowl, mix flour, baking powder, sugar, salt, and baking soda.",
      "Cut in butter until the mixture resembles coarse crumbs.",
      "Gradually stir in buttermilk until a dough forms. If it's too dry, add a bit more buttermilk.",
      "On a floured surface, knead the dough gently. Roll to a 1-inch thickness and use a biscuit cutter to cut out rounds.",
      "Place biscuits touching each other on a baking sheet.",
      "Bake 12-15 minutes or until golden brown. Best served warm."
    ],
    tips: "These biscuits are the real deal—Southern comfort in a buttery, flaky package. Forget the limp, store-bought excuses for biscuits; this recipe is what you're after. Fresh out of the oven, slathered with butter or jam, they're not just good, they're soul-soothing."
  },
  {
    id: "breakfast-country-potatoes",
    name: "Country Potatoes",
    station: "breakfast",
    category: "sides",
    contentType: "recipe",
    description: "Crispy golden fried potatoes, pre-boiled for perfect texture.",
    ingredients: [
      "4 oz boiled potatoes"
    ],
    instructions: [
      "Warm the fryer to 350°.",
      "Evenly spread the 4 oz of boiled potatoes in a fryer basket.",
      "Submerge the basket into the fryer, let the potatoes cook for roughly 5 minutes until they turn golden brown.",
      "Once done, lift the basket, allowing the oil to drain.",
      "Plate the country potatoes in a 10 oz boat."
    ],
    tips: "Don't let the simplicity of this recipe fool you. These are not just potatoes; these are a crispy, golden revelation. Pre-boiling is the secret weapon here—a backstage pass to the kind of texture that elevates the humble spud to an art form."
  },
  {
    id: "breakfast-fresh-fruit",
    name: "Fresh Fruit Cup",
    station: "breakfast",
    category: "sides",
    contentType: "recipe",
    description: "Refreshing mixed fruit cup with pineapple, apples, strawberries, and grapes.",
    ingredients: [
      "1 whole pineapple, cubed to 1/2 inch",
      "4 whole apples, cubed to 1/2 inch",
      "20 ea strawberries, sliced",
      "1 bunch grapes, destemmed"
    ],
    instructions: [
      "Begin by cutting the pineapple and apples into 1/2 inch cubes.",
      "Transfer the fruit cubes into a mixing bowl.",
      "Top with freshly sliced strawberries.",
      "Gently mix until the fruits are evenly distributed.",
      "Portion the fruit mixture into a 6 oz soup cup."
    ],
    tips: "If there's one thing more intoxicating than the stories of distant shores, it's the vibrant dance of flavors in a simple fruit cup. Pineapple, with its tropical allure, meets the homey touch of apples, crowned by the sweet seduction of strawberries. It's nature's candy, cubed and curated to perfection."
  },
  {
    id: "breakfast-ham-steak",
    name: "Ham Steak",
    station: "breakfast",
    category: "sides",
    contentType: "recipe",
    description: "Grilled ham steak with caramelized edges, a breakfast classic.",
    ingredients: [
      "4 oz ham steak"
    ],
    instructions: [
      "Preheat the flattop grill.",
      "Place a 4 oz ham steak on the grill and cook for approximately 2 minutes until the bottom is browned.",
      "Flip the ham steak to brown the other side evenly.",
      "Once both sides are browned, remove from the grill."
    ],
    tips: "In the sprawling tapestry of breakfast cuisine, the ham steak stands as a timeless classic. Grilled to perfection, its smoky aroma and caramelized edges hint at tradition, invoking memories of family gatherings and cherished mornings. It's more than just a side dish; it's a savory trip down memory lane."
  },
  {
    id: "breakfast-hash-browns",
    name: "Hash Browns",
    station: "breakfast",
    category: "sides",
    contentType: "recipe",
    description: "Crispy, golden hash browns made from scratch with grated russet potatoes.",
    ingredients: [
      "4 large russet potatoes, peeled",
      "2 tbsp unsalted butter",
      "Salt, to taste",
      "Black pepper, to taste"
    ],
    instructions: [
      "Grate the peeled potatoes using a box grater or food processor. Transfer the grated potatoes to a clean kitchen towel or cheesecloth.",
      "Gather the corners of the towel or cheesecloth and twist to squeeze out as much liquid as possible from the potatoes. This step is crucial to get crispy hash browns.",
      "Transfer the drained potatoes to a large bowl. Season with salt and black pepper, and mix well.",
      "Heat butter in a large non-stick skillet over medium heat. Once hot, spread the potato mixture in an even layer, pressing it down with a spatula.",
      "Cook for 5 minutes or until the bottom is golden brown and crispy. Flip and cook the other side for another 5 minutes.",
      "Remove from heat and transfer to a plate lined with paper towels to drain any excess oil. Serve hot with your choice of accompaniments."
    ],
    tips: "Hash browns, simple yet transformative when done right. This recipe captures the essence of perfect morning comfort. Crispy, golden, and seasoned to perfection—it's the real breakfast of champions."
  },
  {
    id: "breakfast-sausage-patties",
    name: "Breakfast Sausage Patties",
    station: "breakfast",
    category: "sides",
    contentType: "recipe",
    description: "Homemade seasoned pork sausage patties with sage and brown sugar.",
    ingredients: [
      "8 lbs ground pork",
      "1/4 cup brown sugar",
      "2 tbsp dried sage",
      "2 1/2 tbsp salt",
      "1 1/2 tbsp black pepper",
      "1 tsp dried marjoram",
      "1/2 tsp red pepper flakes",
      "4 pinches ground cloves"
    ],
    instructions: [
      "In a small bowl, combine the brown sugar, sage, salt, black pepper, marjoram, red pepper flakes, and cloves. Mix until all the ingredients are well incorporated.",
      "In a large bowl, place the ground pork. Pour in the previously prepared spice mixture.",
      "Using your hands, thoroughly mix the pork with the spice mixture, ensuring the seasonings are evenly distributed.",
      "Form the seasoned pork mixture into 6 even patties.",
      "Heat a large skillet over medium-high heat. Once hot, add the patties.",
      "Sauté the patties until they are browned and crispy, approximately 5 minutes per side. Ensure the center of each patty reaches a temperature of at least 160 degrees F (71 degrees C) using an instant-read thermometer.",
      "Once cooked to the desired doneness, remove from the skillet."
    ],
    internalTemp: "160°F",
    tips: "Don't underestimate the humble sausage patty. This is the unsung hero of the breakfast table. Hand-pressed, crisped to perfection, it's a testament to the primal joy of well-cooked meat."
  },
  {
    id: "breakfast-oatmeal",
    name: "Oatmeal",
    station: "breakfast",
    category: "sides",
    contentType: "recipe",
    description: "Creamy, velvety oatmeal with butter and brown sugar, served in a 6oz soup cup.",
    ingredients: [
      "1 cup oatmeal",
      "2 cups water",
      "1 oz butter",
      "1 tbsp brown sugar",
      "1/2 tbsp salt"
    ],
    instructions: [
      "In a small saucepan, add the oats and water, ensuring the oats are fully submerged.",
      "Place the saucepan on high heat. As the mixture heats, stir it frequently to prevent the oats from sticking to the bottom and to ensure an even cooking process. Bring to a rolling boil.",
      "Reduce the heat to a simmer. Add the unsalted butter, brown sugar, and salt. Stir these in steadily until they're fully incorporated, making sure the oatmeal is even throughout.",
      "Allow the oatmeal to simmer, stirring occasionally, until the majority of the water is absorbed and the oats achieve a creamy, velvety consistency.",
      "Transfer the oatmeal from the saucepan to a steam well. This ensures it stays hot and creamy until you're ready to indulge.",
      "Serve in a 6 oz soup cup.",
      "Bananas or berries provide a sweet contrast, while diced apples paired with pecans offer a crunch."
    ],
    tips: "Let's get one thing straight—oatmeal has a reputation as gruel, a punishment inflicted on children. But make it like this, and you've got yourself a breakfast that sticks to your ribs, not your conscience. The butter and brown sugar straddle that perfect line between comfort and indulgence."
  },

  // =====================================================
  // EXPO STATION
  // =====================================================

  // EXPO STATION - CHECKLISTS
  {
    id: "expo-morning-checklist",
    name: "Morning Expo Shift Checklist",
    station: "expo",
    category: "prep",
    contentType: "checklist",
    description: "Start-of-shift checklist for Morning Expo. Ensure all items are stocked and prepped before breakfast service.",
    instructions: [
      "SET YOUR STATION:",
      "• Cheddar cheese",
      "• Green onion",
      "• Bacon bits",
      "• Powdered sugar",
      "• Tony's",
      "• Paprika",
      "• Parsley",
      "• Napkins",
      "• Knives",
      "• Spoons",
      "• 2&4oz cups with lids",
      "• Hollandaise",
      "• Butter",
      "• Cutting board for toast",
      "• Bread (white, wheat, rye)",
      "• Gloves",
      "• Towel",
      "• Check waffle maker",
      "",
      "PREP:",
      "• Cut fruit (Saturday only)",
      "• Portion 1 small tray each of 2oz and 4oz syrups",
      "• Portion salsa into 2oz",
      "",
      "STOCK THE REACH-IN (in order from top-bottom and left-right):",
      "• Sweet cream",
      "• Pies",
      "• At least 8 each of crawfish and spinach dip",
      "• 1 in use and 1 backup bottle each of ranch, boudin ranch, tartar, remi",
      "• 1 bottle of blue cheese, honey mustard, cocktail, balsamic vinaigrette",
      "• 1 long rectangle pan each of white rice and dirty rice",
      "• Cole slaw",
      "• Big batch of ranch, tartar, and remi",
      "• Bread pudding",
      "• Cheesecake",
      "",
      "CLEAN YOUR STATION:",
      "• Put away Hollandaise and butter",
      "• Put green beans in steam well, give sausage to saute",
      "• Wipe down expo table, window, freezer top, microwave table, waffle maker, inside reach in",
      "• Sweep",
      "• Take out trash",
      "• Check with manager"
    ]
  },
  {
    id: "expo-night-checklist",
    name: "Night Expo Shift Checklist",
    station: "expo",
    category: "prep",
    contentType: "checklist",
    description: "Start-of-shift checklist for Night Expo. Ensure all items are stocked and prepped before dinner service.",
    instructions: [
      "PREP YOUR STATION:",
      "• Napkins",
      "• Knives",
      "• Crackers",
      "• Spoons",
      "• Balsamic reduction",
      "• 2&4oz cups with lids",
      "• Gloves",
      "• Towel",
      "• Check steam wells (gravy, grits, mash, brown gravy, green beans, gumbo, red beans)",
      "",
      "STOCK THE REACH-IN (in order from top-bottom and left-right):",
      "• Sweet cream",
      "• Pies",
      "• At least 8 each of crawfish and spinach dip",
      "• 1 in use and 1 backup bottle each of ranch, boudin ranch, tartar, remi",
      "• 1 bottle of blue cheese, honey mustard, cocktail, balsamic vinaigrette",
      "• 1 long rectangle pan each of white rice and dirty rice",
      "• Cole slaw",
      "• Big batch of ranch, tartar, and remi",
      "• Bread pudding",
      "• Cheesecake"
    ]
  },

  // EXPO STATION - PLATING GUIDES
  {
    id: "expo-morning-plating",
    name: "Morning Expo Plating Guide",
    station: "expo",
    category: "portions",
    contentType: "prep",
    description: "Plating instructions for breakfast items at the Expo station.",
    instructions: [
      "BREAKFAST PLATTERS:",
      "• French toast: powdered sugar, 1 butter for half, 2 for full, 2oz syrup for half, 4oz for full",
      "• Waffle: powdered sugar, 1 butter, 2oz syrup",
      "• Short stack: powdered sugar, 1 butter for half, 2 for full, 2oz syrup for half, 4oz for full",
      "",
      "BISCUIT & EGG DISHES:",
      "• Chicken bacon biscuit: 1 biscuit split in small bowl, 2 bacon, 2 eggs, 2 chicken strips. 4oz white gravy, cheese and bacon bits on top",
      "• Stuffed burrito: dry, nothing. Smothered, 4oz white gravy, cheese and bacon bits on top",
      "• Covered and smothered: big bowl of hash or potatoes, 2 sausage, 2 eggs, 4oz white gravy, cheese and bacon bits on top",
      "• Corned beef hash: add bread item with butter and/or syrup",
      "• Shrimp grits and eggs: 8oz of grits in big bowl, saute adds eggs and shrimp, add bread item with butter and/or syrup",
      "",
      "SPECIALTY DISHES:",
      "• Three pigs: cheese and bacon bits on top, add bread item with butter and/or syrup",
      "• Florentine/moody's/gardener: parsley on top, add bread item with butter and/or syrup",
      "• Texas: 4oz white gravy, cheese and bacon bits on top, add bread item with butter and/or syrup",
      "• Egg breakfast: 2 bacon or sausage and bread item with butter and/or syrup, saute adds 2 eggs and hash",
      "",
      "EGGS BENEDICT DISHES:",
      "• Eggs benedict: saute adds split english muffin with ham and hash, put 2 poached eggs on ham/muffin, add 1 oz hollandaise per egg, paprika and parsley on top",
      "• Country benedict: split biscuit with 1 sausage on each piece, put 2 poached eggs on sausage/biscuit, add 2oz white gravy per egg, cheese and bacon bits on top, served with hash",
      "• Eggs rachel: saute adds 2 crab cakes with tomato and asparagus on top and hash, put 2 poached eggs on asparagus/tomato/crab cake, add 1 oz hollandaise per egg, paprika and parsley on top",
      "",
      "COMBOS:",
      "• Lagniappe: saute adds 2 eggs, hash, and ham steak. Add 2 bacon, 2 sausage and bread item with butter and/or syrup, add side of biscuit/gravy and grits if ticket specifies",
      "• Chicken fried steak and eggs: saute add 2 eggs and hash. Add ½ steak and bread item with butter and/or syrup. 4oz white gravy on steak, parsley on top. Served with knife",
      "",
      "KIDS BREAKFAST:",
      "• Kids egg breakfast: saute adds 1 egg and hash, add 1 bacon or sausage",
      "• Big kids breakfast: saute adds 1 kid pancake and 1 egg, add 1 bacon or sausage and powdered sugar to pancake with 1 butter and 2oz syrup",
      "• Kids pancakes: 2 small pancakes with powdered sugar, 1 butter and 2oz syrup",
      "• Kids french toast: half french toast with powdered sugar, 1 butter and 2 oz syrup",
      "",
      "SIDES:",
      "• Lakeline taco: add salsa if ticket specifies",
      "• Side of potatoes: add tony's, serve in boat",
      "• Side of hash: serve on oval",
      "• Side of toast/biscuit: serve on app plate, add 1 butter",
      "• Side of grits: 4oz in soup cup, add cheese and green onions on top, serve with spoon",
      "• Side of fruit: served in soup cup with spoon",
      "• Side of bacon/sausage: 2 pieces on oval or app plate"
    ]
  },
  {
    id: "expo-night-plating",
    name: "Night Expo Plating Guide",
    station: "expo",
    category: "portions",
    contentType: "prep",
    description: "Plating instructions for dinner items at the Expo station.",
    instructions: [
      "APPETIZERS:",
      "• Boudin balls: 5 balls in paper lined black basket with 4oz boudin ranch",
      "• Spinach/crawfish dip: microwave with plastic for 90 seconds saute will melt cheese on top, served on oval with bread, add green onions and spoon",
      "• Fried pickles: 5 planks in paper lined black basket with 4oz ranch",
      "• Gator bites: put pinch of cole slaw on oval plate, gator on top, served with 2oz remi",
      "• Fried green tomatoes: 5 tomatoes served on oval plate with crawfish remi and green onions on top",
      "• Poutin: big bowl of fries with cheesy etouffee on top, add green onions",
      "",
      "BASKETS:",
      "• Chicken strip basket: 5 strips with fries in paper lined black basket and 4oz desired sauce",
      "• Shrimp/crawfish/catfish basket: 24 shrimp, 4 bags of crawfish, or 3 pieces of catfish and fries in paper lined black basket and 4oz tartar",
      "",
      "KIDS ITEMS:",
      "• Kids catfish/chicken nuggets: 4 nugs with fries in paper lined green basket and 2oz desired sauce",
      "• Kids corn dogs: 4 or 6 corn dogs with fries in paper lined green basket",
      "• Kids grilled cheese/burger: served with fries in paper lined basket"
    ]
  },
  {
    id: "batch-crockpot-pork-butt",
    name: "Crockpot Pork Butt (House Pulled Pork)",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Slow-cooked pulled pork braised in its own juices. Excellent for sandwiches, plates, tacos, or loaded potatoes.",
    yield: "8–10 portions",
    portionSize: "6–8 oz cooked pulled pork",
    cookTime: "8–10 hours on LOW",
    internalTemp: "200–205°F",
    ingredients: [
      "--- PORK ---",
      "1 whole pork butt / Boston butt, 6–8 lb, bone-in preferred",
      "--- DRY RUB ---",
      "2 Tbsp kosher salt",
      "2 Tbsp brown sugar",
      "2 Tbsp paprika (smoked preferred)",
      "1 Tbsp black pepper",
      "1 Tbsp garlic powder",
      "1 Tbsp onion powder",
      "1 tsp cayenne (optional)",
      "--- LIQUID ---",
      "1 cup chicken stock or apple juice",
      "1 Tbsp apple cider vinegar (optional finish)"
    ],
    instructions: [
      "Mix all dry rub ingredients thoroughly. Pat pork butt dry and coat generously on all sides with the rub, pressing to adhere. For best flavor, wrap and refrigerate overnight; if short on time, rest at room temperature 30–45 minutes.",
      "Place pork butt in crockpot fat side up. Pour liquid around the pork, not over the top. Cover and cook on LOW for 8–10 hours, or until internal temperature reaches 200–205°F and the bone pulls clean with no resistance.",
      "Turn off crockpot and rest pork in juices for 20–30 minutes. Remove pork, discard bone and excess fat, and pull meat by hand. Skim excess fat from crockpot juices. Return pulled pork to crockpot and fold gently with just enough juices to keep moist. Add apple cider vinegar if desired for balance.",
      "Hold warm for service.",
      "OPTIONAL VEGETABLE ADD-IN (POT ROAST STYLE): Add large-cut potatoes during the final 3–4 hours on LOW. Add large-cut carrots during the final 2½–3 hours on LOW. Season vegetables lightly with salt and pepper before adding."
    ],
    tips: "Do not over-liquid—this is a braise, not a boil. LOW heat produces superior texture. Sauce only after pulling, never before."
  },
  {
    id: "batch-hot-crab-dip",
    name: "Hot Crab Dip",
    station: "batch",
    category: "appetizers",
    contentType: "recipe",
    description: "This creamy, cheesy hot crab dip is baked until golden and irresistible. It's simple to make and guaranteed to impress.",
    yield: "8 servings",
    cookTime: "20-25 minutes",
    ingredients: [
      "16 oz high-quality, well-drained lump crab meat (fresh or canned)",
      "1 (8-oz) package softened cream cheese",
      "¼ cup sour cream",
      "¼ cup mayonnaise",
      "1 cup shredded cheddar cheese",
      "½ cup shredded parmesan cheese",
      "1 tsp garlic powder",
      "1 tsp Old Bay seasoning",
      "½ tsp paprika",
      "2 tsp Worcestershire sauce",
      "1 Tbsp lemon juice",
      "1 tsp lemon zest",
      "Salt to taste",
      "¼ tsp ground black pepper"
    ],
    instructions: [
      "Preheat the oven to 350°F, and spray the inside of a 1 to 2-quart baking dish with nonstick cooking spray. Set aside.",
      "Combine softened cream cheese, sour cream, mayonnaise, cheddar cheese, parmesan cheese, garlic powder, Old Bay seasoning, paprika, Worcestershire sauce, lemon juice, lemon zest, salt, and black pepper in a medium bowl.",
      "Gently stir in the lump crab meat until fully combined.",
      "Spread the crab mixture into the prepared baking dish and bake for 20-25 minutes until heated through and bubbling around the edges.",
      "Serve with a sliced baguette or tortilla chips."
    ],
    tips: "Store leftovers refrigerated up to 3 days. Do not freeze. Reheat in microwave in 20-second increments or bake at 350°F for 5–10 minutes. Make ahead: prepare up to a day in advance, cover tightly and refrigerate overnight. Add about 5 extra minutes to baking time for chilled dip."
  },
  {
    id: "sautee-side-shells-cheese",
    name: "Side Shells & Cheese",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Creamy shell pasta with melted cheddar, topped with breadcrumbs. Half-portion side size.",
    cookTime: "10 minutes",
    ingredients: [
      "¼ oz butter",
      "½ cup heavy cream",
      "¼ cup cheddar cheese",
      "4.5 oz shell pasta",
      "⅛ tsp SPG",
      "¼ oz butter chip"
    ],
    instructions: [
      "Mix butter, cream, pasta and cheese in a large sauté pan over medium heat.",
      "Mix until cheese is melted and add SPG to taste.",
      "Remove from heat and add butter chip, stir until completely melted.",
      "Top with a pinch of mozzarella, a pinch of cheddar, and a pinch of breadcrumbs.",
      "Place in 400° oven until cheese is melted."
    ]
  },
  {
    id: "sautee-side-southwest-shells-cheese",
    name: "Side Southwest Shells & Cheese",
    station: "sautee",
    category: "sides",
    contentType: "recipe",
    description: "Creamy shell pasta with jalapeños and bacon, topped with melted cheese. Half-portion side size.",
    ingredients: [
      "¼ oz butter",
      "½ oz jalapeños, diced",
      "½ oz bacon bits",
      "1 oz vegetable stock",
      "½ cup heavy cream",
      "¼ cup cheddar cheese",
      "4.5 oz shell pasta",
      "⅛ tsp SPG",
      "¼ oz butter chip"
    ],
    instructions: [
      "Combine butter, jalapeños, bacon and stock in large sauté pan over medium high heat.",
      "Simmer until jalapeños are tender and stock is cooked out.",
      "Mix in cream, pasta and cheese and reduce to medium heat.",
      "Mix until cheese is melted and add SPG to taste.",
      "Remove from heat and add butter chip, stir until completely melted.",
      "Top with a pinch of mozzarella, a pinch of cheddar, and a pinch of breadcrumbs.",
      "Place in 400° oven until cheese is melted."
    ]
  },
  {
    id: "batch-satay-sauce",
    name: "Satay Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Creamy peanut sauce with coconut milk, red curry paste, and lime.",
    ingredients: [
      "½ cup peanut butter",
      "½ cup coconut milk",
      "2 tsp soy sauce",
      "1 whole lime, juiced",
      "2 Tbsp red curry paste",
      "1 tsp honey or sugar"
    ],
    instructions: [
      "In a saucepan, add coconut milk. Let it boil.",
      "Remove from heat. Add the rest of the ingredients.",
      "Mix well and ready to serve."
    ]
  },
  {
    id: "batch-yum-yum-sauce",
    name: "Yum Yum Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Creamy, tangy Japanese-style sauce with sriracha and paprika.",
    ingredients: [
      "1 cup mayonnaise",
      "3 Tbsp ketchup",
      "1 Tbsp sriracha sauce",
      "1 tsp paprika",
      "1 Tbsp rice vinegar",
      "1 Tbsp mirin",
      "½ tsp garlic powder",
      "½ tsp onion powder"
    ],
    instructions: [
      "Mix well and ready to use."
    ]
  },
  {
    id: "batch-general-tso-sauce",
    name: "General Tso Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Sweet, savory, and spicy sauce with ginger, garlic, and chili.",
    ingredients: [
      "¼ cup soy sauce",
      "2 Tbsp brown sugar",
      "1 Tbsp rice vinegar",
      "1 Tbsp fresh grated ginger",
      "1 Tbsp minced garlic",
      "2 Tbsp chili sauce",
      "1 tsp pepper flakes",
      "¾ cup chicken broth",
      "2 Tbsp cornstarch"
    ],
    instructions: [
      "In a saucepan, mix everything and let it boil.",
      "Simmer for a few minutes until it thickens.",
      "Mix in your favorite stir fry ingredients."
    ]
  },
  {
    id: "batch-sweet-sour-sauce",
    name: "Sweet & Sour Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Classic sweet and sour sauce with pineapple juice and rice vinegar.",
    ingredients: [
      "1 cup pineapple juice",
      "2 Tbsp rice vinegar",
      "3 Tbsp ketchup",
      "¼ cup white sugar",
      "1 Tbsp soy sauce",
      "3 Tbsp water",
      "1 Tbsp cornstarch",
      "¼ tsp black pepper"
    ],
    instructions: [
      "In a saucepan, mix all ingredients.",
      "Let it simmer on low heat until it thickens."
    ]
  },
  {
    id: "batch-stir-fry-sauce",
    name: "Stir Fry Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Savory stir fry sauce with soy, oyster sauce, ginger, and sesame oil.",
    ingredients: [
      "¼ cup light soy sauce",
      "3 Tbsp oyster sauce",
      "1 Tbsp rice vinegar",
      "2 tsp brown sugar",
      "2 cloves garlic, minced",
      "1 tsp ginger, grated",
      "1 Tbsp cornstarch",
      "¼ cup water",
      "1 tsp sesame oil"
    ],
    instructions: [
      "Mix all ingredients together until cornstarch is dissolved.",
      "Use as a sauce for your favorite stir fry."
    ]
  },
  {
    id: "batch-duck-sauce",
    name: "Duck Sauce (Apricot Sauce)",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Sweet and tangy apricot-based sauce with garlic, ginger, and chili.",
    ingredients: [
      "1 cup apricot jam",
      "1 Tbsp soy sauce",
      "3 Tbsp rice vinegar",
      "1 clove minced garlic",
      "1 tsp minced ginger",
      "¼ tsp chili flakes",
      "1 Tbsp chili sauce"
    ],
    instructions: [
      "Combine all ingredients in a bowl and mix well.",
      "Serve as a dipping sauce or glaze."
    ]
  },
  {
    id: "batch-basil-pesto",
    name: "Basil Pesto",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Fresh basil pesto with toasted pine nuts, lemon, garlic, and olive oil.",
    yield: "About 1 cup",
    ingredients: [
      "½ cup toasted pine nuts",
      "2 Tbsp fresh lemon juice",
      "1 small garlic clove",
      "¼ tsp sea salt",
      "Freshly ground black pepper, to taste",
      "2 cups basil leaves",
      "¼ cup extra-virgin olive oil, plus more as needed",
      "¼ cup freshly grated Parmesan cheese (optional)"
    ],
    instructions: [
      "In a food processor, combine the pine nuts, lemon juice, garlic, salt, and pepper and pulse until well chopped.",
      "Add the basil and pulse until combined.",
      "With the processor running, drizzle in the olive oil and process until the mixture comes together.",
      "Add the Parmesan, if using, and pulse briefly to incorporate; add additional olive oil as needed for a smoother consistency."
    ]
  },
  {
    id: "batch-chicken-marinade",
    name: "Chicken Marinade",
    station: "batch",
    category: "prep",
    contentType: "prep",
    description: "Lemon and Cajun marinade for chicken breasts. Marinate at least 8 hours.",
    yield: "2 cups",
    cookTime: "10 minutes prep",
    ingredients: [
      "4 ea lemon juice",
      "½ cup olive oil",
      "¼ cup Worcestershire",
      "2 Tbsp Cajun Spice"
    ],
    instructions: [
      "Combine all ingredients and emulsify with the immersion blender.",
      "Pour over 5 lbs trimmed and shaped chicken breasts.",
      "Refrigerate at least 8 hours."
    ]
  },
  {
    id: "batch-crawfish-boil",
    name: "Crawfish Boil",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Full sack crawfish boil with potatoes, corn, mushrooms, and heavy Cajun seasoning.",
    yield: "1 sack",
    cookTime: "45 minutes",
    ingredients: [
      "1 sack crawfish",
      "4.5 lbs powder boil",
      "1 gal liquid boil",
      "35 ea red potato (b's)",
      "5 ea garlic whole",
      "35 ea corn whole",
      "40 ea mushrooms whole",
      "5 ea orange, juiced",
      "10 ea lemon, juiced",
      "2 cups cayenne",
      "1 cup kosher salt",
      "1 cup Tony's",
      "6 oz Tabasco"
    ],
    instructions: [
      "In a 50-quart pot, add 30 quarts of water.",
      "Add liquid and powder boils, remaining seasoning and juices.",
      "Cut the ends off the garlic and remove outer layer of skin. Add potatoes and garlic to the boil.",
      "Turn heat on high for approximately 25-30 minutes. Potatoes should be just slightly undercooked.",
      "Remove potatoes and store in ice chest, bring water back to a rolling boil.",
      "Add washed crawfish and mushrooms. Cover and let cook on high for 10 minutes.",
      "Turn off heat, add frozen corn and let soak for at least 20-30 minutes.",
      "Separate corn and add to potato cooler.",
      "Strain and remove crawfish to a separate cooler.",
      "For each new sack cut seasoning and boil mixes by half."
    ]
  },
  {
    id: "batch-shrimp-boil",
    name: "Shrimp Boil",
    station: "batch",
    category: "entrees",
    contentType: "recipe",
    description: "Seasoned shrimp boil with peppercorn, coriander, fresh herbs, and white wine.",
    yield: "5 lbs",
    cookTime: "40 minutes",
    ingredients: [
      "⅛ cup black peppercorn",
      "⅛ cup coriander seeds",
      "5 cups celery, chopped",
      "5 sprigs tarragon, fresh",
      "5 sprigs thyme, fresh",
      "5 sprigs Italian parsley, fresh",
      "⅓ cup Cajun Spice",
      "¾ cup salt",
      "⅛ cup cayenne pepper",
      "4 ea lemon, squeezed",
      "1½ cups white wine",
      "10 ea bay leaves",
      "1¼ gal water",
      "5 lbs shrimp"
    ],
    instructions: [
      "In a large saucepot, combine all ingredients EXCEPT the shrimp.",
      "Bring to a boil over high heat and cook for 5 minutes.",
      "Add the shrimp to the boiling water, stir, cover and remove from the heat. Let stand for 8 to 10 minutes, or until shrimp are just cooked through. For peel and eat; serve immediately.",
      "For shrimp cocktail; strain in a colander and refrigerate the shrimp until well chilled, about 1 hour. Peel and serve with cocktail sauce."
    ]
  },
  {
    id: "batch-peach-cobbler",
    name: "Peach Cobbler",
    station: "desserts",
    category: "desserts",
    contentType: "recipe",
    description: "Classic Southern peach cobbler with buttery golden crust. Makes 1 casserole dish (8-10 servings).",
    ingredients: [
      "--- PEACHES ---",
      "6 cups fresh peaches, peeled & sliced (or 2 lbs frozen peaches, thawed and drained)",
      "1 cup granulated sugar",
      "1 tsp vanilla extract",
      "1 tsp lemon juice",
      "1 tsp cinnamon",
      "¼ tsp nutmeg",
      "1 Tbsp cornstarch",
      "Pinch of salt",
      "--- BATTER ---",
      "1 cup all-purpose flour",
      "1 cup granulated sugar",
      "1 cup whole milk",
      "1½ tsp baking powder",
      "¼ tsp kosher salt",
      "½ cup (1 stick) unsalted butter"
    ],
    instructions: [
      "Heat oven to 350°F. Place the stick of butter in a 9×13 baking dish and put it in the oven to melt. The butter should coat the bottom fully — that's your cobbler's golden crust insurance.",
      "PREPARE PEACHES: In a saucepan, combine peaches, sugar, lemon juice, vanilla, cinnamon, nutmeg, salt, and cornstarch. Simmer 5–7 minutes until syrupy.",
      "MIX THE BATTER: In a bowl whisk flour, sugar, baking powder, and salt. Stir in the milk until smooth.",
      "ASSEMBLE: Pour the batter directly into the melted butter — do not stir. Spoon the warm peaches (with syrup) evenly over the batter. The batter will rise up around the fruit as it bakes, giving you that classic cobbler top.",
      "Bake 40–50 minutes, until the top is golden brown and the edges are deeply caramelized.",
      "Rest 10 minutes, then serve warm. Ice cream is traditional. Pride is optional."
    ]
  },
  {
    id: "fry-crispy-balsamic-brussels",
    name: "Crispy Balsamic Brussels",
    station: "fry",
    category: "sides",
    contentType: "recipe",
    description: "Deep-fried Brussels sprouts with Cajun seasoning, crispy bacon, balsamic reduction, and shaved Parmesan.",
    yield: "1 serving",
    cookTime: "4 minutes",
    ingredients: [
      "8 oz Brussels sprouts, halved",
      "½ tsp Cajun seasoning",
      "2 slices bacon, diced",
      "¼ cup Parmesan cheese, shaved",
      "1 Tbsp balsamic reduction"
    ],
    instructions: [
      "PREP BRUSSELS: Trim stems and cut Brussels sprouts in half.",
      "FRY: Carefully place Brussels in a deep fryer at 375°F. Fry 3–4 minutes or until crisp and golden brown. Drain well.",
      "COOK BACON: In a small pan, cook diced bacon until crisp. Drain excess fat.",
      "SEASON & TOSS: In a mixing bowl, toss fried Brussels with Cajun seasoning. Sprinkle crispy bacon, and drizzle balsamic reduction on top of Brussels.",
      "PLATE & SERVE: Plate hot and garnish with shaved Parmesan. Serve immediately."
    ]
  },
  {
    id: "fry-crawfish-boudin-balls",
    name: "Crawfish Boudin Balls",
    station: "fry",
    category: "appetizers",
    contentType: "recipe",
    description: "Crawfish and jambalaya rice boudin balls with mozzarella, triple-dredged and fried golden. 5 per order.",
    yield: "Approx. 80 balls (serves 16 orders of 5)",
    cookTime: "7 minutes",
    ingredients: [
      "16 cups jambalaya rice, cooked and cooled",
      "4 cups mozzarella cheese, shredded",
      "3 cups all-purpose flour (for mixture)",
      "2 lbs crawfish tail meat",
      "Seasoned flour (for dredging) - as needed",
      "Seafood wash (egg–milk or buttermilk mixture) - as needed",
      "Remoulade sauce - for serving"
    ],
    instructions: [
      "MIX BASE: In a large bowl, combine jambalaya rice, mozzarella, flour, and crawfish tail meat. Mix thoroughly until evenly distributed.",
      "FORM BALLS: Using a yellow scoop, portion and compress the mixture into tight, uniform balls.",
      "DREDGE SEQUENCE: Roll each ball in seasoned flour. Dip into seafood wash. Roll again in seasoned flour. Return to seafood wash. Finish with one final coating of seasoned flour.",
      "FRY: Place coated balls in a fryer basket. Fry at 375°F for 7 minutes or until golden brown and crisp.",
      "SERVE: Drain briefly on paper towel. Plate 5 per order with a side of house remoulade."
    ]
  },
  {
    id: "breakfast-sweet-potato-hash",
    name: "Sweet Potato Hash",
    station: "breakfast",
    category: "entrees",
    contentType: "recipe",
    description: "Crispy sweet potato hash with bacon, bell pepper, and onion, topped with eggs and served with toast.",
    yield: "1 serving",
    cookTime: "15 minutes",
    ingredients: [
      "1½ cups sweet potatoes, peeled and diced ½-inch",
      "2 slices bacon, chopped",
      "¼ cup bell pepper, diced (red or green)",
      "¼ cup yellow onion, diced",
      "Salt and black pepper - to taste",
      "2 ea eggs",
      "Butter or oil - as needed",
      "2 slices toast (choice of white, wheat, or sourdough)"
    ],
    instructions: [
      "COOK BACON: In a skillet over medium heat, cook chopped bacon until crisp. Remove and reserve, leaving rendered fat in the pan.",
      "COOK SWEET POTATOES: Add diced sweet potatoes to the skillet and cook 8–10 minutes, stirring occasionally, until browned and crisp on the edges.",
      "ADD VEGETABLES: Add bell pepper and onion; continue to sauté 3–4 minutes until tender. Return bacon to the pan and toss to combine. Season with salt and black pepper.",
      "COOK EGGS: In a separate pan, cook two eggs to order (fried, over easy, or scrambled).",
      "ASSEMBLE: Plate the sweet potato hash. Top with eggs and serve with choice of toast."
    ]
  },
  {
    id: "salad-harvest-salad",
    name: "Harvest Salad",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Mixed greens with balsamic vinaigrette, candied pecans, shaved Parmesan, red onion, and dried cranberries.",
    yield: "1 serving",
    ingredients: [
      "2 cups mixed greens",
      "2 oz house balsamic vinaigrette",
      "1 Tbsp candied pecans",
      "1 Tbsp shaved Parmesan",
      "1 Tbsp red onion, thinly sliced",
      "1 Tbsp dried cranberries"
    ],
    instructions: [
      "In a mixing bowl, toss mixed greens with house balsamic vinaigrette until lightly coated.",
      "Transfer to a chilled bowl.",
      "Arrange candied pecans, shaved Parmesan, red onion, and dried cranberries evenly over top.",
      "Serve immediately."
    ]
  },
  {
    id: "batch-sweet-chili-sauce",
    name: "Sweet Chili Sauce",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Three-ingredient sweet chili sauce with sambal oelek, honey, and garlic.",
    ingredients: [
      "2 cups sambal oelek chili",
      "2 cups honey",
      "16 cloves of garlic"
    ],
    instructions: [
      "Add the garlic cloves, sambal oelek chili, and honey to a food processor.",
      "Process the mixture until smooth and well-combined.",
      "Transfer the sauce to a clean, airtight container.",
      "Store in the refrigerator for up to 2 weeks."
    ]
  },
  {
    id: "sautee-crawfish-poutine",
    name: "Crawfish Poutine",
    station: "sautee",
    category: "appetizers",
    contentType: "recipe",
    description: "Crispy French fries smothered in crawfish étouffée sauce with mozzarella and green onions.",
    ingredients: [
      "2 oz butter",
      "1 oz trinity",
      "1 oz red onion, diced",
      "1 Tbsp garlic, minced",
      "1 oz tomato, diced",
      "2 Tbsp étouffée seasoning",
      "8 oz vegetable stock, cold",
      "⅛ cup heavy cream",
      "3 oz crawfish tails",
      "¼ cup mozzarella cheese",
      "6 oz French fries, cooked",
      "1 oz green onions, diced"
    ],
    instructions: [
      "In a small sauté pan, combine the butter, trinity, red onions, and diced tomato. Simmer over medium heat until the trinity becomes tender.",
      "Add 2 tbsp of étouffée seasoning to the pan and blend it with the cooked vegetables until a pasty roux forms.",
      "Pour in the cold vegetable stock and add the heavy cream to the pan.",
      "Use a rubber spatula to whisk the mixture, ensuring you scrape any flour stuck to the bottom of the pan.",
      "Add 3 oz of crawfish tails.",
      "Bring the mixture to a gentle simmer, being careful not to let it boil. Stir the mixture constantly to combine the flavors.",
      "Once the mixture starts to thicken, add mozzarella cheese, and stir until completely melted.",
      "Plate and season the French fries and pour poutine mix evenly over them.",
      "Garnish generously with diced green onions."
    ]
  },
  {
    id: "salad-boiled-sausage-poboy",
    name: "Boiled Sausage Po-Boy",
    station: "salad",
    category: "entrees",
    contentType: "recipe",
    description: "Smoked sausage from the crawfish boil with steamed sauerkraut and Dijon mustard on toasted French bread.",
    yield: "1 sandwich",
    portionSize: "1 po-boy",
    ingredients: [
      "½ link smoked sausage (from crawfish boil)",
      "¼ cup sauerkraut",
      "2 Tbsp Dijon mustard",
      "1 (4-inch) section French bread",
      "Butter, as needed"
    ],
    instructions: [
      "Preheat flattop to medium heat.",
      "Split sausage lengthwise without cutting completely through so it opens flat.",
      "Place sauerkraut directly onto flattop and spread slightly to form a bed.",
      "Lay sausage cut-side down over sauerkraut.",
      "Cover with a steam pan to trap heat and warm sausage through while the kraut steams and lightly caramelizes.",
      "Split French bread and butter cut sides.",
      "Toast on flattop until golden and crisp.",
      "Spread Dijon evenly on both sides of toasted bread.",
      "Transfer sausage and sauerkraut onto bottom half of bread, close sandwich, and serve immediately."
    ]
  },
  {
    id: "batch-chimichurri-fresno",
    name: "Chimichurri with Fresno Pepper",
    station: "batch",
    category: "sauces",
    contentType: "recipe",
    description: "Herbaceous chimichurri with Fresno pepper heat, red wine vinegar, and olive oil for grilled meats and seafood.",
    yield: "About 1½ cups",
    portionSize: "Sauce for 4–6 servings grilled meat or seafood",
    ingredients: [
      "1 cup flat-leaf parsley, finely chopped",
      "2 Tbsp fresh oregano, finely chopped (or 2 tsp dried oregano)",
      "1 Fresno pepper, seeded and finely minced",
      "4 garlic cloves, finely minced",
      "⅓ cup red wine vinegar",
      "½ cup extra-virgin olive oil",
      "1 tsp kosher salt",
      "½ tsp fresh cracked black pepper",
      "½ tsp red pepper flakes (optional, for extra heat)",
      "1 Tbsp fresh lemon juice (optional, for brightness)"
    ],
    instructions: [
      "Combine parsley, oregano, Fresno pepper, and garlic in a mixing bowl.",
      "Add kosher salt, black pepper, and red pepper flakes if using.",
      "Stir in red wine vinegar and lemon juice, allowing the acid to lightly macerate the herbs for 2–3 minutes.",
      "Slowly drizzle in olive oil while stirring until the sauce is loose, glossy, and spoonable.",
      "Taste and adjust seasoning with additional salt or vinegar as needed.",
      "Allow chimichurri to rest at room temperature for at least 30 minutes before serving to fully develop flavor."
    ],
    tips: [
      "Fresno peppers give clean heat + subtle sweetness without overpowering the herbs.",
      "Hand chopping keeps the texture correct — avoid blending.",
      "Best after 2–4 hours; refrigerate up to 5 days and bring back to room temp before service.",
      "Excellent with grilled steak, shrimp, chicken, roasted vegetables, or as a sandwich spread."
    ]
  }
];

export function searchRecipes(query: string, category?: string, station?: string): Recipe[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  return recipes.filter(recipe => {
    const matchesStation = !station || station === "all" || recipe.station === station;
    const matchesCategory = !category || category === "all" || recipe.category === category;
    
    if (!normalizedQuery) return matchesStation && matchesCategory;
    
    const matchesSearch = 
      recipe.name.toLowerCase().includes(normalizedQuery) ||
      recipe.description.toLowerCase().includes(normalizedQuery) ||
      recipe.ingredients?.some(ing => ing.toLowerCase().includes(normalizedQuery)) ||
      recipe.instructions?.some(inst => inst.toLowerCase().includes(normalizedQuery)) ||
      recipe.tips?.toLowerCase().includes(normalizedQuery);
    
    return matchesStation && matchesCategory && matchesSearch;
  });
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(recipe => recipe.id === id);
}

export function getRecipesByCategory(category: string, station?: string): Recipe[] {
  return recipes.filter(recipe => {
    const matchesStation = !station || station === "all" || recipe.station === station;
    const matchesCategory = category === "all" || recipe.category === category;
    return matchesStation && matchesCategory;
  });
}

export function getRecipesByStation(station: string): Recipe[] {
  if (station === "all") return recipes;
  return recipes.filter(recipe => recipe.station === station);
}
