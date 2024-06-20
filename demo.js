/* Add your JavaScript code here.

If you are using the jQuery library, then don't forget to wrap your code inside jQuery.ready() as follows:

jQuery(document).ready(function( $ ){
    // Your code in here
});

--


If you want to link a JavaScript file that resides on another server (similar to
<script src="https://example.com/your-js-file.js"></script>), then please use
the "Add HTML Code" page, as this is a HTML code that links a JavaScript file.

End of comment */ 
jQuery(document).ready(function(){
    if(window.location.pathname==='/'){
      //let onFirst=localStorage.getItem('first_');
      //if(onFirst==="yes"){
       // return;
      //}
      // localStorage.setItem('first_','yes');
      //jQuery("html").append(`<div class="popup_O9" id="popupbox_O9"> <span id="popupclose_O9">x</span><p class="pp-h-cls">🎈LAST MINUTE AVAILABILITY FOR JUNE 25TH!🎉</p><hr style="margin: 20px 20px;"><p>The last Saturday of June is the most sought after day for Weddings in Canada.</p><p>It's not to late to book your 🎉 Wedding or Celebration 🎇 for this date!</p><p>Give Chef Bob a call at <b>905-330-1283</b> to book your event!</p></div>`);
    jQuery("html").append(`<div class="popup_O9" id="popupbox_O9"> <span id="popupclose_O9">x</span><p class="pp-h-cls">There are still some Saturdays available for the 2024 wedding season.</p><hr style="margin: 20px 20px;">
     <p>LAST MINUTE IS OUR SPECIALTY!!!</p>
     <p style = "font-size:15px;"> ✨ Wedding Enchantment: Secure Your Dream Wedding Celebration in 2024! 💍 </p>
  <p>Imagine the romance of your special day complemented by exquisite cuisine and impeccable service. At Special Moments Catering, 
  we specialize in crafting unforgettable wedding experiences. Our dedicated team are eager to make your big day truly memorable.
</p>
  <p>🎉 Special Events: Now's the Perfect Time to Plan for Your Celebrations! 🌟</p>
   <p> Whether it's a milestone celebration, a gathering, or any joyous occasion, 
   envision the delight of sharing delicious feasts and creating cherished memories with your loved ones. 
   At Special Moments Catering, we specialize in turning your gatherings into special moments. 
   Don't wait—reserve your spot now, and let's make your 2024 event an unforgettable experience.
</p>  
   <p>🎂 Birthday Bliss: Celebrate Your Special Day with Us! 🎈</p>
   <p>Whether it's a milestone celebration, a corporate gathering, or any joyous occasion, picture the joy 
of sharing delicious feasts and creating cherished memories with your loved ones.
At Special Moments Catering, we specialize in turning your gatherings into memorable moments.
Don't delay—claim your spot now, and let's turn your 2024 birthday celebration into an 
extraordinary occasion!
 </p>
   <p>🌹 Compassionate Catering for Difficult Times🌹</p>
   <p>In times of loss, our team understands the importance of providing comforting and thoughtful
catering services for funeral gatherings. At Special Moments Catering, we specialize in
catering for funeral services, ensuring that your guests are cared for during challenging times. 
Please reach out to us for compassionate and reliable service.
</p>
 <p><b>Bob Mclaughlin</b></p>
	<p>Chef / Owner</p>
  <p><b>Special Moments Catering</b></p>
  </div>`);
    jQuery("#popupclose_O9").on("click",function(e){
      jQuery("#popupbox_O9").remove()
    })
    }  
  });
  