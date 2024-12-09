// Developer: Roderick Bernardo
// Purpose: React list demo

import ProductList from "./components/ProductList";
import ProductListV1 from "./components/ProductListV1";
import "bulma/css/bulma.min.css";

function App() {
  const productHeadings = [
    "Id",
    "Name",
    "Description",
    "Price",
    "Category",
    "Image",
  ];

  const products = [
    {
      id: "GGOEAFKA087499",
      name: "Android Small Removable Sticker Sheet",
      description:
        "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
      price: "2.99",
      category: "accessories",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEAFKA087599",
      name: "Android Large Removable Sticker Sheet",
      description:
        "Show your quirky side by placing these fun Android stickers on your personal belongings.",
      price: "2.99",
      category: "accessories",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGEBK094499",
      name: "Google Bot",
      description:
        "This Google Bot can hold multiple poses making it a fun toy for all. Fold the Google Bot back up into a perfect cube when you are done playing.",
      price: "9.99",
      category: "accessories",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGFKA086699",
      name: "Google Emoji Sticker Pack",
      description:
        "Who doesn't use emojis? Decorate your space with your current mood!",
      price: "4.99",
      category: "accessories",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEWCKQ085457",
      name: "Waze Pack of 9 Decal Set",
      description:
        "Can't decide which Waze decal to get? We have made that decision easier for you! Now you can purchase a pack of nine Waze Mood Decals!",
      price: "16.99",
      category: "accessories",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGHPB071610",
      name: "Google Twill Cap",
      description:
        "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
      price: "10.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGHPJ094299",
      name: "Google Fold-over Beanie Grey",
      description:
        "Keep you ears warm while enjoying a cold winter day with this Google Fold-over Beanie.",
      price: "9.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGHPJ094399",
      name: "Google Pom Beanie Charcoal",
      description:
        "Stay stylish and warm this winter season with this Google Pom Beanie.",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEWXXX0827",
      name: "Waze Women's Short Sleeve Tee",
      description:
        "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
      price: "18.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEWXXX0828",
      name: "Waze Men's Short Sleeve Tee",
      description:
        "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
      price: "18.99",
      category: "apparel",
      img: "../images/placeHolder.svg0",
    },
    {
      id: "GGOEGBRJ037399",
      name: "Google Rucksack",
      description:
        "Choose to carry your belongings and presentations to your next meeting with the Google Mistral Rucksack!",
      price: "79.99",
      category: "bags",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGDHJ087399",
      name: "Google Rolltop Backpack Blue",
      description:
        "This stylish Google rolltop backpack will help keep all of your favorite items organized and together while you're on the move.",
      price: "149.99",
      category: "bags",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEADHB085999",
      name: "Android Trace Bottle Black",
      description:
        "Stay hydrated throughout the day with this Android Trace Bottle. 17 oz.",
      price: "23.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEADHB086299",
      name: "Android Trace Mug Black",
      description:
        "Start your day off right with that perfect cup of coffee using this Android Trace Mug Black.",
      price: "9.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGDHC087099",
      name: "Google Thermal Bottle Blue",
      description:
        "Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.",
      price: "23.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGDHH087299",
      name: "Google Thermal Bottle Green",
      description:
        "Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.",
      price: "23.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGDHQ093399",
      name: "Google Thermal Bottle White",
      description:
        "Insulated to keep contents hot or cold for hours, this Google bottle is a great year-round companion. 17 oz.",
      price: "23.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGDHR086999",
      name: "Google Thermal Bottle Red",
      description:
        "Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.",
      price: "23.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGDHT087199",
      name: "Google Thermal Bottle Yellow",
      description:
        "Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.",
      price: "23.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGDWQ087699",
      name: "Google Hub Mug White",
      description:
        "Enjoy a cup of coffee or tea with this Google stoneware mug.",
      price: "12.99",
      category: "drinkware",
      img: "../images/placeHolder.svg0",
    },
    {
      id: "GGOEYDHB086099",
      name: "YouTube Transmission Bottle Black",
      description:
        "Keep your favorite drink cold during those long workouts with this YouTube Transmission Bottle. 17 oz.",
      price: "23.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGAPB087899",
      name: "Google Snapback Black Cap",
      description:
        "Stay shaded on those sunny days wearing this stylish Google snapback hat.",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGAPL087999",
      name: "Google Snapback Navy Cap",
      description:
        "Stay shaded on those sunny days wearing this stylish Google snapback hat.",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGAMC088199",
      name: "Google Cappy Bib Blue",
      description:
        "Keep your little Googler stain free with this Google Cappy Bib.",
      price: "13.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGAMC088399",
      name: "Google Mustachio Bib Blue",
      description:
        "Avoid food ending up on your little one with this Google Mustachio Bib.",
      price: "13.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGAMQ088099",
      name: "Google Cappy Bib White",
      description:
        "Keep your little Googler stain free with this Google Cappy Bib.",
      price: "13.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGAMQ088299",
      name: "Google Mustachio Bib White",
      description:
        "Avoid food ending up on your little one with this Google Mustachio Bib.",
      price: "13.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGAMR088499",
      name: "Google Standard Bib Red",
      description: "Catch the Goo Goo with this Google Bib.",
      price: "13.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0886",
      name: "Google Protector Onesie Navy",
      description:
        "This Google Protector Onesie moves with your baby with non-binding sleeves for full freedom of movement.",
      price: "25.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0887",
      name: "Google Standard Onesie Grey",
      description:
        "This Google onesie moves with your baby with non-binding sleeves for full freedom of movement.",
      price: "25.99",
      category: "apparel",
      img: "../images/placeHolder.svg0",
    },
    {
      id: "GGOEGXXX0888",
      name: "Google Standard Onesie Green",
      description:
        "This Google onesie moves with your baby with non-binding sleeves for full freedom of movement.",
      price: "25.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0889",
      name: "Google Kids Tee Blue",
      description:
        "Simple, stylish, and comfy — this Google kids t-shirt is 100% cotton for gentle comfort and ease of care.",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0890",
      name: "Google Kids Tee Green",
      description:
        "Simple, stylish, and comfy — this Google kids t-shirt is 100% cotton for gentle comfort and ease of care.",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0891",
      name: "Google Kids Tee White",
      description:
        "Simple, stylish, and comfy — this Google kids t-shirt is 100% cotton for gentle comfort and ease of care.",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0892",
      name: "Google Trike Tee Black",
      description:
        "This Google t-shirt is perfect for a kid to have fun and play in — 100% cotton comfort, short sleeves, and Google decoration!",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0893",
      name: "Google Flower Tee Purple",
      description:
        "This Google t-shirt is everything a demanding kid could want — 100% cotton comfort, short sleeves, and Google decoration!",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0894",
      name: "Google Protector Tee Navy",
      description:
        "This 100% cotton Google Protector is perfect for school, fun or lounging for kids.",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEYXXX0895",
      name: "YouTube Kids Tee White",
      description:
        "This 100% cotton YouTube short sleeve t-shirt is perfect for kids to wear to school or while playing.",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEYXXX0896",
      name: "YouTube Kids Tee Black",
      description:
        "This 100% cotton YouTube short sleeve t-shirt is perfect for kids to wear to school or while playing.",
      price: "19.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEYXXX0897",
      name: "YouTube Kids Onesie White",
      description:
        "This 100% cotton YouTube Onesie for your baby will keep them comfortable with non-binding sleeves for full freedom of movement.",
      price: "25.99",
      category: "apparel",
      img: "../images/placeHolder.svg0",
    },
    {
      id: "GGOEAKDH019899",
      name: "Windup Android",
      description:
        "Go ahead and wind up in true Android fashion with this fun windup toy!",
      price: "3.99",
      category: "accessories",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGAAX0037",
      name: "Google Sunglasses",
      description:
        "Although these are no Google glasses, they will still make your day fun at the beach!",
      price: "3.50",
      category: "accessories",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGFSR022099",
      name: "Google Mini Kick Ball",
      description:
        "Kick this Google Mini Kick Ball around to take a break from the hustle and bustle. Fun for all ages!",
      price: "1.99",
      category: "accessories",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGPJC019099",
      name: "7 inch Dog Frisbee",
      description:
        "Take your furry friend to the park and play the day away with this 7 inch Dog Safe Flyer!",
      price: "1.50",
      category: "accessories",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEAOCB092799",
      name: "Android Large Trace Journal Black",
      description:
        "This Android Large Trace Journal provides an escape and a chance to write down your latest inspirations!",
      price: "15.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEAOCB092899",
      name: "Android Small Trace Journal Black",
      description:
        "This Android Small Trace Journal provides an escape and a chance to write down your latest inspirations!",
      price: "12.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOCL092999",
      name: "Google Small Standard Journal Navy",
      description:
        "This Google Small Standard Journal is perfect to keep on your desk for those great ideas that pop into your head.",
      price: "12.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEYOCB092699",
      name: "YouTube Transmission Journal Black",
      description:
        "This YouTube Transmission Journal is a convenient tool to collect your thoughts and doodles throughout the day.",
      price: "15.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGFKQ020399",
      name: "Google Laptop and Cell Phone Stickers",
      description:
        "Show your Google support by posting these stickers on your belongings!",
      price: "2.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGGOA017399",
      name: "Maze Pen",
      description:
        "Attending a meeting will never be the same! This fun-filled maze pen features two small metal balls that move through the maze.",
      price: "0.99",
      category: "office",
      img: "../images/placeHolder.svg0",
    },
    {
      id: "GGOEGOAB086399",
      name: "Google Tri Pen Black",
      description:
        "Switch between blue ink, black ink, pencil or even write on your tablet using the stylus with this 5-in-1 Tri Pen.",
      price: "15.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOAJ086399",
      name: "Google Tri Pen Silver",
      description:
        "You multitask like a boss. Now your writing instrument can keep up. This 5-in-1 Tri Pen is a great multi functional pen.",
      price: "15.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOAR013099",
      name: "Google Stylus Pen w/ LED Light",
      description:
        "Get yourself a great multitasking tool! Write a note, sign a tablet, and shine a light with this Google Stylus Pen w/LED Light!",
      price: "5.50",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOCJ093999",
      name: "Google Large Standard Journal Grey",
      description:
        "Use all 192 pages to store anything from meeting notes to that next big idea in this Google hard cover notebook.",
      price: "15.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOCL087799",
      name: "Google Large Standard Journal Navy",
      description:
        "Use all 192 pages to store anything from meeting notes to that next big idea in this Google hard cover notebook.",
      price: "15.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOLC014299",
      name: "Google Metallic Notebook Set",
      description: "A stunning notebook set that will inspire all writers!",
      price: "5.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEWFKA082999",
      name: "Waze Baby on Board Window Decal",
      description:
        "Get on board with the Waze wave and let everyone know you're carrying precious cargo with this new Waze inchBaby on Board inch decal.",
      price: "2.99",
      category: "misc",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEWFKA083099",
      name: "Waze Mood Happy Window Decal",
      description:
        "If you're happy and you know it, show it off with this Waze happy mood window decal.",
      price: "1.99",
      category: "misc",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEWFKA083199",
      name: "Waze Mood Original Window Decal",
      description:
        "You're an original. Let everyone know with this original Waze mood window decal.",
      price: "1.99",
      category: "misc",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEWFKA083299",
      name: "Waze Mood Ninja Window Decal",
      description:
        "You're a master of stealth. So let everyone know! Get this Waze ninja mood window decal and advertise your commitment to the secret ninja ways!",
      price: "1.99",
      category: "misc",
      img: "../images/placeHolder.svg0",
    },
    {
      id: "GGOEWXXX0834",
      name: "Waze Women's Typography Short Sleeve Tee",
      description:
        "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
      price: "18.99",
      category: "misc",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEWXXX0835",
      name: "Waze Men's Typography Short Sleeve Tee",
      description:
        "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
      price: "18.99",
      category: "misc",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0903",
      name: "Google Tee White",
      description:
        "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the Google logo across the chest. Unisex sizing.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0904",
      name: "Google Tee Red",
      description:
        "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the Google logo across the chest. Unisex Sizing.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0905",
      name: "Google Tee Yellow",
      description:
        "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the Google logo across the chest. Unisex Sizing.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0906",
      name: "Google Tee Green",
      description:
        "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the google logo across the chest. Unisex sizing.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0907",
      name: "Google Tee Blue",
      description:
        "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the google logo across the chest. Unisex sizing.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0908",
      name: "Google Bike Tee Navy",
      description:
        "Go for a ride around campus or town with this comfortable Google Bike Tee. Unisex Sizing.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0909",
      name: "Google Braille Tee Black",
      description:
        "Made of soft tri-blend material, this Google Braille Tee is perfect for all of those sunny days. Unisex sizing.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0910",
      name: "Google Women's Tee Grey",
      description:
        "Stay comfortable and relaxed while coding in this Google Women's Tee made of soft tri-blend material.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg0",
    },
    {
      id: "GGOEGXXX0916",
      name: "Android Matrix Tee White",
      description:
        "The unique design and soft tri-blend material make for a perfect combination for this Android Matrix Tee. Unisex sizing.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGXXX0918",
      name: "YouTube Tee Black",
      description:
        "Keep it simple with the new logo wearing this YouTube tee. Unisex sizing.",
      price: "21.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOAC089999",
      name: "Google Light Pen Blue",
      description:
        "Get yourself a great multitasking tool! Write a note, sign a tablet, and light up with this Google Light Pen!",
      price: "2.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOAH090199",
      name: "Google Light Pen Green",
      description:
        "Get yourself a great multitasking tool! Write a note, sign a tablet, and light up with this Google Light Pen!",
      price: "2.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOAR090099",
      name: "Google Light Pen Red",
      description:
        "Get yourself a great multitasking tool! Write a note, sign a tablet, and light up with this Google Light Pen!",
      price: "2.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGOAT090299",
      name: "Google Light Pen Yellow",
      description:
        "Get yourself a great multitasking tool! Write a note, sign a tablet, and light up with this Google Light Pen!",
      price: "2.99",
      category: "office",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEADHB098899",
      name: "Android 16 oz Tumbler Black",
      description:
        "Insulated to keep contents hot or cold for hours, take that perfect cup of coffee with you on the go whether you like hot or iced coffee.",
      price: "21.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEADHQ098399",
      name: "Android 25 oz Gear Cap Bottle White",
      description:
        "Take your favorite hot or cold drink anywhere with this Android 25oz Gear Cap Bottle. The carrying handle lid makes it convenient to take with you to your next meeting or workout.",
      price: "26.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEAHBB102099",
      name: "Android Twill Cap Black",
      description: "Show your Android pride by wearing this Android Twill Cap.",
      price: "12.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEGDHC098799",
      name: "Google 16 oz Tumbler Blue",
      description:
        "A geometric inner liner gives this Google 16oz Tumbler a unique look to help you stand out in a crowd of bottles and tumbler.",
      price: "12.99",
      category: "drinkware",
      img: "../images/placeHolder.svg0",
    },
    {
      id: "GGOEGHBL101999",
      name: "Google Twill Sandwich Cap Navy",
      description:
        "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
      price: "12.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEYDHB098499",
      name: "YouTube 25 oz Gear Cap Bottle Black",
      description:
        "Take your favorite hot or cold drink anywhere with this YouTube 25oz Gear Cap Bottle. The carrying handle lid makes it convenient to take with you to your next meeting or workout.",
      price: "26.99",
      category: "drinkware",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEYHBB102199",
      name: "YouTube Twill Sandwich Cap Black",
      description:
        "This YouTube Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
      price: "12.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEYXXX0938",
      name: "YouTube Icon Pullover Black",
      description:
        "This YouTube pullover hoodie will keep you warm while looking stylish with the tone on tone logo.",
      price: "59.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
    {
      id: "GGOEYXXX0937",
      name: "YouTube Wordmark Crew Grey",
      description:
        "Kick back and relax in this comfortable YouTube sweatshirt. Unisex sizing.",
      price: "51.99",
      category: "apparel",
      img: "../images/placeHolder.svg",
    },
  ];

  const data = {
    productHeadings: productHeadings,
    products: products,
  };

  return (
    <>
      <ProductList data={data} />
      <hr />
      <ProductListV1 data={data} />
    </>
  );
}

export default App;
