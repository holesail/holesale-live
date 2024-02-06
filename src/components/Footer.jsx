export function Footer() {
  return (
    <>
      <div className="relative w-[100vw] h-[40vh] mt-[20rem] gap-[20px] flex flex-col items-start justify-center">
        <img
          src="https://assets-global.website-files.com/6580d1883c8fa1a3c4e6e3fd/65824362623e756b16352cd0_StickyFooter.svg"
          className="absolute z-[-1]"></img>
        <h1 className="text-[5rem] px-[2rem]">It's time to be limitless</h1>
        <h1 className="px-[2rem]">Let's Connect</h1>
        <span className="px-[2rem] flex gap-[20px]">
          <a href="/">
            <img className="w-[30px] brightness-0" src="./discord.svg"></img>
          </a>
          <a href="/">
            <img className="w-[30px] brightness-0" src="./github.svg"></img>
          </a>
          <a href="/">
            <img className="w-[30px] brightness-0" src="./linkedin.svg"></img>
          </a>
        </span>
        <button className="bg-[#000] ml-[2rem] text-[#fff] text-[2.5rem] p-[1rem] rounded-md">
          Get Feedback - It's free
        </button>
      </div>
    </>
  );
}
