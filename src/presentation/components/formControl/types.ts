export type CentralFormData = {
  id?: number;
  name: string;
  mac: string;
  modelId: number;
};

export interface FormControlProps {
  initialData?: Partial<CentralFormData>;
  onClose: () => void;
}
