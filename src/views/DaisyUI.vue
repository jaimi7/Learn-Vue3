<script setup lang="ts">
</script>

<template>
  <div>
    <!-- head  -->
    <div class="carousel w-full">
      <div id="item1" class="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          class="w-full"
        />
      </div>
      <div id="item2" class="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          class="w-full"
        />
      </div>
      <div id="item3" class="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          class="w-full"
        />
      </div>
      <div id="item4" class="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          class="w-full"
        />
      </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2 mb-3">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
      <a href="#item3" class="btn btn-xs">3</a>
      <a href="#item4" class="btn btn-xs">4</a>
    </div>

    <!-- box  -->
    <div class="hero min-h-screen bg-base-200 my-3">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p
            class="py-6"
          >Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

    <!-- button -->
    <button class="btn glass my-3">Glass button</button>

    <!-- Accordion -->
    <div class="collapse collapse-plus bg-base-200 mt-3">
      <input type="radio" name="my-accordion-3" checked="checked" />
      <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>
    <div class="collapse collapse-plus bg-base-200">
      <input type="radio" name="my-accordion-3" />
      <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>
    <div class="collapse collapse-plus bg-base-200 mb-3">
      <input type="radio" name="my-accordion-3" />
      <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>

    <!-- image  -->
    <div class="diff aspect-[16/9] my-3">
      <div class="diff-item-1">
        <img alt="daisy" src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg" />
      </div>
      <div class="diff-item-2">
        <img
          alt="daisy"
          src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.jpg"
        />
      </div>
      <div class="diff-resizer"></div>
    </div>

    <!-- card  -->
    <div class="card w-96 bg-base-100 shadow-xl my-3">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    <!-- contact us  -->
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
    </div>
    <div class="chat chat-start">
      <div
        class="chat-bubble chat-bubble-secondary"
      >Put me on the Council and not make me a Master!??</div>
    </div>
    <div class="chat chat-start">
      <div
        class="chat-bubble chat-bubble-accent"
      >That's never been done in the history of the Jedi. It's insulting!</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble chat-bubble-success">You have been given a great honor.</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble chat-bubble-error">It's never happened before.</div>
    </div>

    <!-- footer  -->
    <footer class="footer p-10 bg-neutral text-neutral-content my-3">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current"
        >
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
          />
        </svg>
        <p>
          ACME Industries Ltd.
          <br />Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 class="footer-title">Social</h6>
        <div class="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  </div>
</template>