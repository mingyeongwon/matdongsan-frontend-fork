<template>
    <div>
        <div>
            <h5>평점 & 리뷰 (40)</h5>
        </div>
        <div>
            <img width="80" height="80" class="rounded-circle" src="https://i.pinimg.com/564x/88/62/af/8862af46f4eef3f44b35d446d135dcf4.jpg" alt="">
            <input type="text" placeholder="댓글을 입력해주세요...">
            <button class="btn btn-sm btn-secondary">작성</button>
        </div>
        <div>
            <p>정렬</p>
            <select class="form-select" aria-label="Default select example">
                <option selected>최신순</option>
                <option value="1">오래된순</option>
                <option value="2">별점높은순</option>
                <option value="3">별점낮은순</option>
            </select>
        </div>
        <div>
            <div>
                <img width="80" height="80" class="rounded-circle" src="https://i.pinimg.com/564x/88/62/af/8862af46f4eef3f44b35d446d135dcf4.jpg" alt="">
                <h3>정말 친절하게 다 알려줬어요.</h3>
                <div>
                    5.0
                </div>
                <div>
                    <button>삭제하기</button>
                </div>
            </div>
            <div>
                <p>2024/11/07 - 권성환</p>
                <p>사장님이 친절하고 서비스가 최고예요</p>
            </div>
        </div>
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </template>
    
    <script setup>
    </script>
    
    <style scoped>
    </style>
    