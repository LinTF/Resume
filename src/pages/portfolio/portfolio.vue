<template>
    <header>
        <menuBlock />
    </header>
    <main>
        <div class="container">
            <div id="portfolio">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="coding-tab" data-bs-toggle="tab" data-bs-target="#coding" type="button" role="tab" aria-controls="coding" aria-selected="true">前後端</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="ui-tab" data-bs-toggle="tab" data-bs-target="#ui" type="button" role="tab" aria-controls="ui" aria-selected="false">UI設計</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="design-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" role="tab" aria-controls="design" aria-selected="false">平面設計</button>
                    </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="coding" role="tabpanel" aria-labelledby="coding-tab">
                        <div class="coding-block">
                            <div class="row">
                                <div class="col-md-4">
                                    <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <img src="@/assets/images/icon/sql.png" width="200" />
                                    </a>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">這裡放標題</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <img src="/_img/ps.png" width="200px" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            這裡是介紹 很多很多文字
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">已閱讀</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <a data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        <img src="/_img/sketch.png" width="200px" />
                                    </a>
                                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">這裡放標題</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <img src="/_img/ps.png" width="200px" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            這裡是介紹 很多很多文字333
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">已閱讀</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <a>
                                        <img src="/_img/sketch.png" width="200px" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="ui" role="tabpanel" aria-labelledby="ui-tab">
                        <div class="ui-block">

                        </div>
                    </div>
                    <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                        <div class="design-block">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="contact">
            <contact />
        </div>
    </main>
  
    <footer>
        <copyRight/>
    </footer>
  </template>
  
  <script>
    import menuBlock from '../../components/Menu.vue';
    import copyRight from '../../components/CopyRight.vue';
    import contact from '../../components/Contact.vue';
  
    export default {
        name: 'Home',
        components: {
            menuBlock,
            contact,
            copyRight
        }
    }
  </script>
  
  <style>
  
  </style>