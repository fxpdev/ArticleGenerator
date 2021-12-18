assetsDir = 'assets/special2021/'
loadAssets()


document.getElementById("relvHelpBox").innerHTML = "קישור רלוונטי לכתבה, לדוגמה: אתר הנושא, קישור לקניית הפריט טכנולוגייה, בלוג על הנושא.<br />שימו לב שהמחולל מוסיף בעצמו נקודתיים בסוף התיאור!<br />בתיבה הימנית הכניסו את תיאור הכתבה ובתיבה השמאלית את הקישור עצמו.";

document.title = "מחולל מיוחד"

document.getElementById("updatesforums").outerHTML = ""
//document.getElementById("updatesforums2").empty()
document.getElementById("select-forum").outerHTML = ""
document.getElementById("relevant-forum-desc").outerHTML = ""
document.getElementById("relevantForumQmark").outerHTML = ""
document.getElementById("select-update-forum").outerHTML = ""



// For auto complete:
document.getElementById("autocomplete-desc").outerHTML = ""
document.getElementById("load-articles-button").outerHTML = ""

// For relevant link:
