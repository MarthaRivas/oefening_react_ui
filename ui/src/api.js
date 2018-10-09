function testApi(name, callback) {
    var oReq = new XMLHttpRequest()
    oReq.addEventListener("load", function () {
      const response = JSON.parse(this.responseText)
      callback(response)
    })
   
    oReq.open("GET", "/api/" + name)
    oReq.send();
   }
   
   testApi("react", data => console.log(data))