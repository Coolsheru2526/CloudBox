"use client"

import { FileType } from "@/typings";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { FileIcon, defaultStyles } from 'react-file-icon';
import prettyBytes from "pretty-bytes";
import { COLOR_EXTENSION_MAP } from "@/constant";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ renderValue }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            // @ts-ignore
            {...defaultStyles[extension]}
          />
        </div>
      );
    }
  },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    }
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue }) => {
      const url = renderValue() as string | null;
      if (!url) {
        return <span>No link available</span>;
      }
      return (
        <Link href={url} target="_blank" className="underline text-blue-500 hover:text-blue-600">
          Download
        </Link>
      );
    }
  },
];
