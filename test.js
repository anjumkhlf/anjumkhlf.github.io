function getDarkModeStatus(){
  const t=localStorage.getItem("dark_mode_status");
  if(null===t){
    return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"
  }
  return"on"===t?"dark":"light"
}
function setLanguage(t){
  t||(t=getDarkModeStatus());
  const e={dark:["dark?","light mode."],light:["bright?","dark mode."]},
  a=document.getElementById("brightness_1"),
  o=document.getElementById("brightness_2");
  a && (a.innerText=e[t][0]),
  o && (o.innerText=e[t][1])
}
function ToggleDarkMode(){
  const t=document.documentElement,
  e="dark"===getDarkModeStatus()?"light":"dark";
  setLanguage(e),
  "light"===e?(t.dataset.theme="light",
    localStorage.setItem("dark_mode_status","off")):(t.dataset.theme="dark",localStorage.setItem("dark_mode_status","on"))
}(()=>{setLanguage();
        const t=localStorage.getItem("dark_mode_status");
        if(null!==t){document.documentElement.dataset.theme="on"===t?"dark":"light"}
    })(),
    window.ToggleDarkMode=ToggleDarkMode;