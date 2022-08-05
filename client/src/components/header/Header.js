import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.garyvaynerchuk.com/wp-content/uploads/150624-The_Current_state_of_blogging_1200x628-01.png"
        alt=""
      />
    </div>
  );
}
