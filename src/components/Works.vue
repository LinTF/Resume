<template>
    <!-- 分類 -->
    <div class="category-btn">
        <button 
            @click="selectedCategory = 'all'" 
            :style="getActiveStyle('all')">全部</button>
        <button 
            v-for="item in categorys" 
            :key="item.category" 
            @click="selectedCategory = item.category" 
            :style="getActiveStyle(item.category)">{{ item.name }}</button>
    </div>

    <!-- 內容 -->
    <div class="row">
        <div class="col-md-4" v-for="(word, index) in filteredItems" :key="index">
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
                selectedCategory: 'all',
                categorys: [
                    {
                        category: 'frontend',
                        name: '前端（含 UI 設計 / Wordpress）'
                    },
                    {
                        category: 'rearend',
                        name: '後端'
                    },
                    {
                        category: 'design',
                        name: '平面設計'
                    }
                ],
                works: [
                    {
                        title: '3M全戶淨水系統',
                        category: 'frontend',
                        note: '切版與設計',
                        imgUrl: require('@/assets/images/code/3M/index.png'),
                        type: [ 'Bootstrap', 'SCSS' ],
                        directions: '3M全戶淨水系統產品使用場域介紹的網頁設計與切版',
                        linkUrl: 'https://findmyfilter.com.tw/',
                        moreImgUrl: [
                            require('@/assets/images/code/3M/index.png')
                        ]
                    },
                    {
                        title: '收支分析表',
                        category: 'design',
                        note: '全前端',
                        imgUrl: require('@/assets/images/code/incom/index.png'),
                        type: [ 'Vue', 'Bootstrap', 'SCSS' ],
                        directions: '這是使用 Vue 做的第一個 side project，了解 Vue 的建立、元件使用、props傳入、$emit拋出、components、computed、 methods、打包專案等用法',
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
            },
            getActiveStyle(category) {
                return category === this.selectedCategory ? { backgroundColor: '#F9B69C', color: '#fff', border: '1px solid #F9B69C' } : { backgroundColor: '#fff' }
            }
        },
        computed: {
            filteredItems() {
                if (this.selectedCategory === 'all') {
                    return this.works;
                } else {
                    return this.works.filter(item => item.category === this.selectedCategory);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .category-btn {
        text-align: center;
        margin-bottom: 50px;
        margin-top: 50px;

        button {
            border-radius: 20px;
            padding: 5px 15px;
            margin: 0px 10px;
            background: #fff;
            border: 1px solid #ccc;

            &:hover {
                border: 1px solid #F9B69C;
                color: #F9B69C;
            }
        }
    }

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
            transition: .5s;
        }
    }
</style>