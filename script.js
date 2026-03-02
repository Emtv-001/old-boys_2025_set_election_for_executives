
const form = document.getElementById("voteForm");

const radios = form.querySelectorAll("input[type='radio']");

radios.forEach(radio => {
    radio.addEventListener("change", () => {

        // Get all selected values
        let selectedValues = [];

        form.querySelectorAll("input[type='radio']:checked").forEach(r => {
            selectedValues.push(r.value.trim());
        });

        // Reset all radios first
        radios.forEach(r => {
            r.disabled = false;
        });

        // Disable duplicates in other groups
        selectedValues.forEach(value => {
            radios.forEach(r => {
                if (r.value.trim() === value && !r.checked) {
                    r.disabled = true;
                }
            });
        });

    });
});