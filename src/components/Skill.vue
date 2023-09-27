<template>
    <div class="row">
        <div :class="[{ 'col-sm-6': onlyMainSkill === true }, { 'col-xl-3 col-lg-4 col-sm-6': onlyMainSkill === false }]" v-for="(iSkill, index) in filterSkill" :key="index">
            <div class="skill-item">
                <div class="row">
                    <div class="col-5 vertical-center">
                        <div class="skill-icon">
                            <img :src= iSkill.imgUrl />
                        </div>
                    </div>
                    <div class="col-7">
                        <div>
                            <p>{{ iSkill.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Skill',
        props: {
            onlyMainSkill: {
                type: Boolean,
                required: false
            }
        },
        data() {
            return {
                skill: [
                    {
                        name: 'HTML',
                        imgUrl: require('@/assets/images/icon/html.png'),
                        type: '前端程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'CSS / SCSS',
                        imgUrl: require('@/assets/images/icon/css.png'),
                        type: '前端程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'Bootstrap',
                        imgUrl: require('@/assets/images/icon/bootstrap.png'),
                        type: '前端程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'Vue 3',
                        imgUrl: require('@/assets/images/icon/vue.png'),
                        type: '前端框架',
                        isMainSkill: true
                    },
                    {
                        name: 'VB.NET',
                        imgUrl: require('@/assets/images/icon/vb.png'),
                        type: '後端程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'MSSQL',
                        imgUrl: require('@/assets/images/icon/sql.png'),
                        type: '資料庫',
                        isMainSkill: true
                    },
                    {
                        name: 'Node.js',
                        imgUrl: require('@/assets/images/icon/nodejs.png'),
                        type: '後端程式語言',
                        isMainSkill: false
                    },
                    {
                        name: 'MySQL',
                        imgUrl: require('@/assets/images/icon/mysql.png'),
                        type: '資料庫',
                        isMainSkill: false
                    },
                    {
                        name: 'GitHub',
                        imgUrl: require('@/assets/images/icon/git.png'),
                        type: '版本控制工具',
                        isMainSkill: true
                    },
                    {
                        name: 'Visual Studio',
                        imgUrl: require('@/assets/images/icon/vs.png'),
                        type: '開發工具',
                        isMainSkill: false
                    },
                    {
                        name: 'Visual Studio Code',
                        imgUrl: require('@/assets/images/icon/vscode.png'),
                        type: '開發工具',
                        isMainSkill: false
                    },
                    {
                        name: 'Adobe XD',
                        imgUrl: require('@/assets/images/icon/xd.png'),
                        type: 'UI設計軟體',
                        isMainSkill: true
                    },
                    {
                        name: 'Adobe Photoshop',
                        imgUrl: require('@/assets/images/icon/ps.png'),
                        type: '設計軟體',
                        isMainSkill: false
                    },
                    {
                        name: 'Adobe Illustrator',
                        imgUrl: require('@/assets/images/icon/ai.png'),
                        type: '設計軟體',
                        isMainSkill: false
                    },
                    {
                        name: 'Adobe Lightroom',
                        imgUrl: require('@/assets/images/icon/lr.png'),
                        type: '影像軟體',
                        isMainSkill: false
                    }
                ]
            }
        },
        computed: {
            filterSkill() {
                if (this.onlyMainSkill === true) {
                    return this.skill.filter(iSkill => iSkill.isMainSkill === this.onlyMainSkill);
                } else {
                    return this.skill;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    
</style>