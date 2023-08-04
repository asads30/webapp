<template>
    <div class="user">
        <div class="container">
          <div class="usertop">
            <div class="user-title"><span>{{ name }}</span> <img src="@/assets/images/verify.svg" alt=""></div>
            <div class="user-phone">{{ phone }}</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserHomeBlock',
    props: {
        name: String,
        phone: Number
    }
}
</script>

<style lang="scss" scoped>
.user{
    padding: 0 0 12px;
    .container{
        display: flex;
        justify-content: space-between;
    }
    .user-title{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6.5px;
    span{
        font-size: 16px;
        font-weight: 600;
        color: var(--text);
    }
    }
    .user-phone{
    font-size: 14px;
    color: var(--text);
    }
  }
</style>