import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FormResult } from '@/components/stepper/result/FormResult';
import { FruitSelection } from '@/components/stepper/steps/FruitSelection';
import { AboutYou } from '@/components/stepper/steps/AboutYou';
import { ImageUpload } from '@/components/stepper/steps/ImageUpload';
import type { FormData } from '@/utils/types/form';

const fruits = [
  { id: 'apple', label: 'Apple' },
  { id: 'banana', label: 'Banana' },
  { id: 'orange', label: 'Orange' },
  { id: 'mango', label: 'Mango' },
  { id: 'strawberry', label: 'Strawberry' },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    selectedOptions: [],
    textInput: '',
    imagePreview: null,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const totalSteps = 3;
  const progress = ((currentStep - 1) / totalSteps) * 100;

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    switch (step) {
      case 1:
        if (formData.selectedOptions.length === 0) {
          newErrors.selectedOptions = 'Please select at least one fruit';
        }
        break;
      case 2:
        if (!formData.textInput.trim()) {
          newErrors.textInput = 'Please tell us about yourself';
        }
        break;
      case 3:
        if (!formData.imagePreview) {
          newErrors.imagePreview = 'Please upload a profile picture';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps + 1));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleOptionChange = (optionId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedOptions: prev.selectedOptions.includes(optionId)
        ? prev.selectedOptions.filter((id) => id !== optionId)
        : [...prev.selectedOptions, optionId],
    }));
  };

  const handleTextChange = (text: string) => {
    setFormData((prev) => ({ ...prev, textInput: text }));
  };

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        imagePreview: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <FruitSelection
            selectedOptions={formData.selectedOptions}
            onOptionChange={handleOptionChange}
            error={errors.selectedOptions}
          />
        );
      case 2:
        return (
          <AboutYou
            textInput={formData.textInput}
            onTextChange={handleTextChange}
            error={errors.textInput}
          />
        );
      case 3:
        return (
          <ImageUpload
            imagePreview={formData.imagePreview}
            onImageChange={handleImageChange}
            error={errors.imagePreview}
          />
        );
      case 4:
        return <FormResult formData={formData} fruits={fruits} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Multi-Step Form</h1>
          <p className="text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </p>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>{renderStep()}</Card>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          {currentStep <= totalSteps && (
            <Button onClick={handleNext}>
              {currentStep === totalSteps ? 'Submit' : 'Next'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm; 