import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { uploadFile } from "../../../api/data/dataApi";
import { Cache } from "../../../config/cache";
import { SUCCESFULLY_UPLOADED_FILE } from "../../../utils/constants";

const useUploadFile = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(uploadFile, {
    onSuccess: () => {
      queryClient.invalidateQueries([Cache.DATA]);
      toast.success(SUCCESFULLY_UPLOADED_FILE);
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { mutate };
};

export { useUploadFile };
