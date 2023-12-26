<template>
    <!-- Background music -->
    <audio :src="useMusicStore.playList[nowMusic].sound" ref="audioPlayer" @ended="autoNext" class="hidden"></audio>


    <!-- Snow background -->
    <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
        :options="background" />


    <!-- Top-bar -->
    <div class="navbar">
        <!-- Change theme -->
        <div class="tooltip tooltip-bottom" :data-tip="useLanguageStore.pages[home]?.[nowLanguage]?.tipTheme">
            <label class="swap swap-rotate">
                <input type="checkbox" class="theme-controller" value="dracula" />
                <!-- sun icon -->
                <a class="btn btn-ghost btn-circle swap-off">
                    <icon-sun size="26" />
                </a>
                <!-- moon icon -->
                <a class="btn btn-ghost btn-circle swap-on">
                    <icon-moon size="26" />
                </a>
            </label>
        </div>
        <!-- change music -->
        <div class="tooltip tooltip-bottom" :data-tip="useLanguageStore.pages[home]?.[nowLanguage]?.tipMusic">
            <a class="btn btn-ghost ml-2 btn-circle" onclick="music.showModal()"><icon-music size="26" /></a>
        </div>
        <!-- Music dialog     -->
        <dialog id="music" class="modal">
            <div class="modal-box p-0">
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img :src="useMusicStore.playList[nowMusic].img" alt="Album" />
                    </figure>
                    <div class="card-body pt-7 pb-7">
                        <h2 class="card-title">{{ useMusicStore.playList[nowMusic].title }}</h2>
                        <p>{{ useMusicStore.playList[nowMusic].introduce }}</p>
                        <div class="card-actions justify-evenly flex-nowrap whitespace-nowrap">
                            <button @click="previous" class="btn btn-ghost btn-circle"><icon-go-start size="30" /></button>
                            <button @click="play" class="btn btn-ghost btn-circle"><icon-play-one v-if="playState"
                                    size="30" />
                                <icon-pause v-else size="30" />
                            </button>
                            <button @click="next" class="btn btn-ghost btn-circle"><icon-go-end size="30" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
        <!-- change language -->
        <div class="tooltip tooltip-bottom" :data-tip="useLanguageStore.pages[home]?.[nowLanguage]?.tipLanguage">
            <details class="dropdown">
                <summary class="m-1 btn btn-ghost ml-2 btn-circle"><icon-translate size="26" /></summary>
                <ul class="p-2 shadow menu dropdown-content z-20 bg-base-100 rounded-box w-48">
                    <li @click="useLanguageStore.changeLanguage('zh')"><a class="text-xl">🀄中文</a></li>
                    <li @click="useLanguageStore.changeLanguage('fr')"><a class="text-xl">🍷France</a></li>
                    <li @click="useLanguageStore.changeLanguage('en')"><a class="text-xl">🗽English</a></li>
                    <li @click="useLanguageStore.changeLanguage('jp')"><a class="text-xl">🎎日本語</a></li>
                </ul>
            </details>
        </div>
        <!-- Change screen -->
        <div class="tooltip tooltip-bottom" :data-tip="useLanguageStore.pages[home]?.[nowLanguage]?.tipScreen">
            <label class="swap swap-rotate">
                <input type="checkbox" />
                <!-- full screen icon -->
                <a class="btn btn-ghost btn-circle swap-off" @click="changeScreen">
                    <icon-full-screen size="26" />
                </a>
                <!-- off screen icon -->
                <a class="btn btn-ghost btn-circle swap-on" @click="changeScreen">
                    <icon-off-screen size="26" />
                </a>
            </label>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { background } from '../../components/Particlesjs/particles';
import { loadSlim } from 'tsparticles-slim';
import { ref } from "vue"
import { storeToRefs } from 'pinia'
import { language } from "../../store/language"
import { music } from "../../store/music"
import router from "../../router/index";


// 多语言
const useLanguageStore = language();
const { nowLanguage } = storeToRefs(useLanguageStore) // 当前语言(响应式解构)
const home = router.currentRoute.value.path.substring(7);

onMounted(() => {
    console.log(nowLanguage.value)
    console.log(home)
})

// Music
const playState = ref(true); // 初始状态为未播放
const useMusicStore = music();
const { nowMusic } = storeToRefs(useMusicStore);
const audioPlayer = ref(null);
// Previous music
const previous = async () => {
    if (playState) {
        await useMusicStore.next()
        audioPlayer.value.play()
    }
    else {
        audioPlayer.value.play()
    }
}
// Start/pause music
const play = () => {
    playState.value = !playState.value

    if (!playState.value) {
        audioPlayer.value.play()
    } else {
        audioPlayer.value.pause()
    }
}
// Next music
const next = async () => {
    if (playState) {
        await useMusicStore.next()
        audioPlayer.value.play()
    }
    else {
        audioPlayer.value.play()
    }
}
// Play end --> next music
const autoNext = async () => {
    await useMusicStore.previous()
    audioPlayer.value.play()
}


// Snow background
const particlesInit = async (engine) => {
    await loadSlim(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};


// Change screen
const changeScreenValue = ref(false);
const changeScreen = () => {
    console.dir(nowMusic.value)
    changeScreenValue.value = !changeScreenValue.value;

    if (changeScreenValue.value) {
        // Into fullscreen
        const element = document.documentElement;

        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
};
</script>
  
  