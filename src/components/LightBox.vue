<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{ propsWorkInfo.title }}</h5>
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
                            <p>{{ propsWorkInfo.note }}</p>
                            <p v-for="(type, index) in propsWorkInfo.type" :key="index">{{ type }}</p>
                            <a>{{ propsWorkInfo.linkUrl }}</a>
                            <p>{{ propsWorkInfo.directions }}</p>
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
        }
    }
</script>

<style scoped>

</style>