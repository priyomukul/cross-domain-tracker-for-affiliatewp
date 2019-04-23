jQuery(document).ready(
    function ($) {
    	
	    function getCookie(cname) {
		    var name = cname + "=";
		    var decodedCookie = decodeURIComponent(document.cookie);
		    var ca = decodedCookie.split(';');
		    for(var i = 0; i <ca.length; i++) {
			    var c = ca[i];
			    while (c.charAt(0) == ' ') {
				    c = c.substring(1);
			    }
			    if (c.indexOf(name) == 0) {
				    return c.substring(name.length, c.length);
			    }
		    }
		    return "";
	    }
    	
        var visited_cookie = getCookie("affwp_visit_id");
        var affiliate_id = getCookie("affwp_affiliate_id")

        if (visited_cookie ) {
            var url = awp_track_visit_var.url, target_urls = $("a[href^='" + url + "']");
            var referral_variable = awp_track_visit_var.referral_variable;
            $(target_urls).each(
                function () {
                    current_url = $(this).attr("href"), $(this).attr("href", updateQueryStringParameter(current_url, referral_variable, affiliate_id) + "&visit=" + visited_cookie);
                }
            );
        }

        function updateQueryStringParameter(uri, ref_var, aff_id)
        {
            var re = new RegExp("([?|&])" + ref_var + "=.*?(&|#|$)", "i");
            if (uri.match(re)) { return uri.replace(re, "$1" + ref_var + "=" + aff_id + "$2");
            }
            var hash = "", separator = -1 !== uri.indexOf("?") ? "&" : "?";
            return -1 !== uri.indexOf("#") && (hash = uri.replace(/.*#/, "#"), uri = uri.replace(/#.*/, "")), uri + separator + ref_var + "=" + aff_id + hash
        }


    }
);