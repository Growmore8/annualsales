document.addEventListener('DOMContentLoaded', () => {
    // Sample employee data for both 2024 and 2025
    const employeesData = {
        '2024': [
            { name: "R. Kushalini", image: "assets/kusha.png", totalSales: 24, totalAmount: 5724, offerReached: false, count100: 11, count200: 11, count1000: 2, joiningDate: '2024-02-24' },
            { name: "P. Venujan", image: "assets/Venu.png", totalSales: 25, totalAmount: 5022, offerReached: false, count100: 17, count200: 6, count1000: 2, joiningDate: '2024-04-19' },
            { name: "T. Dinushan", image: "assets/Dinu.png", totalSales: 22, totalAmount: 4783.75, offerReached: false, count100: 6, count200: 15, count1000: 1, joiningDate: '2024-04-01' },
            { name: "K. Sharmila", image: "assets/Sharmi.png", totalSales: 16, totalAmount: 3998, offerReached: false, count100: 2, count200: 13, count1000: 1, joiningDate: '2024-06-06' },
            { name: "M. Niranjan", image: "assets/Nira.png", totalSales: 18, totalAmount: 8747, offerReached: false, count100: 7, count200: 6, count1000: 5, joiningDate: '2024-06-03' },
            { name: "P. Sathurshika", image: "assets/Sathu.png", totalSales: 6, totalAmount: 2700, offerReached: false, count100: 1, count200: 3, count1000: 2, joiningDate: '2024-06-06' },
            { name: "A. Marcuss", image: "assets/Mar.png", totalSales: 1, totalAmount: 211, offerReached: false, count100: 0, count200: 1, count1000: 0, joiningDate: '2024-10-08' },
            { name: "G. Vilusha", image: "assets/Vilusha.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-25' },
            { name: "K. Janahath", image: "assets/Jahath.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-25' },
            { name: "P. Nadiison", image: "assets/Nadhi.png", totalSales: 0, totalAmount: 10, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-25' },
            { name: "P. Ramya", image: "assets/Ramya.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-12-02' },
            { name: "A. Lakshan", image: "assets/Lakshan.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-20' },
            { name: "D. Prabashini", image: "assets/Prabashini.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-12-02' },
            { name: "S. Dilani", image: "assets/Dilani.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-12-02' }
        ],
        '2025': [
            { name: "R. Kushalini", image: "assets/kusha.png", totalSales: 0, totalAmount: 10, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-02-24' },
            { name: "P. Venujan", image: "assets/Venu.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-04-19' },
            { name: "T. Dinushan", image: "assets/Dinu.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-04-01' },
            { name: "K. Sharmila", image: "assets/Sharmi.png", totalSales: 1, totalAmount: 100, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-06-06' },
            { name: "M. Niranjan", image: "assets/Nira.png", totalSales: 1, totalAmount: 100, offerReached: false, count100: 1, count200: 0, count1000: 0, joiningDate: '2024-06-03' },
            { name: "P. Sathurshika", image: "assets/Sathu.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-06-06' },
            { name: "A. Marcuss", image: "assets/Mar.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-10-08' },
            { name: "G. Vilusha", image: "assets/Vilusha.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-25' },
            { name: "K. Janahath", image: "assets/Jahath.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-25' },
            { name: "P. Nadiison", image: "assets/Nadhi.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-25' },
            { name: "P. Ramya", image: "assets/Ramya.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-12-02' },
            { name: "A. Lakshan", image: "assets/Lakshan.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-11-20' },
            { name: "T. Hamsaruban", image: "assets/Ruban.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-12-02' },
            { name: "S. Dilani", image: "assets/Dilani.png", totalSales: 0, totalAmount: 0, offerReached: false, count100: 0, count200: 0, count1000: 0, joiningDate: '2024-12-02' }
        ]
   };

    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    }

    function getMonthsDifference(startDate) {
        const today = new Date();
        const start = new Date(startDate);
        const months = (today.getFullYear() - start.getFullYear()) * 12;
        return months + today.getMonth() - start.getMonth();
    }

    function updateDashboard(year) {
        const employees = employeesData[year];

        const highestTotalSalesAmountEmployee = employees.reduce((max, emp) => 
            emp.totalAmount > max.totalAmount ? emp : max, employees[0]);
        const highestSaleCountEmployee = employees.reduce((max, emp) => 
            emp.totalSales > max.totalSales ? emp : max, employees[0]);

        employees.sort((a, b) => {
            if (a === highestTotalSalesAmountEmployee) return -1;
            if (b === highestTotalSalesAmountEmployee) return 1;
            if (a === highestSaleCountEmployee) return -1;
            if (b === highestSaleCountEmployee) return 1;
            return b.totalAmount - a.totalAmount;
        });

        const staffCardsContainer = document.querySelector('.staff-cards');
        const totalSalesCount = document.querySelector('.total-sales-count');
        const totalAmountUsd = document.querySelector('.total-amount-usd');
        staffCardsContainer.innerHTML = '';

        employees.forEach((employee, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-player-number', `#${index + 1}`);

            const progressWidth = Math.min((employee.totalAmount / 10000) * 100, 100);
            const monthsWorked = getMonthsDifference(employee.joiningDate);
            const averageSales = monthsWorked > 0 ? (employee.totalSales / monthsWorked).toFixed(2) : 0;

            const isGoldenEmployee = employee === highestTotalSalesAmountEmployee;
            const isGreenOutline = employee === highestSaleCountEmployee;

            card.innerHTML = `
                ${isGoldenEmployee ? '<div class="golden-employee-text">Golden Employee</div>' : ''}
                <img src="${employee.image}" alt="Employee Image" class="employee-image">
                <h3 class="employee-name">${employee.name}</h3>
                ${isGoldenEmployee ? '<div class="stars">⭐⭐⭐</div>' : ''}
                <p>Total Sales: <span class="total-sales">${employee.totalSales}</span></p>
                <p>Total Amount: <span class="total-amount">${formatCurrency(employee.totalAmount)}</span></p>
                <p>Joining Date: <span class="joining-date">${new Date(employee.joiningDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span></p>
                <p>Average Sales: <span class="average-sales">${averageSales}</span></p>
                <div class="progress-bar">
                    <div class="progress" style="width: ${progressWidth}%"></div>
                </div>
                <p class="status">${employee.offerReached ? '50K Offer Reached' : 'Offer Not Reached'}</p>
                <p>Count of $100: <span class="count-100">${employee.count100}</span></p>
                <p>Count of $200: <span class="count-200">${employee.count200}</span></p>
                <p>Count of $1000: <span class="count-1000">${employee.count1000}</span></p>
            `;

            if (isGoldenEmployee) card.classList.add('golden-outline');
            if (isGreenOutline) card.classList.add('green-outline');
            staffCardsContainer.appendChild(card);
        });

        const totalSales = employees.reduce((sum, emp) => sum + emp.totalSales, 0);
        const totalAmount = employees.reduce((sum, emp) => sum + emp.totalAmount, 0);

        totalSalesCount.textContent = totalSales;
        totalAmountUsd.textContent = formatCurrency(totalAmount);
    }

    document.querySelector('#year-select').addEventListener('change', (e) => {
        updateDashboard(e.target.value);
    });

    updateDashboard('2025');
});

