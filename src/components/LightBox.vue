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
                    <div class="col-md-6">
                        <div>
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" 
                                        data-bs-target="#carouselExampleIndicators" 
                                        v-for="(imgUrl, index) in propsWorkInfo.moreImgUrl" 
                                        :key="title + index" 
                                        :data-bs-slide-to="index" 
                                        class="active" 
                                        :aria-current="index === 0" 
                                        :aria-label="'Slide ' + index"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div 
                                        v-for="(imgUrl, index) in propsWorkInfo.moreImgUrl" 
                                        :key="title + index"
                                        :class="['carousel-item', { active: index === 0 }]">
                                        <img :src="imgUrl" class="d-block w-100">
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
                    <div class="col-md-6">
                        <div>
                            <div class="info-item vertical-center">
                                <p class="title">執行範疇</p>
                                <p class="info">{{ propsWorkInfo.note }}</p>
                            </div>
                            <div class="info-item vertical-center">
                                <p class="title">技術</p>
                                <p class="info">
                                    <span :style="getBgColor(type)" v-for="(type, index) in propsWorkInfo.type" :key="index">
                                        {{ type }}
                                    </span>
                                </p>
                            </div>
                            <div class="info-item vertical-center">
                                <p class="title">網址</p>
                                <p class="info"><a :href="propsWorkInfo.linkUrl" target="_blank">{{ propsWorkInfo.linkUrl }}</a></p>
                            </div>
                            <div class="info-item vertical-center">
                                <p class="title">說明</p>
                                <p class="info">{{ propsWorkInfo.directions }}</p>
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
        methods: {
            getBgColor(type) {
                if (type === 'SCSS') {
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
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .info-item {
        display: flex;
        padding: 10px 8px;

        .title {
            font-weight: bold;
            font-size: 18px;
            margin-right: 20px;
            width: 15%;
            text-align-last: justify;
        }

        p {
            margin-bottom: 0px;
        }
    }

    .info-item:nth-child(odd) {
        background-color: #f8f9fa;
    }

    .info {
        width: 85%;

        span {
            border-radius: 20px;
            margin-right: 10px;
            padding: 5px 10px;
            width: 100px;
            display: inline-table;
            text-align: center;
        }
    }
</style>