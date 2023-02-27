<template>
    <div class="col-md-3" v-for="(iSkill, index) in skill" :key= "index">
        <div class="skill-item">
            <div class="row">
                <div class="col-5 vertical-center">
                    <div class="skill-icon">
                        <img :src = iSkill.imgUrl />
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
</template>

<script>
    export default {
        name: 'Skill',
        data() {
            return {
                skill: [
                    {
                        name: 'HTML',
                        imgUrl: require('@/assets/images/html.png'),
                        type: '程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'CSS / SCSS',
                        imgUrl: require('@/assets/images/css.png'),
                        type: '程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'VUE3',
                        imgUrl: require('@/assets/images/vue.png'),
                        type: '程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'BOOTSTRAP',
                        imgUrl: require('@/assets/images/bootstrap.png'),
                        type: '程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'VB.NET',
                        imgUrl: require('@/assets/images/vb.png'),
                        type: '程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'MMSQL',
                        imgUrl: require('@/assets/images/sql.png'),
                        type: '程式語言',
                        isMainSkill: true
                    },
                    {
                        name: 'Visual Studio',
                        imgUrl: require('@/assets/images/vs.png'),
                        type: '開發工具',
                        isMainSkill: false
                    },
                    {
                        name: 'Visual Studio Code',
                        imgUrl: require('@/assets/images/vscode.png'),
                        type: '開發工具',
                        isMainSkill: false
                    },
                    {
                        name: 'Sublime',
                        imgUrl: require('@/assets/images/sublime.png'),
                        type: '開發工具',
                        isMainSkill: false
                    },
                    {
                        name: 'GitHub',
                        imgUrl: require('@/assets/images/git.png'),
                        type: '版本控制工具',
                        isMainSkill: true
                    },
                    {
                        name: 'Adobe XD',
                        imgUrl: require('@/assets/images/xd.png'),
                        type: 'UI設計軟體',
                        isMainSkill: true
                    },
                    {
                        name: 'Sketch',
                        imgUrl: require('@/assets/images/sketch.png'),
                        type: 'UI設計軟體',
                        isMainSkill: false
                    },
                    {
                        name: 'Adobe Photoshop',
                        imgUrl: require('@/assets/images/ps.png'),
                        type: '設計軟體',
                        isMainSkill: false
                    },
                    {
                        name: 'Adobe Illustrator',
                        imgUrl: require('@/assets/images/ai.png'),
                        type: '設計軟體',
                        isMainSkill: false
                    },
                    {
                        name: 'Adobe Lightroom',
                        imgUrl: require('@/assets/images/lr.png'),
                        type: '影像軟體',
                        isMainSkill: false
                    },
                    {
                        name: 'Wordpress',
                        imgUrl: require('@/assets/images/wordpress.png'),
                        type: '模板工具',
                        isMainSkill: false
                    },
                    // {
                    //     name: 'Office',
                    //     imgUrl: '/_img/office.png',
                    //     type: ''
                    // }
                ]
            }
        }
    }
</script>

<style>

</style>