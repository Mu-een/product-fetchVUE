<template>
    <div class="container">
        <div class="row">
            <h1 class="display-1">Products</h1>
        </div>
        <ProductComponent />
    </div>
</template>

<script>
import ProductComponent from '@/components/ProductComponent.vue'
    export default {
        name: 'ProductView',
        components:{
            ProductComponent
        }
    }
</script>

<style scoped>

</style>