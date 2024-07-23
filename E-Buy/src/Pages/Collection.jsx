import Navbar from "./Components/Nav"


export default function Collection(params) {
    return (
        <>

            <Navbar />
            <section class="py-24 mt-4">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div style={{ display: "flex", marginBottom: "13px", justifyContent: "space-between" }}>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-gray-900" >Clothing</h2>
                        </div>
                        <div>
                            <a class="flex items-center mt-4 text-black text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Explore</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731972.png" alt="Jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Trendy Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Women's Winter Wear</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731993.png" alt="Blazer image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Black Blazer</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Men’s Suits</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732011.png" alt="printed top image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Red Flowers</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Womenswear</p>
                            </div>
                        </a>

                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732027.png" alt="Denim jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Children Wear</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
                    <div style={{ display: "flex", marginBottom: "13px", justifyContent: "space-between" }}>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-gray-900" >Electronics</h2>
                        </div>
                        <div>
                            <a href="/collection" class="flex items-center mt-4 text-black text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Explore</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731972.png" alt="Jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Trendy Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Women's Winter Wear</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731993.png" alt="Blazer image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Black Blazer</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Men’s Suits</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732011.png" alt="printed top image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Red Flowers</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Womenswear</p>
                            </div>
                        </a>

                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732027.png" alt="Denim jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Children Wear</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">

                    <div style={{ display: "flex", marginBottom: "13px", justifyContent: "space-between" }}>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-gray-900" >Back packs</h2>
                        </div>
                        <div>
                            <a href="/collection" class="flex items-center mt-4 text-black text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Explore</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731972.png" alt="Jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Trendy Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Women's Winter Wear</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731993.png" alt="Blazer image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Black Blazer</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Men’s Suits</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732011.png" alt="printed top image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Red Flowers</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Womenswear</p>
                            </div>
                        </a>

                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732027.png" alt="Denim jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Children Wear</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">

                    <div style={{ display: "flex", marginBottom: "13px", justifyContent: "space-between" }}>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-gray-900" >Gaming</h2>
                        </div>
                        <div>
                            <a href="/collection" class="flex items-center mt-4 text-black text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Explore</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731972.png" alt="Jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Trendy Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Women's Winter Wear</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731993.png" alt="Blazer image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Black Blazer</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Men’s Suits</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732011.png" alt="printed top image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Red Flowers</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Womenswear</p>
                            </div>
                        </a>

                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732027.png" alt="Denim jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Children Wear</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">

                    <div style={{ display: "flex", marginBottom: "13px", justifyContent: "space-between" }}>
                        <div>
                            <h2 class="text-2xl font-bold tracking-tight text-gray-900" >Accessories</h2>
                        </div>
                        <div>
                            <a href="/collection" class="flex items-center mt-4 text-black text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Explore</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731972.png" alt="Jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Trendy Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Women's Winter Wear</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700731993.png" alt="Blazer image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Black Blazer</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Men’s Suits</p>
                            </div>
                        </a>
                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732011.png" alt="printed top image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Red Flowers</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Womenswear</p>
                            </div>
                        </a>

                        <a href="javascript:;"
                            class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                            <img class="rounded-2xl" src="https://pagedone.io/asset/uploads/1700732027.png" alt="Denim jacket image" />
                            <div
                                class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                                <div class="flex items-center justify-between mb-2">
                                    <h6 class="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                                    <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">$100</h6>
                                </div>
                                <p class="text-xs leading-5 text-gray-500">Children Wear</p>
                            </div>
                        </a>
                    </div>
                </div>

            </section>

        </>
    )
}