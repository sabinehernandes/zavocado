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
import { getAvocados } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface Avocado {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export function ProductsList() {
  const {
    data: avocados,
    error,
    isLoading,
  } = useQuery<Avocado[]>({
    queryKey: ["avocados"],
    queryFn: getAvocados,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading avocados</p>;

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
        {avocados?.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{data.name}</TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell>{data.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
