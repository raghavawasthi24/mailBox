import React from "react";
import { InputProps } from "../ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-8 items-center rounded-md border border-input pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1",
          className
        )}
      >
        <SearchIcon className="h-[16px] w-[16px]" />
        <input
          {...props}
          type="search"
          ref={ref}
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-transparent"
        />
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };
