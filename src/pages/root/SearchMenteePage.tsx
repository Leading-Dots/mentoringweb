import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import client from "@/lib/apiClient";
import { listMentees, listMentors } from "@/graphql/queries";
import { Mentee, Mentor, ProfileStatus, Status } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { SearchLoader } from "@/components/search/SearchLoader";

const SearchMenteePage = () => {
  const [searchMentees, setSearchedMentees] = useState<Mentee[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [experienceRange, setExperienceRange] = useState(2);
  const [rateRange, setRateRange] = useState([0, 200]);

  const [loading, setLoading] = useState(false);

  console.log(searchMentees);

  const DEBOUNCE_DELAY = 500; // 500ms delay

  const getSearchedMentees = async () => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: listMentees,
        variables: {
          filter: {
            profileStatus: {
              eq: ProfileStatus.PUBLISHED,
            },
            name : {
              contains: nameFilter,
            },
            preferredMentorExperience: {
              eq: experienceRange,
            },
          },
        },
      });

      setSearchedMentees(data.listMentees.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      getSearchedMentees();
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(debounceTimer);
  }, [nameFilter, experienceRange, rateRange]);
  return (
    <div className="container py-8">
      {/* Search Panel */}
      <div className="max-w-4xl mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label className="text-sm font-medium mb-2 block">Name</Label>
            <Input
              placeholder="Search by name..."
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <Label className="text-sm font-medium mb-2 block">
              Experience (years)
            </Label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min"
                min={0}
                max={20}
                value={experienceRange}
                onChange={(e) =>
                  setExperienceRange(parseInt(e.target.value, 10))
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="flex flex-wrap gap-4">
        {loading && <SearchLoader />}

        {searchMentees.map((mentee: Mentee) => (
          <Card key={mentee.id} className="flex-grow basis-48">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <AvatarImage src={mentee.profilePictureUrl!!} />
                  <AvatarFallback>
                    {getInitials(mentee.firstName, mentee.lastName)}{" "}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">
                  {mentee.firstName} {mentee.lastName}{" "}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {mentee.preferredMentorExperience} years of experience preferred
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {mentee.topics!.slice(0, 2).map((skill: any) => (
                  <span
                    key={skill}
                    className="bg-secondary px-2 py-0.5 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {mentee.topics! && mentee.topics!.length > 2 && (
                  <span className="bg-secondary px-2 py-0.5 rounded text-xs">
                    +{mentee.topics!.length - 2} more
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchMenteePage;
