import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import './topbar.css';

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const pf = 'http://localhost:5000/images/';

  const handlelogout = () => {
    dispatch({ type: 'LOG_OUT' });
  };

  return (
    <div className="top">
      <div className="topleft">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/ManasRa46019319"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/manas-raj-9287051b1/"
        >
          <i className="fa-brands fa-linkedin"> </i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/manasraj_9669/"
        >
          {' '}
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>

      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link to="/" style={{ textDecoration: 'none' }} className="link">
              Home
            </Link>
          </li>
          <li className="toplistitem">
            <Link
              to="/about"
              style={{ textDecoration: 'none' }}
              className="link"
            >
              About
            </Link>
          </li>
          <li className="toplistitem">
            <Link
              to="/contact"
              style={{ textDecoration: 'none' }}
              className="link"
            >
              Contact
            </Link>
          </li>
          <li className="toplistitem">
            <Link
              to="/write"
              style={{ textDecoration: 'none' }}
              className="link"
            >
              Write
            </Link>
          </li>
          <li className="toplistitem" onClick={handlelogout}>
            {user && 'Logout'}
          </li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <Link to="/settings">
            {' '}
            <img className="topimg" src={pf + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link className="link" to="/login">
                {' '}
                Login
              </Link>
            </li>

            <li className="toplistitem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
