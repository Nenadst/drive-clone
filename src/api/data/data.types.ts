export interface DataResponse {
  files: Files[];
  folders: Folders[];
}

interface Files {
  name: string;
  dateModified: string;
  size: number;
}
interface Folders {
  name: string;
  dateModified: string;
  size: number;
}

export interface DataObject {
  folderName: string;
}
