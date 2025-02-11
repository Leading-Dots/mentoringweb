import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function PublicProfileLoader() {
  return (
    <div className="container p-4 max-w-4xl">
      {/* Profile Header Skeleton */}
      <div className="flex items-start space-x-6 mb-8">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-20 w-full max-w-2xl" />
        </div>
      </div>

      <Separator className="my-8" />

      {/* Key Information Section Skeleton */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Skeleton className="w-5 h-5" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-4 w-24" />

                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Skeleton className="w-5 h-5" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-4 w-24" />

                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Goals Section Skeleton */}
      <section>
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-6 w-24" />
          ))}
        </div>
      </section>

      {/* Book Session Button Skeleton */}
      <section className="flex justify-center my-12">
        <Skeleton className="h-10 w-full" />
      </section>
    </div>
  )
}