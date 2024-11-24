import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardCharts } from '@/components/dashboard/charts';
import { RecentTransactions } from '@/components/dashboard/recent-transactions';
import { KpiCards } from '@/components/dashboard/kpi-cards';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader />
      <KpiCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCharts />
        <RecentTransactions />
      </div>
    </div>
  );
}