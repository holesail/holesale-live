export function HomeSection() {
  return (
    <>
      <div className="flex flex-col items-center gap-[10px]">
        <img
          src="./curve--lines-1.svg"
          className="curve--line-1 absolute w-[140px] left-[3%] top-[25%] z-[-1]"></img>
        <img
          src="./curve--lines-2.svg"
          className="curve--line-2 absolute w-[140px] right-[30%] top-[75%] z-[-1]"></img>
        <div className="w-[100vw] flex p-[30px]">
          <div className="upper--content flex flex-col gap-[2.7rem] items-start justify-center h-[70vh]">
            <h1 className="text-[5rem] leading-[5rem]">
              Decentralised and Unified Application Access
            </h1>
            <p className="text-[1.6rem] text-[#7e7e7e] leading-[40px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit id
              omnis tempore sit debitis? Ipsa quos quis est facilis.
            </p>
            <button className="bg-[#000] text-[#fff] text-[2.5rem] p-[1rem] rounded-md">
              Start - It's free
            </button>
          </div>
          <img
            src="./home--img.png"
            className="w-[30vw] object-cover rounded-xl border-[4px] border-[#4f4f4f]"></img>
        </div>
        <img src="./home--img.png" className="w-[90%] px-[1rem]"></img>
      </div>
    </>
  );
}
