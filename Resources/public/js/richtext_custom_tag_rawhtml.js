(function (global, eZ) {
    addEventListener('getCustomTagContent', function(e) {
        console.log("before", e.detail.content);
        e.detail.content = e.detail.content
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"');
        console.log("after", e.detail.content);
    });

    addEventListener('setCustomTagContent', function(e) {
        console.log("before", e.detail.content);
        e.detail.content = e.detail.content
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
        console.log("after", e.detail.content);
    });
})(window, window.eZ);
