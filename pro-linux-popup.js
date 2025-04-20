function do_pro_linux_popup() {
  const popup = document.createElement("div");
  popup.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: #fff; box-shadow: 0px 0px 10px rgba(0,0,0,0.3); border-radius: 10px; z-index: 1000; text-align: center;">
            <h2>Hello! It appears that you are using a Linux device!</h2>
            <p>Using a Linux device is great! You are supporting the smaller open source creators of software, and are enjoying a more privacy respective world. Most notably, it is all FREE!</p>
            <button id="linux-popup-dismiss-btn" style="margin-right: 10px;">OK</button>
            <button id="linux-popup-dont-show-again-btn">Don't show again</button>
        </div>
    `;
  document.body.appendChild(popup);
  document
    .getElementById("linux-popup-dismiss-btn")
    .addEventListener("click", () => {
      popup.remove();
    });

  document
    .getElementById("linux-popup-dont-show-again-btn")
    .addEventListener("click", () => {
      const date = new Date();
      date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
      document.cookie = `hideLinuxPopup=true; expires=${date.toUTCString()}; path=/`;
      popup.remove();
    });
}

function pro_linux_popup_main() {
  if (
    navigator.platform.toLowerCase().includes("linux") &&
    !document.cookie.split("; ").find((row) => row.startsWith("hideLinuxPopup"))
  ) {
    do_pro_linux_popup();
  }
}

document.addEventListener("DOMContentLoaded", pro_linux_popup_main);
