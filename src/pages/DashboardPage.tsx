import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    title: 'Total Sales',
    value: 'R$ 45,231',
    icon: ShoppingCart,
    trend: '+20.1%',
  },
  {
    title: 'Products',
    value: '204',
    icon: Package,
    trend: '+8 new',
  },
  {
    title: 'Customers',
    value: '2,042',
    icon: Users,
    trend: '+180 this month',
  },
  {
    title: 'Growth',
    value: '24.5%',
    icon: TrendingUp,
    trend: '+4.5% from last month',
  },
];

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.trend}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}