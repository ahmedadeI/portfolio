import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class calculator {
    static JTextField textField = new JTextField();

    public static void main(String[] args) {
        JFrame frame = new JFrame("Calculator");
        frame.setSize(400, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout(5, 5));
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);

        textField.setEditable(false);
        textField.setFont(new Font("Arial", Font.PLAIN, 24));
        textField.setHorizontalAlignment(JTextField.RIGHT);
        frame.add(textField, BorderLayout.NORTH);

        JPanel panel = new JPanel(new GridLayout(4, 4, 5, 5));

        String[] buttons = {
                "7", "8", "9", "/",
                "4", "5", "6", "*",
                "1", "2", "3", "-",
                "C", "0", "=", "+"
        };

        for (String b : buttons) {
            JButton button = new JButton(b);
            button.setFont(new Font("Arial", Font.PLAIN, 20));
            button.addActionListener(e -> click(b));
            panel.add(button);
        }

        frame.add(panel, BorderLayout.CENTER);
        frame.setVisible(true);
    }

    static void click(String b) {
        String text = textField.getText();

        if (b.equals("C")) {
            textField.setText("");
        } else if (b.equals("=")) {
            textField.setText(calculate(text));
        } else {
            textField.setText(text + b);
        }
    }

    static String calculate(String expression) {
        if (expression == null || expression.isEmpty()) {
            return "Error";
        }
        try {
            double result = evalExpression(expression);
            if (result == Math.floor(result) && !Double.isInfinite(result)) {
                return String.valueOf((long) result);
            }
            return String.valueOf(result);
        } catch (Exception e) {
            return "Error";
        }
    }

    // Evaluates a mathematical expression respecting operator precedence (* / before + -)
    static double evalExpression(String expression) {
        List<Double> numbers = new ArrayList<>();
        List<Character> operators = new ArrayList<>();

        int pos = 0;
        while (pos < expression.length()) {
            int start = pos;
            while (pos < expression.length() && (Character.isDigit(expression.charAt(pos)) || expression.charAt(pos) == '.')) {
                pos++;
            }
            if (pos == start) {
                throw new IllegalArgumentException("Invalid expression");
            }
            numbers.add(Double.parseDouble(expression.substring(start, pos)));

            if (pos < expression.length()) {
                char op = expression.charAt(pos);
                if (op != '+' && op != '-' && op != '*' && op != '/') {
                    throw new IllegalArgumentException("Invalid operator: " + op);
                }
                operators.add(op);
                pos++;
                if (pos == expression.length()) {
                    throw new IllegalArgumentException("Expression ends with an operator");
                }
            }
        }

        if (numbers.isEmpty()) {
            throw new IllegalArgumentException("Empty expression");
        }

        // First pass: evaluate * and / (higher precedence)
        int opIdx = 0;
        while (opIdx < operators.size()) {
            char op = operators.get(opIdx);
            if (op == '*' || op == '/') {
                double a = numbers.get(opIdx);
                double b = numbers.get(opIdx + 1);
                double res;
                if (op == '/') {
                    if (b == 0) throw new ArithmeticException("Division by zero");
                    res = a / b;
                } else {
                    res = a * b;
                }
                numbers.set(opIdx, res);
                numbers.remove(opIdx + 1);
                operators.remove(opIdx);
            } else {
                opIdx++;
            }
        }

        // Second pass: evaluate + and - (lower precedence)
        double result = numbers.get(0);
        for (int k = 0; k < operators.size(); k++) {
            char op = operators.get(k);
            double b = numbers.get(k + 1);
            if (op == '+') result += b;
            else if (op == '-') result -= b;
        }

        return result;
    }
}
