import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import client from "@/lib/apiClient";
import { listMentors } from "@/graphql/queries";
import { Mentor, ProfileStatus, Status } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { SearchLoader } from "@/components/search/SearchLoader";

const SearchPage = () => {
  const [searchedMentors, setSearchedMentors] = useState<Mentor[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [experienceRange, setExperienceRange] = useState([0, 20]);
  const [rateRange, setRateRange] = useState([0, 200]);

  const [loading, setLoading] = useState(false);

  const DEBOUNCE_DELAY = 500; // 500ms delay

  const searchMentors = async () => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: listMentors,
        variables: {
          filter: {
            profileStatus: {
              eq: ProfileStatus.PUBLISHED,
            },
            name : {
              contains: nameFilter,
            },
            yearsOfExperience: {
              between: experienceRange,
            },
            hourlyRate: {
              between: rateRange,
            },
          },
        },
      });

      setSearchedMentors(data.listMentors.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchMentors();
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
                value={experienceRange[0]}
                onChange={(e) =>
                  setExperienceRange([
                    parseInt(e.target.value),
                    experienceRange[1],
                  ])
                }
              />
              <Input
                type="number"
                placeholder="Max"
                min={0}
                max={20}
                value={experienceRange[1]}
                onChange={(e) =>
                  setExperienceRange([
                    experienceRange[0],
                    parseInt(e.target.value),
                  ])
                }
              />
            </div>
          </div>

          <div className="flex-1">
            <Label className="text-sm font-medium mb-2 block">
              Hourly Rate ($)
            </Label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min"
                min={0}
                max={200}
                value={rateRange[0]}
                onChange={(e) =>
                  setRateRange([parseInt(e.target.value), rateRange[1]])
                }
              />
              <Input
                type="number"
                placeholder="Max"
                min={0}
                max={200}
                value={rateRange[1]}
                onChange={(e) =>
                  setRateRange([rateRange[0], parseInt(e.target.value)])
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="flex flex-wrap gap-4">
        {loading && <SearchLoader />}

        {searchedMentors.map((mentor: Mentor) => (
          <Card key={mentor.id} className="flex-grow basis-48">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <AvatarImage src={mentor.profilePictureUrl!!} />
                  <AvatarFallback>
                    {getInitials(mentor.firstName, mentor.lastName)}{" "}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">
                  {mentor.firstName} {mentor.lastName}{" "}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {mentor.yearsOfExperience}y • ${mentor.hourlyRate}/hr
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {mentor.expertise!.slice(0, 2).map((skill: any) => (
                  <span
                    key={skill}
                    className="bg-secondary px-2 py-0.5 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {mentor.expertise! && mentor.expertise!.length > 2 && (
                  <span className="bg-secondary px-2 py-0.5 rounded text-xs">
                    +{mentor.expertise!.length - 2} more
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

export default SearchPage;
