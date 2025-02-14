import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const MentorCard = () => (
  <Card className="flex-grow basis-48">
    <CardContent className="p-4">
      <div className="flex items-center gap-3 mb-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <Skeleton className="h-4 w-36 mb-2" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-14" />
      </div>
    </CardContent>
  </Card>
)

export function SearchLoader() {
  return (
    <div className="flex flex-wrap gap-4">
      <MentorCard />
      <MentorCard />
      <MentorCard />
      <MentorCard />
    </div>
  )
}