assetsDir = 'assets/special2021/'
loadAssets()


$("#gamingOnly").hide(),
    $("#gamingOnly2").hide(),
    $("#onlygaming3").hide(),
    document.getElementById("relvHelpBox").innerHTML = "קישור רלוונטי לכתבה, לדוגמה: אתר הנושא, קישור לקניית הפריט טכנולוגייה, בלוג על הנושא.<br />שימו לב שהמחולל מוסיף בעצמו נקודתיים בסוף התיאור!<br />בתיבה הימנית הכניסו את תיאור הכתבה ובתיבה השמאלית את הקישור עצמו.";

document.title = "מחולל מיוחד"

document.getElementById("updatesforums").outerHTML = ""
//document.getElementById("updatesforums2").empty()
document.getElementById("select-forum").outerHTML = ""
document.getElementById("relevant-forum-desc").outerHTML = ""
document.getElementById("select-update-forum").outerHTML = ""

function removeLink(num) {
    //document.getElementById("link-" + num).outerHTML = ""
    //document.getElementById("link-" + num + "-desc").outerHTML = ""
    document.getElementById("link-" + num + "-div").outerHTML = ""

}

for (let i = 1; i <= 5; i++) {
    removeLink(i)
}

// For auto complete:
document.getElementById("autocomplete-desc").outerHTML = ""
document.getElementById("load-articles-button").outerHTML = ""

// For relevant link:
document.getElementById("relevant-link").outerHTML = ""
document.getElementById("relevant-link-desc").outerHTML = ""
