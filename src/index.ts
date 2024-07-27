import { Command } from "commander";
import fs from "fs";
import path from "path";
import { generatePDF } from "./pdf";
import { toSnakeCase, parsedOutline, getDirName } from "./utils";

const program = new Command();
const __dirname = getDirName(import.meta.url);

program
  .version("1.0.0")
  .description("CLI for generating job application cover letters");

program
  .command("apply <company_name> <outline>")
  .description("Generate a cover letter PDF for a specified company")
  .action(async (company_name: string, outline: string) => {
    if (!fs.existsSync(outline)) {
      console.error(`> The cover letter outline '${outline}' does not exist!`);
      process.exit(1);
    }

    const parsedOutlineContent = parsedOutline(outline, company_name);
    const parsedOutlineFilename = path.join(
      __dirname,
      `${toSnakeCase(company_name)}.md`
    );

    fs.writeFileSync(parsedOutlineFilename, parsedOutlineContent);

    const pdfFilename = path.join(
      __dirname,
      `../pdf/${toSnakeCase(company_name)}_cover_letter.pdf`
    );

    try {
      await generatePDF(parsedOutlineFilename, pdfFilename);
      console.log("> Successfully created cover letter!");
    } catch (error) {
      console.error(
        "> An error occurred when trying to create cover letter!",
        error
      );
    } finally {
      fs.unlinkSync(parsedOutlineFilename);
    }
  });

program.parse(process.argv);
