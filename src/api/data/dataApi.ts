import { get, post, remove } from "../../config/requests";
import { DATA_API, UPLOAD_FILE_API, FOLDERS } from "../../utils/api";
import { DataObject, DataResponse } from "./data.types";

export const getData = (): Promise<DataResponse> => {
  return get(DATA_API);
};

export const uploadFile = (data: FormData): Promise<DataResponse> => {
  return post(`${UPLOAD_FILE_API}`, data);
};

export const createFolder = (data: DataObject): Promise<DataResponse> => {
  return post(`${FOLDERS}`, data);
};

export const removeData = (dataName: string): Promise<DataResponse> => {
  return remove(`${DATA_API}/${dataName}`);
};
