import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Steve McGarrett',
            url: 'https://i.pinimg.com/originals/20/34/a1/2034a1eb392bb85c748f61dd1ca7a4ed.jpg',
        },
        {
            name: 'Danny',
            url: 'https://static.wikia.nocookie.net/hawaiifiveo/images/6/64/Danny_Williams.jpg',
        },
        {
            name: 'Kono',
            url: 'https://www.hollywoodreporter.com/wp-content/uploads/2015/04/grace_park_hawaii_5_0.jpg',
        },
        {
            name: 'Chin',
            url: 'https://static.wikia.nocookie.net/hawaiifiveo/images/c/cd/Season_1_-_Promotional_Images_15.jpg',
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${person.url})`,
                            }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
