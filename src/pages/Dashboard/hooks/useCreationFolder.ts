import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createFolder } from "../../../api/data/dataApi";
import { Cache } from "../../../config/cache";
import { SUCCESFULLY_CREATED_FOLDER } from "../../../utils/constants";

const useCreationFolder = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createFolder, {
    onSuccess: () => {
      queryClient.invalidateQueries([Cache.DATA]);
      toast.success(SUCCESFULLY_CREATED_FOLDER);
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { mutate };
};

export { useCreationFolder };
