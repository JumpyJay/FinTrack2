# FinTrack by Finnovations (6008)

![Logo of FinTrack](/assets/images/fintrack-logo.png)

FinTrack is a comprehensive budget tracking and financial management application designed to empower users to take control of their finances seamlessly.

This Independent Software Development Project (CP2106) [a.k.a. Orbital] is done up by Jaymeson Koh, and Kanit Bhudisanont. Advised by Aakash Ramaswamy. The code uses React Native for mobile development.

## Proposed Level of Achievement
Apollo 11

## Motivation

In recent years, the escalating Consumer Price Index (CPI) of items, exacerbated by global inflation and recent GST hikes, has posed significant challenges for individuals striving to maintain their desired lifestyle within their financial means. This economic landscape underscores the critical importance of understanding personal expenditure and making prudent financial decisions to avoid overspending or jeopardising savings due to impulse purchases.

Traditionally, personal finance has been perceived as a dry and overwhelming topic, particularly for beginners. The sheer volume of information available online often leads to information overload, leaving many individuals feeling lost and confused. However, there has been a growing trend, especially among youths, towards achieving financial independence. Yet, the path to financial literacy remains unclear for many due to the lack of engaging resources and the complexities of financial jargon.

## Aim

Our aim is to develop an intuitive and user-friendly finance app that empowers individuals to take charge of their financial well-being. We strive to create a robust platform that simplifies the processes of expense tracking, budget management, and financial goal setting. Moreover, we aim to integrate engaging gamification elements to make the experience more enjoyable and motivating for users.

Additionally, we aim to provide insightful analytics that offer valuable insights into users’ financial well-being. By fostering a sense of community around financial wellness, we aspire to create a supportive environment where users can learn from each other, seek advice, and celebrate their financial achievements together.

## User Stories

1. **Expense Tracking**: As a budget-conscious individual who wants to track expenses accurately, I want to easily categorize transactions and log the amount spent.
2. **Financial Goals**: As a person with financial aspirations such as saving for a vacation or a BTO, I want to set and track financial goals within the system.
3. **Budget Management**: As someone who aims to stick to a budget, I want to set and manage budgets for various spending categories using visual aids like graphs or charts.

## Project Scope
- FinTrack is a comprehensive financial management app designed to empower users with seamless expense tracking, budget management, and financial goal setting, enhanced by engaging gamification elements.

- FinTrack is an innovative financial management application developed to help users gain control over their personal finances through intuitive and user-friendly features. The app enables users to accurately track their expenses by categorizing transactions and logging amounts spent. It also allows for setting and managing budgets across various spending categories with visual aids such as graphs and charts. Users can set and track financial goals, whether it's saving for a vacation, purchasing a new gadget, or paying off a loan. FinTrack incorporates gamification elements, including achievement badges and a leaderboard system, to make financial management engaging and motivating. By providing insightful analytics and fostering a supportive community around financial wellness, FinTrack aims to make personal finance accessible and enjoyable for everyone, especially beginners seeking financial independence.

## Features

### Milestone 1
- **Expense Tracking**: Allow users to easily track their expenses, categorizing transactions and logging the amount spent.

### Milestone 2
- **Budget Management**: Enable users to set and manage budgets for different spending categories, with visualizations showing budget vs. actual spending.
- **Financial Goal Setting**: Allow users to set and track financial goals such as saving for a vacation, buying a new gadget, or paying off a loan. 

### Milestone 3
- **Expense Footnotes**: Allow users to add notes or receipts to transactions for better record-keeping.
- **Budget Reminders**: Send notifications when nearing budget limits to offer insights into spending patterns.
- **Gamification Elements**: Implement achievement badges, an EXP and level system to provide a sense of accomplishment.
- **Leaderboard Feature**: Integrate a leaderboard ranking system based on levels and achievement badges.

## Proposed Program Flow
![Proposed Program Flow of FinTrack](/assets/images/proposed-program-flow.png)

