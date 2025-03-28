import { Mentee, Mentor } from "@/API";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, Linkedin, Mail, FileText } from "lucide-react";

const ContactCard = ({ user }: { user: Mentor | Mentee }) => {
    
  return (
    <div className="flex gap-4 items-center">
        {/* Email */}
        <a href={`mailto:${user.email}`} className="text-sm hover:underline flex items-center gap-1 text-muted-foreground">
            <Mail className="h-4 w-4" />
            {user.email}
        </a>

        {/* LinkedIn */}
        {user.linkedInUrl && (
            <a
                href={user.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center gap-1 text-muted-foreground"
            >
                <Linkedin className="h-4 w-4" />
                LinkedIn
            </a>
        )}

        {/* Website */}
        {user.websiteUrl && (
            <a
                href={user.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center gap-1 text-muted-foreground"
            >
                <Globe className="h-4 w-4" />
                Website
            </a>
        )}

        {/* Resume */}
        {"resumeUrl" in user && user.resumeUrl && (
            <a
                href={user.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center gap-1 text-muted-foreground"
            >
                <FileText className="h-4 w-4" />
                Resume
            </a>
        )}
    </div>
  );
};

export default ContactCard;
