<template>
        <div>
            <p class="theme-title">选择主题：</p>
            <ul class="list-reset theme-lists">
                <li v-for="(item,index) in allThemes" :key="index" @click="selectOne(item.type)" :class="{ 'theme-bgblue': mytypes === item.type }">
                    {{item.name}}
                </li>
            </ul>
        </div>

</template>

<script>

    export default {
        name: "NovaSelectTheme",
        data: () => ({
            mytypes: '',
            allThemes: [
                {type:'blue', name:'蓝色'}
            ]
        }),

        created() {
        },

        mounted() {
            // console.log('本地存储主题：',localStorage.themesname);
            const themes = (localStorage.themesname === undefined ? 'blue' : localStorage.themesname);
            // console.log('默认主题：',themes);
            this.toggleTheme(themes);
            localStorage.themesname = themes;
            this.mytypes = themes;
        },

        methods: {
            selectOne(mytype) {
                // console.log('上次颜色:',this.mytypes);
                // console.log('本次颜色:',mytype);
                this.removeThemes(this.mytypes);
                // if(this.mytypes === 'blue') {
                //     document.querySelector('html').classList.remove('blue');
                // } else if (this.mytypes === 'green') {
                //     document.querySelector('html').classList.remove('green');
                // }
                
                if(this.mytypes === mytype) {
                    // console.log('相同');
                    localStorage.themesname = 'undefined';
                    this.mytypes = '';
                    return ;
                }
                localStorage.themesname = mytype.toString();
                this.toggleTheme(mytype);
                // if(mytype === 'blue') {
                //     document.querySelector('html').classList.toggle('blue');
                // } else if( mytype === 'green') {
                //     document.querySelector('html').classList.toggle('green');
                // }
                this.mytypes = mytype;
            },
            toggleTheme(type) {
                this.allThemes.map(item => {
                    if(type === item.type) {
                        // console.log('是 ' + item.name);
                        document.querySelector('html').classList.toggle(item.type);
                    }
                });
            },
            removeThemes(type) {
                this.allThemes.map(item => {
                    if(type === item.type) {
                        // console.log('是 ' + item.name);
                        document.querySelector('html').classList.remove(item.type);
                    }
                });
            }
        }

    }
</script>

<style scoped>

</style>