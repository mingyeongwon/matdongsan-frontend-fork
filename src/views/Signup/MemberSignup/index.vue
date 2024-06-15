<template>
    <div>
        <div class="memberSignup-title">
            <h2 class="fw-bold text-center">일반 회원가입</h2>
        </div>
        <div class="memberSignup-box border-top">
            <form>
                <div class="d-flex mb-4">
                    <div class="d-flex col-2 pt-1">
                        <span>이메일</span>
                        <span class="text-danger fs-5 fw-bold">*</span>
                    </div>
                    <div class="memberEmail-box">
                        <input class="ps-2 me-3" type="text" placeholder="영대소문자, 숫자, 언더바(_) 혼용 4~12자 가능합니다.">
                        <button class="memberSignupPassword-btn text-light w-25">중복확인</button>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <div class="d-flex col-2  pt-1">
                        <span>비밀번호</span>
                        <span class="text-danger fs-5 fw-bold">*</span>
                    </div>
                    <div class="memberPassword-box d-flex flex-column">
                        <input class="mb-2 ps-2" type="password" placeholder="영문, 숫자, 특수문자 혼합 4~20자 가능합니다.">
                        <input class="ps-2" type="password" placeholder="비밀번호를 재입력하세요.">
                    </div>
                </div>
                <div class="d-flex mb-4 memberPhone-box">
                    <div class="d-flex col-2 pt-1">
                        <span>핸드폰번호</span>
                        <span class="text-danger fs-5 fw-bold">*</span>
                    </div>
                    
                    <div>
                        <input class="ps-2" type="text" placeholder="숫자만 10~11자 가능합니다.">
                    </div>
                </div>                
                <div class="d-flex mb-5 memberProfile-box">
                    <span class="col-2 ">프로필 사진</span>
                    <div>
                        <input type="file" id="memberProfile">
                        <label class="memberProfile-label" for="memberProfile">
                            <div class="x"></div>
                            <div class="y"></div>
                        </label>
                    </div>
                </div> 
                <div class="text-center memberSignupBtn-box">
                    <button class="btn btn-warning fw-bold h-100" type="submit">회원 가입</button>
                </div>               
            </form>
        </div>
    </div>
</template>
    
<script setup>
</script>
    
<style scoped>
    .memberSignup-box span {
        font-weight: bold;
    }
    .memberSignupPassword-btn {
        background: rgb(21, 42, 105);
        font-size: 14px;

    }

    .memberSignupBtn-box {
        height: 40px;
    }

    .memberSignupBtn-box button {
        width: 400px;
        font-size: 17px;
    }

    #memberProfile {
        display: none;
    }

    .memberProfile-label {
        width: 125px;
        height: 125px;
        cursor: pointer;
        display: block;
        border: 1px solid rgb(233, 236, 239);
        position: relative;
    }

    .memberProfile-label .x, .memberProfile-label .y{
        border: 1px solid rgb(222, 226, 230);
        position: absolute;
        top: 50%;
        left: 50%; 
    }

    .memberProfile-label .x {
        transform: translateX(-50%);
        width: 44px;
    }

    .memberProfile-label .y {
        transform: translateY(-50%);
        height: 44px;
    }
   

    .memberPassword-box, .memberEmail-box, .memberPhone-box input {
        width: 438px;
        
    }

    .memberPassword-box input, .memberEmail-box input, .memberPhone-box input {
        height: 40px;
        font-size: 14px;
        border: 1px solid rgb(233, 236, 239);
    }

    .memberEmail-box input {
        width: 312px;
    }

    .memberSignup-box button {
        height: 40px;
    }

    .memberSignup-title {
        margin: 50px 0;
    }

    .memberSignup-box {
        max-width: 900px;
        margin: 50px auto 0;
        padding: 40px 40px;
    }
</style>
    