<script setup>
import { onMounted, ref, watch } from 'vue';

const data = ref([]);
const searchName = ref('');
const searchRegion = ref('');

onMounted(() => {
    findAll();
});

const findAll = async () => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const result = await response.json();
        data.value = result;
    } catch (e) {
        console.log(e);
    }
};

const fetchCountries = async () => {
    let url = `https://restcountries.com/v3.1/all`;

    if (searchRegion.value) {
        url = `https://restcountries.com/v3.1/region/${searchRegion.value}`;
    }

    try {
        const response = await fetch(url);
        let result = await response.json();

        if (searchName.value) {
            result = result.filter(country =>
                country.name.common.toLowerCase().includes(searchName.value.toLowerCase())
            );
        }

        data.value = result;
    } catch (e) {
        console.log(e);
    }
};

watch([searchName, searchRegion], () => {
    fetchCountries();
});
</script>

<template>
    <div class="bg-gray-100 p-8 min-h-screen w-full">
        <div class="max-w-7xl mx-auto">
            <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h1 class="text-3xl font-bold text-center mb-6">Country Search</h1>
                <div class="flex flex-wrap justify-center gap-4">
                    <input v-model="searchName" type="text" placeholder="Filter by name"
                        class="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-300" />
                    <select v-model="searchRegion"
                        class="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-300">
                        <option value="">All Regions</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>

            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <li v-for="(country, index) in data" :key="index"
                    class="bg-white p-6 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <div class="flex flex-col items-center">
                        <div class="text-4xl mb-4">{{ country.flag }}</div>
                        <h1 class="text-xl font-bold">{{ country.name.common }}</h1>
                        <h2 class="text-sm text-gray-500 mb-4">{{ country.name.official }}</h2>
                        <p class="text-gray-600 mb-1"><strong>Capital:</strong> {{ country.capital ? country.capital[0]
                            : 'N/A' }}</p>
                        <p class="text-gray-600 mb-1"><strong>Region:</strong> {{ country.region }}</p>
                        <p class="text-gray-600"><strong>UN Member:</strong> {{ country.unMember ? 'Yes' : 'No' }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
