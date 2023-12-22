import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { Cache } from "../../../config/cache";
import { getData } from "../../../api/data/dataApi";
import { DataResponse } from "../../../api/data/data.types";

export const useData = (): UseQueryResult<DataResponse, Error> => {
  return useQuery<DataResponse, Error>([Cache.DATA], () => getData());
};
