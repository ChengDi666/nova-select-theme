<template>
        <div>
            <p class="theme-title">选择主题：</p>
            <ul class="list-reset theme-lists">
                <li @click="selectOne('blue')" :class="{ 'theme-bgblue': mytypes === 'blue' }">
                    蓝色
                </li>
            </ul>
        </div>

</template>

<script>

    export default {
        name: "NovaDarkThemeToggle",

        data: () => ({
            mytypes: ''
        }),

        created() {
        },

        mounted() {
            // console.log('本地存储主题：',localStorage.themesname);
            const themes = (localStorage.themesname === undefined ? 'blue' : localStorage.themesname);
            // console.log('默认主题：',themes);
           if(themes === 'blue') {
                document.querySelector('html').classList.toggle('blue');
            } else if( themes === 'green') {
                document.querySelector('html').classList.toggle('green');
            } else if( themes === 'ceshis') {
                document.querySelector('html').classList.toggle('ceshis');
            }
            localStorage.themesname = themes;
            this.mytypes = themes;
        },

        methods: {
            selectOne(mytype) {
                // console.log('上次颜色:',this.mytypes);
                // console.log('本次颜色:',mytype);
                if(this.mytypes === 'blue') {
                    document.querySelector('html').classList.remove('blue');
                } else if (this.mytypes === 'green') {
                    document.querySelector('html').classList.remove('green');
                } else if (this.mytypes === 'ceshis') {
                    document.querySelector('html').classList.remove('ceshis');
                }
                
                if(this.mytypes === mytype) {
                    // console.log('相同');
                    localStorage.themesname = 'undefined';
                    this.mytypes = '';
                    return ;
                }
                localStorage.themesname = mytype.toString();
                if(mytype === 'blue') {
                    document.querySelector('html').classList.toggle('blue');
                } else if( mytype === 'green') {
                    document.querySelector('html').classList.toggle('green');
                } else  if( mytype === 'ceshis') {
                    document.querySelector('html').classList.toggle('ceshis');
                }
                this.mytypes = mytype;
            }
        }

    }
</script>

<style scoped>

</style>