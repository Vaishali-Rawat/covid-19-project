function updatethemap() {
    console.log("UPdating map in every 2 seconds");
    fetch("/Cdata.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                dead = element.dead;
                if (dead > 40000) {
                    color = 'rgb(255,0,0)'
                }
                else{
                    color = `rgb(${dead /1000},0,0)` 
                }
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        });
}
setInterval(updatethemap,20000);
updatethemap();