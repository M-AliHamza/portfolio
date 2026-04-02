"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  isExpanded: controlledIsExpanded,
  onToggleExpand,
}: ResumeCardProps) => {
  const [internalIsExpanded, setInternalIsExpanded] = React.useState(false);
  
  // Use controlled state if provided, otherwise use internal state
  const isExpanded = controlledIsExpanded !== undefined ? controlledIsExpanded : internalIsExpanded;
  const handleToggle = onToggleExpand || (() => setInternalIsExpanded(!internalIsExpanded));

  return (
    <div>
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
        <div className="flex-grow ml-4 flex flex-col group">
          <CardHeader className="px-0 pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-base">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="font-semibold leading-none text-sm sm:text-base">
                  {title}
                </h3>
                {href && (
                  <Link href={href} target="_blank">
                    <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                )}
              </div>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            {badges && (
              <div className="flex flex-wrap gap-1 mt-2">
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
          </CardHeader>
          {description && (
            <div className="px-0 pb-3">
              <Button
                variant="ghost"
                size="sm"
                className="inline-flex items-center gap-1 h-auto py-1 px-2 -ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle();
                }}
              >
                <span className="text-xs">View Details</span>
                <ChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform duration-200",
                    isExpanded && "rotate-180"
                  )}
                />
              </Button>
            </div>
          )}
        </div>
      </Card>
      {description && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="overflow-hidden"
        >
          <div className="px-4 pt-2 pb-4 text-xs sm:text-sm text-muted-foreground">
            {description}
          </div>
        </motion.div>
      )}
    </div>
  );
};
