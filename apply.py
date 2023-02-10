import os
import sys
from md2pdf.core import md2pdf

def apply(argv) -> bool:
    # argv should only process 2 arguments
    if len(argv) != 2:
        print("> Invalid input. Please use the following format:")
        print(f'$ python3 apply.py "company_name" cover_letter_outline')
        print(f'> Note that the company name must be in quotes.')
        return False

    company_name = argv[0]
    outline = argv[1]

    # Create directory if it doesn't exist
    if not os.path.exists("pdf"):
        os.mkdir("pdf")

    if not os.path.exists("css"):
        os.mkdir("css")

    # Format the pdf filename after converting all content
    pdf_filename = "pdf/" + company_name.lower().replace(" ", "_") + "_cover_letter" + ".pdf"

    md2pdf(
        pdf_filename,
        md_file_path=outline,
        css_file_path="css/output.css"
    )

    return True

if __name__ == '__main__':
    # Syntax: python3 apply.py company_name cover_letter_outline
    succeeded = apply(sys.argv[1:])

    print(
        "> Successfully created cover letter!"
        if succeeded
        else "> An error occurred when trying to create cover letter!"
    )

