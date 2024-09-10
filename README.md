# Tampermonkey Utility Scripts

This repository contains a collection of utility scripts designed to run with Tampermonkey in your browser. These scripts enhance your browsing experience and automate various tasks.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Install the Tampermonkey extension for your browser:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   - [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)

2. Click on the script file you want to install from this repository.
3. Click the "Raw" button at the top of the file view.
4. Tampermonkey should automatically detect the script and prompt you to install it. If not, copy the entire script and create a new script in Tampermonkey, then paste the code.

## Available Scripts

| Script Name | Description | Version |
|-------------|-------------|---------|
| Capture Page with Images | Captures the current page along with all images | 1.0.0 |

## Usage

### Capture Page with Images

This script allows you to capture the current webpage along with all images and video present. 

**Features:**
- Captures the entire page content
- Includes all images on the page
- Files are automatically named (using timestamps)
- Runs on a timer for convenience
- Does not get blocked by authentication or bot prevention

**How to use:**
1. Navigate to the page you want to capture
2. Run Tampermonkey with the Capture Page with Images script active
3. Click save
4. Navigate to next page and continue until done
5. Turn off Tampermonkey/script

## Contributing

Contributions to this repository are welcome! If you have a useful Tampermonkey script you'd like to add:

1. Fork this repository
2. Create a new branch for your script
3. Add your script file to the repository
4. Update the README.md file to include your script in the Available Scripts table
5. Create a pull request with a description of your script and its functionality

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

