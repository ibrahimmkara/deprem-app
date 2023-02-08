import { useQuery } from "@tanstack/react-query";
import useInterceptor from "../../hooks/use-interceptor";

export const useGetTransferQuery = () => {
  const api = useInterceptor();

  const service = () => api.get("/Transfers.json?v=1");

  return useQuery(["transfer"], () => service());
};
