import { useState } from "react";
import { Upload, Pencil, User2, Loader2 } from "lucide-react"; // Add Loader2 import
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { uploadProfileImage } from "@/lib/storage";
import { useAuth } from "@/hooks/useAuth";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    setLoading(true);
    try {
      const file = e.target.files[0];
      const url = await uploadProfileImage(file, user.id);
      console.log("Image URL in ImageUpload Component", url);

      onChange(url);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
        id="imageUpload"
        disabled={loading}
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <label htmlFor="imageUpload" className="relative cursor-pointer">
              <Avatar className="h-24 w-24 hover:opacity-90">
                {loading ? (
                  <div className="h-full w-full flex items-center justify-center bg-muted">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                ) : (
                  <>
                    <AvatarImage src={value} alt="Profile" />
                    <AvatarFallback>
                      <User2 className="h-8 w-8 text-muted-foreground" />
                    </AvatarFallback>
                  </>
                )}
              </Avatar>
              {!loading && (
                <div className="absolute bottom-0 right-0 rounded-full bg-primary p-1">
                  <Pencil className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
            </label>
          </TooltipTrigger>
          <TooltipContent>
            <p>{loading ? "Uploading..." : "Change Image"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
