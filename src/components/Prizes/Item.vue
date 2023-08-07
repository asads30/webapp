<template>
    <router-link :to="'/prizes/'+id" class="myprizes-item">
        <div class="myprizes-img" :style="'background: ' + background">
            <img :src="'https://promadm.click.uz/' + img">
        </div>
        <div class="myprizes-text">
            <div class="myprizes-name">{{ text }}</div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'PrizeComponent',
    props: {
        background: String,
        text: String,
        id: Number,
        img: String
    }    
}
</script>

<style lang="scss">
    .myprizes-item{
        width: calc(50% - 6px);
        background: var(--bg2);
        border-radius: 12px;
        text-decoration: none;
    }
    .myprizes-img{
        height: 105px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        background: linear-gradient(219deg, #F0F 0%, #0073FF 100%);
        img{
            max-width: 120px;
        }
    }
    .myprizes-text{
        padding: 12px;
    }
    .myprizes-name{
        font-size: 12px;
        color: var(--text);
        font-weight: 500;
        line-height: 16px;
        height: 32px;
        display: flex;
        align-items: center;
    }
</style>