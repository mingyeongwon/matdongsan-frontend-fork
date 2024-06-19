<template>
    <div>
       <table style="width:80%"  class="container mt-5">
        <thead style="border-bottom:3px solid black ;">
            <!-- 일단 보류 우선순위 먼저 처리하고 다시 할 예정 -->
            <tr>
                <th><h4 class="ms-5" style="color: black;">마이 페이지</h4></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border-right:3px solid black; width:25%; height: 700px;">
                    <div class="">
                <ul class="list-group">
                    <RouterLink
                        to="/MyPage/MyInfomation"
                        class="text-decoration-none text-dark"
                    >
                        <li class="">내 정보</li></RouterLink
                    >
                    <RouterLink
                        to="/MyPage/ManageMyProperty"
                        class="text-decoration-none text-dark"
                    >
                        <li class="">매물 관리</li></RouterLink
                    >
                    <RouterLink
                        to="/MyPage/ReportFalseListing"
                        class="text-decoration-none text-dark"
                    >
                        <li class="">허위매물 신고</li></RouterLink
                    >
                    <RouterLink
                        to="/MyPage/CustomerInquiry"
                        class="text-decoration-none text-dark"
                    >
                        <li class="">1:1 문의내역</li></RouterLink
                    >
                    <RouterLink
                        to="/MyPage/DeleteAccount"
                        class="text-decoration-none text-dark"
                    >
                        <li class="">회원 탈퇴</li>
                    </RouterLink>
                </ul>
            </div>
                </td>
                <td>
                    <p>dkdkdkdkdkdkfjdlkjdslkfjdsjdsljdskfjdksjdskjflkds</p>
                    <RouterView/>
                </td>
            </tr>
        </tbody>
       </table>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
hr{
    border: 2px solid black;
}

ul{
    list-style: none;
}

</style>
