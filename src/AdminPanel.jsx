export function AdminPanel() {
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
                Name
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
            <tr className="flex w-[100%] justify-between text-[24px]">
              <td className="px-4">1</td>
              <td className="px-4">panel</td>
              <td className="px-4">tcp</td>
              <td className="px-4">0.0.0.0/0</td>
              <td className="px-4">8090</td>
              <td className="px-4">❌</td>
            </tr>
            <tr className="flex w-[100%] justify-between text-[24px]">
              <td className="px-4">2</td>
              <td className="px-4">http</td>
              <td className="px-4">tcp</td>
              <td className="px-4">0.0.0.0/0</td>
              <td className="px-4">8090</td>
              <td className="px-4">❌</td>
            </tr>
            <tr className="flex w-[100%] justify-between text-[24px]">
              <td className="px-4">3</td>
              <td className="px-4">https</td>
              <td className="px-4">tcp</td>
              <td className="px-4">0.0.0.0/0</td>
              <td className="px-4">8090</td>
              <td className="px-4">❌</td>
            </tr>
            <tr className="flex w-[100%] justify-between text-[24px]">
              <td className="px-4">4</td>
              <td className="px-4">ftp</td>
              <td className="px-4">tcp</td>
              <td className="px-4">0.0.0.0/0</td>
              <td className="px-4">8090</td>
              <td className="px-4">❌</td>
            </tr>
            <tr className="flex w-[100%] justify-between text-[24px]">
              <td className="px-4">5</td>
              <td className="px-4">smtp</td>
              <td className="px-4">tcp</td>
              <td className="px-4">0.0.0.0/0</td>
              <td className="px-4">8090</td>
              <td className="px-4">❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
