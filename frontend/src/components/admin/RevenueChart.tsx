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
  { month: "January", hass: 186, others: 80 },
  { month: "February", hass: 138, others: 200 },
  { month: "March", hass: 118, others: 120 },
  { month: "April", hass: 73, others: 190 },
  { month: "May", hass: 209, others: 130 },
  { month: "June", hass: 250, others: 140 },
  { month: "July", hass: 323, others: 120 },
  { month: "August", hass: 279, others: 190 },
  { month: "September", hass: 248, others: 130 },
  { month: "October", hass: 200, others: 140 },
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
    <Card>
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
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Revenue for October is €340K <TrendingDown className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total revenue for the last 10 months
        </div>
      </CardFooter>
    </Card>
  );
}
