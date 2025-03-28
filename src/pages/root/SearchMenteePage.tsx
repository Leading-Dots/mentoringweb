"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import client from "@/lib/apiClient";
import { listMentees } from "@/graphql/queries";
import { type Mentee, ProfileStatus } from "@/API";
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
  User,
  BookOpen,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const SearchMenteePage = () => {
  const [searchMentees, setSearchedMentees] = useState<Mentee[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [experienceRange, setExperienceRange] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const DEBOUNCE_DELAY = 500; // 500ms delay

  const getSearchedMentees = async () => {
    try {
      setLoading(true);
      setHasSearched(true);
      const { data } = await client.graphql({
        query: listMentees,
        variables: {
          filter: {
            profileStatus: {
              eq: ProfileStatus.PUBLISHED,
            },
            name: {
              contains: nameFilter,
            },
            preferredMentorExperience: {
              eq: experienceRange,
            },
          },
        },
      });

      let results = data.listMentees.items;

      // Sort results based on selected sort option
      if (sortBy === "name-asc") {
        results = results.sort((a: Mentee, b: Mentee) =>
          `${a.firstName} ${a.lastName}`.localeCompare(
            `${b.firstName} ${b.lastName}`
          )
        );
      } else if (sortBy === "name-desc") {
        results = results.sort((a: Mentee, b: Mentee) =>
          `${b.firstName} ${b.lastName}`.localeCompare(
            `${a.firstName} ${a.lastName}`
          )
        );
      } else if (sortBy === "experience-high") {
        results = results.sort(
          (a: Mentee, b: Mentee) =>
            b.preferredMentorExperience - a.preferredMentorExperience
        );
      } else if (sortBy === "experience-low") {
        results = results.sort(
          (a: Mentee, b: Mentee) =>
            a.preferredMentorExperience - b.preferredMentorExperience
        );
      }

      setSearchedMentees(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = () => {
    setNameFilter("");
    setExperienceRange(0);
    setSortBy("relevance");
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      getSearchedMentees();
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(debounceTimer);
  }, [nameFilter, experienceRange, sortBy]);

  return (
    <div className="container py-8 max-w-5xl">
      {/* Search Header */}

      {/* Main Search Bar */}
      <div className="bg-card rounded-lg shadow-sm p-4 mb-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search mentees by name..."
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
          </Button>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] flex-shrink-0 ">
              <SelectValue placeholder="Sort by" />
              <ArrowUpDown className="h-4 w-4" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="experience-high">
                Preferred Experience (High to Low)
              </SelectItem>
              <SelectItem value="experience-low">
                Preferred Experience (Low to High)
              </SelectItem>
            </SelectContent>
          </Select>
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

            <div>
              <div className="flex justify-between mb-2">
                <Label>Preferred Mentor Experience (years)</Label>
                <span className="text-sm text-muted-foreground">
                  {experienceRange} years
                </span>
              </div>
              <Slider
                defaultValue={[experienceRange]}
                min={0}
                max={20}
                step={1}
                value={[experienceRange]}
                onValueChange={(value) => setExperienceRange(value[0])}
                className="my-4"
              />
            </div>
          </div>
        )}
      </div>

      {/* Active Filters */}
      {(nameFilter || experienceRange !== 0) && (
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

          {experienceRange !== 2 && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Preferred Experience: {experienceRange} years
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => setExperienceRange(2)}
              />
            </Badge>
          )}
        </div>
      )}

      {/* Results Count */}
      {hasSearched && !loading && (
        <div className="mb-4 text-sm text-muted-foreground">
          Found {searchMentees.length} mentee
          {searchMentees.length !== 1 ? "s" : ""}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center py-12">
          <SearchLoader />
        </div>
      )}

      {/* Empty State */}
      {!loading && hasSearched && searchMentees.length === 0 && (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">No mentees found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search filters to find mentees looking for
            guidance
          </p>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </div>
      )}

      {/* Results Grid */}
      {!loading && searchMentees.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchMentees.map((mentee: Mentee) => (
            <Card
              key={mentee.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                      <AvatarImage src={mentee.profilePictureUrl!} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {getInitials(mentee.firstName, mentee.lastName)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {mentee.firstName} {mentee.lastName}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {mentee.bio || "Mentee"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        Looking for a mentor with{" "}
                        {mentee.preferredMentorExperience}+ years experience
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {mentee.topics &&
                      mentee.topics.slice(0, 3).map((topic: string) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="bg-primary/5"
                        >
                          {topic}
                        </Badge>
                      ))}
                    {mentee.topics && mentee.topics.length > 3 && (
                      <Badge variant="outline" className="bg-primary/5">
                        +{mentee.topics.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="border-t p-3 bg-muted/20 flex justify-end items-center">
                  <Link to={`/mentee/${mentee.menteeId}`}>
                    <Button size="sm">View Profile</Button>
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

export default SearchMenteePage;
