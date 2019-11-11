navigator.getUserMedia = navigator.getUserMedia ||  
                         navigator.webkitGetUserMedia || 
                         navigator.mozGetUserMedia || 
                         navigator.msGetUserMedia;
                          
window.URL = window.URL || 
             window.webkitURL || 
             window.mozURL || 
             window.msURL;
 
window.addEventListener('load', function() {
   
  navigator.getUserMedia({
      audio: true
    }, 
    function(stream) {
      var src = window.URL.createObjectURL(stream),
          audio = document.querySelector('audio');
      audio.src = src;      
    }, 
    function(e) {
      console.log(e);
    });
   
}, false);