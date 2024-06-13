<template>
    <div>
      <h2 style="text-align: center; margin-top: 70px; margin-bottom: 50px; font-weight: bold">자주 묻는 질문</h2>
      <!-- 버튼 tab -->
      <div class="row" style="margin-left: 400px; margin-right: 400px; height: 50px;">
          <RouterLink to="/QnA/notice" class="askMenu col-4 d-flex" style="text-decoration: none;">
            <button class="askMenuBtn" style="background-color: transparent; border: none; width: 100%;">공지 사항</button>
          </RouterLink>
  
           <RouterLink to="/QnA/ask" class="askMenu col-4 d-flex" style="text-decoration: none;">
            <button class="askMenuBtn" style="background-color: transparent; border: none; width: 100%;">1:1 문의</button>
          </RouterLink>
          
          <RouterLink to="/QnA/FAQ" class="askMenu col-4 d-flex" style="background-color: #2F4858; color: white; text-decoration: none;">
            <button style="background-color: transparent; border: none; width: 100%; color: white">자주 묻는 질문</button>
          </RouterLink>
        </div>


      <div style="margin-left: 500px; margin-right: 500px;">
      <p style="text-align: center; margin-top: 60px; margin-bottom: 50px">맛동산 사용자의 편의를 위해 <span style="color:#FEC83F; font-weight: bold">자주 묻는 질문과 답변</span>을 모아놓았습니다.<br>원하시는 질문을 찾아보세요!</p>
        <!-- 아코디언 -->
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Q. 맛동산은 어떤 서비스인가요?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne">
              <div class="accordion-body"><p>A. 국내 최고 직거래 부동산 플랫폼 ‘맛동산’에서 살고 싶은 집을 만나보세요. <br>
            <br>
            ▶ 대한민국 모든 원룸! 다 있다.<br>
            다~있는 맛동산에서 쉽게 원하는 방을 찾고 찜 하세요!<br><br>

            ▶ 방 주변의 안전 정보, 한 눈에!<br>
            방 주변의 cctv, 치안센터 등 안전 시설들이 어떻게 분포되어 있는지 확인할 수 있습니다.<br>
            맛동산을 통해 보다 안전한 방을 찾아보세요.<br><br>

            ▶ 분양 정보를 한눈에 ‘분양 정보관’<br>
            전국 모든 지역의 분양 정보가 다 있다!<br>
            분양 뉴스, 분양 일정, 청약 가이드까지 맛동산이 꼼꼼하게 전달해드려요.</p></div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Q. 직거래는 어떻게 방을 내놓나요?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
              <div class="accordion-body">
                <p>A. 개인회원의 경우 직거래 매물 1건에 대해 무료 광고가 가능합니다. <br>
                    광고는 30일 간 공개 되며 기간이 지날 경우 비공개처리됩니다. <br>
                    비공개된 매물은 수정하여 다시 노출할 수 있습니다.<br><br>
                </p></div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Q. 허위매물은 어떻게 관리 하나요?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
              <div class="accordion-body"><p>A. 허위매물 신고 접수와 맛동산 의 허위매물 전담팀이 수시로 매물을 살펴보고 필터링하고 있습니다. <br><br>

                ▶ 지역구별 평균 시세를 파악해 시세에 비해 확연히 저렴한 매물이나 실사진이 아닌 사진이 포함된 경우 직접 연락을 취해 정보 수정을 요청합니다. <br><br>

                ▶ 광고 기간이 30일이 지난 매물의 경우 자동으로 비공개 처리하여 계약이 완료된 매물의 노출 가능성을 줄였고, 내부 규정에 따라 경고 및 서비스 이용 제재를 부과하고 있습니다.<br><br>

                ▶ 사용자가 직접 허위매물을 신고할 수 있도록 관련 제도를 마련하여 다방면에서 허위매물 ZERO를 위한 노력을 기울이고 있습니다.</p></div>
            </div>
          </div>
        </div>
      </div>  
    
    </div>
  </template>
    
    <script setup>

    
    </script>
    
    <style scoped>
      .askMenu{
      background-color: transparent;
      color: black;
      border: 1px solid lightgrey;

    }
  
      .askMenu:hover{
        background-color: #2F4858;
        color: white;
        /* border: 2px solid black; */
    }
  
    .askMenuBtn:hover{
      color: white;
    }
  
    th{
      text-align: center;
      border-top: 2px solid black;
      border-bottom: 1px solid grey;
      height: 60px;
  
    }
    td{
      height: 60px;
      border-bottom: 1px solid gray
    }

    .accordion{
      --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
    }

    .accordion-button:not(.collapsed) {
    color: var(--bs-accordion-active-color);
    background-color: #ffffff;
    }

    .accordion-header>button:hover{
      color: #FEC83F;
      font-weight: bold;
    }

    
    </style>
    