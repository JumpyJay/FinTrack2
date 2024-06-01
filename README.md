# FinTrack by Finnovations

FinTrack is a comprehensive budget tracking and financial management application designed to empower users to take control of their finances seamlessly.

This Independent Software Development Project (CP2106) [a.k.a. Orbital] is done up by Jaymeson Koh, and Kanit Bhudisanont. Advised by Aakash Ramaswamy. The code uses React Native for mobile development.

## Motivation

In recent years, the escalating Consumer Price Index (CPI) of items, exacerbated by global inflation and recent GST hikes, has posed significant challenges for individuals striving to maintain their desired lifestyle within their financial means. This economic landscape underscores the critical importance of understanding personal expenditure and making prudent financial decisions to avoid overspending or jeopardising savings due to impulse purchases.

Traditionally, personal finance has been perceived as a dry and overwhelming topic, particularly for beginners. The sheer volume of information available online often leads to information overload, leaving many individuals feeling lost and confused. However, there has been a growing trend, especially among youths, towards achieving financial independence. Yet, the path to financial literacy remains unclear for many due to the lack of engaging resources and the complexities of financial jargon.

## Aim

Our aim is to develop an intuitive and user-friendly finance app that empowers individuals to take charge of their financial well-being. We strive to create a robust platform that simplifies the processes of expense tracking, budget management, and financial goal setting. Moreover, we aim to integrate engaging gamification elements to make the experience more enjoyable and motivating for users.

Additionally, we aim to provide insightful analytics that offer valuable insights into users’ financial well-being. By fostering a sense of community around financial wellness, we aspire to create a supportive environment where users can learn from each other, seek advice, and celebrate their financial achievements together.

## User Stories

- **Expense Tracking**: As a budget-conscious individual who wants to track expenses accurately, I want to easily categorize transactions and log the amount spent.
- **Financial Goals**: As a person with financial aspirations such as saving for a vacation or a BTO, I want to set and track financial goals within the system.
- **Budget Management**: As someone who aims to stick to a budget, I want to set and manage budgets for various spending categories using visual aids like graphs or charts.

## Features

- **Expense Tracking**: Allow users to easily track their expenses, categorizing transactions and logging the amount spent. [Milestone 1]
- **Budget Management**: Enable users to set and manage budgets for different spending categories, with visualizations showing budget vs. actual spending. [Milestone 2]
- **Financial Goal Setting**: Allow users to set and track financial goals such as saving for a vacation, buying a new gadget, or paying off a loan. [Milestone 2]
- **Graphs**: Allows users to visualise their expenses and to better manage their spending. [Milestone 2]
- **Expense Footnotes**: Allow users to add notes or receipts to transactions for better record-keeping. [Milestone 3]
- **Budget Reminders**: Send notifications when nearing budget limits to offer insights into spending patterns. [Milestone 3]
- **Gamification Elements**: Implement achievement badges, an EXP and level system to provide a sense of accomplishment. [Milestone 3]
- **Leaderboard Feature**: Integrate a leaderboard ranking system based on levels and achievement badges. [Milestone 3]

## Timeline

- **Milestone 1 (June 3)**: Ideation/Technical proof of concept.
- **Milestone 2 (July 1)**: Prototyping with core features.
- **Milestone 3 (July 29)**: Extension with additional features.

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

## Setup [W.I.P]

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

4. **Configure Firebase**:
    - Add your Firebase configuration details to `firebaseConfig.js`.

## Authors

* **Jaymeson Koh** - Software Engineer - [blanklogic](https://github.com/blanklogic)
* **Kanit Bhudisanont** - Software Engineer - [JumpyJay](https://github.com/JumpyJay)
* **Aakash Ramaswamy** - Advisor - [Aak242](https://github.com/Aak242)

## License

See [LICENSE](LICENSE) for more information.

## Contact

For questions, suggestions, or feedback, please create an issue.

