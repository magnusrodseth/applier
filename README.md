# Applier ⚙️

## Table of Contents 📚

<!--toc:start-->

- [Applier ⚙️](#applier-️)
  - [Table of Contents 📚](#table-of-contents-)
  - [Description ✏️](#description-️)
  - [Developer Information 🙋🏼‍♂️](#developer-information-️)
  - [Tech Stack 🛠](#tech-stack-)
  - [Adding outline 📝](#adding-outline-)
  - [Running the application ✅](#running-the-application-)

## Description ✏️

Applier is a small console application for generating styled PDFs from Markdown. This project uses it to streamline the process of creating job applications, but it can be used for any convertion from Markdown to PDF.

## Developer Information 🙋🏼‍♂️

Developed by Magnus Rødseth.

## Tech Stack 🛠

- TypeScript, for the application logic
- [`pnpm`](https://pnpm.io/), for package management
- [`react-pdf`](https://react-pdf.org/), for rendering PDFs

## Adding outline 📝

To add a new outline, create a new file in the `outlines` folder. The file can be named anything. You can have multiple outlines, and then pass the name of the outline you want to use as the second argument when running the application. The outline file must be a Markdown file.

**Wherever you want the company name in the outline, add `{}`. This will be exchanged with the provided company name when running the script.**

## Running the application ✅

Ensure you have [`pnpm`](https://pnpm.io/) installed. Then run the following commands:

```sh
# Navigate to the project root
cd applier

# Run the script
pnpm apply <company-name> <path-to-outline>
```
