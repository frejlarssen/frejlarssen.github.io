console.log("script loaded");

async function openEnvalope() {
    console.log("Successfully opened");
    document.getElementById("envalope").src = "open_envalope_text.jpg"
    await new Promise(r => setTimeout(r, 6000));
    console.log("wait is over");

    let x = "https://down"
    let y = "load.tick"
    let z = "ster.com/8nhg61"
    let w = "kpej?lang=en"

    window.location.href = x+y+z+w;
}