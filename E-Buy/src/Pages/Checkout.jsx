import Navbar from "./Components/Nav"

export default function Checkout() {
    return (
        <>
            <Navbar />


            <div class="font-[sans-serif] bg-white" style={{ marginTop: "73px" }}>
                <div class="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
                    <div class="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
                        <div class="relative h-full">
                            <div class="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                                <div class="space-y-4">

                                    <div class="flex items-start gap-4">
                                        <div class="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                                            <img src='https://readymadeui.com/images/product10.webp' class="w-full object-contain" />
                                        </div>
                                        <div class="w-full">
                                            <h3 class="text-base text-white">Split Sneakers</h3>
                                            <ul class="text-xs text-gray-300 space-y-2 mt-2">
                                                <li class="flex flex-wrap gap-4">Size <span class="ml-auto">37</span></li>
                                                <li class="flex flex-wrap gap-4">Quantity <span class="ml-auto">2</span></li>
                                                <li class="flex flex-wrap gap-4">Total Price <span class="ml-auto">$40</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="flex items-start gap-4">
                                        <div class="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                                            <img src='https://readymadeui.com/images/product11.webp' class="w-full object-contain" />
                                        </div>
                                        <div class="w-full">
                                            <h3 class="text-base text-white">Velvet Boots</h3>
                                            <ul class="text-xs text-gray-300 space-y-2 mt-2">
                                                <li>Size <span class="float-right">37</span></li>
                                                <li>Quantity <span class="float-right">2</span></li>
                                                <li>Total Price <span class="float-right">$40</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="flex items-start gap-4">
                                        <div class="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                                            <img src='https://readymadeui.com/images/product14.webp' class="w-full object-contain" />
                                        </div>
                                        <div class="w-full">
                                            <h3 class="text-base text-white">Echo Elegance</h3>
                                            <ul class="text-xs text-gray-300 space-y-2 mt-2">
                                                <li>Size <span class="float-right">37</span></li>
                                                <li>Quantity <span class="float-right">2</span></li>
                                                <li>Total Price <span class="float-right">$40</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="flex items-start gap-4">
                                        <div class="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                                            <img src='https://readymadeui.com/images/product13.webp' class="w-full object-contain" />
                                        </div>
                                        <div class="w-full">
                                            <h3 class="text-base text-white">Pumps</h3>
                                            <ul class="text-xs text-gray-300 space-y-2 mt-2">
                                                <li>Size <span class="float-right">37</span></li>
                                                <li>Quantity <span class="float-right">2</span></li>
                                                <li>Total Price <span class="float-right">$40</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full flex mb-3 items-center">
                                    <div class="flex-grow">
                                        <span class="text-gray-600">Subtotal</span>
                                    </div>
                                    <div class="pl-3">
                                        <span class="font-semibold">$190.91</span>
                                    </div>
                                </div>
                                <div class="w-full flex items-center">
                                    <div class="flex-grow">
                                        <span class="text-gray-600">Taxes (GST)</span>
                                    </div>
                                    <div class="pl-3">
                                        <span class="font-semibold">$19.09</span>
                                    </div>
                                </div>
                            </div>

                            <div class="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
                                <h4 class="flex flex-wrap gap-4 text-base text-white">Total <span class="ml-auto">$84.00</span></h4>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-4xl  w-full h-max rounded-md px-4 py-8 sticky top-0" style={{ display: "flex", justifyContent: "center" }}>

                        <div class="px-30">
                            <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                <div class="w-full flex mb-3 items-center">
                                    <div class="w-32">
                                        <span class="text-gray-600 font-semibold">Contact</span>
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <span>Scott Windon</span>
                                    </div>
                                </div>
                                <div class="w-full flex items-center">
                                    <div class="w-32">
                                        <span class="text-gray-600 font-semibold">Billing Address</span>
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <span>123 George Street, Sydney, NSW 2000 Australia</span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                <div class="w-full p-3 border-b border-gray-200">
                                    <div class="mb-5">
                                        <label for="type1" class="flex items-center cursor-pointer">
                                            <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-6 ml-3" />
                                        </label>
                                    </div>
                                    <div>
                                        <div class="mb-3">
                                            <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                                            </div>
                                        </div>
                                        <div class="mb-3 -mx-2 flex items-end">
                                            <div class="px-2 w-1/4">
                                                <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                                                <div>
                                                    <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                        <option value="01">01 - January</option>
                                                        <option value="02">02 - February</option>
                                                        <option value="03">03 - March</option>
                                                        <option value="04">04 - April</option>
                                                        <option value="05">05 - May</option>
                                                        <option value="06">06 - June</option>
                                                        <option value="07">07 - July</option>
                                                        <option value="08">08 - August</option>
                                                        <option value="09">09 - September</option>
                                                        <option value="10">10 - October</option>
                                                        <option value="11">11 - November</option>
                                                        <option value="12">12 - December</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="px-2 w-1/4">
                                                <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                    <option value="2026">2026</option>
                                                    <option value="2027">2027</option>
                                                    <option value="2028">2028</option>
                                                    <option value="2029">2029</option>
                                                </select>
                                            </div>
                                            <div class="px-2 w-1/4">
                                                <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-3">
                                    <label for="type2" class="flex items-center cursor-pointer">
                                        <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" class="ml-3" />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}