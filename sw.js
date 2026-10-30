self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){
  var u=new URL(e.request.url);
  if(e.request.method==="POST"&&u.pathname.slice(-13)==="/share-target"){
    e.respondWith((async function(){
      try{
        var fd=await e.request.formData();
        var files=fd.getAll("fotos").filter(function(f){return f&&f.size});
        var c=await caches.open("tickets-compartidos");
        var old=await c.keys();for(var k=0;k<old.length;k++)await c.delete(old[k]);
        for(var i=0;i<files.length;i++){
          await c.put(new Request(new URL("compartido/"+i,self.registration.scope).href),
            new Response(files[i],{headers:{"Content-Type":files[i].type||"image/jpeg","X-Nombre":encodeURIComponent(files[i].name||"foto")}}));
        }
      }catch(err){}
      return Response.redirect(new URL("./?compartido=1",self.registration.scope).href,303);
    })());
  }
});
