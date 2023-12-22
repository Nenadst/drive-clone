interface CombinedDataTypes {
  name: string;
  dateModified: string;
  size: number;
}

export interface DataTableProps {
  data: CombinedDataTypes[] | undefined;
  handleDeleteData: (dataId: string) => void;
}
