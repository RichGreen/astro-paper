import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <div className="faq-item">
    <div className="faq-question">
        What is Tesla FAQ?
        <span className="faq-toggle"></span>
    </div>
    <div className="faq-answer">
        Tesla FAQ is a community-driven resource to answer common questions about Tesla vehicles and technology.
    </div>
    </div>
  );
}

