

var connectList = [];
self.addEventListener('connect', function(e){
    var port = e.ports[0];
   
    port.start();
     if(connectList.indexOf(port) === -1){
             connectList.push(port);
        }
    port.addEventListener('message', function(e){
        var worker = e.currentTarget;
        var res = e.data;
       
        
        connectList.forEach((item)=>{
             item.postMessage(res)
        })
    });



})