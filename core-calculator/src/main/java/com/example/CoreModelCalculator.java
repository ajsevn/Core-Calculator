package com.example;
public class CoreModelCalculator {
    public static void main(String[] args) {
        // This can be a simple Java application that runs separately
        // It would contain the same logic as the JavaScript but in Java
        
        // Example calculation:
        double materialStrength = 250.0;
        double safetyCoefficient = 1.5;
        double temperatureFactor = 0.9;
        double loadFactor = 1.0;

        double designStrength = (materialStrength / safetyCoefficient) * temperatureFactor * loadFactor;
        System.out.println("Design Strength: " + designStrength + " MPa");
    }
}
