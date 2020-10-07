function _insertArticles(threads) {
    threads.forEach(function(threadInfo, index) {
        // the element indices start from 1 and not from 0
        var elementIndex = index + 1;

        // NOTE:: dependent on the following ids in the ArticleGenerator:
        var title = jQuery(`#link-${elementIndex}-desc`);
        var link = jQuery(`#link-${elementIndex}`);

        title.val(threadInfo["title"]);
        link.val(threadInfo["url"]);
    });
}

function _fillArticles(forumURL, count) {
    fetchLatestThreads(forumURL, count, _insertArticles, window.alert);
}

function _optionFromEntry(entry) {
    const forumName = entry["name"];
    const forumURL = entry["url"];

    return `<option value="${forumURL}">${forumName}</option>`;
}

function initializeUpdateForumSelection(selectElem, updateForums) {
    console.log(updateForums);

    selectElem = jQuery(selectElem);

    const optionsHTML = updateForums.map(_optionFromEntry).join("");
    console.log(optionsHTML);

    selectElem.html(optionsHTML);
}

function initializeInsertArticlesButton(button, selectElem) {
    button = jQuery(button);
    selectElem = jQuery(selectElem);

    button.click(function(e) {
        e.preventDefault();
        const forumURL = selectElem.val();

        console.log(forumURL);

        if (forumURL) {
            // insert 5 latest articles into the form
            _fillArticles(forumURL, 5);
        } else {
            window.alert("No forum selected");
        }
    });
}

