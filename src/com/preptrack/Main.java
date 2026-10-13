
package com.preptrack;
import java.io.IOException;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
public class Main {
    private static final Scanner INPUT = new Scanner(System.in);
    private static final QuizService SERVICE = new QuizService();
    private static final ResultStore STORE =
            new ResultStore(Path.of("data", "results.csv"));
    private static final List<Question> QUESTIONS = List.of(
        new Question(
            "Which data structure follows LIFO order?",
            new String[]{"Queue", "Stack", "Tree", "Graph"},
            2,
            "A stack follows Last In, First Out."
        ),
        new Question(
            "Which OOP concept allows different implementations of an interface?",
            new String[]{"Encapsulation", "Inheritance",
                          "Polymorphism", "Compilation"},
            3,
            "Polymorphism allows different behaviors through a common interface."
        ),
        new Question(
            "What is binary search time complexity?",
            new String[]{"O(1)", "O(log n)", "O(n)", "O(n^2)"},
            2,
            "Binary search halves the search space at each step."
        ),
        new Question(
            "Which keyword is used to inherit a class in Java?",
            new String[]{"implements", "inherits", "extends", "super"},
            3,
            "The extends keyword establishes class inheritance."
        ),
        new Question(
            "Which SQL command retrieves data from a table?",
            new String[]{"GET", "SELECT", "OPEN", "UPDATE"},
            2,
            "SELECT retrieves data from database tables."
        )
    );
       public static void main(String[] args) {
        if (args.length > 0 && args[0].equals("--test")) {
            AppSelfTest.run();
            return;
        }
        System.out.println("==================================");
        System.out.println("   PREPTRACK PLACEMENT PORTAL");
        System.out.println("==================================");
        while (true) {
            System.out.println("\n1. Take a quiz");
            System.out.println("2. View previous results");
            System.out.println("3. Exit");
            int choice = readInt("Choose an option: ", 1, 3);
            switch (choice) {
                case 1 -> takeQuiz();
                case 2 -> showHistory();
                case 3 -> {
                    System.out.println("Good luck with placements!");
                    return;
                }
                default -> throw new IllegalStateException();
            }
        }
    }
    private static void takeQuiz() {
        List<Integer> answers = new ArrayList<>();
        System.out.println("\n--- Placement Practice Quiz ---");
        for (int i = 0; i < QUESTIONS.size(); i++) {
            Question question = QUESTIONS.get(i);
            System.out.println("\nQ" + (i + 1) + ". "
                    + question.getPrompt());
            String[] options = question.getOptions();
            for (int j = 0; j < options.length; j++) {
                System.out.println((j + 1) + ". " + options[j]);
            }
            answers.add(readInt(
                    "Your answer (1-" + options.length + "): ",
                    1, options.length
            ));
        }
        int score = SERVICE.calculateScore(QUESTIONS, answers);
        QuizResult result =
                SERVICE.createResult(score, QUESTIONS.size());
        System.out.println("\n--- Your Result ---");
        System.out.println("Score: " + score + "/" + QUESTIONS.size());
        System.out.printf("Percentage: %.2f%%%n",
                result.getPercentage());

        System.out.println("\n--- Answer Review ---");
        for (int i = 0; i < QUESTIONS.size(); i++) {
            Question q = QUESTIONS.get(i);
            boolean correct =
                    answers.get(i) == q.getCorrectOption();

            System.out.println("\nQ" + (i + 1) + ": "
                    + (correct ? "Correct" : "Incorrect"));

            System.out.println("Correct answer: "
                    + q.getOptions()[q.getCorrectOption() - 1]);

            System.out.println("Explanation: " + q.getExplanation());
        }
        try {
            STORE.save(result);
            System.out.println("\nResult saved successfully.");
        } catch (IOException exception) {
            System.out.println("Could not save result: "
                    + exception.getMessage());
        }
    }
    private static void showHistory() {
        try {
            List<QuizResult> results = STORE.loadAll();
            if (results.isEmpty()) {
                System.out.println("\nNo previous results found.");
                return;
            }
            System.out.println("\n--- Previous Results ---");

            for (int i = 0; i < results.size(); i++) {
                QuizResult r = results.get(i);

                System.out.printf(
                        "%d. %s | Score: %d/%d | %.2f%%%n",
                        i + 1,
                        r.getCompletedAt(),
                        r.getScore(),
                        r.getTotalQuestions(),
                        r.getPercentage()
                );
            }
        } catch (IOException exception) {
            System.out.println("Could not read results: "
                    + exception.getMessage());
        }
    }
    private static int readInt(String prompt, int min, int max) {
        while (true) {
            System.out.print(prompt);
            String value = INPUT.nextLine().trim();
            try {
                int number = Integer.parseInt(value);

                if (number >= min && number <= max) {
                    return number;
                }
            } catch (NumberFormatException ignored) {
                // Ask again when input is not a valid number.
            }
            System.out.println("Enter a number from "
                    + min + " to " + max + ".");
        }
    }
}
