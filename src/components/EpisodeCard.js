import React from "react";
import {Card} from "semantic-ui-react"; 

export default function EpisodeCard(props) {
 
    return (
        <div>
       <Card>
         <Card.Content>
           <Card.Header>{props.data.name}</Card.Header>
           <Card.Meta>
                {props.data.episode} 
              </Card.Meta>
           <Card.Description>
             <p> Air Date: - {props.data.air_date} </p>
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <a>
             {props.data.char} characters
       </a>
         </Card.Content>
       </Card>
     </div>
    );
}