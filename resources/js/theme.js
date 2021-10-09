Nova.booting((Vue, router) => {
    Vue.component('nova-select-theme', require('./components/NovaSelectTheme.vue'));
});

function selectTitleBorder (event) {
    var h3 = document.querySelectorAll('.w-sidebar h3')
    h3.forEach((item) => {
        const h3width = item.style.borderWidth
        if (h3width != '') {
            item.style.border = 'none'
            item.style.boxShadow = 'none'
        }
        if (item.className.indexOf('router-link-active') != '-1') {
            event = item
            return
        }
    })
    if (localStorage.themesname != 'new') return
    if (!event) return
    let titleEvent = ''
    if (event.nodeName == 'H3') { // 点击 h3
        titleEvent = event
    } else if (event.nodeName == 'P') { // 点击 p
        titleEvent = ((event.parentNode).previousSibling.previousSibling).querySelector('h3')
    } else { // 点击 a
        titleEvent = (event.parentNode.parentNode).previousSibling.previousSibling
    }
    titleEvent.style.border = '1px solid #20d5fc'
    titleEvent.style.boxSizing = 'border-box'
    titleEvent.style.borderRadius = '10px'
    titleEvent.style.borderLeftWidth = '3px'
    titleEvent.style.borderTopLeftRadius = '0'
    titleEvent.style.borderBottomLeftRadius = '0'
    titleEvent.style.boxShadow = '0 0 30px -10px #fff inset'
}

// Hamburger click event  汉堡点击事件
window.onload = function () {
    selectTitleBorder()
    var content = document.querySelector('#nova .content');
    var sidebar = document.querySelector('.w-sidebar');
    sidebar.classList.remove("sidebar-hidden");
    content.style.marginLeft = '220px';
    var hamburger = document.querySelector('.hamburger-menu');
    hamburger.addEventListener("click", function (e) {
        var contentHeader = document.querySelector('.content .h-header');
        e.stopPropagation();
        let leftPx = content.style.marginLeft;
        leftPx = (leftPx == '220px' ? '0' : '220px')
        let rightPx = (leftPx == '0' ? '3.125rem' : '240px')
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
        };
    });
    // Sidebar links click event  侧边栏链接单击事件
    var sidebarLinks = document.querySelectorAll('.w-sidebar a, .w-sidebar .cursor-pointer');
    sidebarLinks.forEach(function(sidebarLink) {
        sidebarLink.addEventListener("click", function() {
            selectTitleBorder(sidebarLink)            
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