## Development Plan
- **Week 0 (6 May ~ 12 May)**: Research Tech Stack & Prepare Liftoff Poster and Video
- **Week 1 (13 May ~ 19 May)**: Prepare Liftoff Poster and Video & Learning necessary skills
- **Week 2 (20 May ~ 26 May)**: Prototype Creation
- **Week 3 (27 May ~ 2 Jun)**: Integration of Frontend-Backend Integration with Firebase & Firestore
- **Week 4 (June 3) [Milestone 1]**: - Ideation (README), Proof of concept: Authentication method with email and password, Navigation through different essential pages, Basic React Native design, Retrieve user data from Firestore database
- **Week 4 (3 Jun ~ 9 Jun)**: Work on Budget Management Feature
- **Week 5 (10 Jun ~ 16 Jun)**: Work on Financial Goal Setting Feature
- **Week 6 (17 Jun ~ 23 Jun)**: Test features and improvements
- **Week 7 (24 Jun ~ 30 Jun)**: Improve UX
- **Week 8 Milestone 2 (July 1)**: Prototyping with core features.
- **Week 8 (1 Jul ~ 7 Jul)**: Expense Footnotes Feature
- **Week 9 (8 Jul ~ 14 Jul)**: Budget Reminders Feature
- **Week 10 (15 Jul ~ 21 Jul)**: Gamification Elements Feature
- **Week 11 (22 Jul ~ 28 Jul)**: Leaderboard Feature
- **Week 12 (29 Jul ~ 4 Aug)**: Testing & Improvement of UX
- **Week 12 Milestone 3 (July 29)**: Extension with additional features.
- **Splashdown (28 August)**

## Proof of Concept
A walkthrough of our Technical Proof of Concept is available through the following YouTube link:

## Project Log
Our project log is accessible through the following Google Sheets Link:
https://docs.google.com/spreadsheets/d/1ab0G22-dswjvNvjWRIXbf2VOejFEeKww/edit?usp=sharing&ouid=107310411433945542483&rtpof=true&sd=true

## Tech Stack

- **Frontend**: React Native, Expo Go
- **Backend**: Firebase, Firestore
- **Version Control**: Git

## Software Engineering

FinTrack utilizes a robust architecture integrating React Native for the front-end and Firebase for the back-end.

### Frontend

- **React Native & Expo Go**: Maximize user-friendliness by rendering and arranging elements seamlessly.
- **Navigation**: Implement an intuitive navigation system for easy access to different sections.
- **ExpenseView**: Fetch and display a list of expenses from Firestore.
- **BudgetView**: Use charts to display budget data and allow users to set budgets.

### Backend

- **Firebase & Firestore**: Store user financial data securely in the cloud.
- **Authentication**: Manage user authentication and authorization through Firebase.
- **Realtime Synchronization**: Ensure immediate reflection of changes in the user's financial data through Firestore.
- **Cloud Functions**: Implement server-side logic for data validation and business rules through Firebase and Firestore.
- **Security Rules**: Ensure only authenticated users can access and modify their financial data through unique user IDs.

## Version Control with Git

We use Git for version control to enable effective collaboration, track changes, and maintain the integrity of our codebase. 

- **Branching Strategy**: Follow a consistent branching strategy and Git workflow.
- **Commits**: Make daily and descriptive commits.
- **Collaboration**: Encourage regular communication among team members.

## Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/finnovations.git
    cd finnovations
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Install dependencies manually**:
    ```bash
    npm install
    npx expo install expo-linear-gradient
    npx expo install firebase
    npm i @gluestack-ui/themed-native-base react-native-svg@13.4.0
    npm install react-native-chart-kit
    npm install @react-navigation/bottom-tabs
    npm install @react-navigation/native-stack
    npx expo install firebase
    npm install nativewind
    npm install --save-dev tailwindcss@3.3.2
    npm install @reduxjs/toolkit react-redux
    npm install @react-native-async-storage/async-storage
    ```

3. **Start the Expo development server**:
    ```bash
    npm start
    ```

## Authors

* **Jaymeson Koh** - Software Engineer - [blanklogic](https://github.com/blanklogic)
* **Kanit Bhudisanont** - Software Engineer - [JumpyJay](https://github.com/JumpyJay)
* **Aakash Ramaswamy** - Advisor - [Aak242](https://github.com/Aak242)

## License

See [LICENSE](LICENSE) for more information.

## Contact

For questions, suggestions, or feedback, please create an issue.

