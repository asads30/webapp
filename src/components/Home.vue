<template>
    <div class="home">
        <Header :left="false" :right="false" :center="true" :centerText="'Мой Click'"/>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    name: 'HomeCoponent',
    components: {
        Header
    },
    props: {
        user: Object
    }
}
</script>