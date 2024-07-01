STUDENTGRADE
In the studentgrade file it entails the following a user inputs values that is the marks and displays grade as output.
If the input is valid (a number between 0 and 100), the function calculates and prints the corresponding grade.
Grades are categorized as follows:
A: marks > 79
B: 60 <= marks <= 79
C: 50 <= marks < 60
D: 40 <= marks < 50
E: marks < 40
If the input is invalid (not a number or outside the valid range), an error message is displayed.

SPEED
In the speed file the following is what happens;
If speed is less than the speedLimit (70 km/h), the function prints "Ok".
If speed exceeds the speedLimit, the function calculates demerit points based on how much the speed exceeds the limit (5 km/h per demerit point) and prints the number of demerit points calculated.
If the calculated demerit points exceed the pointsThreshold (12 points), the function prints "License suspended".

SALARY
In the salary file the following is done;
Tax Calculation:

The function uses progressive tax bands (taxBands) to calculate tax based on income.
Tax bands are defined with a min, max, and rate (tax rate).
If income falls within a band, tax is calculated based on the rate multiplied by the income within that band.
NHIF Calculation:

NHIF deductions are calculated based on predefined contribution bands (nhifBands).
Each band specifies a range (min to max) and a fixed deduction (deduction).
NSSF Calculation:

NSSF deduction is calculated as 6% (nssfEmployeeRate) of the grossSalary.