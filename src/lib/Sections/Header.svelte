<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import { windowHeight, windowWidth } from "../../stores/global.js";
  import { prefersReducedMotion } from "../../stores/motion.js";
  import { fly } from "svelte/transition";

  let subtitleIndex = 0;
  let subtitleOptions = [
    "on the web.",
    "with data.",
    "like these <span style='vertical-align: top; font-size: .8em;'>&darr;</span>",
  ];
  $: subtitleString = subtitleOptions[subtitleIndex];

  let scrollToProjects = () => window.scrollTo(0, $windowHeight);
  let unclicked = true;
  const switchSub = () => {
    unclicked = false;
    subtitleIndex == subtitleOptions.length - 1
      ? scrollToProjects()
      : subtitleIndex++;
  };

  /**
	 * @type {any}
	 */
  let lucas;
  /**
	 * @type {any}
	 */
  let gover
  /**
	 * @type {any}
	 */
  let subtitle
  /**
	 * @type {any}
	 */
  let overline;
  let transitioned = false;

  import { sleep } from "../../scripts/utils.js";
  import { transition } from "../../scripts/transitions/rotate.js";

  onMount(async () => {
    if ($prefersReducedMotion) return;

    await sleep(250);
    await transition(lucas, gover, subtitle, overline);

    await sleep(2000);
    transitioned = true;
  });

</script>

<section
  id="header"
  style="min-height: {$windowHeight
    ? `${$windowHeight * 1.01}px`
    : '101vh'}; perspective: 100vw;">
  <div
    class="header-container"
  >
    <h1 class="overline begin-invisible" class:transitioned>Hi, I'm</h1>
    <div class="title">
      <h1 class="lucas begin-invisible gradient-accented" class:transitioned>
        lucas
      </h1>
      <h1
        class="gover begin-invisible gradient-accented"
        class:transitioned>
        gover
      </h1>
    </div>
  </div>
  <h1 class="year">Portfolio 2023</h1>
</section>

<style>
  section {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center; /* center */
    place-items: center; /* center */
    overflow: hidden;
    position: relative;
    transition: height 100ms ease; /* Height is initially 101vh UNTIL windowHeight is set */
  }

  .year {
    position: absolute;
    bottom: calc(20px + 1.5rem / 2);
    left: 20px;
    margin-left: 2rem;
    color: rgba(var(--text-color-rgb), 0.35);
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: -0.05rem;
    user-select: none;
  }

  .header-container {
    line-height: 0.85;
    user-select: none;
  }

  .overline {
    font-weight: 200;
    text-align: left;
    margin-bottom: 0.75rem;
    font-style: italic;
    font-size: 2.75rem;
  }

  .title {
    margin-bottom: 1.5rem;
    /* overflow: hidden; */
  }

  .lucas,
  .gover {
    display: block;
    font-weight: 600;
    letter-spacing: -0.05rem;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px var(--box-shadow-color);
    overflow: hidden;
  }

  :global(.lucas *) {
    transform-origin: center bottom;
    /* transform-origin: center top; */
    transform-style: preserve-3d;
    transition: opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  :global(.gover *) {
    transform-origin: center bottom;
    /* transform-origin: center top; */
    transform-style: preserve-3d;
    transition: opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .lucas {
    font-size: 15vw;
  }

  .gover {
    font-size: 15vw;
  }

  .switch {
    cursor: pointer;
    border-bottom: 1px solid rgba(var(--text-color-rgb), 0.2);
    transition: border-bottom-color 200ms ease;
    display: inline-block;
    padding-bottom: 0.5rem;
    font-style: italic;
    font-weight: 200;
  }
  .switch:hover {
    border-bottom-color: rgba(var(--accent-color-rgb), 0.6);
  }

  @media screen and (max-width: 768px) {
    .overline {
      font-size: 2rem;
      margin-bottom: 0.75rem;
    }

    .year {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 468px) {
    section {
      place-items: center;
    }

    .overline {
      font-size: 8vw;
    }
  }
</style>