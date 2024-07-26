This is a solution I found for downloading SVG files as both svg and png. There is no package to download, just copy and paste the code into your javascript file. 

Make sure you pass in a variable that holds a reference to the SVG which can be accomplished with this line of code in your javascript.
```const svgReference = document.getElementById("id-of-your-svg");```
Do not pass in the svg id directly.

To see an example of these being used, see my repo: https://github.com/mathematiCode/Visual-Fraction-Library
