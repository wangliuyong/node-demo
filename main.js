

button.addEventListener('click', () => {

    let script=document.createElement('script');
    script.src="./path";
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