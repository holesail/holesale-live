import { useEffect, useState } from "react";

export function AdminPanel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    jQuery.ajax({
      url: "https://holesale.live/api/ports.php",
      type: "GET",
      dataType: "json",
      success: function (data) {
        setData(JSON.parse(data)); // parse the data
      },
      error: function (xhr, status, error) {
        console.error(error);
      },
    });
  }, []);
  console.log(data);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-[4rem]">Holesale Panel</h1>
        <table className="flex flex-col w-[80vw] justify-between">
          <thead>
            <tr className="flex w-[100%] justify-between">
              <th scope="col" className="text-[24px] text-[#c7c7c7] px-4">
                ID
              </th>
              <th scope="col" className="text-[24px] text-[#c7c7c7] px-4">
                Protocol
              </th>
              <th scope="col" className="text-[24px] text-[#c7c7c7] px-4">
                IP Address
              </th>
              <th scope="col" className="text-[24px] text-[#c7c7c7] px-4">
                Port
              </th>
              <th scope="col" className="text-[24px] text-[#c7c7c7] px-4">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="flex w-[100%] justify-between text-[24px]">
                <td className="px-4">{item.id}</td>
                <td className="px-4">{item.protocol}</td>
                <td className="px-4">{item.ip_address}</td>
                <td className="px-4">{item.port}</td>
                <td className="px-4">❌</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
