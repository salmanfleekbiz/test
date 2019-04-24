// JavaScript Document
function send_email(){
	show_load();
	var guest = jQuery('#guest').val();
	var formid = document.getElementById('getGuest');

  	jQuery.ajax({
		url : './wp-content/themes/redwhite/process.php',
		data: {guest:guest},
		timeout: 10000,
		success : function(data) {
			formid.reset();
			hide_load();
			//showMessage('#fff', '#000000', 'Thank you for your enquiry, we will be in contact shortly.');
			document.getElementById('success').innerHTML=data;
		},
		error: function(){
			hide_load();
			showMessage('#fff', '#000000', 'Thanking them for their order and a representative will be in contact shortly to confirm the order.');
		}
	});
}
function showMessage(bgcolor, color, msg)
{
    if (!jQuery('#smsg').is(':visible'))
    {
            jQuery('html, body').animate({
             scrollTop: 0
            }, 500, function(){
                if (!jQuery('#smsg').length)
                {
                    jQuery('<div id="smsg">'+msg+'</div>').appendTo(jQuery('body')).css({
                        position:'fixed',
                        top:0,
                        left:0,
                        width:'100%',
                        height:'30px',
                        lineHeight:'30px',
                        background:bgcolor,
                        color:color,
                        zIndex:1000,
                        padding:'10px',
                        fontWeight:'bold',
                        textAlign:'center',
                        fontSize:'22px',
                        opacity:0.8,
                        margin:'auto',
                        display:'none'
                    }).slideDown('show');

                    setTimeout(function(){
                        jQuery('#smsg').animate({'width':'hide'}, function(){
                            jQuery('#smsg').remove();
                        });
                    }, 8000);
                }
            });
    }
}



function show_load() {
jQuery('#fancybox-loading').css('display', 'block');
jQuery('#fancybox-overlay').css('display', 'block');
}

function hide_load(){
jQuery('#fancybox-loading').css('display', 'none');
jQuery('#fancybox-overlay').css('display', 'none');
}
