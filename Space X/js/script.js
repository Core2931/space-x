$(function() {
    setTimeout(function() {
      $('body').addClass('loaded');  
    }, 1200);
  });

  $(document).ready(function() {
    $('#datepicker').datepicker({ 		    
    format: "yyyy",
    viewMode: "years", 
    minViewMode: "years"});
}); 

