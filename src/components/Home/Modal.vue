<template>
    <div class="modal" id="exampleModal" v-if="code">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, minima nobis perferendis eaque dolorum explicabo, earum eius deserunt dicta ratione aperiam porro voluptate. Maiores distinctio officia, rem adipisci soluta perspiciatis?</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalHome',
    props: {
        code: Boolean
    }
}
</script>