let details=[ 
    {
    id:1,
    images:"images/images1.jpg",
    title:"Bat",
    content:"TSS Surya Kumar Yadav Player Signature bat SS SOFT PRO PLAYERS SCOOP BAT WITH FIBER TAPE (SCOOP DESIGN MAY VERY)",
    },
    {
    id:2,
    images:"images/images2.jpg",
    title:"Clock",
    content:"Create a Countdown Timer that counts down in seconds, minutes, hours and days to any date, with time zone "
    },
    {
    id:3,
    images:"images/images3.jpg",
    title:"iphone",
    content:"Two great sizes. Now with a splash of yellow. Buy in yellow now. Pro-level camera. Whoa-level pics. Accessibility features. iOS 16. Services: No-contact free delivery, EMI available, Shop with Specialists."
    },
    {
    id:4,
    images:"images/images4.jpg",
    title:"Bullet",
    content:"The Royal Enfield Bullet was originally an overhead-valve single-cylinder four-stroke motorcycle made by Royal Enfield in Redditch, Worcestershire, now produced by Royal Enfield  to build Royal Enfield motorcycles under licence in India."
    },
    {
    id:5,
    images:"images/images5.jpg",
    title:"Laptop",
    content:"The most powerful Mac lineup ever. Supercharged by Apple silicon. MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio and Studio Display."
    },
    {
    id:6,
    images:"images/images6.jpg",
    title:"Car",
    content:"A car or an automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, ..."
    }
 ]

 var cardsection=document.getElementById("card");
  
var container=document.createElement("div");
container.classList.add("card-container");
cardsection.appendChild(container);

var cardtitle=document.createElement("h1");
cardtitle.classList.add("card-title-head");
cardtitle.innerHTML=("Card Section");
container.appendChild(cardtitle);

var row=document.createElement("div");
row.classList.add("card-row");
container.appendChild(row);




details.forEach(function(e){

var col=document.createElement("div");
col.classList.add("card-col");
row.appendChild(col);

var card=document.createElement("div");
card.classList.add("card-card");
col.appendChild(card);

var picture=document.createElement("img");
card.appendChild(picture);
picture.setAttribute("src",e.images);

var heading=document.createElement("h1");
card.appendChild(heading);
heading.innerHTML=e.title;

var para=document.createElement ("p");
card.appendChild(para);
para.innerHTML=e.content;

});