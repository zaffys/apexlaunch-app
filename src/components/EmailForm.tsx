import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});
type FormValues = z.infer<typeof formSchema>;
export function EmailForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });
  const {
    formState: { isSubmitting },
  } = form;
  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }
      const result = await response.json();
      if (result.success) {
        toast.success('Thank you for subscribing!', {
          description: 'We\'ll keep you updated on our launch.',
        });
        form.reset();
      } else {
        throw new Error(result.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      toast.error('Subscription failed.', {
        description: error instanceof Error ? error.message : 'Please check your connection and try again.',
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1 w-full">
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className="h-12 text-base"
                    aria-label="Email address"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto h-12 px-6 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              'Get Early Access'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}