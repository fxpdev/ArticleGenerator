var deptColor, deptSecondColor, automation_wanted, BackgroundSource, toastLaunched, deptLogo, currentdept = ParseURLParameter("dept"), currentArticle = null;
function GenerateArticle(e) {
    var t = $("#title").val().trim()
      , n = $("#img-address").val().trim()
      , l = $("#img-desc").val().trim()
      , o = $("#select-forum").val()
      , i = $("#select-forum option[value='" + o + "']").text()
      , r = $("#content").val().trim() + "\n"
      , a = $("#relevant-link").val().trim()
      , c = $("#relevant-link-desc").val().trim();
    c.length > 0 && (c += ":");
    var d = $("#source").val().trim()
      , s = $("#link-1").val().trim()
      , m = $("#link-1-desc").val().trim()
      , p = $("#link-2").val().trim()
      , u = $("#link-2-desc").val().trim()
      , g = $("#link-3").val().trim()
      , f = $("#link-3-desc").val().trim()
      , v = $("#link-4").val().trim()
      , h = $("#link-4-desc").val().trim()
      , y = $("#link-5").val().trim()
      , w = $("#link-5-desc").val().trim();
    currentArticle = {
        mTitle: t,
        mImgAdress: n,
        mImgDesc: l,
        mForumID: o,
        mForumName: i,
        mContent: r,
        mRelevantLink: a,
        mRelevantLinkDesc: c,
        mSource: d,
        mLinks: [s, p, g, v, y],
        mLinksDesc: [m, u, f, h, w]
    };
    var k = putInTemplate(e, t, n, l, r, a, c, d, s, m, p, u, g, f, v, h, y, w, o, i);
    $("#final-article-textarea").html(k),
    document.getElementById("relvF").innerHTML = "<a class='dept' href='https://www.fxp.co.il/forumdisplay.php?f=" + o + "'>" + i + "</a>"
}
function GenerateArticleRelv(e) {
    var t = $("#title").val().trim()
      , n = $("#img-address").val().trim()
      , l = $("#img-desc").val().trim()
      , o = $("#content").val().trim() + "\n"
      , i = $("#relevant-link").val().trim()
      , r = $("#relevant-link-desc").val().trim();
    r.length > 0 && (r += ":");
    var a = $("#source").val().trim()
      , c = $("#link-1").val().trim()
      , d = $("#link-1-desc").val().trim()
      , s = $("#link-2").val().trim()
      , m = $("#link-2-desc").val().trim()
      , p = $("#link-3").val().trim()
      , u = $("#link-3-desc").val().trim()
      , g = $("#link-4").val().trim()
      , f = $("#link-4-desc").val().trim()
      , v = $("#link-5").val().trim()
      , h = $("#link-5-desc").val().trim()
      , y = e.replace("%ArticleTitle%", t).replace("%ImageLink%", n).replace("%ImageLinkDesc%", l).replace("%Content%", o).replace("%RelevantLinkDesc%", r).replace("%Source%", a).replace("%AdditionalLink1%", c).replace("%AdditionalLink1Desc%", d).replace("%AdditionalLink2%", s).replace("%AdditionalLink2Desc%", m).replace("%AdditionalLink3%", p).replace("%AdditionalLink3Desc%", u).replace("%AdditionalLink4%", g).replace("%AdditionalLink4Desc%", f).replace("%AdditionalLink5%", v).replace("%AdditionalLink5Desc%", h);
    y = null != i && null != i && "" != i ? y.replace("%RelevantLink%", i).replace("%RelevantLink%", i) : y.replace("%RelevantLink%", "").replace("%RelevantLink%", "[F"),
    $("#final-article-relv-textarea").html(y)
}
function putInTemplate(e, t, n, l, o, i, r, a, c, d, s, m, p, u, g, f, v, h, y, w) {
    let k = e.replace("%ArticleTitle%", t).replace("%ImageLink%", n).replace("%ImageLinkDesc%", l).replace("%Content%", o).replace("%RelevantLinkDesc%", r).replace("%Source%", a).replace("%ForumID%", y).replace("%ForumName%", w).replace("%AdditionalLink1%", c).replace("%AdditionalLink1Desc%", d).replace("%AdditionalLink2%", s).replace("%AdditionalLink2Desc%", m).replace("%AdditionalLink3%", p).replace("%AdditionalLink3Desc%", u).replace("%AdditionalLink4%", g).replace("%AdditionalLink4Desc%", f).replace("%AdditionalLink5%", v).replace("%AdditionalLink5Desc%", h).replace("%deptColor%", deptColor).replace("%deptColor%", deptColor).replace("%deptColor%", deptColor).replace("%deptColor%", deptColor).replace("%deptImage%", deptLogo);
    return k = null != i && null != i && "" != i ? k.replace("%RelevantLink%", i).replace("%RelevantLink%", i) : k.replace("%RelevantLink%", "").replace("%RelevantLink%", "\b")
}
function resetform() {
    document.getElementById("whole").reset(),
    hideFinal();
    var e = document.getElementById("copy-a-popup")
      , t = document.getElementById("copy-t-popup")
      , n = document.getElementById("copy-a-popup-R")
      , l = document.getElementById("copy-t-popup-R");
    e.classList.remove("show"),
    t.classList.remove("show"),
    n.classList.remove("show"),
    l.classList.remove("show"),
    launch_toast("המחולל אופס")
}
function submitForm() {
    var e = $("#title").val().trim().length
      , t = $("#img-address").val().trim()
      , n = t.length
      , l = $("#img-desc").val().trim().length
      , o = ($("#content").val().trim() + "\n").length
      , i = $("#relevant-link").val().trim().length
      , r = $("#relevant-link-desc").val().trim().length
      , a = $("#source").val().trim()
      , c = a.length
      , d = $("#link-1").val().trim()
      , s = d.length
      , m = $("#link-1-desc").val().trim().length
      , p = $("#link-2").val().trim()
      , u = p.length
      , g = $("#link-2-desc").val().trim().length
      , f = $("#link-3").val().trim()
      , v = f.length
      , h = $("#link-3-desc").val().trim().length
      , y = $("#link-4").val().trim()
      , w = y.length
      , k = $("#link-4-desc").val().trim().length
      , L = $("#link-5").val().trim()
      , b = L.length
      , I = $("#link-5-desc").val().trim().length
      , E = i > 1 && r > 1;
    e > 1 && n > 1 && l > 1 && o > 1 && c > 1 && s > 1 && m > 1 && u > 1 && g > 1 && v > 1 && h > 1 && w > 1 && k > 1 && b > 1 && I > 1 ? ValidURL(t) && ValidURL(a) && ValidURL(d) && ValidURL(p) && ValidURL(f) && ValidURL(y) && ValidURL(L) ? (E || showModal("שימו לב!", "<p>לא מילאתם את הקישור הרלוונטי ו/או את התיאור המתאים.</p><p>חלק זה מוסיף הרבה לכתבה ומומלץ מאוד להשתמש בו.</p>", "גם אתה פשוש!"),
    $("#final-article").fadeIn("slow"),
    "gaming" == currentdept && $("#final-article-relv").fadeIn("slow"),
    "gaming" == currentdept && ($.get("template-gaming.txt", GenerateArticle, "text"),
    $.get("‏‏template-gaming-relv.txt", GenerateArticleRelv, "text")),
    "tech" == currentdept && ($.get("template-tech.txt", GenerateArticle, "text"),
    $.get("‏‏template-tech-relv.txt", GenerateArticleRelv, "text")),
    $("html,body").animate({
        scrollTop: $("#final-article").offset().top
    }, "slow")) : showModal("אחד או יותר מהקישורים במחולל אינו תקין!", "<p>עברו על הקישורים שהכנסתם ובדקו שהם תקינים</p><p>זכרו! הקישור צריך להיות בתיבה השמאלית והתיאור בתיבה הימנית</p>", "לאחר שווידאתם שהקישורים תקינים, נסו שוב") : showModal("הנוסח לא מלא!", "<p>בחייאת פשוש, מלא את הנוסח</p><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Graceful_prinia.jpg/1200px-Graceful_prinia.jpg' style='height:100px; width:100px' />", "לאחר שווידאתם שהכול מלא, נסו שוב");
    let C = new Date;
    SaveDraft("Auto Draft", C = C.toLocaleString())
}
function copyArticle(e, t) {
    console.log(e),
    console.log(t),
    copyStringToClipboard(document.getElementById(e).value),
    document.getElementById(e).select();
    let n = document.getElementById(t);
    n.classList.remove("disshow"),
    n.classList.add("show"),
    setTimeout(function() {
        n.classList.remove("show"),
        n.classList.add("disshow")
    }, 3e3)
}
function copyTitle(e) {
    copyStringToClipboard(document.getElementById("title").value);
    var t = document.getElementById(e);
    t.classList.remove("disshow"),
    t.classList.add("show"),
    setTimeout(function() {
        t.classList.remove("show"),
        t.classList.add("disshow")
    }, 3e3)
}
function hideFinal() {
    $("html,body").animate({
        scrollTop: $("#formHeader").offset().top
    }, "slow"),
    $("#final-article").fadeOut(450),
    $("#final-article-relv").fadeOut(450)
}
function AddOrRemove(e) {
    var t = $("#content")[0]
      , n = t.selectionStart
      , l = t.selectionEnd
      , o = $(t).val().substring(n, l);
    o.includes("[" + e + "]") && o.includes("[/" + e + "]") ? RemoveTag(e, o) : AddTag(e, o, n, l)
}
function AddTag(e, t, n, l) {
    if ("" == t)
        var o = "[" + e + "]Tagged Text[/" + e + "]"
          , i = !0;
    else
        o = "[" + e + "]" + t + "[/" + e + "]",
        i = !1;
    replaceIt(t, o);
    var r = $("#content")[0];
    i && (r.focus(),
    r.selectionStart = n + 3,
    r.selectionEnd = n + 14)
}
function RemoveTag(e, t) {
    var n = "[" + e + "]"
      , l = "[/" + e + "]";
    replaceIt(t, t.split(n).join("").split(l).join(""))
}
function replaceIt(e, t) {
    var n = $("#content")[0];
    $(n).val($(n).val().substring(0, n.selectionStart) + t + $(n).val().substring(n.selectionEnd))
}
function Styling(e, t, n, l, o, i) {
    var r = $("#content")[0]
      , a = r.selectionStart
      , c = r.selectionEnd
      , d = $(r).val().substring(a, c);
    if ("" == d) {
        var s = !0;
        d = l
    }
    switch (e) {
    default:
        var m = "[" + t + "]" + d + "[/" + n + "]";
    case 1:
        m = "[" + t + "]" + d + "[/" + n + "]";
        break;
    case 2:
        m = l
    }
    replaceIt(d, m),
    s && (r.focus(),
    r.selectionStart = a + o,
    r.selectionEnd = a + i)
}
function removingStyle(e, t) {
    var n = $("#content")[0]
      , l = n.selectionStart
      , o = n.selectionEnd
      , i = $(n).val().substring(l, o)
      , r = i.indexOf("[" + e)
      , a = i.indexOf("]", r) + 1
      , c = i.indexOf("[/" + t, a)
      , d = i.indexOf("]", c) + 1
      , s = i.substring(0, r) + i.substring(a, c) + i.substring(d);
    -1 != c && -1 != d && -1 != a && -1 != r || (s = i),
    replaceIt(i, s)
}
function setHyperText() {
    let e = document.getElementById("modalLink").value;
    Styling(0, 'URL="' + e + '"', "URL", e, 0, 0)
}
function ParseURLParameter(e) {
    for (var t = window.location.search.substring(1).split("&"), n = 0; n < t.length; n++) {
        var l = t[n].split("=");
        if (l[0] == e)
            return l[1]
    }
}
function EmbedSelect(e) {
    document.getElementById("select-forum").innerHTML = e
}
function copyStringToClipboard(e) {
    var t = document.createElement("textarea");
    t.value = e,
    t.setAttribute("readonly", ""),
    t.style = {
        position: "absolute",
        left: "-9999px"
    },
    document.body.appendChild(t),
    t.select(),
    document.execCommand("copy"),
    document.body.removeChild(t)
}

