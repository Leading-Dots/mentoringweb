import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { Link, Navigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";

export default function LandingPage() {





  const {user} = useAuth();

  if(user){
    return <Navigate to="/home" />
  }





  const getStartedStepsMentee = [
    {
      title: "Create Your Mentee Profile",
      description:
        "Sign up and tell us about your goals, experience, and what you're looking for in a mentor.",
    },
    {
      title: "Send a Request",
      description:
        "Send mentorship requests to mentors who align with your goals and interests.",
    },
    {
      title: "Match with Mentors",
      description:
        "Browse recommended mentors or let our algorithm find the perfect match for your needs.",
    },
    {
      title: "Start Your Journey",
      description:
        "Schedule your first session and begin your mentorship journey with clear goals and expectations.",
    },
  ];

  const getStartedStepsMentor = [
    {
      title: "Create Your Mentor Profile",
      description:
        "Sign up and share your expertise, experience, and availability to help others.",
    },
    {
      title: "Send or Accept Requests",
      description:
        "Receive mentorship requests from mentees who align with your skills and interests.",
    },
    {
      title: "Connect with Mentees",
      description:
        "Receive mentorship requests from mentees who align with your skills and interests.",
    },
    {
      title: "Guide Your Mentee",
      description:
        "Help your mentee set goals, track progress, and provide guidance and support along the way.",
    },
  ];

  const features = [
    {
      title: "Smart Matching",
      description:
        "Our algorithm finds the perfect mentor based on your goals, industry, and experience.",
      icon: Users,
    },
    {
      title: "Flexible Scheduling",
      description:
        "Book sessions that fit your calendar with our easy-to-use scheduling tool.",
      icon: Clock,
    },
    {
      title: "Secure Messaging",
      description:
        "Communicate seamlessly with your mentor through our encrypted messaging system.",
      icon: MessageSquare,
    },
    {
      title: "Goal Tracking",
      description:
        "Set goals and track your progress with your mentor's guidance.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col mx-auto max-w-7xl">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to={"/"} className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            <span className="text-xl font-bold">Mentor Platform</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </a>
            <a 
              href="#how-it-works"
            className="text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Log in
            </Link>
            <Button asChild>
              <Link to="/home">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 mx-auto max-w-7xl flex flex-col">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Mentor Match
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect with experienced mentors who can guide you through
                    your career journey and help you achieve your goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link to="/home">Find a Mentor</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/signup">Become a Mentor</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Over 10,000 successful mentorships</span>
                </div>
              </div>
              <img
                src="/hero.png"
                width={600}
                height={600}
                alt="Mentoring session"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need to grow
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our platform provides all the tools you need for successful
                  mentorship relationships.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 py-12">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="flex-1 min-w-[250px] max-w-[300px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader className="flex flex-col items-center text-center">
                    <feature.icon className="h-10 w-10 text-primary mb-2 transition-transform duration-300 hover:scale-110" />
                    <CardTitle className="hover:text-primary transition-colors duration-200">
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get started in four simple steps
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our streamlined process makes it easy to find and connect with
                  the right mentor.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 py-12">
              <Tabs defaultValue="mentee" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8">
                  <TabsTrigger value="mentee">For Mentees</TabsTrigger>
                  <TabsTrigger value="mentor">For Mentors</TabsTrigger>
                </TabsList>
                <TabsContent value="mentee">
                  <div className="space-y-6 max-w-2xl mx-auto">
                    {getStartedStepsMentee.map((step, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center relative pt-16"
                      >
                        <div className="absolute top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                          {index + 1}
                        </div>
                        <div className="space-y-2 pb-8">
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="mentor">
                  <div className="space-y-8 max-w-2xl mx-auto">
                    {getStartedStepsMentor.map((step, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center relative pt-16"
                      >
                        <div className="absolute top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                          {index + 1}
                        </div>
                        <div className="space-y-2 pb-8">
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/signup">
                  Get Started Today
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Success stories from our community
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Hear from mentees who have transformed their careers through
                  our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://i.pravatar.cc/48" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Sarah Johnson</CardTitle>
                      <CardDescription>Software Engineer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "My mentor helped me navigate a career transition from
                    marketing to software engineering. Their guidance was
                    invaluable in helping me land my dream job."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://i.pravatar.cc/48" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>{" "}
                    <div>
                      <CardTitle className="text-base">Michael Chen</CardTitle>
                      <CardDescription>Product Manager</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The structured approach to mentorship helped me set clear
                    goals and achieve them. I've been promoted twice since
                    starting with my mentor!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://i.pravatar.cc/48" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Priya Patel</CardTitle>
                      <CardDescription>UX Designer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Finding a mentor in my specific niche was challenging until
                    I discovered this platform. The matching algorithm is spot
                    on!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to accelerate your growth?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  Join thousands of professionals who are transforming their
                  careers with the right mentorship.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/signup">Find Your Mentor</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent"
                  asChild
                >
                  <Link to="/become-mentor">Become a Mentor</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
