

button.addEventListener('click', () => {



    
    

    /* let functionName='wang'+parseInt(Math.random()*100000000,10)
    window[functionName]=function(result){
        if (result === "succed"){
            let mount = parseInt(amount.innerText, 10);
            mount--;
            amount.innerText = mount;
            
        }else{
           
        }
    } */
    

   /*  let script=document.createElement('script');
    script.src = `http://localhost:8002/path?callback=${functionName}`;
    document.body.appendChild(script);

    
    script.onload=function(e){
        delete window[functionName]
        e.currentTarget.remove(); */
        /*
        let mount = parseInt(amount.innerText, 10);
        mount--;
        amount.innerText = mount;
        let innerScript=document.querySelector('script[src="./path"]')
        document.body.removeChild(innerScript);
        */
    /*     
    }
     */
   /*  script.onerror=function(e){
        delete window[functionName]
        e.currentTarget.remove();
    }
 */
/*
    let img =document.createElement('img');
    img.src = "./path";
    img.onload=function(){
        //alert("付款成功")
        //window.location.reload();
        amount.innerText--;
    }
    img.onerror=function(){
        alert("付款失败")
    }
*/
   $.ajax({
       url: "http://localhost:8001/path",

       // The name of the callback parameter, as specified by the YQL service
       jsonp: "callback",

       // Tell jQuery we're expecting JSONP
       dataType: "jsonp",

       // Tell YQL what we want and that we want JSON
       /* data: {
           q: "select title,abstract,url from search.news where query=\"cat\"",
           format: "json"
       }, */

       // Work with the response
       success: function (response) {
           console.log(response); // server response
       }
   });

})