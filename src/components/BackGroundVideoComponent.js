import { withTheme } from '@emotion/react'
import videoBg from '../assets/videoBg.mp4'


export default function BackGroundVideoComponent() {


    return (
        <div style={videobgStyles}>
            <video src={videoBg} autoPlay loop muted style={videoStyles} />

            <div style={greetingMessage}>
                <h1>Benvindo ao nhaDocs</h1>
                <p>O melhor criador de curriculum vitae online!</p>
            </div>
        </div>
    )
}

const videobgStyles = {
    width: '100%',
    height: '100%',
}

const videoStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}

const greetingMessage = {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',


}