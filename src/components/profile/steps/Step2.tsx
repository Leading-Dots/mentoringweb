import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface StepTwoProps {
  role: "mentor" | "mentee"
}

export function StepTwo({ role }: StepTwoProps) {
  const form = useFormContext()

  const expertiseOptions = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "DevOps",
    "UI/UX Design",
  ]

  const goalOptions = [
    "Learn Frontend",
    "Learn Backend",
    "Career Switch",
    "Skill Enhancement",
    "Project Building",
  ]

  if (role === "mentor") {
    return (
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="expertise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expertise</FormLabel>
              <Select
                onValueChange={(value) => field.onChange([value])}
                defaultValue={field.value?.[0]}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your expertise" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {expertiseOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yearsOfExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years of Experience</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="number" 
                  onChange={e => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hourlyRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hourly Rate ($)</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="number"
                  onChange={e => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="goals"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Learning Goals</FormLabel>
            <Select
              onValueChange={(value) => field.onChange([value])}
              defaultValue={field.value?.[0]}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your goals" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {goalOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferredMentorExperience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred Mentor Experience (years)</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                type="number"
                onChange={e => field.onChange(parseInt(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}