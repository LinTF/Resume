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
                    <a href="tel:0910290508">0910290508</a>
                </div>
                
                <div class="contact-item">
                    <div class="icon">
                        <i class="fa-solid fa-envelope-open-text"></i>
                    </div>
                    <a href="mailto:lin.tf1124@gmail.com">lin.tf1124@gmail.com</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div id="message">
                <div>
                    <h3>與我聯絡</h3>
                </div>
                <form action="mailto:lin.tf1124@gmail.com" method="GET" autocomplete="off">
                    <div class="row">
                        <div class="mb-3">
                            <label for="formEmail" class="form-label">聯絡事項</label>
                            <input type="text" class="form-control" id="formEmail" placeholder="請簡述聯絡事項，例如：邀請面試，外包網站建置" name="subject">
                        </div>
                        <div class="mb-3">
                            <label for="formMessage" class="form-label">訊息</label>
                            <textarea class="form-control" id="formMessage" rows="2" name="body" placeholder="記得留下姓名，好讓我稱呼您"></textarea>
                        </div>
                        <input type="submit" value="送出" class="btn-main">
                    </div>
                </form>
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