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
                {type:'blue', name:'蓝色'},
                {type:'new', name:'最新'}
            ]
        }),

        created() {
        },

        mounted() {
            const themes = (localStorage.themesname === undefined ? 'blue' : localStorage.themesname);
            this.toggleTheme(themes);
            localStorage.themesname = themes;
            this.mytypes = themes;
        },

        methods: {
            selectOne(mytype) {
                document.querySelectorAll('.w-sidebar h3').forEach((item) => {
                    if (item.style.borderWidth != '') {
                        item.style.border = 'none'
                        item.style.boxShadow = 'none'
                    }
                })
                // console.log('上次颜色:',this.mytypes);
                // console.log('本次颜色:',mytype);
                if (this.mytypes != '') document.querySelector('html').classList.remove(this.mytypes);
                if(this.mytypes === mytype) {
                    localStorage.themesname = 'undefined';
                    this.mytypes = '';
                    return ;
                }
                localStorage.themesname = mytype.toString();
                this.toggleTheme(mytype);
                this.mytypes = mytype;
            },
            toggleTheme(type) {
                this.allThemes.map(item => {
                    if(type === item.type) {
                        // console.log('是 ' + item.name);
                        document.querySelector('html').classList.toggle(item.type);
                    }
                });
            }
        }

    }
</script>

<style scoped>

</style>