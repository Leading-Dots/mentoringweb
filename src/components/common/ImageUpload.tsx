import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "../ui/button"

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [loading, setLoading] = useState(false)

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return

    setLoading(true)
    try {
      const file = e.target.files[0]
      // Here you would typically:
      // 1. Upload the file to your storage (e.g., S3, Cloudinary)
      // 2. Get back the URL
      // 3. Call onChange with the URL
      // For now, we'll use a fake URL
      const fakeUrl = URL.createObjectURL(file)
      onChange(fakeUrl)
    } catch (error) {
      console.error('Error uploading file:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
        id="imageUpload"
      />
      <label htmlFor="imageUpload">
        <Button
          type="button"
          variant="outline"
          disabled={loading}
          className="cursor-pointer"
          asChild
        >
          <div>
            <Upload className="h-4 w-4 mr-2" />
            Upload Image
          </div>
        </Button>
      </label>
    </div>
  )
}