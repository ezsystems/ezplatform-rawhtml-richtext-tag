(function () {
    addEventListener('getCustomTagContent', function(e) {
        if (e.detail.name !== 'rawhtml') {
            return;
        }
        e.detail.content = e.detail.content
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"');
    });

    addEventListener('setCustomTagContent', function(e) {
        if (e.detail.name !== 'rawhtml') {
            return;
        }
        e.detail.content = e.detail.content
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    });
})(window, window.eZ);
