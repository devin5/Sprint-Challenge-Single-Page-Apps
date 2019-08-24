import React, {  useState } from "react";
import CharacterCard from "./CharacterCard";


 const Person = [
  { id: 0,
  firstName: "John",
  lastName: "Doe",
  age: 50,
  description: "john is a 20 year old mechanic",
  friends: 23,
  src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'},
  
  { id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 50,
    description: "john is a 20 year old mechanic",
    friends: 23,
    src: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg'},
    { id: 2,
      firstName: "John",
      lastName: "Doe",
      age: 50,
      description: "john is a 20 year old mechanic",
      friends: 23,
      src: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'},
      { id: 3,
        firstName: "John",
        lastName: "Doe",
        age: 50,
        description: "john is a 20 year old mechanic",
        friends: 23,
        src: 'https://react.semantic-ui.com/images/avatar/large/jenny.jpg'},
        { id: 4,
          firstName: "John",
          lastName: "Doe",
          age: 50,
          description: "john is a 20 year old mechanic",
          friends: 23,
          src: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          },
          { id: 5,
            firstName: "John",
            lastName: "Doe",
            age: 50,
            description: "john is a 20 year old mechanic",
            friends: 23,
            src: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'}
  
  ]



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  
  
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
  return (
    <section className="character-list grid-view">
        {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        {
          Person.map(character => (
            <CharacterCard key={character.id} data={character}  />
          ))
        }
      </section>
    
  );
} 