# Core-Calculator

Overview
The Core Model Calculator is a Java-based application integrated with an HTML form. It calculates various parameters related to a specified core model. The parameters include:

Core Factors
Effective Volume / Core Volume (Ve)
Effective Length / Length of the Magnetic Path (le)
Effective Area / Cross Section Area (Ae)
Minimum Area / Area of the Core Window (An)
Features
User-friendly HTML form for input.
Backend logic implemented in Java using Maven.
Outputs the calculated values based on the provided core model.
How to Run
Prerequisites: Ensure you have Java, Maven, and a web server (e.g., Tomcat) installed.
Build the Project: Run the following commands in the project directory:
bash
Copy code
mvn clean install
Deploy: Copy the generated .war file to the webapps folder of your Tomcat installation.
Access the Application: Open a web browser and navigate to http://localhost:8080/core-model-calculator to use the calculator.
Input
Core Model: The core model identifier (e.g., "EE25/13/7").
Output
The calculated parameters based on the input core model.
Acknowledgment
This project was developed as part of an assignment for KAMJRITZTEX IT Solutions.
