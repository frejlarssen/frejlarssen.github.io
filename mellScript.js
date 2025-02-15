console.log("script loaded");

async function openEnvalope() {
    console.log("Successfully opened");
    document.getElementById("envalope").src = "open_envalope_text.jpg"
    await new Promise(r => setTimeout(r, 6000));
    console.log("wait is over");

    window.location.href = "https://www.youtube.com/watch?v=ooOELrGMn14";
}