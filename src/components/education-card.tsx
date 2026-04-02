"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface EducationDetail {
  subject: string;
  marks: string;
}

interface EducationCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  grade?: string;
  score?: string;
  details?: readonly EducationDetail[];
}

export function EducationCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  grade,
  score,
  details,
}: EducationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasGradeDetails = false;

  return (
    <div className="block cursor-pointer">
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-base">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="font-semibold leading-none text-sm sm:text-base">
                  {title}
                </h3>
                {badges && (
                  <div className="flex flex-wrap gap-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            {grade && (
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  Grade: {grade}
                </Badge>
              </div>
            )}
          </CardHeader>
          {description && (
            <div className="mt-2 text-xs sm:text-sm">{description}</div>
          )}
        </div>
      </Card>
    </div>
  );
}