<template>
  <RouterLink
    :to="{path:`/Property/${propertyData.id}`}"
    class="row text-decoration-none me-3 text-dark"
    v-if="props.propertyData.type == 'property'"
  >
    <div class="border-bottom p-0">
      <div class="w-100 d-flex justify-content-center p-3">
        <div class="w-50">
          <img
            class=""
            width="140"
            height="140"
            src="https://cdn.ggumim.co.kr/cache/star/600/4f88ed25-b172-4ed7-b1cc-8e959c33d786.jpg"
            alt=""
          />
        </div>
        <div class="w-50">
          <div class="listInfo-box ms-2">
            <p class="listPrice mb-2 mt-2">
              <b
                >{{ propertyData.pcategory }} {{ propertyData.pdeposite }}/{{
                  propertyData.prentalfee
                }}</b
              >
            </p>
            <p class="listInfo">
              {{ propertyData.floor }}층, {{ propertyData.size }}m<sup>2</sup>,
              관리비 {{ propertyData.maintenance }}만
            </p>
            <p class="listInfo">{{ propertyData.title }}</p>
            <p
              class="listMemberType text-center border border-danger text-danger mt-2 p-1"
            >
              방주인
            </p>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
  <RouterLink
    :to="{path:`/Agent/${agentData.id}`}"
    class="row text-decoration-none me-3 text-dark"
    v-if="props.agentData.type == 'agent'"
  >
    <div class="border-bottom p-0">
      <div class="w-100 d-flex justify-content-center p-3">
        <div class="w-50">
          <img
            class=""
            width="140"
            height="140"
            src="https://cdn.ggumim.co.kr/cache/star/600/4f88ed25-b172-4ed7-b1cc-8e959c33d786.jpg"
            alt=""
          />
        </div>
        <div class="w-50">
          <div class="listInfo-box ms-2">
            <p class="listPrice mb-2 mt-2 ms-2">
              <b
                >{{ agentData.company }} </b
              >
            </p>
            <p class="listInfo ms-2">
              {{ agentData.name }},
            </p>
            <p class="listInfo ms-2"> {{ agentData.phone }}</p>
          
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>

const props = defineProps({
  propertyData: {
    type: Object,
    default: () => ({
      id:0,
      pcategory: "월세",
      pdeposite: 3000,
      prentalfee: 20,
      title: "O성북천변 신축급 풀옵션원룸O성신여대역도보4분거리O",
      floor: 1,
      size: 25,
      maintenance: 8,
      detailInfo: "",
    }),
  },

  agentData: {
    type: Object,
    default: () => ({
      id:0,
      company: "검은소와 중개소 ",
      pdeposite: 3000,
      prentalfee: 20,
      title: "O성북천변 신축급 풀옵션원룸O성신여대역도보4분거리O",
      maintenance: 8,
      detailInfo: "",
    }),
  },
});
</script>

<style scoped>
.listMemberType {
  width: 50px;
  font-size: 12px;
}

.listPrice {
  font-size: 18px;
}

.listInfo {
  font-size: 14px;
}

p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
}
</style>
