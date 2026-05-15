import dynamic from "next/dynamic";

const ChartLine = dynamic(() => import("@/components/molecules/ChartLine"), { ssr: false });

import { data } from "@/data/salesPerMonth";

import Card from "@/components/atoms/Card";

export default function LineChartCard() {
  return (
    <Card className="w-full items-center">
      <h2 className="text-lg font-bold">Vendas Realizadas por Mês</h2>
      <h2 className="text-sm text-white/70 mb-2">nos últimos 12 meses</h2>
      <ChartLine data={data} />
    </Card>
  )
}