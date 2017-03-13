// Get the WEATHER
$.simpleWeather({
  location: 55868,
  unit: 'f',
  success: function(weather){
      
      // Weather Check
      console.log(weather);
    
      // Display Data
      $('.city').text(weather.city);
      $('.state').text(weather.region);
      $('.temp').text(weather.temp);
      $('.thumb img').attr('src', weather.image);
    
    },
  error:  function(error){
      console.log('No Weather Found'); 
    }
});