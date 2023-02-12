<script setup lang="ts">
defineProps({
    foo: {
        type: String,
        default: '骚风',
    },
    bar: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <main>
        <h1>This is an home page</h1>
    </main>
</template>
<style scoped lang="scss">
main h1 {
    color: rgb(0 0 0 / 12%);
}
</style>
