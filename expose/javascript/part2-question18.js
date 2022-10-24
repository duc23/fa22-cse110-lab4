function updateDate() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(updateDate, 1000);