# PrepTrack – Placement Preparation & Assessment Portal

PrepTrack is a Core Java console application designed to help students practice placement-related multiple-choice questions, evaluate their performance, and review previous quiz results.

## Features

- Interactive console-based menu
- Multiple-choice placement quiz
- Automatic score and percentage calculation
- Answer explanations
- Previous assessment history
- CSV-based result storage
- Input validation
- Self-tests for scoring and result storage

## Technologies Used

- **Language:** Java
- **Concepts:** Object-Oriented Programming (OOP), Collections, exception handling, input validation, and file handling
- **Storage:** CSV files
- **Development Environment:** Visual Studio Code
- **JDK:** Java 23

## Project Structure

```text
PrepTrack/
├── src/
│   └── com/
│       └── preptrack/
│           ├── Main.java
│           ├── Question.java
│           ├── QuizService.java
│           ├── QuizResult.java
│           ├── ResultStore.java
│           └── AppSelfTest.java
├── data/
├── out/
├── .gitignore
└── README.md
```

## How to Run

### Prerequisites

Install the Java Development Kit (JDK) and ensure `java` and `javac` are available in your terminal.

### 1. Compile the application

Run these commands from the project root in PowerShell:

```powershell
New-Item -ItemType Directory -Force out
javac -d out (Get-ChildItem src\com\preptrack\*.java).FullName
```

### 2. Run the self-tests

```powershell
java -cp out com.preptrack.Main --test
```

Expected output:

```text
All PrepTrack self-tests passed.
```

### 3. Start the application

```powershell
java -cp out com.preptrack.Main
```

Choose an option from the console menu to take a quiz, view previous results, or exit.

## Learning Outcomes

This project demonstrates the application of Core Java concepts to a practical placement-preparation use case, including modular class design, quiz scoring, input handling, and persistent storage of assessment results.

## Future Enhancements

- Add more questions on Java, SQL, DBMS, operating systems, and computer networks.
- Add difficulty levels and topic-wise quizzes.
- Track performance across multiple subjects.
- Introduce a graphical interface or web-based version.

## Author

Developed as a Core Java project for placement preparation and software development practice.
