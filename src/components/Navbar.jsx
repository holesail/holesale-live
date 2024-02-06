export function Navbar() {
  return (
    <>
      <nav className="p-[2rem] flex justify-between items-center">
        {/* <img className="web--logo" src="./vite.svg"></img> */}
        <h1 className="text-[30px]">holesale.io</h1>
        <ul className="flex gap-[30px] text-[#000] items-center">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li className="border-[1px] p-[10px] border-[#303030] rounded-md">
            <a href="/Login">Get Started</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
