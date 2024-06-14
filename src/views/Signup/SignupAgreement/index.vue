<template>
<div>
    <div class="border-bottom">
        <h1>회원가입</h1>
    </div>
    <div>
        <div class="border-bottom">
            <p>약관 동의</p>
        </div>
        <form>
            <div>
                <input type="radio" id="all-agreement" name="drone" value="all-agreement" />
                <label for="all-agreement">회원가입 약관에 모두 동의합니다</label>
            </div>
            <div>
                <div>
                    <input type="radio" id="termsOfUse-agreement" name="drone" value="termsOfUse-agreement" />
                    <label for="all-agreement">이용약관 동의 <span>(필수)</span></label>
                </div>
                <div>
                    <input type="radio" id="privacyPolicy-agreement" name="drone" value="privacyPolicy-agreement" />
                    <label for="all-agreement">개인정보 수집 및 이용 동의 <span>(필수)</span></label>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script setup>
</script>

<style scoped>
</style>
