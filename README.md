# javascript-challenge

Both Levels 1 (required) and 2 (optional) have been completed in this homework.

In the "static" folder: The app.js file holds the code to populate the table, create the Date Search and set multiple filters and search for UFO sightings.

The index.html file contains the code for the webpage with customization.

Note: Comments were added in the js code to indicate several special features added to the webpage. These include:

Upon loading the HTML webpage, table is cleared, the script populates the full table of UFO sightings. 
Five search categories were constructed to filter the results. Upon executing a filter, first the table is cleared, and repopulated with the filtered results. The filter function is constructed in a way that field(s) can be left blank. 
The shape filter was created using a dropdown box. The 'other' field yields all entries that are not one of the other categories
Lastly, a "CLEAR" button was added that clears the entry fields (it does not alter the displayed table, until you click 'filter').

Added tweaks:
Filter now more flexible
Date.parse() helps to accept multiple variation (01/01/2010 = 1/1/10 etc)
toLowerCase() helps convert everything to lower case to make the filter case insensitive
includes() for city search helps to locate partial matches, example: search for 'cajon' and find 'el cajon' entries

The webpage is now live https://azurblau82-coh.github.io/javascript-challenge/
