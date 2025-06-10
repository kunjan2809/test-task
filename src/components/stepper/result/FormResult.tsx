import { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import type { FormData } from '@/utils/types/form';

interface FormResultProps {
    formData: FormData;
    fruits: Array<{ id: string; label: string }>;
}

export const FormResult = ({ formData, fruits }: FormResultProps) => (
    <>
        <CardHeader>
            <CardTitle>Form Submission Results</CardTitle>
            <CardDescription>Thank you for completing the form!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="space-y-4">
                <div>
                    <Label className="text-lg font-semibold">Favorite Fruits:</Label>
                    <ul className="mt-2 list-disc pl-5">
                        {formData.selectedOptions.map((optionId) => (
                            <li key={optionId}>
                                {fruits.find((fruit) => fruit.id === optionId)?.label}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <Label className="text-lg font-semibold">About You:</Label>
                    <p className="mt-2 p-4 bg-muted rounded-md">{formData.textInput}</p>
                </div>

                {formData.imagePreview && (
                    <div>
                        <Label className="text-lg font-semibold">Profile Picture:</Label>
                        <img
                            src={formData.imagePreview}
                            alt="Profile"
                            className="mt-2 max-w-md rounded-md border"
                        />
                    </div>
                )}
            </div>
        </CardContent>
    </>
); 