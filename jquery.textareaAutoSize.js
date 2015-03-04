/**
 * Simple jQuery plugin auto resizes a textarea for content.
 * @author Nabeel Javaid <nabeeljavaid.nmj@gmail.com>
 * @version 1.0
 * 
 * @example $('textarea').textareaAutoSize({
 *              min_height: 30, // Default: 30
 *              max_height: 100 // Default: 100
 *          });
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lessier General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lessier General Public License for more details.
 *
 * You should have received a copy of the GNU Lessier General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function ( $ ) {
    $.fn.textareaAutoSize = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            
            // These are the defaults.
            min_height: 30,
            max_height: 100
        }, options );
        
        $elments=this;
        
        return $elments.each(function() {
            
            //Add event for each element
            $(this, 'textarea').on('input keyup', function(event) {
                
                if($(this).is('textarea'))
                {
                    var $window = $(window);
                    var $current_scroll_position = $window.scrollTop();


                    //Apply Min Height Check
                    var $changed_height=this.scrollHeight;
                    if($changed_height<settings.min_height)
                    {
                        var $changed_height=settings.min_height;
                    }

                    if($changed_height>settings.max_height)
                    {
                       $(this).css('overflow-y', 'scroll');
                       $window.scrollTop($current_scroll_position); 
                    }
                    else
                    {
                        $(this).css('overflow-y', 'hidden').css('height', $changed_height);
                    }
                }
                



            });
          
            
        });//endeach
 
    };
 
}( jQuery ));
