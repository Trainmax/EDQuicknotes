/**
 * Created by Oliver on 07.01.2015.
 * Purpose: find the path between two Star-Systems
 * How does it work:
 * Check for Siblings. Put siblings in a Queue, add Root-Object into Array and add an ID (eg. 1) to it
 * Check siblings of siblings asf...
 */
//URL to get the neighbors view
neighborUrl = "http://montezumacraft.ch:5984/edquicknotes/_design/system/_view/show_neighbors";
//URL to get all Black-Markets
blackmarketUrl = "http://montezumacraft.ch:5984/edquicknotes/_design/system/_view/show_blackmarkets";

//siblings json
siblingsJson = "allSiblings.json";

