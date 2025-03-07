import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const NotificationLoaderSkeleton = () => {
    return (
        <div className="container py-8">
            <div className="space-y-4">
                <div className="flex justify-end items-center mb-4">
                    <Skeleton className="h-10 w-24" />
                </div>

                {/* Repeat skeleton cards 3 times */}
                {[1, 2, 3].map((index) => (
                    <Card key={index}>
                        <CardHeader className="space-y-2">
                            <Skeleton className="h-5 w-3/4" />
                            <Skeleton className="h-4 w-1/4" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-full" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default NotificationLoaderSkeleton;