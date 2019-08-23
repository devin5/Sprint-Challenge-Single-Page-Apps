import React from 'react'
import { Card } from 'semantic-ui-react'


const LocationCard = (props) => 
<Card>
  <Card.Content>
    <Card.Header>{props.data.header}</Card.Header>
    <Card.Meta>{props.data.meta}</Card.Meta>
    <Card.Description>
    {props.data.description}
    </Card.Description>
  </Card.Content>
</Card>


export default LocationCard
