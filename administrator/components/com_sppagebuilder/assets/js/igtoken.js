jQuery(function(e){var s=Joomla.getOptions("igConfig"),a=e(".sppb-ig-token #app_id"),o=e(".sppb-ig-token #app_secret"),n=e(".sppb-ig-token #access_token"),t=e(".sppb-ig-token #ig_id"),p=e(".sppb-ig-token #ig_next"),d=e(".sppb-ig-token #app_token"),i={app_id:"appId",app_secret:"appSecret",access_token:"accessToken",ig_id:"igId"},l={appId:a.val(),appSecret:o.val(),accessToken:n.val(),igId:t.val()},c=JSON.parse(JSON.stringify(l)),r=function(a){var o,r,g,h,u=a.target.id,k=a.target.value;(l[i[u]]=k,c.appId!==l.appId||c.appSecret!==l.appSecret)?((o=n.closest(".control-group")).hasClass("hidden")||o.addClass("hidden"),(r=t.closest(".control-group")).hasClass("hidden")||r.addClass("hidden"),(g=p.closest(".control-group")).hasClass("hidden")&&g.removeClass("hidden"),(h=d.closest(".control-group")).hasClass("hidden")||h.addClass("hidden")):((o=n.closest(".control-group")).hasClass("hidden")&&o.removeClass("hidden"),(r=t.closest(".control-group")).hasClass("hidden")&&r.removeClass("hidden"),(g=p.closest(".control-group")).hasClass("hidden")||g.addClass("hidden"),(h=d.closest(".control-group")).hasClass("hidden")&&h.removeClass("hidden"));e(".sppb-ig-token input#"+s.inputId).val(JSON.stringify(l))};a.on("keyup",r),o.on("keyup",r),n.on("change",r),t.on("change",r),d.on("click",function(e){e.preventDefault();var n=a.val(),t=o.val();if(n&&t){var p=s.base+"/index.php?option=com_sppagebuilder&task=instagram.accessToken";window.open(p,"window name","location=yes,height=750,left=350,top=0,width=750,modal=yes,alwaysRaised=yes")}else alert("You have to insert your facebook APP_ID and APP_SECRET for getting the access token!")})});