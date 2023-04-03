<template>
    <div class="row">
        <div class="col-md-4" v-for="(word, index) in works" :key="index">
            <a class="work-item" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="workInfo(index)">
                <img :src="word.imgUrl" />
                <div class="mask vertical-center">
                    <div>
                        <h3>{{ word.title }}</h3>
                        <p>{{ word.note }}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Works',
        data() {
            return {
                works: [
                    {
                        title: '3M全戶淨水系統',
                        note: '切版與設計',
                        imgUrl: require('@/assets/images/code/3M/index.png'),
                        type: [ 'Bootstrap', 'SCSS' ],
                        directions: '3M全戶淨水系統產品使用場域介紹的網頁設計與切版',
                        linkUrl: 'https://findmyfilter.com.tw/',
                        moreImgUrl: [
                            require('@/assets/images/code/3M/index.png'),
                            require('@/assets/images/code/incom/index.png'),
                            require('@/assets/images/code/Moto7/1.png')
                        ]
                    },
                    {
                        title: '收支分析表',
                        note: '全前端',
                        imgUrl: require('@/assets/images/code/incom/index.png'),
                        type: [ 'vue', 'Bootstrap', 'SCSS' ],
                        directions: '這是使用 Vue 做的第一個 side project，了解 Vue 的建立、元件使用、props傳入、$emit拋出、components、computed、 methods、打包專案等',
                        linkUrl: 'https://lintf.github.io/IncomePlan/',
                        moreImgUrl: [
                            require('@/assets/images/code/incom/index.png')
                        ]
                    }
                ]
            }
        },
        methods: {
            workInfo(val) {
                this.$emit('emitWork', this.works[val])
            }
        }
    }
</script>

<style scoped lang="scss">
    .work-item {
        position: relative;

        img {
            width: 100%;   
            height: 100%;   
            object-fit:cover;
        }

        .mask {
            width: 100%;
            height: 100%;
            background-color: #000000;
            position: absolute;
            opacity: 0;
            top: 0px;

            h3, p {
                color: #fff;
                text-align: center;
            }

            &>div {
                width: inherit;
            }
        }

        &:hover .mask {
            opacity: .8;
        }
    }
</style>