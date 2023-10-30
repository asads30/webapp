<template>
    <div class="page">
        <div class="video">
            <div class="video-top">
                <Header :left="true" :right="false" :center="true" :centerText="$t('video.video')"/>
            </div>
            <div class="video-body">
                <div class="container">
                    <div class="video-item">
                        <iframe width="100%" height="180" src="https://www.youtube.com/embed/Pb0GaKz1JZU?si=0Nc70YSi-jWV05jr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div class="video-box">
                            <div class="video-title">{{ $t('video.video1') }}</div>
                            <div class="video-date"><span>15:00</span> 07.10.2023</div>
                        </div>
                    </div>
                    <div class="video-item">
                        <iframe width="100%" height="180" src="https://www.youtube.com/embed/FIitzcwqd6g?si=V6ssbDoX38_iVt1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div class="video-box">
                            <div class="video-title">{{ $t('winners.win2') }}</div>
                            <div class="video-date"><span>15:00</span> 21.09.2023</div>
                        </div>
                    </div>
                    <div class="video-item">
                        <iframe width="100%" height="180" src="https://www.youtube.com/embed/Y-UIxEjb4DM?si=20H9mgO9AJ_RhILA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div class="video-box">
                            <div class="video-title">{{ $t('winners.win3') }}</div>
                            <div class="video-date"><span>15:00</span> 07.09.2023</div>
                        </div>
                    </div>
                    <div class="video-item">
                        <iframe width="100%" height="180" src="https://www.youtube.com/embed/8q72vqSa3ZM?si=WTqxUMamyoFkSevD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <div class="video-box">
                            <div class="video-title">{{ $t('winners.win4') }}</div>
                            <div class="video-date"><span>15:00</span> 24.08.2023</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import mixpanel from 'mixpanel-browser'
    export default {
        name: 'StartView',
        components: {
            Header
        },
        computed: {
            width(){
                const screenWidth = window.screen.width
                return screenWidth - 40
            }
        },
      beforeRouteEnter(to, from){
        if(from.name=== 'home'){
          mixpanel.track('Video_Member_Launch_Page')
        } else {
          mixpanel.track('Video_Guest_Launch_Page')
        }
      }
    }
</script>

<style lang="scss">
    .video{
        &-box{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
        }
        &-date{
            font-size: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--text3);
            margin-top: 5px;
            line-height: 16px;
        }
        &-title{
            font-size: 16px;
            color: var(--text);
            font-weight: 500;
            line-height: 135%;
        }
        &-item:not(:last-child){
            margin-bottom: 30px;
        }
        &-item{
            video{
                border-radius: 30px;
            }
        }
        &-body{
            height: calc(100dvh - 74px);
            max-height: calc(100dvh - 74px);
            overflow-y: scroll;
            padding-bottom: 15px;
        }
    }
</style>