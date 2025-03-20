import { Skeleton } from "@/components/ui/skeleton";

export const ListLoader = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <Skeleton className="h-8 w-32" /> {/* For "Find mentees" heading */}
            </div>
            
            {/* Create 3 skeleton cards */}
            {[1, 2, 3].map((index) => (
                <div
                    key={index}
                    className="flex flex-col gap-4 p-4 border rounded-lg"
                >
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-12 w-12 rounded-full" /> {/* Avatar */}
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[200px]" /> {/* Name */}
                            <Skeleton className="h-4 w-[150px]" /> {/* Additional info */}
                        </div>
                    </div>
                    <Skeleton className="h-4 w-full" /> {/* Description */}
                    <div className="flex gap-2">
                        <Skeleton className="h-6 w-20" /> {/* Tags/badges */}
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-20" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListLoader;