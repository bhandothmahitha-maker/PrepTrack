
package com.preptrack;
public class Question {
    private final String prompt;
    private final String[] options;
    private final int correctOption;
    private final String explanation;
    public Question(String prompt, String[] options,
                    int correctOption, String explanation) {
        if (prompt == null || prompt.isBlank()) {
            throw new IllegalArgumentException("Question cannot be empty");
        }
        if (options == null || options.length < 2) {
            throw new IllegalArgumentException("At least two options required");
        }
        if (correctOption < 1 || correctOption > options.length) {
            throw new IllegalArgumentException("Invalid correct option");
        }
        this.prompt = prompt;
        this.options = options.clone();
        this.correctOption = correctOption;
        this.explanation = explanation == null ? "" : explanation;
    }
    public String getPrompt() {
        return prompt;
    }
    public String[] getOptions() {
        return options.clone();
    }
    public int getCorrectOption() {
        return correctOption;
    }
    public String getExplanation() {
        return explanation;
    }
}
