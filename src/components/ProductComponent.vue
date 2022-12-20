<template>
  <table>
    <tr>
        <th>ID</th>
        <th>Make</th>
        <th>Spec</th>
        <th>Amount</th>
        <th>Image</th>
    </tr>
    <tr v-for="product in products" :key="product">
        <td>{{product.id}}</td>
        <td>{{product.make}}</td>
        <td>{{product.spec}}</td>
        <td>{{product.amount}}</td>
        <td><img :src="product.image" alt=""></td>
    </tr>
  </table>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
    export default {
        computed:{
            ...mapGetters(["products"])
        },
        methods: {
            ...mapActions(["fetchAllProducts"]),
        },
        created(){
            this.fetchAllProducts();
        }
    }
</script>

<style scoped>
th{
    padding: 10px;
    border: 1px solid #D5CEA3;
}
img{
    width: 8rem;
}
</style>