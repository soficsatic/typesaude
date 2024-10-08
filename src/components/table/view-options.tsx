import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Columns } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

interface TableViewOptionsProps {}

export function TableViewOptions({}: TableViewOptionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant={"outline"} className="h-10">
          <Columns className="h-4 w-4 mr-2" /> Colunas
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ScrollArea className="h-60">
          <DropdownMenuLabel>Colunas</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Todas</DropdownMenuItem>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
