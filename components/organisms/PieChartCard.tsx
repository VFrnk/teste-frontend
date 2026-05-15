import dynamic from "next/dynamic";

const ChartPie = dynamic(() => import("@/components/molecules/ChartPie"), { ssr: false });

import { data } from "@/data/salesByCategory";

import Card from "@/components/atoms/Card";

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