import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const json = [
  {
    avocadoName: "Bacon",
    price: "30",
    description:
      "A smoother-skinned variety with thin, light green skin and a milder less buttery flavor.",
  },
  {
    avocadoName: "Bacon",
    price: "30",
    description:
      "A smoother-skinned variety with thin, light green skin and a milder less buttery flavor.",
  },
  {
    avocadoName: "Bacon",
    price: "30",
    description:
      "A smoother-skinned variety with thin, light green skin and a milder less buttery flavor.",
  },
  {
    avocadoName: "Bacon",
    price: "30",
    description:
      "A smoother-skinned variety with thin, light green skin and a milder less buttery flavor.",
  },
  {
    avocadoName: "Bacon",
    price: "30",
    description:
      "A smoother-skinned variety with thin, light green skin and a milder less buttery flavor.",
  },
];

export function ProductsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {json.map((data) => (
          <TableRow key={data.avocadoName}>
            <TableCell className="font-medium">{data.avocadoName}</TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell>{data.description}</TableCell>
            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
  );
}
