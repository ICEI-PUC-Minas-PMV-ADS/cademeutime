import { useEffect, useRef } from "react";

function EventMap({
    center,
    zoom,
  }) {
    const ref = useRef();
  
    useEffect(() => {
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        panControl: false,
        mapTypeControl: false,
        streetViewControl: false
      });

      const input = document.getElementById("local");
      const options = {
        fields: ["formatted_address", "geometry", "name"],
        strictBounds: false,
      };

      const autocomplete = new window.google.maps.places.Autocomplete(input, options);
      autocomplete.bindTo("bounds", map);

      const marker = new google.maps.Marker({
        map,
        position: center,
      });

      marker.setVisible(false);
      
      autocomplete.addListener("place_changed", async () => {
        marker.setVisible(false);
    
        const place = autocomplete.getPlace();
    
        if (!place.geometry || !place.geometry.location)
          throw new Error("No details available for input: '" + place.name + "'");
        
    
        // If the place has a geometry, then present it on a map.
        const localizacao = `${place.geometry.location.lat()}, ${place.geometry.location.lng()}`;
        document.getElementById("latlng").value = localizacao;
        
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
    
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);        
      });

    });
  
    return <div ref={ref} id="map" />;
  }

  export {EventMap};