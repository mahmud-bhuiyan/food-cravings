import Logo from "../assets/food-cravings.png";
const Footer = () => {
  return (
    <div className="max-container">
      <footer className="footer p-10">
        <aside>
          <img src={Logo} alt="" width={100} height={100} />
          <p>Sharing happiness since 1992</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <footer className="md:flex justify-center md:justify-between footer px-10 py-4 border-t border-base-300">
        <aside className="items-center">
          <p>
            <span className="font-semibold">
              &copy;{new Date().getFullYear()}
            </span>{" "}
            All rights reserved.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <a
            href="https://mahmud-bhuiyan.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className="font-semibold"
          >
            Made With &#10084;&#65039; By -{" "}
            <span className="italic">Mahmud</span>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
