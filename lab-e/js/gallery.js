// IMPORTANT: Before you start, be sure to customize all href="" values within the server include PHP files so your site navigation works

// STEP 2a: Grab the UL for #blockGallery
var blockGallery = document.getElementById("blockGallery");

// STEP 2b: Create an array of all A elements inside blockGallery
var blockLinks = blockGallery.querySelectorAll("a");

// STEP 2c: Loop through each item in blockLinks
for (var i = 0; i < blockLinks.length; i++) {

    // STEP 3a: Attach an onclick event with an anonymous function
    blockLinks[i].onclick = function(event) {

        // STEP 3c: Cancel default hyperlink behaviour
        event.preventDefault();

        // STEP 4a: Capture the href attribute of the clicked link
        var blockHref = this.getAttribute("href");

        // STEP 4b: Grab the IMG element just below the UL
        var blockImg = document.getElementById("blockImg");

        // STEP 4c: Change the src attribute of the IMG element
        blockImg.setAttribute("src", blockHref);

        // STEP 5a: Obtain the title attribute of the clicked link
        var blockCaption = this.getAttribute("title");

        // STEP 5b: Grab the P element with id 'blockCaption'
        var blockCaptionParagraph = document.getElementById("blockCaption");

        // STEP 5c: Set the text of the paragraph to the title attribute
        blockCaptionParagraph.textContent = blockCaption;

    }; // STEP 3b: End onclick anonymous function

} // STEP 2d: End loop through blockLinks