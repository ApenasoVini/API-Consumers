<script setup>
import { onMounted, ref } from 'vue';
onMounted(() => {
    const fetch = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/all`)

            if (!response.ok) {
                throw new Error('Usuário não encontrado');
            }
        }
        catch(e) {

        }
    }
})
</script>

<template>
    <h1>Foi</h1>
</template>

<style scoped></style>
