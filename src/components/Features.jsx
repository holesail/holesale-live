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
    <div className="flex justify-center relative">
      <img
        src="https://media-private.canva.com/FinDs/MAFjK3FinDs/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20240204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240204T155946Z&X-Amz-Expires=96630&X-Amz-Signature=cfd76242865a399af3fa8baf7d72e9cfd1518a47006cc9c2c26bbd649d592387&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2005%20Feb%202024%2018%3A50%3A16%20GMT"
        className="curve--line-3 absolute w-[200px] left-[3%]"></img>
      <img
        src="https://media-public.canva.com/vLz5I/MAFi9JvLz5I/1/tl.png"
        className="curve--line-4 absolute w-[140px] right-[13%]"></img>
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
