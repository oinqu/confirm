// Particially copied from David Thomas' code at https://stackoverflow.com/a/8452274/13185564
(function() {
    function clickOrigin(e){
        var target = e.target;
        var tag = [];
        tag.tagType = target.tagName.toLowerCase();
        return tag;
    }
    
    var tagsToIdentify = ['img','a'];
    var confirmTextArray = [
        'Are you sure?',
        'Are you sure you want to go there?',
        'Are you really sure you want to continue?',
        'This is a potentially harmful link. Continue?',
        'Do you really wish to go there?',
        'Is it very important to access this link?',
        'Think twice about that click. Do you want to continue?',
        'Confirm the last click?',
        'You\'ve clicked on something potentially dangerous. Continue?'
    ];

    document.body.onclick = function(e) {
        elem = clickOrigin(e);
        for (i=0; i<tagsToIdentify.length; i++) {
            if (elem.tagType == tagsToIdentify[i]) {
                if (!confirm(confirmTextArray[Math.floor(Math.random()*confirmTextArray.length)])) {
                    return false;
                }
            }
        }
    };
})();
