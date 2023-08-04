<template>
  <div class="shot">
      <div class="container">
        <router-link to="/" class="shot-box">
          <div class="shot-left">
            <div class="shot-rating">
              <div class="shot-rating-icon">
                <img src="@/assets/images/shot.svg" alt="">
              </div>
              <div class="shot-rating-number">{{ score }}</div>
            </div>
            <div class="shot-title">Шанс для розыгрышей<br />суперпризов</div>
          </div>
          <div class="shot-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M1 1L7.25 7.875L1 14.75" stroke="#B3B7CE" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ShotHomeBlock',
  props: {
      score: Number
  }
}
</script>

<style lang="scss" scoped>
.shot {
  margin: 0 0 20px;
  .shot-box{
    background: #34353F;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
    .shot-left{
      display: flex;
      align-items: center;
      .shot-rating {
        gap: 9px;
        padding-right: 15px;
        border-right: 1px solid hsla(0,0%,100%,.2);
        margin-right: 15px;
        display: flex;
        align-items: center;
        .shot-rating-icon{
          height: 19px;
          img{
            vertical-align: baseline;
          }
        }
        .shot-rating-number {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }
      }
      .shot-title{
        font-size: 14px;
        color: #fff;
        font-weight: 600;
      }
    }
  }
}
</style>