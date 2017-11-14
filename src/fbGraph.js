(function(exports){
  function fbGraph(){
    this.connected =false;
    this.start = function(w){
      w.fbAsyncInit = function() {
        FB.init({
          appId            : '1654660361262015',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v2.11'
        });
        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            (console.log('Logged in.') && (this.connected = true));
          } else {
            console.log('Logging in.');
            FB.login();
            this.connected = true;
          };
        });
      };
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    };
  };
  exports.fbGraph = fbGraph;
})(this);
