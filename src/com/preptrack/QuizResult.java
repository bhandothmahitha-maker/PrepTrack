
package com.preptrack;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
public class QuizResult {
    private final LocalDateTime completedAt;
    private final int score;
    private final int totalQuestions;
    public QuizResult(LocalDateTime completedAt, int score,
                      int totalQuestions) {
        if (completedAt == null || totalQuestions < 1
                || score < 0 || score > totalQuestions) {
            throw new IllegalArgumentException("Invalid quiz result");
        }
        this.completedAt = completedAt;
        this.score = score;
        this.totalQuestions = totalQuestions;
    }
    public LocalDateTime getCompletedAt() {
        return completedAt;
    }
    public int getScore() {
        return score;
    }
    public int getTotalQuestions() {
        return totalQuestions;
    }
    public double getPercentage() {
        return score * 100.0 / totalQuestions;
    }
    public String toCsv() {
        return completedAt.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME)
                + "," + score + "," + totalQuestions;
    }
    public static QuizResult fromCsv(String line) {
        String[] parts = line.split(",");
        if (parts.length != 3) {
            throw new IllegalArgumentException("Invalid result record");
        }
        return new QuizResult(
                LocalDateTime.parse(parts[0]),
                Integer.parseInt(parts[1]),
                Integer.parseInt(parts[2])
        );
    }
}

