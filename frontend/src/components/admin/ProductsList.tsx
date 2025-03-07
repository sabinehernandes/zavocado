import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteAvocado, getAvocados } from "@/services/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Avocado {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export function ProductsList() {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const {
    data: avocados,
    error,
    isLoading,
  } = useQuery<Avocado[]>({
    queryKey: ["avocados"],
    queryFn: getAvocados,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteAvocado,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["avocados"] });
    },
  });

  const handleRowClick = (id: string) => {
    setSelectedRow(selectedRow === id ? null : id);
  };

  const handleDelete = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    deleteMutation.mutate(id);
  };

  //if (isLoading) return toast.loading("Loading items...");
  if (isLoading) return <div>Loading items...</div>;
  if (error) return toast.error("Error fetching items. Please try again later");

  return (
    <>
      <Toaster toastOptions={{ duration: 7000 }} />
      <div className="border-2 border-gray-200 rounded-xl p-4 shadow-md font-light max-h-[650px] overflow-auto">
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-bold text-base">
                Name
              </TableHead>
              <TableHead className="font-bold text-base">Price</TableHead>
              <TableHead className="font-bold text-base">Description</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {avocados?.map((data) => (
              <TableRow
                key={data.id}
                onClick={() => handleRowClick(data.id)}
                className={`cursor-pointer h-16 text-stone-600 ${selectedRow === data.id ? "bg-zinc-100/50" : ""}`}
              >
                <TableCell className="font-medium">{data.name}</TableCell>
                <TableCell>{data.price}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell className="w-[70px] h-16 text-center">
                  {selectedRow === data.id ? (
                    <button
                      onClick={(event) => handleDelete(data.id, event)}
                      className="bg-red-700 text-white rounded text-sm px-2 py-1 w-full"
                    >
                      Delete
                    </button>
                  ) : (
                    <img
                      src="/menu-kebab.svg"
                      alt="menu"
                      className="w-6 h-6 mx-auto cursor-pointer"
                    />
                  )}
                </TableCell>

                {/* <TableCell>
                  {selectedRow === data.id && (
                    <button
                      onClick={(event) => handleDelete(data.id, event)}
                      className="bg-red-700 text-white rounded px-2 py-1"
                    >
                      Delete
                    </button>
                  )}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </div>
    </>
  );
}
