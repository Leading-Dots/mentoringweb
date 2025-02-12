import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SessionDetailsSkeleton() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section Skeleton */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <Skeleton className="h-9 w-64 mb-2" />
          <Skeleton className="h-6 w-48" />
        </div>
        
        {/* Participants Card Skeleton */}
        <Card className="w-80 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">
              <Skeleton className="h-6 w-40" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {/* Mentor Skeleton */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-5 w-32" />
              </div>
              {/* Mentee Skeleton */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Session Details Skeleton */}
      <div className="space-y-8">
        <div className="flex gap-4">
          {/* Date Card Skeleton */}
          <Card className="hover:shadow-lg transition-shadow flex-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-5 w-16" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-7 w-32" />
            </CardContent>
          </Card>

          {/* Duration Card Skeleton */}
          <Card className="hover:shadow-lg transition-shadow flex-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-5 w-24" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-7 w-32" />
            </CardContent>
          </Card>

          {/* Cost Card Skeleton */}
          <Card className="hover:shadow-lg transition-shadow flex-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-5 w-16" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-7 w-24" />
            </CardContent>
          </Card>
        </div>

        {/* CTA Buttons Skeleton */}
        <div className="flex gap-4 pt-4">
          <Skeleton className="h-11 flex-1" />
          <Skeleton className="h-11 flex-1" />
        </div>
      </div>
    </div>
  )
}