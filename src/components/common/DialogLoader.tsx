import { Skeleton } from "@/components/ui/skeleton"

export function DialogLoader() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-[320px]" />
      </div>

      {/* User Card Skeleton */}
      <div className="flex items-center space-x-4 p-4 border rounded-lg bg-muted/50">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      {/* Form Fields Skeleton */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>

      {/* Buttons Skeleton */}
      <div className="flex justify-end space-x-2">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  )
}