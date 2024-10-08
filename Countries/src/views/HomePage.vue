<script setup>
import { onMounted, ref } from 'vue';

const data = ref([])

onMounted(() => {
    const findAll = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/all`)
            const result = await response.json()
            data.value = result
        }
        catch (e) {
            console.log(e);
        }
    }
    findAll()
})
</script>

<template>
    <div class="bg-white p-4 h-screen w-full">
        <ul class="grid grid-cols-4 gap-6 overflow-y-scroll">
            <li v-for="(country, index) in data" :key="index">
                <div class="border-gray-500 border-2 rounded-md p-4 flex flex-col items-center">
                    <h1 class="text-lg font-bold">{{ country.name.common }} {{ country.flag }}</h1>
                    <h2 class="text-sm">{{ country.name.official }}</h2>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
