
package com.preptrack;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.util.List;
public class AppSelfTest {
    public static void run() {
        try {
            Question q1 = new Question(
                    "Test 1", new String[]{"A", "B"}, 2, "");
            Question q2 = new Question(
                    "Test 2", new String[]{"A", "B"}, 1, "");
            QuizService service = new QuizService();
            int score = service.calculateScore(
                    List.of(q1, q2), List.of(2, 2));
            check(score == 1, "Score calculation failed.");
            QuizResult result = new QuizResult(
                    LocalDateTime.now(), 1, 2);
            check(Math.abs(result.getPercentage() - 50.0) < 0.001,
                    "Percentage calculation failed.");
            Path tempFile = Files.createTempFile(
                    "preptrack-test", ".csv");
            ResultStore store = new ResultStore(tempFile);
            store.save(result);
            List<QuizResult> loaded = store.loadAll();
            check(loaded.size() == 1, "Result loading failed.");
            check(loaded.get(0).getScore() == 1,
                    "Saved score does not match.");
            Files.deleteIfExists(tempFile);
            System.out.println("All PrepTrack self-tests passed.");
        } catch (Exception exception) {
            throw new RuntimeException("Self-test failed.", exception);
        }
    }
    private static void check(boolean condition, String message) {
        if (!condition) {
            throw new AssertionError(message);
        }
    }
}
