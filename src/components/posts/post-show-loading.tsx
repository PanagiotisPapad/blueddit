import { Skeleton } from "@nextui-org/react";

export default function PostShowLoading() {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="h-8 w-full" />
      </div>
      <div className="p-4 border rounded space-y-2">
        <Skeleton className="h-8 w-70" />
        <Skeleton className="h-8 w-44" />
      </div>
    </div>
  );
}
