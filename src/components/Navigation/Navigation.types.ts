export interface NavigationProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleAddFolderClick: () => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
