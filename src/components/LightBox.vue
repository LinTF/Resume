<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">{{ propsWorkInfo.title }}</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xl-6">
                        <div>
                            <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" 
                                        data-bs-target="#carouselExampleIndicators" 
                                        v-for="(imgUrl, index) in propsWorkInfo.moreImgUrl" 
                                        :key="imgUrl" 
                                        :data-bs-slide-to="index" 
                                        :class="{ active: index === 0 }" 
                                        :aria-current="index === 0" 
                                        :aria-label="'Slide ' + index"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div 
                                        v-for="(imgUrl, index) in propsWorkInfo.moreImgUrl" 
                                        :key="imgUrl"
                                        :class="['carousel-item', { active: index === 0 }]">
                                        <img :src="imgUrl" class="d-block">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div>
                            <div class="info-item vertical-center">
                                <p class="title">執行範疇</p>
                                <p class="info">{{ propsWorkInfo.note }}</p>
                            </div>
                            <div class="info-item vertical-center">
                                <p class="title">技術</p>
                                <p class="info">
                                    <span :style="getBgColor(type)" 
                                        v-for="(type, index) in propsWorkInfo.type" 
                                        :key="index">
                                        {{ type }}
                                    </span>
                                </p>
                            </div>
                            <div class="info-item vertical-center" v-if="Array.isArray(propsWorkInfo.linkUrl) && propsWorkInfo.linkUrl.length > 0">
                                <p class="title">網址</p>
                                <p class="info">
                                    <a v-for="itemUrl in propsWorkInfo.linkUrl" 
                                        :key="itemUrl.name" 
                                        :href="itemUrl.linkUrl"
                                        target="_blank">
                                        {{ itemUrl.name }}</a>
                                </p>
                            </div>
                            <div class="info-item vertical-center">
                                <p class="title">說明</p>
                                <p class="info" v-if="Array.isArray(propsWorkInfo.description) && propsWorkInfo.description.length === 1">{{ propsWorkInfo.description[0].text }}</p>
                                <ul class="info" v-else>
                                    <li v-for="(partText, index) in propsWorkInfo.description" :key="index">{{ partText.text }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">已閱讀</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LightBox',
        props: {
            propsWorkInfo: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            getBgColor(type) {
                if (type === 'SCSS' || type === 'CSS') {
                    return {
                        backgroundColor: '#3070BA',
                        color: '#ffffff',
                    }
                } else if (type === 'Bootstrap') {
                    return {
                        backgroundColor: '#8550D2',
                        color: '#ffffff',
                    }
                } else if (type === 'Vue') {
                    return {
                        backgroundColor: '#64B687',
                        color: '#ffffff',
                    }
                } else if (type === 'Sketch') {
                    return {
                        backgroundColor: '#F3B13E',
                        color: '#ffffff',
                    }
                } else if (type === 'VB.NET') {
                    return {
                        backgroundColor: '#514896',
                        color: '#ffffff',
                    }
                } else if (type === 'MSSQL') {
                    return {
                        backgroundColor: '#AA4F4E',
                        color: '#ffffff',
                    }
                } else if (type === 'Adobe XD') {
                    return {
                        backgroundColor: '#400835',
                        color: '#ffffff',
                    }
                } else if (type === 'Adobe Photoshop') {
                    return {
                        backgroundColor: '#262438',
                        color: '#ffffff',
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .info-item {
        display: flex;
        display: -webkit-box;
        padding: 10px 8px;

        .title {
            font-weight: bold;
            font-size: 18px;
            margin-right: 20px;
            width: 15%;
            text-align-last: justify;
        }

        p, ul {
            margin-bottom: 0px;
        }

        li {
            margin-bottom: 10px;
        }

        li:last-child {
            margin-bottom: 0px;
        }
    }

    .info-item:nth-child(odd) {
        background-color: #f8f9fa;
    }

    .info {
        width: 85%;
        padding-right: 20px;
        padding-top: 3px;

        span {
            border-radius: 20px;
            margin-right: 10px;
            padding: 5px 10px;
            max-width: initial;
            display: inline-table;
            text-align: center;
            margin: 5px 10px 5px 0px;
        }

        a {
            margin-right: 10px;
            color: #D7A590;

            &:hover {
                color: #000;
            }
        }
    }

    .carousel-item {
        max-height: 500px;

        img {
            max-width: 100%;
            max-height: 500px;
        }
    }

    @media screen and (max-width: 991px) { 
        .info-item {
            display: block;
    
            .title, .info {
                width: 100%;
            }
    
            .title {
                text-align-last: unset;
                margin-bottom: 10px;
            }
        }
    }
</style>