// This file was generated by Dashcode from Apple Inc.
// DO NOT EDIT - This file is maintained automatically by Dashcode.
function setupParts() {
    if (setupParts.called) return;
    setupParts.called = true;
    CreateText('title', { text: 'Git Commands:' });
    CreateGlassButton('done', { text: 'Done', onclick: 'showFront' });
    CreatePopupButton('sectionMenu', { onchange: 'displayContent', options: unescape('[[%27All%27%2C %27%27%2C true]%2C %27Setup%27%2C [%27Adding/Deleting%27%2C %27AddingDeleting%27]%2C %27Committing%27%2C %27Sharing%27%2C [%27Information%27%2C %27Info%27]%2C %27Searching%27%2C %27Branching%27%2C %27Merging%27%2C %27Conflicts%27%2C %27Undoing%27%2C %27Stashing%27%2C %27Cleaning%27%2C %27Remotes%27%2C %27Plumbing%27%2C %27Configuration%27%2C [%27Environment Variables%27%2C %27EnvironmentVariables%27]]'), rightImageWidth: 16, leftImageWidth: 11 });
    CreateShape('topRectangleShape', { rightImageWidth: 12, leftImageWidth: 12 });
    CreateShape('bottomRectangleShape', { rightImageWidth: 12, leftImageWidth: 12 });
    CreateScrollArea('scrollArea', { hasVerticalScrollbar: true, scrollbarDivSize: 18, autoHideScrollbars: true, scrollbarMargin: 6, spacing: 4 });
    CreateInfoButton('info', { foregroundStyle: 'white', frontID: 'front', onclick: 'showBack', backgroundStyle: 'black' });
}
window.addEventListener('load', setupParts, false);
