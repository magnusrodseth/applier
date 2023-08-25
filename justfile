# Generate styling
style:
	npx tailwindcss -i css/input.css -o css/output.css

# Generating styling and watch for changes
style-watch:
	npx tailwindcss -i css/input.css -o css/output.css -w

# Activate virtual environment
venv:
	poetry shell

# Install dependencies
install:
	poetry install

# Setup all necessary stuff
setup:
	just venv style install