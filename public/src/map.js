(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyCAldCSG4uNp1gZtcFAS7l-Lq20GoYhEJM", v: "weekly"});
        
        // Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 18.7987304, lng: 98.9530296}; //18.7987304,98.9530296
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 17,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
 // Create an image element for the marker
 const bookieImg = document.createElement("img");
  bookieImg.src = './assets/images/BrandName.png';
  bookieImg.height = 40;
  bookieImg.width = 100;

  // Create a div element for the tag
  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = "Hello! This is Bookie!";

  // Combine the image and tag in a single container
  const markerContent = document.createElement("div");
  markerContent.appendChild(tag);
  markerContent.appendChild(bookieImg);
 

  const marker1 = new AdvancedMarkerElement({
    map: map,
    position: { lat: 18.7987400, lng: 98.9530300},
    content : markerContent
  });
}



initMap();