import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

export type CategorySalesSlice = { name: string; sales: number; fill: string };

interface ChartPieProps {
  data: CategorySalesSlice[];
}

export default function ChartPie({ data }: ChartPieProps) {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="sales"
            innerRadius="70%"
            outerRadius="100%"
            paddingAngle={10}
            fill="#8884d8"
          />
          <Tooltip
            contentStyle={{ backgroundColor: 'var(--color-background)' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}