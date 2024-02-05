export function Features() {
  const features = [
    {
      ftr: "One Click Deployement",
    },
    {
      ftr: "expose unlimited ports",
    },
    {
      ftr: "free and open source",
    },
    {
      ftr: "bypass any network firewall",
    },
    {
      ftr: "secure like a vpn",
    },
    {
      ftr: "built for developers",
    },
    {
      ftr: "Decentralised",
    },
    {
      ftr: "powered by holepunch.to",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center py-[10rem] w-[60vw]">
        <h1 className="text-[4rem]">Our Features</h1>
        <p className="text-center text-[23px] text-[#7e7e7e]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          corrupti doloremque quis, sequi maxime doloribus. Iste, corporis!
          Perferendis, sit minima. Eum rerum eius asperiores ullam laudantium.
          Alias ab maiores aliquid.
        </p>
        <div className="flex flex-wrap py-[2rem] gap-[10px] justify-center">
          {features.map((feature, index) => {
            return (
              <span
                className="chip flex items-center gap-2 uppercase border border-[#000] rounded-[50px] p-[4px]"
                key={index}>
                <img
                  className="w-[30px]"
                  src="https://assets-global.website-files.com/6580d1883c8fa1a3c4e6e3fd/65872690a6298c932cac271a_Check%20-black.svg"
                  alt={`Feature ${index + 1}`}
                />
                <p className="text-[23px]">{feature.ftr}</p>
              </span>
            );
          })}
        </div>
        <button className="bg-[#000] text-[#fff] text-[2.5rem] p-[1rem] rounded-md">
          Get feedback - It's free
        </button>
      </div>
    </div>
  );
}
