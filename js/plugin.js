(function( $ ) {
    $.fn.checkFields = function() {
         this.each(function() {
            var elem = $( this );
             console.log(elem.text());
             regexp = new RegExp(/..*/);
            if(regexp.test(elem.text())) {
                elem.removeClass("invalid");
            } else {
                elem.addClass("invalid");
            }
             return true;
        });
         return this;
     };
 
}( jQuery ));
