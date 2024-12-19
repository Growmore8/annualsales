document.addEventListener('DOMContentLoaded', () => {
    // Sample employee data with joining date and other details
    const employees = [
        { name: "R. Kushalini", image: "assets/kusha.png", totalSales: 24, totalAmount: 5724, offerReached: false, count100: 11, count200: 11, count1000: 2, joiningDate: '2024-02-24' },
        { name: "P. Venujan", image: "assets/Venu.png", totalSales: 23, totalAmount: 4822, offerReached: false, count100: 14, count200: 6, count1000: 2, joiningDate: '2024-04-19' },
        { name: "T. Dinushan", image: "assets/Dinu.png", totalSales: 21, totalAmount: 4609.32, offerReached: false, count100: 6, count200: 14, count1000: 1, joiningDate: '2024-04-01' },
        { name: "K. Sharmila", image: "assets/Sharmi.png", totalSales: 16, totalAmount: 3987, offerReached: false, count100: 2, count200: 13, count1000: 1, joiningDate: '2024-06-06' },
        { name: "M. Niranjan", image: "assets/Nira.png", totalSales: 16, totalAmount: 7548, offerReached: false, count100: 6, count200: 6, count1000: 5, joiningDate: '2024-06-03' },
        { name: "P. Sathurshika", image: "assets/Sathu.png", totalSales: 6, totalAmount: 2700, offerReached: false, count100: 1, count200: 3, count1000: 2, joiningDate: '2024-06-06' },
        { name: "A. Marcuss", image: "assets/Mar.png", totalSales: 0, totalAmount: 11, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-10-08' },
        { name: "G. Vilusha", image: "assets/Vilusha.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-25' },
        { name: "K. Janahath", image: "assets/Jahath.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-25' },
        { name: "P. Nadiison", image: "assets/Nadhi.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-25' },
        { name: "P. Ramya", image: "assets/Ramya.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-12-02' },
        { name: "A. Lakshan", image: "assets/Lakshan.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-20' },
        { name: "D. Prabashini", image: "assets/Prabashini.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-12-02' },
        { name: "S. Dilani", image: "assets/Dilani.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-12-02' }
    ];

    // Format number with commas for thousands and two decimal places (like $100,000.00)
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    }

    // Calculate months between two dates
    function getMonthsDifference(startDate) {
        const today = new Date();
        const start = new Date(startDate);
        const months = (today.getFullYear() - start.getFullYear()) * 12;
        return months + today.getMonth() - start.getMonth();
    }

    // Find the employee with the highest total sales amount (Golden Employee)
    const highestTotalSalesAmountEmployee = employees.reduce((max, employee) => (employee.totalAmount > max.totalAmount ? employee : max), employees[0]);

    // Sort employees with the highest total sales amount first
    employees.sort((a, b) => b.totalAmount - a.totalAmount);

    // Find the employee with the highest sale count (Green Outline)
    const highestSaleCountEmployee = employees.reduce((max, employee) => (employee.totalSales > max.totalSales ? employee : max), employees[0]);

    const staffCardsContainer = document.querySelector('.staff-cards');
    const totalSalesCount = document.querySelector('.total-sales-count p');
    const totalAmountUsd = document.querySelector('.total-amount-usd p');

    // Render staff cards
    employees.forEach(employee => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Calculate progress bar width based on totalAmount relative to 10,000 USD
        const progressWidth = Math.min((employee.totalAmount / 10000) * 100, 100); // Progress as percentage

        // Calculate average sales
        const monthsWorked = getMonthsDifference(employee.joiningDate);
        const averageSales = monthsWorked > 0 ? (employee.totalSales / monthsWorked).toFixed(2) : 0;

        // Add golden outline and stars for highest total sales amount employee
        const isGoldenEmployee = employee === highestTotalSalesAmountEmployee;
        const isGreenOutline = employee === highestSaleCountEmployee;

        card.innerHTML = `
            ${isGoldenEmployee ? '<div class="golden-employee-text">Golden Employee</div>' : ''}
            <img src="${employee.image}" alt="Employee Image" class="employee-image">
            <h3 class="employee-name">${employee.name}</h3>
            ${isGoldenEmployee ? '<div class="stars">⭐⭐⭐</div>' : ''}
            <p>Total Sales: <span class="total-sales">${employee.totalSales}</span></p>
            <p>Total Amount: <span class="total-amount">${formatCurrency(employee.totalAmount)}</span></p>
            <p>Joining Date: <span class="joining-date">${new Date(employee.joiningDate).toLocaleDateString()}</span></p>
            <p>Average Sales: <span class="average-sales">${averageSales}</span></p>
            <div class="progress-bar">
                <div class="progress" style="width: ${progressWidth}%"></div>
            </div>
            <p class="status">${employee.offerReached ? '50K Offer Reached' : 'Offer Not Reached'}</p>
            <p>Count of $100: <span class="count-100">${employee.count100}</span></p>
            <p>Count of $200: <span class="count-200">${employee.count200}</span></p>
            <p>Count of $1000: <span class="count-1000">${employee.count1000}</span></p>
        `;

        // Apply gold outline to the Golden Employee card
        if (isGoldenEmployee) {
            card.classList.add('golden-employee-card');
        }

        // Apply green outline to the highest sale count employee
        if (isGreenOutline) {
            card.classList.add('green-outline-card');
        }

        staffCardsContainer.appendChild(card);
    });

    // Calculate total sales count and total amount
    const totalSales = employees.reduce((total, employee) => total + employee.totalSales, 0);
    const totalAmount = employees.reduce((total, employee) => total + employee.totalAmount, 0);

    totalSalesCount.textContent = totalSales;
    totalAmountUsd.textContent = formatCurrency(totalAmount);
});
