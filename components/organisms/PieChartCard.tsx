import { data } from "@/data/salesByCategory";

import Card from "@/components/atoms/Card";
import ChartPie from "@/components/molecules/ChartPie";

export default function PieChartCard() {
  return (
    <Card className="w-1/2">
      <h2 className="text-lg font-bold  mb-2">
        Vendas por Categoria
      </h2>
      <ChartPie data={data} />
    </Card>
  )
}