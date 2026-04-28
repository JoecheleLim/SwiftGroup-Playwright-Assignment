# Playwright Technical Assessment: E-Commerce & Form Automation
This repository contains the technical assessment for the Software Engineering role at Swift Logistics. 
The project utilises Playwright with TypeScript to automate testing scenarios for SauceDemo and an Ant Design-based logistics form.

## 🚀 Project Overview
The automation suite is divided into three parts:
- **Part 1:** SauceDemo end-to-end purchase flow with price verification.
- **Part 2:** SauceDemo error handling and sorting performance tests.
- **Part 3:** Complex multi-step Ant Design form validation and submission.

## 🛠️ Tech Stack & Architecture
- **Language:** TypeScript 
- **Framework:** Playwright
- **Pattern:** Page Object Model (POM) for enhanced reusability and maintenance
- **Fixtures:** Custom fixtures to manage page object instantiation

## 📁 Project Structure
```plaintext
├── pages/                 ## Page Object Model classes (Encapsulates UI logic)
├── tests/                 # Test specifications (Automated scenarios for Part 1, 2, and 3)
├── fixtures/              # Custom Playwright fixtures (Handles setup and POM instantiation)
├── credentials.ts         # Centralised test credentials (Stores usernames and passwords)
├── playwright.config.ts   # Global configuration (Timeouts, browsers, and base URL)
├── package-lock.json      # Dependency lockfile (Ensures exact versions for reproducibility)
├── package.json           # Project manifest (Lists dependencies and run scripts)
└── README.md              # Project documentation (Includes AI rationalisation and prompts)
```

## ⚙️ Installation & Setup
  1. Clone the repository:
     
      ```bash
      git clone ttps://github.com/JoecheleLim/SwiftGroup-Playwright-Assignment.git
      cd SwiftGroup-Playwright-Assignment
      ```
  
  2. Install dependencies:
  
      ```bash
      npm install
      ```
  
  3. Install Playwright Browsers:
     
     ```bash
     npx playwright install
     ```
     
## 🖥️ Running the Tests
As per the requirements, tests should be run using the Playwright UI to visualise navigation and selector interactions.
  
  ```bash
  npx playwright test --ui
  ```

## 🤖 AI Rationalization & Documentation
As permitted by the assessment instructions, AI assistance (Gemini) was utilised to architect the project and refine complex locators.

**Reasoning for AI Usage** 
- **Architecture Optimisation:** To ensure strict adherence to the Page Object Model and custom fixture requirements.
- **Locator Strategy:** Ant Design components (Part 3) use dynamic rendering. AI was used to identify stable CSS selectors and classes (e.g., `.ant-select-item-option-content`) since `testId` was unavailable.
- **Performance Logic:** Implementing the precise `Date.now()` logic to measure sorting speed for the `performance_glitch_user`.

**Prompts Used**
  **Note:** Below is the link to the full conversation history for complete transparency.
  [Link to Chat History] (https://gemini.google.com/share/b6d5feb1a31c)
  
**Key Prompts Example:** 
- *"How can I setup this project using Playwright with POM and Fixtures?"*
- *"How to interact with searchable Ant Design selects using Playwright?"*
- *"What is the best way to verify the 'green background check mark' in an Ant Design success result?*


**Screenshots and Video:**

https://drive.google.com/file/d/1UVrg2ry3jsXm3Nm_dvXwqAYoNUyCVUgc/view?usp=sharing

<center>
  <img src="https://github.com/user-attachments/assets/041babb0-9fd6-4371-9fcb-64913b6dc552">
  <br>
  <em>Figure 1: Success of Part 1</em>
</center>
<center>
  <img src="https://github.com/user-attachments/assets/9d6e32bb-71fc-4bd2-9da5-8efe2d306b38">
  <br>
  <em>Figure 2: Success of Part 2</em>
</center><center>
  <img src="https://github.com/user-attachments/assets/06e37fb8-0cff-4bd2-92e1-bed66add65fc">
  <br>
  <em>Figure 3: Success of Part 3</em>
</center>
