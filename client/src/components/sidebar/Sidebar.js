import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">About Developer</span>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEenlvamJ7SQQ/profile-displayphoto-shrink_800_800/0/1649530137324?e=1656547200&v=beta&t=rc4zvrE_yvkWSY5vKM5I1xPUIPq6HwZQYUjdJVkp8XE"
          alt=""
          className="sidebarimg"
        />
        <p className="aboutme">
          My name is Manas Raj.<br></br>
          Currently I am pursuing Bachelor of technology in MNIT Jaipur<br></br>
          I am 3rd year Electrical engineering Student
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Follow Me</span>
        <div className="sidebarsocial">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ManasRa46019319"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/manas-raj-9287051b1/"
          >
            <i class="fa-brands fa-linkedin"> </i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/manasraj_9669/"
          >
            {' '}
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
