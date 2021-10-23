
//FASE DOS INSTALACION DEL SW


//let self =this;    
/*
 self.addEventListener('install', () =>{
    console.log('SW instalado');

}) 


//ACTIVACION DEL SW

 self.addEventListener('activate', () =>{
    console.log('SW Activado');
})

*/
var nameChache = "mascotas";
var files = [
    "/", 
    "/style.css", 
    "/index.js", 
    "/reset.css"
];

self.addEventListener("install", function (event) {
  event.waitUntil(

    caches.open(nameChache).then(function (cache) {
      console.log("Cache Opened");
      return cache.addAll(files);
    })
  );
});

self.addEventListener( "fetch", (eventFetch) =>{




    // estrategias cache
//1.  cache only :la aplicacion solo va a responder lo que se encuentre en cache
// es cuando quiero que los datos esten listos en uh sitio estatico.

//    eventFecth.respondWith(
//        caches.match(eventFetch.request)
//   

/*2 Network only: Las aplicacion solamente va a responder la misma peticion
// sirve cuando  

    eventFetch.respondWith
    (fetch(eventFetch.request));
}) */

// 3. Cache first: Primero se va a buscar las peticiones al cache y e caso de que no esten
// se va a la red.

/*const res = caches.match(eventFetch.request)
        .then(cacheResponse => {

                if (cacheResponse){
                    return cacheResponse;
                } else {
                    return fetch(eventFetch.request)
                } 

                return cacheResponse ? cacheResponse : fetch(eventFetch.resquest)
            })
        .cath(cacheError => {
            console.error('catch Error', cacheError);
        });

eventFetch.respondWith(res); */

// 4. Network firts: Primero hace un fetch a buscar ebn al red, si nolos encuentgra
// los buscara en el cache


const res = fetch(eventFetch.request)
        .then(networkResponse => {

         //       if (networkResponse){
         //           return networkResponse;
         //     } else {
         //       return caches.match(eventFetch.request)
         // } 

                return networkResponse ? networkResponse : caches.match(eventFetch.request)
            })
        .catch(networkError => {
            console.error('Networ Error', networkError);
        });

eventFetch.respondWith(res);





});



/*

self.addEventListener('install', result =>{

    let nameCache ='mascotas'
    let files = [
    'index.html',
    'style.css', 
    'reset.css',
   
    ]
    caches.open('nameCache')
    .then(cache =>{
        return cache.addAll(files)
    })
    .catch(()=>{
        console.log('algo salio mal')
    })
})

self.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((param)=>{
            if(param){
                return param
            }
            return fetch(event.request)
        })
    )
})

*/