import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Cache } from "../../../config/cache";
import { SUCCESFULLY_DELETED_DATA } from "../../../utils/constants";
import { removeData } from "../../../api/data/dataApi";

const useDeleteData = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((dataId: string) => removeData(dataId), {
    onSuccess: () => {
      queryClient.invalidateQueries([Cache.DATA]);
      toast.success(SUCCESFULLY_DELETED_DATA);
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { mutate };
};

export { useDeleteData };
