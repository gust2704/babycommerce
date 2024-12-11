import { cn } from '@/lib/utils';
import { BabyIcon } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <BabyIcon className="h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold text-primary ml-2">BabyCommerce</h1>
        </div>
        <div className={cn(
          "bg-white p-8 rounded-lg shadow-md",
          "border border-muted"
        )}>
          {children}
        </div>
      </div>
    </div>
  );
}