function detectmob() {
    var e, t = !1;
    return e = navigator.userAgent || navigator.vendor || window.opera,
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0),
    t && alert("שימו לב! המחולל אינו מותאם למובייל. היכנסו דרך המחשב כדי לכתוב כתבות."),
    t
}

function ValidURL(e) {
    return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(e)
}

var assetsDir;

function itsTech() {
    assetsDir = 'assets/tech/'
    loadAssets()

    document.body.style.backgroundImage = "url(" + BackgroundSource + ")",
        $("#gamingOnly").hide(),
        $("#gamingOnly2").hide(),
        $("#onlygaming3").hide(),
        document.getElementById("relvHelpBox").innerHTML = "קישור רלוונטי לכתבה, לדוגמה: אתר הנושא, קישור לקניית הפריט טכנולוגייה, בלוג על הנושא.<br />שימו לב שהמחולל מוסיף בעצמו נקודתיים בסוף התיאור!<br />בתיבה הימנית הכניסו את תיאור הכתבה ובתיבה השמאלית את הקישור עצמו.";
    document.getElementById("updatesforums").innerHTML = ' מלאו את הכתבות האחרונות מאחד מפורומי העדכונים: ',
        $.get("SelectTech.txt", EmbedSelect, "text")

    //document.getElementById("dept-gaming").src = "images/dept-tech.png",
    //document.getElementById("dept-gaming").alt = "מחלקת טכנלוגיה",

    document.title = 'מחולל מחלקת טכנולוגיה'


}

