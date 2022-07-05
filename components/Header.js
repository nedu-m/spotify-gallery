import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Random</span> Artists
      </h1>
      <p className={headerStyles.description}>
        Know your favorites artists and get random artists to follow.
      </p>
    </div>
  );
};

export default Header;
