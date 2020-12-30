<template>
    <header class="bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
        <div class=" flex items-center px-4 py-3 justify-between sm:p-0">
            <div class="flex items-center">
                <a href="#">
                    <img src="/img/logo.jpg" alt="logo" class="h-12 rounded-full">
                </a>
                <div class="mx-4 font-mono text-lg text-gray-400 text-center hover:underline hover:text-white">
                    <a href="#">Youssef AMZIL</a>
                </div>
            </div>
            <div class="sm:hidden">
                <button  class="h-5 w-5 focus:text-white">
                    <svg  xmlns="http://www.w3.org/2000/svg" class="focus:text-white text-gray-400 hover:text-white"  viewBox="0 0 172 172">
                    <g v-show="!isOpen" fill="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M0 26.462v13.23h172v-13.23zm0 52.923v13.23h172v-13.23zm0 52.923v13.23h172v-13.23z" class="fill-current"/></g>
                    <g  v-show="isOpen" fill="none" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><path d="M0 172V0h172v172z"/><path d="M86 6.88C42.342 6.88 6.88 42.342 6.88 86S42.342 165.12 86 165.12s79.12-35.462 79.12-79.12S129.658 6.88 86 6.88zm0 6.88c39.936 0 72.24 32.304 72.24 72.24 0 39.936-32.304 72.24-72.24 72.24-39.936 0-72.24-32.304-72.24-72.24 0-39.936 32.304-72.24 72.24-72.24zM59.555 51.493l22.79 33.755-23.005 34.184h10.32l17.63-26.23h.752l17.415 26.23h10.965L93.525 85.57l23.435-34.077h-10.535l-17.63 26.552h-.86l-17.2-26.552z" fill="#a0aec0"/></g>                    </svg>
                </button>
            </div>
        </div>
        <!-- <div :class="isOpen?'block h-screen ':'hidden'" class="px-3 py-3 pb-4 sm:flex ">
            <a href="#" class="block py-1 sm:mt-0 sm:ml-3 px-2 text-white font-semibold hover:bg-gray-800 rounded">Home</a>
            <a href="#" class="block mt-1 sm:mt-0 sm:ml-3  py-1 px-2 text-white font-semibold hover:bg-gray-800 rounded">About</a>
            <a href="#" class="block mt-1 sm:mt-0 sm:ml-3  py-1 px-2 text-white font-semibold hover:bg-gray-800 rounded">Contact</a>
        </div> -->
    </header>
</template>

<script>
export default {
    data(){
        return {
            isOpen:false,
        }
    }
}
</script>

<style>

</style>