function itsGaming() {
    assetsDir = 'assets/gaming/'
    loadAssets()

    document.getElementById("updatesforums").innerHTML = 'מלאו את הכתבות האחרונות המוצגות <a href="https://www.fxp.co.il/forumdisplay.php?f=5071" class="dept" id="gamingOnly2">בעדכוני גיימינג</a>:'
    document.body.style.backgroundImage = "url(" + BackgroundSource + ")"

    document.title = 'מחולל מחלקת גיימינג'

}

function loadAssets() {
    console.log("assetsDir " + assetsDir)
    document.getElementById("header").innerHTML = $.get(assetsDir + "header.html")
    document.getElementById("dept-select").innerHTML = `
         <center>
            <img src="` + assetsDir + `logo.png" alt="מחלקת טכנולוגיה" id="dept-gaming">
        </center>
    `

    console.log("setting dept rules")
    console.log($.get(assetsDir + "rules.html"))
    document.getElementsByClassName("dept-rules").item(0).innerHTML = `
                <section class="section1">
                <table class="detailstable">
                    <tbody><tr>
                        <td>
                            <a class="title">חוקים והערות לכתיבה:</a>
                        </td>
                    </tr>
                    <tr class="title">
                        <td>
                            <ul class="rules">
                            ` + $.get(assetsDir + "rules.html") + `
                            </ul>
                        </td>
                    </tr>
                </tbody></table>
            </section>
       `
}

