

button.addEventListener('click', () => {

    let functionName='wang'+parseInt(Math.random()*100000000,10)
    window[functionName]=function(result){
        if (result === "succed"){
            let mount = parseInt(amount.innerText, 10);
            mount--;
            amount.innerText = mount;
            delete window[functionName]
        }else{
            delete window[functionName]
        }
    }
    

    let script=document.createElement('script');
    script.src = `http://localhost:8002/path?callback=${functionName}`;
    document.body.appendChild(script);

    
    script.onload=function(e){

        e.currentTarget.remove();
        /*
        let mount = parseInt(amount.innerText, 10);
        mount--;
        amount.innerText = mount;
        let innerScript=document.querySelector('script[src="./path"]')
        document.body.removeChild(innerScript);
        */
        
    }
    script.onerror=function(e){
        e.currentTarget.remove();
    }

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
   

})