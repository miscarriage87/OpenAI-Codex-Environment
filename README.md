# MISCARRIAGE-CODEX
OpenAI-Codex-Environment

## Simple Python App

This repository now includes a basic Python command-line application to
convert temperatures between Celsius and Fahrenheit. The script lives in
`app.py` and only requires Python 3 which comes bundled with VS Code's
Dev Containers.

### Running the app

Execute the following command from the project root:

```bash
python3 app.py
```

Follow the on-screen menu to perform conversions or exit the program.

## Web Application

A small web-based temperature converter is located in `temperature-web/`.
Open `temperature-web/index.html` in your browser to use it. The page
supports conversions in both directions and features a simple responsive
design for a pleasant experience.

## Running tests

Unit tests for the conversion helpers live in `tests/`. Install
`pytest` (e.g. `pip install pytest`) and then run:

```bash
pytest
```

from the project root to execute the suite.

## GitHub Guide

Alongside the converter apps, the folder `github-guide/` provides a short
interactive tutorial on using Git and GitHub. The root `index.html` simply
loads this guide in a full-page iframe. Open it in your browser for a quick
overview of common commands and workflows.

## License

This project is licensed under the [MIT License](LICENSE).