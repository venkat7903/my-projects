import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        alt="profile"
        src="https://res.cloudinary.com/duyhbrsgi/image/upload/v1694954355/passport_photo_qdqoft.jpg"
      />
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
