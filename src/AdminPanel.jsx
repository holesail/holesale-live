import { useEffect, useState } from "react";
import axios from "axios";

export function AdminPanel() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  });

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
            {jokes.map((item) => (
              <tr
                key={item.id}
                className="flex w-[100%] justify-between text-[24px]">
                <td className="px-4">{item.id}</td>
                <td className="px-4">{item.id}</td>
                <td className="px-4">{item.id}</td>

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
