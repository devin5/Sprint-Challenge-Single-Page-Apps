import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard"




const items = [
      {
        header: 'London',
        description:
          'this is the most beautiful place that you could ever hope to be able to,',
        meta: 'ROI: 30%',
      },
      {
        header: 'Orlando',
        description:
          'this is the most beautiful place that you could ever hope to be able to,',
        meta: 'ROI: 34%',
      },
      {
        header: 'oklahoma',
        description:
          'this is the most beautiful place that you could ever hope to be able to,',
        meta: 'ROI: 27%',
      },
      {
        header: 'London',
        description:
          'this is the most beautiful place that you could ever hope to be able to,',
        meta: 'ROI: 30%',
      },
      {
        header: 'Orlando',
        description:
          'this is the most beautiful place that you could ever hope to be able to,',
        meta: 'ROI: 34%',
      },
      {
        header: 'oklahoma',
        description:
          'this is the most beautiful place that you could ever hope to be able to,',
        meta: 'ROI: 27%',
      },
    ]
    

export default function LocationsList() {
      // TODO: Add useState to track data from useEffect
      
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        
      return (
        <section className="character-list grid-view">
            {/* <h2>TODO: `array.map()` over your state here!</h2> */}
            {
              items.map( location => (
                <LocationCard  data={location}  />
              ))
            }
          </section>
        
      );
    } 