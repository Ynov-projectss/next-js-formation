import { Website } from "@/types/Website";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "node:path";
import fs from "node:fs/promises";

type Props = {
  websites: Website[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "public", "websites.json");
  const raw = await fs.readFile(filePath, "utf-8");
  const websites: Website[] = JSON.parse(raw);

  return {
    props: { websites },
  };
};

export default function WebsitesPage({
  websites,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {websites.map((site) => (
        <li key={site.slug}>{site.title}</li>
      ))}
    </ul>
  );
}