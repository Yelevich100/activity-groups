let lastOpened = null;

function toggle(id) {
    if (lastOpened != null && lastOpened !== id) {
        $('#topic_' + lastOpened).hide(1000);
    }
    $('#topic_' + id).toggle(1000);
    lastOpened = id;
}