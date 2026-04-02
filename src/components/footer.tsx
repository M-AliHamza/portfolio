import { DATA } from "@/data/resume";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-6">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="size-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}