"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import client from "@/lib/apiClient";
import { listMentors } from "@/graphql/queries";
import { type Mentor, ProfileStatus } from "@/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { SearchLoader } from "@/components/search/SearchLoader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  Star,
  Clock,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchedMentors, setSearchedMentors] = useState<Mentor[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [experienceRange, setExperienceRange] = useState([0, 20]);
  const [rateRange, setRateRange] = useState([0, 200]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const DEBOUNCE_DELAY = 500; // 500ms delay

  const searchMentors = async () => {
    try {
      setLoading(true);
      setHasSearched(true);
      const { data } = await client.graphql({
        query: listMentors,
        variables: {
          filter: {
            profileStatus: {
              eq: ProfileStatus.PUBLISHED,
            },
            name: {
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

      let results = data.listMentors.items;

      // Sort results based on selected sort option
      if (sortBy === "experience-high") {
        results = results.sort(
          (a: Mentor, b: Mentor) => b.yearsOfExperience - a.yearsOfExperience
        );
      } else if (sortBy === "experience-low") {
        results = results.sort(
          (a: Mentor, b: Mentor) => a.yearsOfExperience - b.yearsOfExperience
        );
      } else if (sortBy === "rate-low") {
        results = results.sort(
          (a: Mentor, b: Mentor) => a.hourlyRate - b.hourlyRate
        );
      } else if (sortBy === "rate-high") {
        results = results.sort(
          (a: Mentor, b: Mentor) => b.hourlyRate - a.hourlyRate
        );
      }

      setSearchedMentors(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = () => {
    setNameFilter("");
    setExperienceRange([0, 20]);
    setRateRange([0, 200]);
    setSortBy("relevance");
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchMentors();
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(debounceTimer);
  }, [nameFilter, experienceRange, rateRange, sortBy]);

  return (
    <div className="container py-8 max-w-5xl">
      {/* Search Header */}

      {/* Main Search Bar */}
      <div className="bg-card rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search mentors by name..."
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="pl-9 w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 flex-1 sm:flex-none"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span className="inline">Filters</span>
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
                <ArrowUpDown className="h-4 w-4" />
              </SelectTrigger>

              <SelectContent sideOffset={5} align="end">
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="experience-high">
                  Experience (High to Low)
                </SelectItem>
                <SelectItem value="experience-low">
                  Experience (Low to High)
                </SelectItem>
                <SelectItem value="rate-low">Rate (Low to High)</SelectItem>
                <SelectItem value="rate-high">Rate (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between mb-4">
              <h3 className="font-medium">Advanced Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="h-8 text-sm"
              >
                <X className="h-3.5 w-3.5 mr-1" />
                Clear filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Experience (years)</Label>
                  <span className="text-sm text-muted-foreground">
                    {experienceRange[0]} - {experienceRange[1]} years
                  </span>
                </div>
                <Slider
                  defaultValue={experienceRange}
                  min={0}
                  max={20}
                  step={1}
                  value={experienceRange}
                  onValueChange={setExperienceRange}
                  className="my-4"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label>Hourly Rate ($)</Label>
                  <span className="text-sm text-muted-foreground">
                    ${rateRange[0]} - ${rateRange[1]}
                  </span>
                </div>
                <Slider
                  defaultValue={rateRange}
                  min={0}
                  max={200}
                  step={5}
                  value={rateRange}
                  onValueChange={setRateRange}
                  className="my-4"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Active Filters */}
      {(nameFilter ||
        experienceRange[0] > 0 ||
        experienceRange[1] < 20 ||
        rateRange[0] > 0 ||
        rateRange[1] < 200) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {nameFilter && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Name: {nameFilter}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => setNameFilter("")}
              />
            </Badge>
          )}

          {(experienceRange[0] > 0 || experienceRange[1] < 20) && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Experience: {experienceRange[0]}-{experienceRange[1]} years
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => setExperienceRange([0, 20])}
              />
            </Badge>
          )}

          {(rateRange[0] > 0 || rateRange[1] < 200) && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Rate: ${rateRange[0]}-${rateRange[1]}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => setRateRange([0, 200])}
              />
            </Badge>
          )}
        </div>
      )}

      {/* Results Count */}
      {hasSearched && !loading && (
        <div className="mb-4 text-sm text-muted-foreground">
          Found {searchedMentors.length} mentor
          {searchedMentors.length !== 1 ? "s" : ""}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center py-12">
          <SearchLoader />
        </div>
      )}

      {/* Empty State */}
      {!loading && hasSearched && searchedMentors.length === 0 && (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">No mentors found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search filters to find more mentors
          </p>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </div>
      )}

      {/* Results Grid */}
      {!loading && searchedMentors.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchedMentors.map((mentor: Mentor) => (
            <Card
              key={mentor.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                      <AvatarImage src={mentor.profilePictureUrl!} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {getInitials(mentor.firstName, mentor.lastName)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {mentor.firstName} {mentor.lastName}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {mentor.bio || "Mentor"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{mentor.yearsOfExperience} years experience</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>${mentor.hourlyRate}/hour</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {mentor.expertise &&
                      mentor.expertise.slice(0, 3).map((skill: string) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-primary/5"
                        >
                          {skill}
                        </Badge>
                      ))}
                    {mentor.expertise && mentor.expertise.length > 3 && (
                      <Badge variant="outline" className="bg-primary/5">
                        +{mentor.expertise.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="border-t p-3 bg-muted/20 flex justify-between items-center">
                  <Link to={`/mentor/${mentor?.mentorId}`}>
                    {" "}
                    <Button size="sm">View Profile</Button>{" "}
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
