"use client"

import { useEffect, useMemo, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import {
  Calendar,
  Check,
  Clock,
  DollarSign,
  ExternalLink,
  MoreHorizontal,
  Plus,
  Users,
  CalendarClock,
  Video,
  FileEdit,
  CheckCircle,
  ArrowLeft,
} from "lucide-react"
import { type Mentee, type Mentor, type Session, Status } from "@/API"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SessionParticipantsCard from "@/components/session/SessionParticipantsCard"
import { SessionDetailsSkeleton } from "@/components/session/SessionDetailsLoader"
import RescheduleSessionModal from "@/components/modal/RescheduleSessionModal"
import AddMeetingLinkModal from "@/components/modal/AddMeetingLinkModal"
import { useAuth } from "@/hooks/useAuth"
import client from "@/lib/apiClient"
import { getUser } from "@/lib/dbActions"
import { getSession } from "@/graphql/queries"
import { AddObjectiveModal } from "@/components/modal/AddObjectiveModal"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import AddReviewModal from "@/components/modal/AddReviewModal"
import { formatTime } from "@/lib/utils"
import { updateSession } from "@/graphql/mutations"
import Participants from "@/components/session/Participants"

const SessionDetailsPage = () => {
  const params = useParams()
  const { user } = useAuth()

  const [reviewOpen, setReviewOpen] = useState(false)
  const [session, setSession] = useState<Session | null>(null)
  const [participants, setParticipants] = useState<{
    mentor: Mentor | null
    mentee: Mentee | null
  }>({ mentor: null, mentee: null })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("details")

  // Moved authentication logic to a memoized value
  const isAuthorized = useMemo(() => {
    if (!session || !user) return false
    const userIds = [user.menteeId, user.mentorId].filter(Boolean)
    return [session.menteeID, session.mentorID].some((id) => userIds.includes(id))
  }, [session, user])

  const isSessionCompleted = session?.status === Status.COMPLETED
  const isMentor = useMemo(() => user?.mentorId === session?.mentorID, [user, session])

  const getStatusBadge = (status: Status | undefined) => {
    if (!status) return null

    const statusConfig = {
      [Status.SCHEDULED]: { label: "Scheduled", variant: "outline" as const },
      [Status.COMPLETED]: { label: "Completed", variant: "success" as const },
      [Status.RESCHEDULED]: { label: "Rescheduled", variant: "destructive" as const },
    }

    const config = statusConfig[status]

    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  const fetchAll = async () => {
    if (!params.id) return

    try {
      setLoading(true)
      // Fetch session data
      const { data } = await client.graphql({
        query: getSession,
        variables: { id: params.id },
      })

      const sessionData = data.getSession as Session
      setSession(sessionData)

      // Fetch participants in parallel
      const [mentorData, menteeData] = await Promise.all([
        getUser(sessionData.mentorID, "mentor"),
        getUser(sessionData.menteeID, "mentee"),
      ])

      setParticipants({
        mentor: mentorData as Mentor,
        mentee: menteeData as Mentee,
      })
    } catch (error) {
      console.error("Error refreshing data:", error)
      setError(error instanceof Error ? error.message : "Failed to refresh data")
    } finally {
      setLoading(false)
    }
  }

  const handleCompleteFlow = async () => {
    try {
      if (!session) return
      // Update session status to completed
      await client.graphql({
        query: updateSession,
        variables: {
          input: {
            id: session.id,
            status: Status.COMPLETED,
          },
        },
      })

      // Refetch data
      fetchAll()

      setReviewOpen(true)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    let mounted = true

    const fetchSessionData = async () => {
      if (!params.id) return

      try {
        setLoading(true)
        const { data } = await client.graphql({
          query: getSession,
          variables: { id: params.id },
        })

        if (!mounted) return

        const sessionData = data.getSession as Session
        setSession(sessionData)

        // Fetch participants in parallel
        const [mentorData, menteeData] = await Promise.all([
          getUser(sessionData.mentorID, "mentor"),
          getUser(sessionData.menteeID, "mentee"),
        ])

        if (!mounted) return

        setParticipants({
          mentor: mentorData as Mentor,
          mentee: menteeData as Mentee,
        })
      } catch (error) {
        if (!mounted) return
        console.error("Error fetching session data:", error)
        setError(error instanceof Error ? error.message : "Failed to load session")
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchSessionData()

    return () => {
      mounted = false
    }
  }, [params.id])

  // Early returns for different states
  if (!params.id) {
    return <Navigate to="/sessions" />
  }

  if (!isAuthorized && !loading) {
    return <Navigate to="/sessions" />
  }

  if (loading) {
    return <SessionDetailsSkeleton />
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    )
  }

  const { mentor, mentee } = participants
  const sessionDate = new Date(session?.sessionDate || "")

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center mb-6">
          <Link
            to="/sessions"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Sessions</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-6 mb-6">
          {/* Session Info - Left Side */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">{session?.sessionTitle}</h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  {getStatusBadge(session?.status)}
                  <span className="text-sm">
                    {sessionDate.toLocaleDateString()} • {formatTime(sessionDate)}
                  </span>
                </div>
              </div>

              {/* Actions Panel - Desktop */}
              <div className="hidden sm:flex items-center gap-2">
                {!isSessionCompleted && (
                  <>
                    {session?.meetingLink ? (
                      <Link to={session.meetingLink} target="_blank">
                        <Button>
                          <Video className="h-4 w-4 mr-2" />
                          Join Meeting
                        </Button>
                      </Link>
                    ) : (
                      <AddMeetingLinkModal sessionId={session?.id!} onConfirm={fetchAll}>
                        <Button variant="outline">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Meeting
                        </Button>
                      </AddMeetingLinkModal>
                    )}

                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <RescheduleSessionModal
                          sessionId={session?.id!}
                          currentSessionDate={session?.sessionDate!}
                          onConfirm={fetchAll}
                        >
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <CalendarClock className="h-4 w-4 mr-2" />
                            Reschedule
                          </DropdownMenuItem>
                        </RescheduleSessionModal>

                        <AddObjectiveModal session={session!} onConfirm={fetchAll}>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <FileEdit className="h-4 w-4 mr-2" />
                            Add Objective
                          </DropdownMenuItem>
                        </AddObjectiveModal>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem onClick={handleCompleteFlow} disabled={isSessionCompleted}>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Complete Session
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                )}
              </div>
            </div>

            <p className="text-muted-foreground">{session?.sessionDescription}</p>

            {/* Actions Panel - Mobile */}
            <div className="flex sm:hidden items-center gap-2 pt-2">
              {!isSessionCompleted && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  {session?.meetingLink ? (
                    <Link to={session.meetingLink} target="_blank" className="col-span-1">
                      <Button className="w-full">
                        <Video className="h-4 w-4 mr-2" />
                        Join Meeting
                      </Button>
                    </Link>
                  ) : (
                    <AddMeetingLinkModal sessionId={session?.id!} onConfirm={fetchAll}>
                      <Button variant="outline" className="w-full col-span-1">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Meeting
                      </Button>
                    </AddMeetingLinkModal>
                  )}

                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full col-span-1">
                        <span className="flex items-center">
                          More Actions
                          <MoreHorizontal className="h-4 w-4 ml-2" />
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <RescheduleSessionModal
                        sessionId={session?.id!}
                        currentSessionDate={session?.sessionDate!}
                        onConfirm={fetchAll}
                      >
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <CalendarClock className="h-4 w-4 mr-2" />
                          Reschedule
                        </DropdownMenuItem>
                      </RescheduleSessionModal>

                      <AddObjectiveModal session={session!} onConfirm={fetchAll}>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FileEdit className="h-4 w-4 mr-2" />
                          Add Objective
                        </DropdownMenuItem>
                      </AddObjectiveModal>

                      <DropdownMenuSeparator />

                      <DropdownMenuItem onClick={handleCompleteFlow} disabled={isSessionCompleted}>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Complete Session
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
          </div>

          {/* Participants Card - Right Side */}
          <Participants mentor={mentor!} mentee={mentee!} />
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="details" className="w-full" onValueChange={setActiveTab} value={activeTab}>
          <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
            <TabsTrigger value="details">Session Details</TabsTrigger>
            <TabsTrigger value="objectives">Objectives</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            {/* Session Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                    Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{sessionDate.toLocaleDateString()}</p>
                  <p className="text-sm text-muted-foreground">{formatTime(sessionDate)}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <Clock className="mr-2 h-4 w-4 text-green-500" />
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">
                    {session?.duration} {session?.duration === 1 ? "month" : "months"}
                  </p>
                  <p className="text-sm text-muted-foreground">Session Length</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-sm font-medium">
                    <DollarSign className="mr-2 h-4 w-4 text-purple-500" />
                    Session Cost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">${session?.cost}</p>
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                </CardContent>
              </Card>
            </div>

            {/* Meeting Link Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Video className="h-4 w-4 mr-2 text-primary" />
                  Meeting Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                {session?.meetingLink ? (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">Meeting Link Available</p>
                      <p className="text-sm text-muted-foreground truncate max-w-xs sm:max-w-md">
                        {session.meetingLink}
                      </p>
                    </div>
                    <Link to={session.meetingLink} target="_blank">
                      <Button size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Join Meeting
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-muted-foreground">No meeting link has been added yet.</p>
                    {!isSessionCompleted && (
                      <AddMeetingLinkModal sessionId={session?.id!} onConfirm={fetchAll}>
                        <Button size="sm" variant="outline">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Meeting Link
                        </Button>
                      </AddMeetingLinkModal>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

           
          </TabsContent>

          <TabsContent value="objectives" className="space-y-6">
            {/* Objectives Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Session Objectives</CardTitle>
                  <CardDescription>Track what you want to accomplish in this session</CardDescription>
                </div>
                {!isSessionCompleted && session && (
                  <AddObjectiveModal session={session} onConfirm={fetchAll}>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Objective
                    </Button>
                  </AddObjectiveModal>
                )}
              </CardHeader>
              <CardContent>
                {session?.objectives && session.objectives.length > 0 ? (
                  <div className="space-y-3">
                    {session.objectives.map((objective, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg border border-muted transition-all hover:bg-muted"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                            <Check className="h-3 w-3" />
                          </div>
                        </div>
                        <span>{objective}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                      <FileEdit className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">No objectives set for this session yet.</p>
                    {!isSessionCompleted && session && (
                      <AddObjectiveModal session={session} onConfirm={fetchAll}>
                        <Button variant="outline" size="sm" className="mt-4">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Your First Objective
                        </Button>
                      </AddObjectiveModal>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Complete Session Button */}
        {!isSessionCompleted && (
          <div className="mt-8 mb-12">
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Ready to complete this session?</h3>
                    <p className="text-sm text-muted-foreground">Mark this session as completed and leave a review.</p>
                  </div>
                  <Button size="lg" onClick={handleCompleteFlow} className="w-full sm:w-auto">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Complete Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Review Modal */}
        <AddReviewModal open={reviewOpen} setOpen={setReviewOpen} session={session} onConfirm={fetchAll} />
      </div>
    </div>
  )
}

export default SessionDetailsPage

