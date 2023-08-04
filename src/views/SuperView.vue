<template>
    <div class="super">
        <Header :left="true" :center="true" :centerText="'Основные призы'" />
        <div class="super-wrapper">
            <div class="container">
                <div class="des">колеса, это одно из гарантированных призов. Когда участник прокрутит Колесо Фортуны, оно рандомным образом определит, какой из призов станет его выигрышем. Здесь нет проигравших! </div>
                <div class="big">
                    <div class="big-img">
                        <img src="@/assets/images/prize1.png" alt="">
                    </div>
                    <div class="big-text">
                        <div class="big-subtitle">Супер–приз</div>
                        <div class="big-title">BYD song plus</div>
                    </div>
                </div>
                <div class="list">
                    <div class="item">
                        <div class="item-image">
                            <img src="@/assets/images/prize2.png" alt="">
                            <div class="item-label">X8</div>
                        </div>
                        <div class="item-title">iPhone 14 Pro Max</div>
                    </div>
                    <div class="item">
                        <div class="item-image">
                            <img src="@/assets/images/prize3.png" alt="">
                            <div class="item-label">X8</div>
                        </div>
                        <div class="item-title">iPhone 14 Pro Max</div>
                    </div>
                    <div class="item">
                        <div class="item-image">
                            <img src="@/assets/images/prize4.png" alt="">
                            <div class="item-label">X8</div>
                        </div>
                        <div class="item-title">iPhone 14 Pro Max</div>
                    </div>
                    <div class="item">
                        <div class="item-image">
                            <img src="@/assets/images/prize5.png" alt="">
                            <div class="item-label">X8</div>
                        </div>
                        <div class="item-title">iPhone 14 Pro Max</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import Header from '@/components/Header'
    export default {
        name: "SuperView",
        components: {
            Header
        }
    };
</script>

<style lang="scss" scoped>
.super{
    height: 100%;
}
.des{
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.5px;
    margin-bottom: 35px;
    padding-top: 20px;
}
.big{
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 16px;
    padding-bottom: 16px;
    margin-bottom: 32px;
    &::before{
        content: '';
        width: 100%;
        height: 80px;
        bottom: 0;
        position: absolute;
        left: 0;
        background: linear-gradient(28deg, #0024A3 0%, #F465F7 100%);
        border-radius: 10px;
        z-index: 0;
    }
    .big-img{
        width: 160px;
        position: relative;
        z-index: 5;
        img{
            max-width: 160px;
        }
    }
    .big-text{
        width: calc(100% - 176px);
        position: relative;
        z-index: 5;
        .big-subtitle{
            font-size: 10px;
            color: #fff;
            margin-bottom: 2px;
        }
        .big-title{
            font-size: 16px;
            color: #fff;
            font-weight: 600;
            margin-bottom: 7px;
        }
    }
}
.list{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .item{
        width: calc(50% - 5px);
        position: relative;
        padding-bottom: 12px;
        text-align: center;
        margin-bottom: 15px;
        &::before{
            content: '';
            width: 100%;
            height: 80px;
            bottom: 0;
            position: absolute;
            left: 0;
            background: linear-gradient(28deg, #0024A3 0%, #F465F7 100%);
            border-radius: 10px;
            z-index: 0;
        }
        .item-image{
            max-width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 4px;
            img{
                max-height: 100px;
            }
            .item-label{
                height: 24px;
                width: 24px;
                line-height: 24px;
                font-size: 12px;
                color: #242429;
                font-weight: 600;
                text-align: center;
                border-radius: 24px;
                background: linear-gradient(54deg, #FCFE5D 0%, #FDDC08 24.02%, #FD9F83 47.72%, #F97DD3 69.57%, #C566E4 100%);
                position: absolute;
                right: 50px;
                bottom: 10px;
            }
        }
        .item-title{
            font-weight: 600;
            font-size: 12px;
            color: #fff;
            position: relative;
        }
    }
}
.super-wrapper{
    height: calc(100vh - 74px);
    overflow-y: auto;
}
</style>