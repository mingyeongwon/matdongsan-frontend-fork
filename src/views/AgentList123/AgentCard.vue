<template>

  <div class="w-75 main-table">
    <table class="table">
      <thead>
        <tr>
          <th >중개인</th>
          <!-- <th></th>
          <th></th>
          <th></th> -->
          <th>지역</th>
          <th class="ps-5">고객 리뷰</th>
        </tr>
      </thead>
      <tbody>
        <RouterLink to="/agentDetail">
        <tr class="table-line">
          <td  class="d-flex align-items-center agent-cell">
            <img
              class="profile-img"
              src="https://photos.zillowstatic.com/h_g/ISq9k7n18szwr41000000000.jpg"
              height="100"
              width="100"
            />
            <div class="col ms-4 me-3 agent-details">
              <h4>이름</h4>
              <div>010-1234-5678</div>
              <div>rates</div>
              <div>{{ 100 }} reviews</div>
              <div>회사명</div>
            </div>
          </td>

          <td>
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=44.905524,-92.922988&zoom=9&size=400x160&maptype=roadmap&key=AIzaSyCadFmqeT-wY9jYJ9TJi5x8J1GzggZ5oFQ&style=feature%3Aadministrative.land_parcel%7Celement%3Aall%7Cvisibility%3Aoff%7C&style=feature%3Aadministrative.locality%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Aadministrative.neighborhood%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Aadministrative.province%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Alandscape%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Alandscape.man_made%7Celement%3Ageometry%7Csaturation%3A-100%7C&style=feature%3Alandscape.man_made%7Celement%3Ageometry.stroke%7Ccolor%3A0xdcdcdc%7C&style=feature%3Alandscape.natural%7Celement%3Aall%7Ccolor%3A0xe6e6e6%7C&style=feature%3Alandscape.natural%7Celement%3Alabels.text.fill%7Ccolor%3A0x7f7f7f%7C&style=feature%3Alandscape.natural.landcover%7Celement%3Aall%7Ccolor%3A0xe6e6e6%7C&style=feature%3Alandscape.natural.terrain%7Celement%3Aall%7Ccolor%3A0xe6e6e6%7C&style=feature%3Apoi%7Celement%3Ageometry.fill%7Ccolor%3A0xd6d6d6%7C&style=feature%3Apoi%7Celement%3Alabels.text%7Cvisibility%3Aoff%7C&style=feature%3Apoi.attraction%7Celement%3Aall%7Cvisibility%3Aoff%7C&style=feature%3Apoi.business%7Celement%3Aall%7Cvisibility%3Aoff%7C&style=feature%3Apoi.government%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Apoi.medical%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Apoi.medical%7Celement%3Alabels.text%7Cvisibility%3Aon%7C&style=feature%3Apoi.park%7Celement%3Aall%7Ccolor%3A0xb0d896%7C&style=feature%3Apoi.park%7Celement%3Alabels%7Cvisibility%3Aon%7Cweight%3A2.5%7C&style=feature%3Apoi.park%7Celement%3Alabels.text.fill%7Ccolor%3A0x787878%7Cinvert_lightness%3Atrue%7C&style=feature%3Apoi.park%7Celement%3Alabels.text.stroke%7Ccolor%3A0xffffff%7C&style=feature%3Apoi.place_of_worship%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Apoi.school%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Apoi.sports_complex%7Celement%3Alabels.icon%7Cvisibility%3Aoff%7C&style=feature%3Aroad%7Celement%3Ageometry%7Ccolor%3A0xf8f8f8%7C&style=feature%3Aroad%7Celement%3Alabels.text.fill%7Ccolor%3A0x666666%7C&style=feature%3Atransit%7Celement%3Alabels.text%7Cvisibility%3Aoff%7C&style=feature%3Awater%7Celement%3Ageometry%7Ccolor%3A0xb1bdd7%7C&style=feature%3Awater%7Celement%3Alabels.text.fill%7Ccolor%3A0xffffff%7C&style=feature%3Awater%7Celement%3Alabels.text.stroke%7Ccolor%3A0xa0aecc%7C&signature=N1NX_EW0eGGf0bIX-yNEskBV3gQ="
             height="130"
            />
          </td>
          <td  class="ps-5">
            <a href="#">2024.05.13 작성</a>
            <br>
            너무 친절해서 좋았습니다. 다음에도 이사나 집을 구매하게 될때
            연락드리겠습니다.
          </td>
        </tr>
      </RouterLink>
      </tbody>
    </table>
  </div>

</template>

<script setup></script>

<style scoped>
a {
  text-decoration: none;
}
.main-table {
  margin-left: auto;
  margin-right: auto;
  border-bottom: 0;
}
.table-line {
  cursor: pointer;
  vertical-align: middle;
}
.agent-cell {
  display: flex;
  align-items: center;
}
.profile-img {
  border-radius: 100%;
}
.agent-details {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 177px;
}
</style>
