import { Central } from "../../../types/central";

export type TableControlsProps = {
  onEdit: (central: Central) => void;
  centralsFilter: Central[];
};
