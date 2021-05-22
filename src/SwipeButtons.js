import React from 'react'
import './SwipeButtons.css'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'

function SwipeButtons() {
    const swiped = () => {}
    return (
        <div className="swipeButtons">
            <IconButton onClick={swiped} className="swipeButtons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={swiped} className="swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={swiped} className="swipeButtons__star">
                <StarIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={swiped} className="swipeButtons__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={swiped} className="swipeButtons__lightening">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
