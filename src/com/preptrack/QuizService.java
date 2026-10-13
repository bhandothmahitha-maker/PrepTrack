
package com.preptrack;
import java.time.LocalDateTime;
import java.util.List;
public class QuizService {
    public int calculateScore(List<Question> questions,
                              List<Integer> answers) {
        if (questions == null || answers == null
                || questions.size() != answers.size()) {
            throw new IllegalArgumentException(
                    "Each question must have one answer");
        }
        int score = 0;
        for (int i = 0; i < questions.size(); i++) {
            if (answers.get(i) != null
                    && answers.get(i)
                    == questions.get(i).getCorrectOption()) {
                score++;
            }
        }
        return score;
    }
    public QuizResult createResult(int score, int totalQuestions) {
        return new QuizResult(LocalDateTime.now(), score, totalQuestions);
    }
}
