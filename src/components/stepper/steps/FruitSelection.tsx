import { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface FruitSelectionProps {
  selectedOptions: string[];
  onOptionChange: (optionId: string) => void;
  error?: string;
}

const fruits = [
  { id: 'apple', label: 'Apple' },
  { id: 'banana', label: 'Banana' },
  { id: 'orange', label: 'Orange' },
  { id: 'mango', label: 'Mango' },
  { id: 'strawberry', label: 'Strawberry' },
];

export const FruitSelection = ({ selectedOptions, onOptionChange, error }: FruitSelectionProps) => (
  <div className="space-y-6">
    <CardHeader>
      <CardTitle>Select Your Favorite Fruits</CardTitle>
      <CardDescription>Choose all the fruits you enjoy eating</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="flex items-center space-x-2">
            <Checkbox
              id={fruit.id}
              checked={selectedOptions.includes(fruit.id)}
              onCheckedChange={() => onOptionChange(fruit.id)}
            />
            <Label htmlFor={fruit.id}>{fruit.label}</Label>
          </div>
        ))}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>
    </CardContent>
  </div>
); 