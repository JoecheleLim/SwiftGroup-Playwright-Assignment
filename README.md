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
├── pages/                 # Page Object Model classes
├── tests/                 # Test specifications (Part 1, 2, and 3)
├── fixtures/              # Custom Playwright fixtures
├── credentials.ts         # Centralized test credentials (standard_user, etc.)
├── playwright.config.ts   # Global configuration and base URL
└── RATIONALIZATION.md     # AI usage documentation and prompts
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


**"Screenshots and Video**
https://drive.google.com/file/d/1UVrg2ry3jsXm3Nm_dvXwqAYoNUyCVUgc/view?usp=sharing

