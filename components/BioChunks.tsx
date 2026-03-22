import type { BioChunk } from "@/lib/site";

export function renderBioChunks(chunks: readonly BioChunk[]) {
  return chunks.map((c, i) => {
    if (c.kind === "text") {
      return <span key={i}>{c.v}</span>;
    }
    if (c.kind === "hl") {
      return (
        <span key={i} className="hl">
          {c.v}
        </span>
      );
    }
    return (
      <span key={i} className="str">
        {c.v}
      </span>
    );
  });
}
