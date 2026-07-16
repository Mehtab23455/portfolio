"use client";

import { useState } from "react";
import { Quote, ExternalLink, Download, Copy, Check, Eye, EyeOff, ChevronUp } from "lucide-react";
import { publications, type Publication } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function statusVariant(status: Publication["status"]) {
  if (status === "Published") return "accent" as const;
  return "default" as const;
}

function PublicationCard({ pub }: { pub: Publication }) {
  const [copied, setCopied] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  // Safely extract the file name from the path for the viewer header layout
  const filename = pub.pdfUrl ? pub.pdfUrl.split("/").pop() : "document.pdf";

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable -- fail silently
    }
  };

  return (
    <Card className="p-7 md:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={statusVariant(pub.status)}>{pub.status}</Badge>
        <span className="font-mono text-xs text-muted-foreground">{pub.year}</span>
        <span className="text-border-strong">·</span>
        <span className="text-xs text-muted">{pub.venue}</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{pub.title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-muted">{pub.abstract}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {pub.keywords.map((k) => (
          <Badge key={k} variant="outline">
            {k}
          </Badge>
        ))}
      </div>

      <p className="mt-4 border-l-2 border-accent/40 pl-3 text-sm italic text-muted">
        {pub.contribution}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 font-mono text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Quote size={13} /> {pub.citations} citations
        </span>
        <span className="flex items-center gap-1.5">
          <Download size={13} /> {pub.downloads} downloads
        </span>
        <span className="flex items-center gap-1.5">
          <Eye size={13} /> {pub.views} views
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <Button size="sm" variant="outline" asChild>
          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">
            DOI <ExternalLink size={13} className="ml-1.5" />
          </a>
        </Button>

        {pub.pdfUrl && (
          <>
            {/* View Toggle Button */}
            {/* <Button size="sm" variant={showPdf ? "secondary" : "outline"} onClick={() => setShowPdf(!showPdf)}>
              {showPdf ? (
                <>
                  Hide PDF <EyeOff size={13} className="ml-1.5" />
                </>
              ) : (
                <>
                  View PDF <Eye size={13} className="ml-1.5" />
                </>
              )}
            </Button> */}

            {/* Dynamic Download PDF Link */}
            <Button size="sm" variant="outline" asChild>
              <a href={pub.pdfUrl} download={filename}>
                Download PDF <Download size={13} className="ml-1.5" />
              </a>
            </Button>
          </>
        )}

        <Button size="sm" variant="ghost" onClick={copyBibtex}>
          {copied ? (
            <>
              Copied <Check size={13} className="ml-1.5" />
            </>
          ) : (
            <>
              Copy BibTeX <Copy size={13} className="ml-1.5" />
            </>
          )}
        </Button>
      </div>

      {/* --- Dynamic Zenodo-style Interactive PDF Embedded Viewer Container --- */}
      {showPdf && pub.pdfUrl && (
        <div className="mt-6 border border-border rounded-lg overflow-hidden bg-muted/20">
          {/* Header Bar matching your preview screenshot setup */}
          <div
            className="flex items-center justify-between px-4 py-2.5 bg-card border-b border-border cursor-pointer select-none"
            onClick={() => setShowPdf(false)}
          >
            <span className="text-xs font-mono text-muted-foreground truncate max-w-[240px] md:max-w-md hover:underline hover:text-primary">
              {filename}
            </span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <a
                href={pub.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline font-medium flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                Full Window <ExternalLink size={11} />
              </a>
              <span className="text-border-strong">|</span>
              <ChevronUp size={14} />
            </div>
          </div>

          {/* Explicitly Typed Document Viewer Layer */}
          <div className="w-full h-[600px] relative bg-neutral-900/5 dark:bg-neutral-950/20">
            <object
              data={`${pub.pdfUrl}#toolbar=1&navpanes=0&statusbar=0`}
              type="application/pdf"
              className="w-full h-full"
            >
              {/* Fallback iframe execution using an explicit embedded viewer configuration if the browser completely intercepts <object> */}
              <iframe
                src={`${pub.pdfUrl}#toolbar=1`}
                title={`PDF Preview for ${pub.title}`}
                className="w-full h-full border-none"
              />
            </object>
          </div>
        </div>
      )}
    </Card>
  );
}

export function Publications() {
  return (
    <section id="publications" className="section-container py-28 md:py-36">
      <SectionHeading
        eyebrow="Publications"
        title="Papers & preprints"
        description="Citation counts, downloads, and views are illustrative placeholders — wire this section to a live Scholar or Zenodo feed when publishing."
      />

      <div className="space-y-6">
        {publications.map((pub, i) => (
          <Reveal key={pub.id} delay={i * 0.06}>
            <PublicationCard pub={pub} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}