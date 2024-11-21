"use client";

import { TrendingDown } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", hass: 18.6, others: 8 },
  { month: "February", hass: 13.8, others: 20 },
  { month: "March", hass: 11.8, others: 12 },
  { month: "April", hass: 7.3, others: 19 },
  { month: "May", hass: 20.9, others: 13 },
  { month: "June", hass: 25, others: 14 },
  { month: "July", hass: 32.3, others: 12 },
  { month: "August", hass: 27.9, others: 19 },
  { month: "September", hass: 24.8, others: 13 },
  { month: "October", hass: 20, others: 14 },
];

const chartConfig = {
  hass: {
    label: "Hass",
    color: "hsl(var(--chart-1))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card className="chart-container text-stone-600">
      <CardHeader className="text-center">
        <CardTitle>Revenue (in €K)</CardTitle>
        <CardDescription>January - October 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="hass" fill="var(--color-hass)" radius={4} />
            <Bar dataKey="others" fill="var(--color-others)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Revenue for October is €34K <TrendingDown className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total revenue for the last 10 months
        </div>
      </CardFooter>
    </Card>
  );
}
