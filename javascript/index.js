$(function () {
    function set_responsive_locations() {
        var width = document.body.offsetWidth;
        
        $("[to-item-width]").each(function( index ) {
            var element_event_size = Number($(this).attr('to-item-width'));
            var to_item = $(this).attr('to-item');
            var old_div = $(this).parent();
            var id = old_div.attr('id'); 
            
            if (width < element_event_size) {
                $(this).attr('parent',id)
                $(to_item).append(this); 
            }else{
                var parent_item = $(this).attr('parent-item'); 
                $(parent_item).append(this);
            }
            
        });
        
        $("[disable-width]").each(function( index ) {
            var element_event_size = Number($(this).attr('disable-width'));
            if (width > element_event_size) {
                $(this).css('display','none'); 
            }else{
                $(this).css('display','block'); 

            }
        });

    }

    set_responsive_locations();
    window.onresize = set_responsive_locations;
});