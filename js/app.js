// FASE DE REGISTRO

if ('serviceWorker' in navigator){

    window.addEventListener("load", ()=>{

        navigator.serviceWorker.register("../sw.js").
        then((data)=>{



          //  console.log('data then :>>', data);
        }).catch((data)=>{
           // console.log('data catch :>>', data);
    })
}); 
}


