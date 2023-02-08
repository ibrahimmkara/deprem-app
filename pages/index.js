import { useGetTransferQuery } from "../src/services/transfer-list/get-transfer-query";

export default function Home() {
  const request=useGetTransferQuery();
  console.log(request?.data?.data)
  return (
    <div className="bg-black text-white ">
      <span>Bir iki</span>
    </div>
  );
}
