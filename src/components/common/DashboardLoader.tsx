import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const DashboardLoader: React.FC = () => {
    return (
        <div className="w-full h-screen">
            <div className="mx-auto max-w-7xl">
                {/* Header Skeleton */}
                <div className="flex items-center justify-between p-4">
                    <Skeleton className="h-10 w-[100px]" /> {/* Logo */}
                    <div className="flex gap-4">
                        <Skeleton className="h-8 w-[60px]" /> {/* Nav items */}
                        <Skeleton className="h-8 w-[60px]" />
                        <Skeleton className="h-8 w-[60px]" />
                    </div>
                </div>

                {/* Main Content Skeleton */}
                <div className="flex gap-6 p-4">
                    {/* Sidebar */}
                    <div className="w-64 space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 space-y-6">
                        <Skeleton className="h-[200px] w-full rounded-lg" />
                        <Skeleton className="h-[200px] w-full rounded-lg" />
                        <Skeleton className="h-[200px] w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLoader;