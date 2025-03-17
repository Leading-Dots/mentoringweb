import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { MultiSelect } from "@/components/common/MultiSelect";
import { useEffect, useState } from "react";
import { c } from "node_modules/framer-motion/dist/types.d-6pKw1mTI";
import client from "@/lib/apiClient";
import { listCategories } from "@/graphql/queries";
import { createCategory } from "@/graphql/mutations";
import { Button } from "@/components/ui/button";
import { showToast } from "@/lib/toast";

interface StepTwoProps {
  role: "mentor" | "mentee";
}

export function StepTwo({ role }: StepTwoProps) {
  const form = useFormContext();
  const [topicOptions, setTopicOptions] = useState([]);
  const [newTopic, setNewTopic] = useState("");

  const expertiseOptions = [
    { label: "Frontend Development", value: "Frontend Development" },
    { label: "Backend Development", value: "Backend Development" },
    { label: "Full Stack Development", value: "Full Stack Development" },
    { label: "DevOps", value: "DevOps" },
    { label: "UI/UX Design", value: "UI/UX Design" },
  ];

  const goalOptions = [
    { label: "Learn a new technology", value: "Learn a new technology" },
    { label: "Improve my coding skills", value: "Improve my coding skills" },
    { label: "Prepare for interviews", value: "Prepare for interviews" },
    { label: "Build a portfolio", value: "Build a portfolio" },
  ];

  const addTopic = async (topicValue: string) => {
    try {
      if (topicValue === "") return;
      console.log("Topic created", topicValue);
  
      const existingTopic = topicOptions.find((topic) => topic.value === topicValue);
  
      if(existingTopic) {
        showToast("Category already exists", "error");
        return;
      }
  
      const { data } = await client.graphql({
        query: createCategory,
        variables: { input: { value: topicValue } },
      });
      console.log("Topic created", data);
  
      const newTopicOption = { label: topicValue, value: topicValue };
      setTopicOptions([...topicOptions, newTopicOption]);
  
      if (role === "mentee") {
        form.setValue("topics", [...(form.getValues("topics") || []), newTopicOption]);
      } else {
        form.setValue("expertise", [...(form.getValues("expertise") || []), newTopicOption]);
      }
      setNewTopic("");
    } catch (error) {
      console.error("Error creating topic", error);
    }
  };
  useEffect(() => {
    const fetchTopics = async () => {
      const { data } = await client.graphql({
        query: listCategories,
        variables: { limit: 100 },
      });

      const options = data.listCategories.items.map((topic) => ({
        label: topic.value,
        value: topic.value,
      }));

      console.log("Topics fetched", options);
      setTopicOptions(options || []);
    };

    fetchTopics();
  }, []);

  if (role === "mentor") {
    return (
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="expertise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expertise *</FormLabel>
              <MultiSelect
                options={topicOptions}
                onAddOption={addTopic}
                maxSelections={4}
                onValueChange={(value) => field.onChange(value)}
                defaultValue={field.value}
              />
              <FormMessage />
             
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yearsOfExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years of Experience *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  min={0}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
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
              <FormLabel>Hourly Rate ($) *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="goals"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Learning Goals *</FormLabel>
            <MultiSelect

              options={goalOptions}
              onValueChange={(value) => field.onChange(value)

              }
              defaultValue={field.value || []}
            />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="topics"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What do you want to become good in *</FormLabel>
            <MultiSelect
              onAddOption={addTopic}
              maxSelections={4}
              options={topicOptions}
              onValueChange={(value) => field.onChange(value)}
              defaultValue={field.value || []}
            />
            <FormMessage />

            
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferredMentorExperience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred Mentor Experience (years) *</FormLabel>
            <FormControl>
              <Input
                min={0}
                {...field}
                type="number"
                onChange={(e) => field.onChange(parseInt(e.target.value))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
