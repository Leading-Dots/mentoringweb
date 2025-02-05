import { useState } from "react";
import { Upload, Pencil } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [loading, setLoading] = useState(false);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    setLoading(true);
    try {
      const file = e.target.files[0];
      // Here you would typically:
      // 1. Upload the file to your storage (e.g., S3, Cloudinary)
      // 2. Get back the URL
      // 3. Call onChange with the URL
      const fakeUrl = URL.createObjectURL(file);
      onChange(fakeUrl);
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
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <label htmlFor="imageUpload" className="relative cursor-pointer">
              <Avatar className="h-24 w-24 hover:opacity-90">
                <AvatarImage src={value} alt="Profile" />
                <AvatarFallback>
                  <Upload className="h-8 w-8 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 rounded-full bg-primary p-1">
                <Pencil className="h-4 w-4 text-primary-foreground" />
              </div>
            </label>
          </TooltipTrigger>
          <TooltipContent>
            <p>Change Image</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
