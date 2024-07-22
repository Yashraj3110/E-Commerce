export default function Base() {
    return (
        <>
            <div class="bg-white container mx-auto px-6 pt-8" style={{ marginTop: "73px" }}>

                {/* Landing Banner */}
                <div class="relative overflow-hidden bg-white" >
                    <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                            <div class="sm:max-w-lg">
                                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Amazing styles are finally here</h1>
                                <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
                            </div>
                            <div>
                                <div class="mt-10">

                                    <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                        <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                            <div class="flex items-center space-x-6 lg:space-x-8">
                                                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                    </div>
                                                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                    </div>
                                                </div>
                                                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                    </div>
                                                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                    </div>
                                                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                    </div>
                                                </div>
                                                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                    </div>
                                                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="h-full w-full object-cover object-center" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", marginTop: "73px", justifyContent: "space-between" }}>
                    <div>
                        <h2 class="text-2xl font-bold tracking-tight text-gray-900" >Collections</h2>
                    </div>
                    <div>
                        <button class="flex items-center mt-4 text-black text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                            <span>More</span>
                            <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
                {/* Long Card */}
                <div class="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')" }}>
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">Sport Shoes</h2>
                            <p class="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                            <button class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <span>Shop Now</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>


                {/* small cards */}
                <div class="md:flex mt-8 md:-mx-4">
                    <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')" }}>
                        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div class="px-10 max-w-xl">
                                <h2 class="text-2xl text-white font-semibold">Back Pack</h2>
                                <p class="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Shop Now</span>
                                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')" }}>
                        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div class="px-10 max-w-xl">
                                <h2 class="text-2xl text-white font-semibold">Games</h2>
                                <p class="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                    <span>Shop Now</span>
                                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Recent explored */}
                <div >
                    <div class="bg-white">
                        <div class="mx-auto sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8" style={{ maxWidth: "100vw" }} >
                            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Recently explored</h2>

                            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8" style={{ display: "flex", overflowX: "scroll" }}>
                                <div  class="group relative">
                                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div class="mt-4 flex justify-between">
                                        <div>
                                            <h3 class="text-sm text-gray-700">
                                                <a href="/product">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    Basic Tee
                                                </a>
                                            </h3>
                                            <p class="mt-1 text-sm text-gray-500">Black</p>
                                        </div>
                                        <p class="text-sm font-medium text-gray-900">$35</p>
                                    </div>
                                </div>
                                <div class="group relative">
                                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div class="mt-4 flex justify-between">
                                        <div>
                                            <h3 class="text-sm text-gray-700">
                                                <a href="/product">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    Basic Tee
                                                </a>
                                            </h3>
                                            <p class="mt-1 text-sm text-gray-500">Black</p>
                                        </div>
                                        <p class="text-sm font-medium text-gray-900">$35</p>
                                    </div>
                                </div>
                                <div class="group relative">
                                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div class="mt-4 flex justify-between">
                                        <div>
                                            <h3 class="text-sm text-gray-700">
                                                <a href="/product">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    Basic Tee
                                                </a>
                                            </h3>
                                            <p class="mt-1 text-sm text-gray-500">Black</p>
                                        </div>
                                        <p class="text-sm font-medium text-gray-900">$35</p>
                                    </div>
                                </div>
                                <div class="group relative">
                                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div class="mt-4 flex justify-between">
                                        <div>
                                            <h3 class="text-sm text-gray-700">
                                                <a href="/product">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    Basic Tee
                                                </a>
                                            </h3>
                                            <p class="mt-1 text-sm text-gray-500">Black</p>
                                        </div>
                                        <p class="text-sm font-medium text-gray-900">$35</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}