document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("query");
    const charCount = document.getElementById("char-count");

    textarea.addEventListener("input", function () {
        const currentLength = textarea.value.length;
        charCount.textContent = `${currentLength} / 200`;
    });
});
