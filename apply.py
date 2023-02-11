import os
import sys
from md2pdf.core import md2pdf


def to_snake_case(string: str) -> str:
    return string.lower().replace(" ", "_")


def parsed_outline(outline: str, company_name: str) -> str:
    parsed_outline = ""

    # Open the cover letter outline
    with open(outline, "r") as f:
        # Replace all instances of {} with the actual company name
        parsed_outline = f.read().replace("{}", company_name)

    return parsed_outline


def apply(argv) -> bool:
    # argv should only process 2 arguments
    if len(argv) != 2:
        print("> Invalid input. Please use the following format:")
        print(f'$ python3 apply.py "company_name" cover_letter_outline')
        print(f'> Note that the company name must be in quotes.')
        return False

    company_name: str = argv[0]
    outline: str = argv[1]

    if not os.path.exists(outline):
        print(f"> The cover letter outline '{outline}' does not exist!")
        return False

    # Create directory if it doesn't exist
    if not os.path.exists("pdf"):
        os.mkdir("pdf")

    if not os.path.exists("css"):
        os.mkdir("css")

    parsed_outline_filename = f'{to_snake_case(company_name)}.md'

    # Write the new cover letter outline to new file
    with open(parsed_outline_filename, "w") as f:
        f.write(parsed_outline(outline, company_name))

    pdf_filename = f'pdf/{to_snake_case(company_name)}_cover_letter.pdf'

    try:
        md2pdf(
            pdf_filename,
            md_file_path=parsed_outline_filename,
            css_file_path="css/output.css",
        )
    except Exception as _:
        return False

    # Clean up the parsed outline
    os.remove(parsed_outline_filename)

    return True


if __name__ == '__main__':
    # Syntax: python3 apply.py company_name cover_letter_outline
    succeeded = apply(sys.argv[1:])

    print(
        "> Successfully created cover letter!"
        if succeeded
        else "> An error occurred when trying to create cover letter!"
    )
