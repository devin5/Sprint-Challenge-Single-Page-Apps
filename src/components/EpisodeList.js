import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard"; 


export default function EpisodeList(props) {

  const episodedata = [
        {   id: 0 ,
            name: "episode 1",
            epsiode: '1-1',
            air_date: "33-4-43",
            char: 5

        },
        {   id:1 ,
            name: "episode 1",
            epsiode: '1-1',
            air_date: "33-4-43",
            char: 5

        },
        {   id: 2 ,
            name: "episode 1",
            epsiode: '1-1',
            air_date: "33-4-43",
            char: 5

        },
        {   id: 3 ,
            name: "episode 1",
            epsiode: '1-1',
            air_date: "33-4-43",
            char: 5

        },
        {   id: 4 ,
            name: "episode 1",
            epsiode: '1-1',
            air_date: "33-4-43",
            char: 5

        },
        {   id: 5 ,
            name: "episode 1",
            epsiode: '1-1',
            air_date: "33-4-43",
            char: 5

        },

  ]

  

  
  return (
    
      <section className="episode-list grid-view">
        {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        {
          episodedata.map(episode => (
            <EpisodeCard key={episode.id} data={episode}  />
          ))
        }
      </section>

  );
} 