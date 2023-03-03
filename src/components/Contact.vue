<template>
    <div class="row">
        <div class="col-md-6 vertical-center">
            <div id="info">
                <div class="name-block">
                    <h3>林婷芳</h3> <span>Iris</span>
                </div>
                <hr/>
                <div class="contact-item">
                    <div class="icon">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    <span>0910290508</span>
                </div>
                
                <div class="contact-item">
                    <div class="icon">
                        <i class="fa-solid fa-envelope-open-text"></i>
                    </div>
                    <span>lin.tf1124@gmail.com</span>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div id="message">
                <div>
                    <h3>與我聯絡</h3>
                </div>
                <div class="row">
                    <div class="mb-3">
                        <label for="formName" class="form-label">姓名：</label>
                        <input type="name" class="form-control" id="formName">
                    </div>
                    <div class="mb-3">
                        <label for="formEmail" class="form-label">Email：</label>
                        <input type="email" class="form-control" id="formEmail" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="formMessage" class="form-label">訊息</label>
                        <textarea class="form-control" id="formMessage" rows="2"></textarea>
                    </div>
                    <input type="button" value="送出" class="btn-main">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact'
    }
</script>

<style>

</style>