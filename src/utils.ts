import fs from "fs";

export function toSnakeCase(string: string): string {
  return string.toLowerCase().replace(/ /g, "_");
}

export function parsedOutline(outline: string, company_name: string): string {
  const content = fs.readFileSync(outline, "utf8");
  return content.replace(/{}/g, company_name);
}
