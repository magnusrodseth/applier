style:
	npx tailwindcss -i css/input.css -o css/output.css

style-watch:
	npx tailwindcss -i css/input.css -o css/output.css -w

venv:
	poetry shell

install:
	poetry install

run company outline:
	just venv && python3 apply.py {{company}} {{outline}}

help:
	@echo "Available commands:"
	@echo "just style - compiles tailwindcss"
	@echo "just style-watch - compiles tailwindcss and watches for changes"
	@echo "just venv - activates poetry virtual environment"
	@echo "just install - installs poetry dependencies"
	@echo "just run company outline - runs the script with the company and outline arguments"