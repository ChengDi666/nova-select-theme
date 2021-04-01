Nova.booting((Vue, router) => {
    Vue.component('nova-select-theme', require('./components/NovaSelectTheme.vue'));
});

// Hamburger click event  汉堡点击事件
window.onload = function () {
    var content = document.querySelector('#nova .content');
    var sidebar = document.querySelector('.w-sidebar');
    sidebar.classList.remove("sidebar-hidden");
    content.style.marginLeft = '220px';
    // console.log(sidebar)
    var hamburger = document.querySelector('.hamburger-menu');
    hamburger.addEventListener("click", function (e) {
        var contentHeader = document.querySelector('.content .h-header');
        e.stopPropagation();
        // console.log('left： ',content.style.marginLeft)
        // console.log('right: ',contentHeader.style.paddingRight)
        let leftPx = content.style.marginLeft;
        leftPx = (leftPx == '220px' ? '0' : '220px')
        let rightPx = (leftPx == '0' ? '3.125rem' : '240px')
        // var sidebar = document.querySelector('.w-sidebar');
        // console.log(sidebar.classList)
        // sidebar.classList.toggle("sidebar-hidden");
        // sidebar.classList.add("sidebar-hidden");
        // console.log(content)
        content.style.marginLeft = leftPx;
        contentHeader.style.paddingRight = rightPx;
    }, true);
    // Hide sidebar when clicking outside  单击外部时隐藏侧边栏
    // console.log('点击了其他区域');
    var rootElements = document.querySelectorAll('body,html');
    rootElements.forEach(function(rootElement) {
        rootElement.onclick = function(e) {
            var sidebar = document.querySelector('.w-sidebar');
            if (e.target !== sidebar && !sidebar.contains(e.target) && content.style.marginLeft != '0px') {
                sidebar.classList.remove("sidebar-hidden");
            }
            // console.log('点击了其他区域');
            // console.log('content: ',content.style.marginLeft);
            // console.log(rootElement);
        };
    });
    // Sidebar links click event  侧边栏链接单击事件
    var sidebarLinks = document.querySelectorAll('.w-sidebar a, .w-sidebar .cursor-pointer');
    sidebarLinks.forEach(function(sidebarLink) {
        sidebarLink.addEventListener("click", function() {
            const clientWidth = document.body.clientWidth
            // console.log('宽是： ',clientWidth)
            if(clientWidth >= 992) {
                var sidebar = document.querySelector('.w-sidebar');
                sidebar.classList.remove("sidebar-hidden");
            } else {
                var contentHeader = document.querySelector('.content .h-header');
                let leftPx = content.style.marginLeft;
                leftPx = (leftPx == '220px' ? '0' : '220px')
                let rightPx = (leftPx == '0' ? '3.125rem' : '240px')
                content.style.marginLeft = leftPx;
                contentHeader.style.paddingRight = rightPx;
            }
        }, false);
    });
}
