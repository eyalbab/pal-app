import logo from '../images/PalLogoV3.png'
import roundLogo from '../images/PalLogoRound.png'
import whiteLogo from '../images/PalLogoWhite.png'

const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

const handleClick = () =>{
    setShowModal(true)
    setIsSignUp(false)
}

const authToken = false

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? logo : whiteLogo} />
            </div>

            {!authToken && !minimal &&
            <button className='nav-button'
            onClick={handleClick}
            disabled={showModal}
            >Log in</button>}
        </nav>
    )
}

export default Nav