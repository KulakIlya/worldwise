import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RealNumbersFinder {

    public static void main(String[] args) {
        String fileName = "text.txt"; // Змініть на шлях до вашого файлу

        try {
            List<Double> realNumbers = findRealNumbers(fileName);
            System.out.println("Дійсні числа, знайдені в файлі:");
            for (Double number : realNumbers) {
                System.out.println(number);
            }
        } catch (IOException e) {
            System.err.println("Помилка при зчитуванні файлу: " + e.getMessage());
        }
    }

    public static List<Double> findRealNumbers(String fileName) throws IOException {
        List<Double> realNumbers = new ArrayList<>();
        Pattern pattern = Pattern.compile("-?\\d+(\\.\\d+)?");

        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = br.readLine()) != null) {
                Matcher matcher = pattern.matcher(line);
                while (matcher.find()) {
                    String match = matcher.group();
                    try {
                        double number = Double.parseDouble(match);
                        realNumbers.add(number);
                    } catch (NumberFormatException e) {
                        // Ігноруємо недійсні числа
                    }
                }
            }
        }

        return realNumbers;
    }
}



