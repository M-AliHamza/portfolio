"use client";

import { useState, useMemo, memo } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  detailedDescription?: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  githubLink?: string;
  className?: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const EnhancedProjectCard = memo(function EnhancedProjectCard({
  title,
  href,
  description,
  detailedDescription,
  dates,
  tags,
  link,
  image,
  video,
  links,
  githubLink,
  className,
  isExpanded: controlledIsExpanded,
  onToggleExpand,
}: Props) {
  const [internalIsExpanded, setInternalIsExpanded] = useState(false);
  
  // Use controlled state if provided, otherwise use internal state
  const isExpanded = controlledIsExpanded !== undefined ? controlledIsExpanded : internalIsExpanded;
  const handleToggle = onToggleExpand || (() => setInternalIsExpanded(!internalIsExpanded));

  const showProjectLinks = process.env.NEXT_PUBLIC_SHOW_PROJECT_LINKS === 'true';
  const showGithubLinks = process.env.NEXT_PUBLIC_SHOW_GITHUB_LINKS === 'true';

  const hasMedia = useMemo(() => Boolean(video || image), [video, image]);

  const ProjectBanner = useMemo(() => {
    if (video) {
      return (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none h-48 w-full object-cover object-center"
        />
      );
    }
    
    if (image) {
      return (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-48 w-full object-cover object-center"
          priority={false}
          loading="lazy"
        />
      );
    }
    
    return null;
  }, [video, image, title]);

  return (
    <Card
      className={cn(
        "flex flex-col border hover:shadow-lg transition-all duration-300 ease-out h-full",
        isExpanded ? "overflow-visible" : "overflow-hidden",
        className
      )}
    >
      {hasMedia && (
        <div className="relative">
          {ProjectBanner}
          {showGithubLinks && githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="absolute top-2 right-2"
            >
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      )}

      <CardHeader className="px-4 pt-6">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            <div className="flex items-center gap-1">
              {!hasMedia && showGithubLinks && githubLink && (
                <Link href={githubLink} target="_blank">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {showProjectLinks && href && (
                <Link href={href} target="_blank">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <time className="font-sans text-xs text-muted-foreground">{dates}</time>
        </div>
      </CardHeader>

      <CardContent className="px-4 flex-1">
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
        
        {detailedDescription && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 inline-flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
            >
              <span>View Details</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isExpanded && "rotate-180"
                )}
              />
            </Button>
            
            <motion.div
              key={`details-${title}`}
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
              style={{ isolation: "isolate" }}
            >
              <div className="pt-4 border-t mt-4 px-2">
                <Markdown className="prose prose-sm max-w-full text-pretty font-sans dark:prose-invert prose-p:my-3 prose-li:my-2 prose-ul:my-3 prose-headings:my-3 prose-li:leading-relaxed prose-strong:font-semibold">
                  {detailedDescription}
                </Markdown>
              </div>
            </motion.div>
          </>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-4 flex flex-col gap-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 w-full">
            {tags.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {showProjectLinks && links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2 w-full">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Button variant="outline" size="sm" className="h-8 text-xs gap-2">
                  {link.icon}
                  {link.type}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
});