# Applier ⚙️

## Table of Contents 📚

<!--toc:start-->

- [Table of Contents 📚](#table-of-contents-📚)
- [Description ✏️](#description-️)
- [Overview 📖](#overview-📖)
- [Developer Information 🙋🏼‍♂️](#developer-information-🙋🏼‍️)
- [Tech Stack 🛠](#tech-stack-🛠)
- [Adding outline 📝](#adding-outline-📝)
- [Running the application ✅](#running-the-application)
- [Styling the PDF 🎨](#styling-the-pdf-🎨)
<!--toc:end-->

## Description ✏️

Applier is a small console application for generating styled PDFs from Markdown. This project uses it to streamline the process of creating job applications, but it can be used for any convertion from Markdown to PDF.

## Overview 📖

![Overview](/assets/overview.png)

## Developer Information 🙋🏼‍♂️

Developed by Magnus Rødseth.

## Tech Stack 🛠

- Python, for the application
- Poetry, for dependency management in Python
- Tailwind CSS, for styling the PDFs
- `just`, for running commands

## Adding outline 📝

To add a new outline, create a new file in the `outlines` folder. The file can be named anything. You can have multiple outlines, and then pass the name of the outline you want to use as the second argument when running the application. The outline file must be a Markdown file.

**Wherever you want the company name in the outline, add `{}`. This will be exchanged with the provided company name when running the script.**

## Running the application ✅

```sh
# Navigate to the project root
cd applier

# Ensure `just` is installed
brew install just

# Ensure `poetry` is installed
brew install poetry

# Setup all necessary stuff
just setup

# Run the application
just run <company_name> <outline>

# See available commands
just -l
```

## Styling the PDF 🎨

The styling of the PDF is done using Tailwind CSS. The `tailwind.config.js` file contains the configuration for the styling. The `src/input.css` file contains the styling for the HTML elements. Inspect the [`justfile`](/justfile) to see how to compile the CSS into a single file.
