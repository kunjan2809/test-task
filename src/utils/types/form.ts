export interface FormData {
  selectedOptions: string[];
  textInput: string;
  imageFile?: File | null;
  imagePreview: string | null;
}

export interface FormStep {
  id: number;
  title: string;
  isCompleted: boolean;
} 