(function(exports){
  function DataFetcher(){
    this.lastName = null;
    this.getLastUser = function(){
      FB.api('/me', {fields: 'last_name'}, function(response) {
        this.lastName = response['last_name']
        console.log(this.lastName); // just for visability
      });
    };
  };
  exports.DataFetcher = DataFetcher;
})(this);
