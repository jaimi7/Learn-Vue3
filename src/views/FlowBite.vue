<script setup lang="ts">
</script>

<template>
  <div>
    <!-- navigation  -->

    <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Flowbite</span>
        </a>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >Home</a>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Marketplace</a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Resources</a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown"
        class="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
      >
        <div
          class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6"
        >
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Online Stores</div>
                <span
                  class="text-sm text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Segmentation</div>
                <span
                  class="text-sm text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Marketing CRM</div>
                <span
                  class="text-sm text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Online Stores</div>
                <span
                  class="text-sm text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Segmentation</div>
                <span
                  class="text-sm text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
            <li>
              <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="font-semibold">Marketing CRM</div>
                <span
                  class="text-sm text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- redirection  -->

    <section
      class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
    >
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >We invest in the world’s potential</h1>
        <p
          class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
        >Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >Learn more</a>
        </div>
      </div>
    </section>

    <!-- heading  -->
    <div class="max-w-9/12 mb-12 mt-5 mx-auto text-center">
      <h1
        class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >Better Data</span> Scalable AI.
      </h1>
      <p
        class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
      >Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    </div>

    <!-- image  -->
    <div class="flex justify-center my-3">
      <figure
        class="relative max-w-sm transition-all duration-200 cursor-pointer filter grayscale hover:grayscale-0 mx-3"
      >
        <a href="#">
          <img
            class="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description"
          />
        </a>
        <figcaption class="absolute px-4 text-lg text-white bottom-6">
          <p>Do you want to get notified when a new component is added to Flowbite?</p>
        </figcaption>
      </figure>
      <img
        class="h-auto max-w-sm transition-all duration-200 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 mx-3"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
        alt="image description"
      />
      <img
        class="h-auto max-w-sm transition-all duration-200 rounded-lg blur-sm hover:blur-none mx-3"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
        alt="image description"
      />
    </div>

    <div class="flex justify-around my-3">
      <!-- list  -->
      <ul class="max-w-lg divide-y divide-gray-200 dark:divide-gray-700">
        <li class="pb-3 sm:pb-4">
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >$320</div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Bonnie Green</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >$3467</div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Michael Gough</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >$67</div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Thomas Lean</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >$2367</div>
          </div>
        </li>
        <li class="pt-3 pb-0 sm:pt-4">
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Lana Byrd</p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >$367</div>
          </div>
        </li>
      </ul>

      <!-- card  -->
      <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >Noteworthy technology acquisitions 2021</h5>
          </a>
          <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a
            href="#"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- box  -->
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div
          class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8"
        >
          <a
            href="#"
            class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
          >
            <svg
              class="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path
                d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"
              />
            </svg>
            Tutorial
          </a>
          <h1
            class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2"
          >How to quickly deploy a static website</h1>
          <p
            class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"
          >Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
          <a
            href="#"
            class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Read more
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
          >
            <a
              href="#"
              class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
            >
              <svg
                class="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path
                  d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"
                />
              </svg>
              Design
            </a>
            <h2
              class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"
            >Start with Flowbite Design System</h2>
            <p
              class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"
            >Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div
            class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
          >
            <a
              href="#"
              class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
            >
              <svg
                class="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Code
            </a>
            <h2
              class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"
            >Best react libraries around the web</h2>
            <p
              class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"
            >Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- contact us  -->

    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >We invest in the world’s potential</h1>
          <p
            class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
          >Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          <a
            href="#"
            class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
          >
            Read more about our app
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div>
          <div
            class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800"
          >
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in to Flowbite</h2>
            <form class="mt-8 space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div class="ms-3 text-sm">
                  <label
                    for="remember"
                    class="font-medium text-gray-500 dark:text-gray-400"
                  >Remember this device</label>
                </div>
                <a
                  href="#"
                  class="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >Lost Password?</a>
              </div>
              <button
                type="submit"
                class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Login to your account</button>
              <div class="text-sm font-medium text-gray-900 dark:text-white">
                Not registered yet?
                <a
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >Create account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>