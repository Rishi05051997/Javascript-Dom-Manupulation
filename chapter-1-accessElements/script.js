//// DOM - Document Object Model

////  1.  getElementById
// const heading = document.getElementById("heading")
// console.log(heading);

//// <h1 id="heading">Javascript is awesome</h1>

////  2. getElementsByTagName
// const heading = document.getElementsByTagName("h1");
// console.log(heading);
// ///// HTMLCollection(2) [h1#heading, h1, heading: h1#heading]

// for(var i = 0;i<heading.length;i++){
//     console.log(heading[i])
// }

//// <h1 id="heading">Javascript is awesome</h1>
//// <h1>This is my another heading</h1>

//// 3. getElementsByClassName

// const header = document.getElementsByClassName("header")
// console.log(header)

////// HTMLCollection(3) [h2.header, h2.header, h2.header]

// for(var i = 0;i<header.length;i++){
//     console.log(header[i])
// }
////////    <h2 class="header">Hello Class Heading Here</h2>
////////    <h2 class="header">Hello Class Heading Here</h2>
////////    <h2 class="header">Hello Class Heading Here</h2>


/////// 4.  querySelector
/// selecting id with the help of querySelector
// const heading = document.querySelector("#heading")
// console.log(heading)

////// h1#heading

/// selecting class with the help of querySelector
// const header = document.querySelector(".header")
// console.log(header);


///// <h2 class="header">Hello Class Heading Here</h2>  


/////// 5.  querySelectorAll
const header = document.querySelectorAll(".header")
console.log(header);

////// NodeList(3) [h2.header, h2.header, h2.header]


























