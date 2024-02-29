import profilePic from './assets/dp.jpeg'

function Card() {
    return (
        <div className='card'>
            <img src={profilePic} alt="profile picture"/>
            <h2>Borge</h2>
            <p>I Am a Developer</p>
        </div>
    )
}

export default Card