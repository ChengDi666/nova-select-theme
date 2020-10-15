Nova.booting((Vue, router) => {
    Vue.component('nova-select-theme', require('./components/NovaSelectTheme.vue'));
});

// if (localStorage.themesname === undefined) {
//     document.querySelector('html').classList.add('blue');
// }
