const prompt = require('prompt-sync')();

let salaryInput = prompt('Enter salary: ');

let benefitsInput = prompt('Enter benefits :')

let benefits = parseFloat(benefitsInput);

let basicSalary = parseFloat(salaryInput);

function calculateNetSalary(basicSalary, benefits) {

    if (basicSalary < 0) {
        console.log("Error: salary cannot be negative");
        return false; // Return false to indicate validation failure
    }
    return true; // Return true to indicate validation success
}
    
    const taxBands = [
        { min: 0, max: 288000, rate: 0.1 },
        { min: 288001, max: 388000, rate: 0.25 },
        { min: 388001, max: 6000000, rate: 0.3 },
        { min: 6000001, max: 9600000, rate: 0.325 },
        { min: 9600001, max: Infinity, rate: 0.35 }
    ];

    
    const nhifBands = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 1000 },
        { min: 40000, max: 44999, deduction: 1100 },
        { min: 45000, max: 49999, deduction: 1200 },
        { min: 50000, max: 59999, deduction: 1300 },
        { min: 60000, max: 69999, deduction: 1400 },
        { min: 70000, max: 79999, deduction: 1500 },
        { min: 80000, max: 89999, deduction: 1600 },
        { min: 90000, max: 99999, deduction: 1700 },
        { min: 100000, max: 109999, deduction: 1800 },
        { min: 110000, max: 119999, deduction: 1900 },
        { min: 120000, max: Infinity, deduction: 2000 }
    ];

    
    const nssfEmployeeRate = 0.06; 

    
    let grossSalary = basicSalary + benefits;

    
    let taxableIncome = grossSalary;

    
    let tax = calculateTax(taxableIncome);

    
    let nhifDeduction = calculateNHIF(grossSalary);

    
    let nssfDeduction = grossSalary * nssfEmployeeRate;

    
    let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax (PAYE): ${tax}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`Net Salary: ${netSalary}`);

    
    function calculateTax(income) {
        let tax = 0;
        for (let band of taxBands) {
            if (income > band.max) {
                tax += (band.max - band.min +1) * band.rate;
            } else if (income > band.min) {
                tax += (income - band.min + 1) * band.rate;
                break;
            }
        }
        return tax;
    }

    
    function calculateNHIF(salary) {
        for (let band of nhifBands) {
            if (salary <= band.max) {
                return band.deduction;
            }
        }
        return nhifBands[nhifBands.length - 1].deduction;    }



calculateNetSalary(basicSalary,benefits ); 