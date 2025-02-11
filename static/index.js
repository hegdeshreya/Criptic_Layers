document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let fileInput = document.getElementById("fileInput");
    
    if (fileInput.files.length > 0) {
        alert("File uploaded successfully!");
    } else {
        alert("Please select a file first.");
    }
});
