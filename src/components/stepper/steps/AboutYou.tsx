import { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface AboutYouProps {
  textInput: string;
  onTextChange: (text: string) => void;
  error?: string;
}

export const AboutYou = ({ textInput, onTextChange, error }: AboutYouProps) => (
  <div className="space-y-6">
    <CardHeader>
      <CardTitle>Tell Us About Yourself</CardTitle>
      <CardDescription>Share your thoughts and experiences</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <Textarea
          placeholder="Write something about yourself..."
          value={textInput}
          onChange={(e) => onTextChange(e.target.value)}
          className="min-h-[150px]"
        />
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