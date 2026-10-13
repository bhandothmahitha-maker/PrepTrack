
package com.preptrack;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;
public class ResultStore {
    private final Path file;
    public ResultStore(Path file) {
        this.file = file;
    }
    public void save(QuizResult result) throws IOException {
        Path parent = file.toAbsolutePath().getParent();
        if (parent != null) {
            Files.createDirectories(parent);
        }
        Files.writeString(
                file,
                result.toCsv() + System.lineSeparator(),
                StandardOpenOption.CREATE,
                StandardOpenOption.APPEND
        );
    }
    public List<QuizResult> loadAll() throws IOException {
        List<QuizResult> results = new ArrayList<>();
        if (!Files.exists(file)) {
            return results;
        }
        for (String line : Files.readAllLines(file)) {
            if (line.isBlank()) {
                continue;
            }
            try {
                results.add(QuizResult.fromCsv(line));
            } catch (RuntimeException exception) {
                System.err.println("Skipping invalid result record.");
            }
        }
        return results;
    }
}
