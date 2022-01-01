/*   Config   */
const config = {
    advanced: false,
    showAdvancedMessage: "Show Settings",
    hideAdvancedMessage: "Hide Settings",
  
  };
  
  /*   Links   */

  
  /*   Advanced Toggle   */
  /* Not currently used in this version
  const advancedToggle = document.getElementById("advancedToggle");
  advancedToggle.addEventListener("click", () => {
    const adv = document.getElementById("advancedSettings");
    if (config.advanced) {
      adv.style.display = "none";
      advancedToggle.innerHTML = config.showAdvancedMessage;
      config.advanced = false;
    } else {
      adv.style.display = "block";
      advancedToggle.innerHTML = config.hideAdvancedMessage;
      config.advanced = true;
    }
  });
  */
  
  /* popup-script.js
  document.querySelector('#login')
  .addEventListener('click', function () {
    chrome.runtime.sendMessage({ message: 'get_auth_token' });
  });
  
  document.querySelector("#log_off").addEventListener("click", function () {
    chrome.runtime.sendMessage({ message: "log_off" });
  });
  */
  