export function Navbar() {
  const links = [
    { link: "About Us" },
    { link: "Contact Us" },
    { link: "Join Us" },
  ];

  return (
    <>
      <nav className="p-[2rem] flex justify-between border-b-[1px] border-[#2a2a2a]">
        <img className="web--logo" src="./vite.svg"></img>
        <ul className="flex gap-[30px] text-[#777]">
          {links.map((link, index) => (
            <li key={index} className="hover:text-[#eee] transition-[400]">
              <a href="/">{link.link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