function showModal(e, t, n) {
    let l = document.getElementById("warningModal");
    document.getElementById("modalHeader").innerHTML = e,
    document.getElementById("modalBody").innerHTML = t,
    document.getElementById("modalFooter").innerHTML = n,
    l.style.display = "block",
    $("#modalX").click(function() {
        l.style.display = "none"
    }),
    window.onclick = function(e) {
        e.target == l && (l.style.display = "none")
    }
}
function showConfirmModal(e, t, n, l, o, i) {
    document.getElementById("confirmHeader").innerHTML = e,
    document.getElementById("confirmBody").innerHTML = t,
    document.documentElement.style.setProperty("--modalColor", "#" + n),
    document.documentElement.style.setProperty("--modalAcceptColor", "#" + l),
    document.documentElement.style.setProperty("--modalHover", "#" + o);
    let r = document.getElementById("ConfirmModal");
    r.style.display = "block",
    document.getElementsByClassName("close")[0].onclick = function() {
        r.style.display = "none"
    }
    ;
    let a = document.getElementById("acceptConfirm")
      , c = document.getElementById("declineConfirm");
    window.onclick = function(e) {
        if (e.target == r)
            return r.style.display = "none",
            !1;
        if (e.target == a) {
            return document.getElementById("ConfirmModal").style.display = "none",
            i()
        }
        if (e.target == c) {
            return document.getElementById("ConfirmModal").style.display = "none",
            !1
        }
    }
}
function SaveDraft(e, t) {
    if ("undefined" != typeof Storage) {
        let l = ""
          , o = document.getElementById("whole").elements;
        if (!IsEmpty()) {
            for (var n = 0; n < o.length - 2; n++) {
                let e = o[n].tagName.toLowerCase()
                  , t = o[n].id.toLowerCase();
                "input" != e && "textarea" != e || "size" == t || "color" == t || (o[n].value.trim().length > 1 && "undefined" != o[n].value.trim() ? l += o[n].value.trim() + "&@&" : l += "&@&")
            }
            localStorage.setItem(e, l.trim()),
            localStorage.setItem(e + "_date", t),
            document.getElementById("alertContent").innerHTML = "<strong> שימו לב!</strong>",
            document.getElementById("alertContent").innerHTML += "Auto Draft" == e ? " טיוטה אוטומטית נשמרה " : " טיוטה ידנית נשמרה ",
            $("#notification").fadeIn("fast"),
            setTimeout(function() {
                closenoti()
            }, 5e3)
        }
    } else
        alert("Storage is not supported")
}
function GetDraft(e) {
    let t = localStorage.getItem(e);
    if (null != t) {
        t = t.split("&@&");
        let n = localStorage.getItem(e + "_date");
        return t[18] = n,
        console.log(JSON.stringify(t)),
        t
    }
    return ""
}
function RestorePrompt(e) {
    automation_wanted = e;
    document.getElementById("ConfirmModal");
    let t = GetDraft(e);
    if (null != t) {
        let e = t[18].split(",");
        showConfirmModal("שחזור טיוטה", "<p>שחזור הטיוטא השמורה מהתאריך ה־<span id='date'></span> יגרוס את נוסח הכתבה הנוכחי.</p><p>האם הינך בטוח/ה שאת/ה מעוניינ/ת לעשות זאת?</p>", deptColor, deptColor, deptSecondColor, acceptConfirm),
        document.getElementById("date").innerHTML = "<span class='restoreDate'>" + e[0] + "</span>, בשעה <span class='restoreDate'>" + e[1] + "</span>"
    } else
        alert("404 Data not found")
}
function RestoreDraft(e, t) {
    let n = GetDraft(e);
    if (null != n)
        if (t) {
            let t = document.getElementById("whole").elements
              , o = 0;
            for (var l = 0; l < t.length - 2; l++) {
                let e = t[l].tagName.toLowerCase()
                  , i = t[l].id.toLowerCase();
                "input" != e && "textarea" != e || "size" == i || "color" == i || (t[l].value = n[o],
                o++)
            }
            $("#final-article").hide(),
            $("#final-article-relv").hide(),
            launch_toast(e + " Restored")
        } else {
            document.getElementById("RestoreModal").style.display = "none"
        }
    else
        alert("404 Data not found")
}
function acceptConfirm() {
    RestoreDraft(automation_wanted, !0),
    $("html,body").animate({
        scrollTop: $("#formHeader").offset().top
    }, "slow")
}
function IsEmpty() {
    let e = document.getElementById("whole").elements;
    for (var t = 0; t < 18; t++)
        if (e[t].value.length > 1)
            return !1;
    return !0
}
function closenoti() {
    $("#notification").fadeOut(500)
}
function launch_toast(e) {
    if (!toastLaunched) {
        document.getElementById("desc").innerHTML = "",
        toastLaunched = !0;
        var t = document.getElementById("toast");
        t.className = "show",
        setTimeout(function() {
            document.getElementById("desc").innerHTML = e
        }, 600),
        setTimeout(function() {
            document.getElementById("desc").innerHTML = "",
            setTimeout(function() {
                t.className = t.className.replace("show", ""),
                toastLaunched = !1
            }, 700)
        }, 4300)
    }
}
function showHeader(e) {
    let t, n;
    if ("tech" == currentdept || "gaming" == currentdept) {
        "gaming" == currentdept && (t = "מחולל מחלקת גיימינג",
        n = "ברוכים הבאים למחולל מחלקת גיימינג!"),
        "tech" == currentdept && (t = "מחולל מחלקת טכנולוגיה",
        n = "ברוכים הבאים למחולל מחלקת טכנולוגיה!");
        let l = "אם נתקלתם בתקלה במחולל,"
          , o = "אתם מוזמנים לפנות לאחד העורכים על־מנת"
          , i = "לדווח על התקלה, שתתוקן בהקדם האפשרי."
          , r = e.replace("%title%", t).replace("%firstline%", n).replace("%secondline%", l).replace("%thirdline%", o).replace("%fourthline%", i);
        document.getElementById("header").innerHTML = r
    }
}
function showFooter(e) {
    var t = e.replace("%curdept%", currentdept).replace("%curdept%", currentdept).replace("%built%", "נבנה  על ידי").replace("%tal%", "טל").replace("%update%", "עודכן על ידי").replace("%ofek%", "אופק");
    document.getElementById("footercontent").innerHTML = t
}
function showPreview() {
    $.get("ArticleHtmlTemplate.txt", openPreviewModal, "text")
}
function openPreviewModal(e) {
    let t = currentArticle.mContent;
    t = t.split("\n").join("<br>");
    let n = currentArticle.mImgAdress;
    "error" != getId(n) ? n = '<iframe width="560" height="315" src="//www.youtube.com/embed/' + getId(n) + '" frameborder="0" allowfullscreen></iframe>' : isTwitter(n) ? n = '<iframe id="tweetIframe" border=0 frameborder=0 width=550 height=520             src = https://twitframe.com/show?url="' + encodeURI(n) + '" ></iframe>' : isInstagram(n) && (n = '<iframe src="' + n + 'embed" width="400" height="505" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    console.log(n));
    showConfirmModal("תצוגה מקדימה", putInTemplate(e, currentArticle.mTitle, n, currentArticle.mImgDesc, t, currentArticle.mRelevantLink, currentArticle.mRelevantLinkDesc, currentArticle.mSource, currentArticle.mLinks[0], currentArticle.mLinksDesc[0], currentArticle.mLinks[1], currentArticle.mLinksDesc[1], currentArticle.mLinks[2], currentArticle.mLinksDesc[2], currentArticle.mLinks[3], currentArticle.mLinksDesc[3], currentArticle.mLinks[4], currentArticle.mLinksDesc[4], currentArticle.mForumID, currentArticle.mForumName), deptColor, deptColor, deptSecondColor, "")
}
function isInstagram(e) {
    return e.match(/(https?:\/\/www\.)?instagram\.com(\/p\/\w+\/?)/)
}
function isTwitter(e) {
    return e.match(/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/)
}
function getId(e) {
    var t = e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    return t && 11 == t[2].length ? t[2] : "error"
}
"gaming" == currentdept && (deptColor = "daa520",
deptSecondColor = "c8981e",
deptLogo = "https://images.weserv.nl/?url=i.imgur.com%2FAR1nKCC.png"),
"tech" == currentdept && (deptColor = "008080",
deptSecondColor = "006666",
deptLogo = "https://images.weserv.nl/?url=i.imgur.com/MmTQzif.png"),
window.onbeforeunload = function() {
    return SaveDraft("Auto Draft", (new Date).toLocaleString()),
    "All data will be lost. Are you sure you want to leave?"
}
,
document.documentElement.style.setProperty("--deptColor", "#" + deptColor),
document.documentElement.style.setProperty("--deptSecondColor", "#" + deptSecondColor),
document.documentElement.style.setProperty("--backgroundSource", BackgroundSource),
$(document).ready(function() {
    $("#notification").hide(),
    $("#final-article").hide(),
    $("#final-article-relv").hide(),
    setInterval(function() {
        IsEmpty() || SaveDraft("Auto Draft", (new Date).toLocaleString())
    }, 15e4),
    $(function() {
        $.get("Header.txt", function(e) {
            showHeader(e)
        }, "text")
    }),
    $(function() {
        $.get("Footer.txt", function(e) {
            showFooter(e)
        }, "text")
    }),
    $("#formtable").on("keypress change", function() {
        1 == $("#final-article").is(":visible") && hideFinal()
    });
    for (var e = !1, t = ["gaming", "tech"], n = 0; n < t.length; n++)
        if (currentdept == t[n]) {
            e = !0;
            break
        }
    e ? ("tech" == currentdept && itsTech(),
    "gaming" == currentdept && itsGaming()) : window.history.go(-1),
    $("#Subtitle").on("click", function() {
        Styling(2, "", "", '[TABLE="width: 650, align: center"][TR="bgcolor: #FAFAFA"][TD="bgcolor: #008080, align: center"][SIZE=4][COLOR=#ffffff][FONT=open sans hebrew][B]כותרת ראשית לסיקור[/B][/FONT][/COLOR][/SIZE][/TD][/TR][/TABLE]', 145, 163)
    }),
    $("#Subtitlein").on("click", function() {
        Styling(2, "", "", '[TABLE="width: 450, align: center"][TR="bgcolor: #FAFAFA"][TD="bgcolor: #008080, align: center"][SIZE=4][COLOR=#ffffff][FONT=open sans hebrew][B]כותרת פנימית לסיקור[/B][/FONT][/COLOR][/SIZE][/TD][/TR][/TABLE]', 145, 164)
    }),
    $("#mediaDesc").on("click", function() {
        Styling(2, "", "", '[SIZE=2][FONT=open sans hebrew][B][COLOR=#333333] Media Description [/COLOR][/B][/FONT][/SIZE]', 49, 68)
    }),
    $("#ChangeS").on("click", function() {
        var e = document.getElementById("size").value;
        Styling(1, "SIZE=" + e, "SIZE", "Sized Text", e.length + 7, e.length + 17)
    }),
    $("#resetSize").on("click", function() {
        removingStyle("SIZE=", "SIZE")
    }),
    $("#ChangeC").on("click", function() {
        Styling(1, 'COLOR="#' + document.getElementById("color").value + '"', "COLOR", "Colored Text", 17, 29)
    }),
    $("#resetColor").on("click", function() {
        removingStyle('COLOR="', "COLOR")
    }),
    $("#removeHyperLink").on("click", function() {
        removingStyle('URL="', "URL")
    }),
    $("#bold").on("click", function() {
        AddOrRemove("B")
    }),
    $("#underline").on("click", function() {
        AddOrRemove("U")
    }),
    $("#italic").on("click", function() {
        AddOrRemove("I")
    }),
    $("#addHyperLink").on("click", function() {
        showConfirmModal("הוסף היפר קישור", "<input type='text' id='modalLink' class='halfline' placeholder='הכנס לינק פה' autofocus/>", deptColor, deptColor, deptSecondColor, setHyperText)
    }),
    $("#color").hover(function() {
        let e = document.getElementById("color");
        var t = "1px 1px 20px #" + deptColor + ", 0 1px 1px rgba(218,165,32,0.74)";
        e.style.boxShadow = t,
        e.style.transition = " all 0.3s cubic-bezier(.25,.8,.25,1)"
    }, function() {
        let e = document.getElementById("color");
        e.style.boxShadow = "",
        e.style.transition = " all 0.3s cubic-bezier(.25,.8,.25,1)"
    }),
    $("#submit-button").on("click", submitForm),
    $("#reset-button").on("click", function() {
        showConfirmModal("איפוס טופס", "האם ברצונך לאפס? לא ניתן לשחזר לאחר האיפוס.", "008080", "29a329", "1f7a1f", resetform)
    }),
    $("#final-article-copy").on("click", function() {
        copyArticle("final-article-textarea", "copy-a-popup")
        open ('https://www.fxp.co.il/newthread.php?do=newthread&f=4598')
    }),
    $("#final-article-Relv-copy").on("click", function() {
        copyArticle("final-article-relv-textarea", "copy-a-popup-R")
    }),
    $("#final-title-copy").click(function() {
        copyTitle("copy-t-popup")
    }),
    $("#final-title-copy-relv").click(function() {
        copyTitle("copy-t-popup-R")
    }),
    setTimeout(function() {
        $("#overlay").hide()
    }, 500),
    $(".gotop").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#notification").offset().top
        }, 850)
    })
}),
$(window).scroll(function() {
    $(this).scrollTop() > 150 ? ($(".gotop").css({
        width: "40px",
        borderRadius: "0"
    }),
    $("#top").fadeIn("fast")) : ($(".gotop").css({
        width: "0",
        borderRadius: "2em 5em"
    }),
    $("#top").fadeOut("fast"))
});
