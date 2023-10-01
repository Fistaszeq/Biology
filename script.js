box = getElementById("section3");
box.style.display = "none";



function toggleContent(sectionId) {
        var content = document.getElementById(sectionId);
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block"; // Pokaż treść
        } else {
            content.style.display = "none"; // Ukryj treść
        }
    }

