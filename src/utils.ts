import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export function toSnakeCase(string: string): string {
  return string.toLowerCase().replace(/ /g, "_");
}

export function parsedOutline(outline: string, company_name: string): string {
  const content = fs.readFileSync(outline, "utf8");
  return content.replace(/{}/g, company_name);
}

export function getDirName(metaUrl: string): string {
  return path.dirname(fileURLToPath(metaUrl));
}

export const getRootDirectory = (): string => {
  return path.join(getDirName(import.meta.url), "..");
};
