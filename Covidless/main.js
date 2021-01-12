/*(function ( $ ) {
 	var blockedWords = ['Covid','covid19','];
    $.fn.greenify = function() {
        this.("div:contains('Covid')").children("a:contains('Covid')").parent("div:contains('Covid')").remove()
        return this;
    };
 
    $.fn.myNewPlugin = function() {
    	return this.each(function() {
        // Do something to each element here.
    });
 
};
}( jQuery )); */

var wordArray =['Covid','Pandemi','Pandemic','Covid19','Epidemi','Disease','Salgın','koronavirus','coronavirus'];
//var wordArray =['Covid'];
var divString ="";
var aString ="";

function createSelectorFromArray(){
	for(var k=0;k<wordArray.length;k++){
		divString +="div:contains('"+wordArray[k]+"'),";
		divString +="div:contains('"+wordArray[k].toLowerCase()+"'),";
		
		
		aString +="a:contains('"+wordArray[k]+"'),";
		aString +="a:contains('"+wordArray[k].toLowerCase()+"'),";
			
		if(k==wordArray.length -1){ //Sonuncu Elemanda Virgul Olmayacak
				divString +="div:contains('"+wordArray[k].toUpperCase()+"')";
				aString +="a:contains('"+wordArray[k].toUpperCase()+"')";
		}
		else { //Sonuncu Degilse Virgul Mevcut
				divString +="div:contains('"+wordArray[k].toUpperCase()+"'),";
				aString +="a:contains('"+wordArray[k].toUpperCase()+"'),";
		}
	}
}
function filterElement(){
		$(divString).children(aString).parent(divString).remove();
}

createSelectorFromArray();
console.log(divString);
console.log(aString);
$(divString).children(aString).parent(divString).remove();
//filterElement();

//$("div:contains('Covid')").children("a:contains('Covid')").parent("div:contains('Covid')").remove()

   

