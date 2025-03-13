import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SessionLoader = () => {
    // Create an array of 6 items to show as skeleton cards
    const skeletonCards = Array.from({ length: 6 }, (_, index) => (
        <Card key={index} className="w-full space-y-4">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-8" />
                    <Skeleton className="h-5 w-24" />
                </div>
                <Skeleton className="h-6 w-[250px] mt-2" />
            </CardHeader>
            <CardContent className="pb-2">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-[120px]" />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-[100px]" />
                    </div>
                    <Skeleton className="h-5 w-16" />
                </div>
            </CardContent>
            <CardFooter className="pt-0">
                <Skeleton className="h-9 w-full" />
            </CardFooter>
        </Card>
    ));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skeletonCards}
        </div>
    );
};

export default SessionLoader;