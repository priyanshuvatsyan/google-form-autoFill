(function () {
    const fields = {
        "Name": "Priyanshu Vatsyan",
        "Email": "priyanshuvatsyan@gmail.com",
    };
    document.querySelectorAll('input,textarea').forEach((input) => {
        let label = input.closest(".Qr7Oae")?.querySelector(".M7eMe"); // Fixed spelling
        if (label) {
            let fieldName = label.innerText.trim();
            if (fields[fieldName]) {
                input.value = fields[fieldName];
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    });

    // Auto-submit the form
    setTimeout(() => {
        let submitButton = document.querySelector("[role='button'][jsname='M2UYVd']");
        if (submitButton) {
            submitButton.click();
        }
    }, 2000);
})();

