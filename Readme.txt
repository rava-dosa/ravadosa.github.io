Helpful links & snippets to build a basic websites.
dropdown

<!DOCTYPE html>
<html>
<head>
<style>
div {background-color: green;}
div a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    padding: 15px;
    display:inline-block;
}
ul {
  display: inline;
  margin: 0;
  padding: 0;
}
ul li {display: inline-block;}
ul li:hover {background: #555;}
ul li:hover ul {display: block;}
ul li ul {
  position: absolute;
  width: 200px;
  display: none;
}
ul li ul li { 
  background: #555; 
  display: block; 
}
ul li ul li a {display:block !important;} 
ul li ul li:hover {background: #666;}
</style>
</head>
<body>

<div>
  <a href="#">Useless Link</a>
  <ul>
    <li>
      <a href="#">Dropdown Link</a>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </li>
  </ul>
</div>

</body>
</html>



hover features:  http://www.w3schools.com/cssref/sel_hover.asp

navbar:  http://www.w3schools.com/css/css_navbar.asp

changing font color inside navbar : http://stackoverflow.com/questions/19616717/how-to-change-font-color-inside-nav-element


click wala dropdown:
http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select

position:relative explanation
https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/

z-index
http://www.w3schools.com/cssref/tryit.asp?filename=trycss_zindex

advance example
http://www.w3schools.com/css/css3_mediaqueries_ex.asp

contents of one class in 3 columns
http://www.w3schools.com/css/tryit.asp?filename=trycss3_column-width

margin
http://www.w3schools.com/css/css_margin.asp

responsive sidenav
1.http://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_vertical_responsive

2.http://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_sidenav_hide&stacked=h

float & clear
http://www.w3schools.com/css/css_float.asp

box sizing:
http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-sizing2

resize property
http://www.w3schools.com/css/tryit.asp?filename=trycss3_resize_width

flexbox:
http://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_flexline



fixed top navigation
http://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black_fixed

fixed width sidebar:
1. https://css-tricks.com/forums/topic/fixed-width-sidebar-in-responsive-design/

2. http://jsfiddle.net/djwave28/JZ52u/

3. https://benfrain.com/independent-scrolling-panels-body-scroll-using-just-css/

4. https://www.sitepoint.com/css-position-sticky-introduction-polyfills/


Changing links color

http://www.echoecho.com/htmllinks02.htm
