<template>
    <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
        url="http://foo.bar/particles.json" />
    <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
        :options="background" />
    <div class="navbar fixed">
        <!-- Change theme -->
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
        <!-- change music -->
        <a class="btn btn-ghost ml-2 btn-circle"><icon-music size="26" /></a>
        <!-- change language -->
        <details class="dropdown">
            <summary class="m-1 btn btn-ghost ml-2 btn-circle"><icon-translate size="26" /></summary>
            <ul class="p-2 shadow menu dropdown-content z-20 bg-base-100 rounded-box w-48">
                <li @click="useLanguageStore.changeLanguage('zh')"><a class="text-xl">🀄中文</a></li>
                <li @click="useLanguageStore.changeLanguage('fr')"><a class="text-xl">🍷France</a></li>
                <li @click="useLanguageStore.changeLanguage('en')"><a class="text-xl">🗽English</a></li>
                <li @click="useLanguageStore.changeLanguage('jp')"><a class="text-xl">🎎日本語</a></li>
            </ul>
        </details>

        <!-- Change screen -->
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
    <div class="content">
        <div class="form">
            <!-- Title -->
            <div class="title">
                <span class="z-10 mx-auto">{{ useLanguageStore.pages[currentPath][nowLanguage].title }}</span>
                <!-- <LottieAnimation :animation-data="snowman" :loop="true" class="text-1xl" /> -->
            </div>
            <!-- avatar -->
            <div class="avatar mx-auto">
                <div class="mask mask-squircle w-24">
                    <img :src="avatar" />
                </div>
            </div>
            <!-- input -->
            <input type="text" v-model="name" @input="inputAvatar" placeholder="Input your name"
                class="input input-bordered input-primary z-10" />
            <!-- button -->
            <div class="action">
                <button class="btn z-10" @click="randomAvatar">⭕</button>
                <label class="swap swap-flip text-4xl">
                    <input type="checkbox" />
                    <div class="swap-on">👦</div>
                    <div class="swap-off">👧</div>
                </label>
                <button class="btn btn-outline z-10">➡️</button>
            </div>

        </div>
    </div>
</template>
  
<script setup>
import { onMounted } from 'vue';
import { background } from '../../components/Particlesjs/particles';
import { loadSlim } from 'tsparticles-slim';
import { ref } from "vue"
import { storeToRefs } from 'pinia'
import { LottieAnimation } from 'lottie-web-vue';
import snowman from '../../assets/lottie/snowman.json';
import { language } from "../../store/language"
import router from "../../router/index";


// 多语言
const useLanguageStore = language();
const { nowLanguage } = storeToRefs(useLanguageStore) // 当前语言(响应式解构)
const currentPath = router.currentRoute.value.path.substring(1); // 当前路由


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


// Use random change avatar
const name = ref("");
const avatar = ref("https://joesch.moe/api/v1/Ebmaj9")

const randomAvatar = () => {
    const firstName = [
        "机智", "聪慧", "勇敢", "谦逊", "宽容", "幽默", "豁达", "快乐", "开朗", "善良",
        "坚定", "勤奋", "正直", "真诚", "温柔", "大方", "深沉", "稳重", "乐观", "理智",
        "敏锐", "独立", "机警", "敬业", "随和", "活力", "淡定", "细心", "宜人", "睿智",
        "灵动", "幼稚", "慷慨", "自由", "坚韧", "淡然", "自信", "柔和", "勇猛", "率真",
        "坦率", "乖巧", "温馨", "淡雅", "爽朗", "耿直", "平和", "爱笑", "刚毅", "大气",
        "积极", "沉着", "贤惠", "坚强", "激情", "柔软", "负责", "含蓄", "热情", "宏伟",
        "直率", "智慧", "朴实", "简约", "精明", "宽厚", "从容", "坚毅", "谨慎", "干练",
        "温文", "明亮", "慈祥", "平稳", "优雅", "顺畅", "轻松", "稳健", "高大", "典雅",
        "英俊", "可爱", "随性", "简单", "清爽", "静谧", "潇洒", "酷炫", "深情", "热辣",
        "清新", "率直", "冷静", "害羞", "纯真", "清秀", "活泼", "深邃", "舒畅", "豪放",
        "迷人", "奔放", "大方", "端庄", "淡泊", "恬淡", "细腻", "时尚", "和谐", "俊朗",
        "温和", "阳光", "秀丽", "大度", "真挚", "多情", "俭朴", "严谨", "敦厚", "舒适",
        "细致", "悠然", "真实", "高远", "谦和", "朴素", "丰富", "明智", "干净", "独特",
        "悠闲", "敏感", "清雅", "宁静", "安详",
        "Smart", "Intelligent", "Brave", "Humble", "Tolerant", "Humorous", "Broad-minded", "Happy", "Outgoing", "Kind",
        "Firm", "Diligent", "Honest", "Sincere", "Gentle", "Generous", "Profound", "Steady", "Optimistic", "Rational",
        "Sensitive", "Independent", "Alert", "Dedicated", "Amiable", "Vibrant", "Calm", "Attentive", "Wisdom", "Agile",
        "Childish", "Free", "Resilient", "Confident", "Frank", "Obedient", "Warm", "Elegant", "Cheerful", "Direct",
        "Smile", "Steadfast", "Dignified", "Positive", "Virtuous", "Strong", "Passionate", "Soft", "Responsible", "Reserved",
        "Grand", "Wise", "Simple", "Resolute", "Skilled", "Bright", "Smooth", "Casual", "Stylish", "Harmonious",
        "Expansive", "Quiet", "Energetic", "Beautiful", "Comfortable", "Handsome", "Lovely", "Fresh", "Graceful", "Sunny",
        "Multifaceted", "Pleasant", "Delicate"
    ];

    const lastName = [
        "书籍", "文具", "手机", "电脑", "眼镜", "手表", "鞋子", "衣服", "首饰", "香水",
        "香烟", "茶杯", "笔记", "音响", "相机", "汽车", "自行车", "门锁", "钱包", "火机",
        "口红", "化妆", "游戏", "电视", "电灯", "钥匙", "眼影", "口罩", "音乐", "耳机",
        "花瓶", "花瓣", "花束", "花盆", "地毯", "床单", "床铺", "抱枕", "沙发", "台灯",
        "口碑", "保温", "加湿", "净化", "空调", "空气", "洗衣", "吹风", "吸尘", "冰箱",
        "微波", "厨具", "碗筷", "刀叉", "锅具", "烤箱", "厨房", "卫浴", "沐浴", "洗发",
        "护肤", "美容", "洗面", "护发", "乳液", "香皂", "毛巾", "牙刷", "牙膏", "扫地",
        "拖把", "桶水", "垃圾", "袋子", "箱子", "针线", "剪刀", "胶水", "胶带", "订书",
        "夹子", "纸巾", "牙签", "剃须", "剃毛", "披肩", "围巾", "耳套", "手套", "发夹",
        "发带", "发簪", "丝巾", "血压", "体温", "体重", "药盒", "药片", "药水", "药膏",
        "药瓶", "驱蚊", "消毒", "红茶", "绿茶", "咖啡", "牛奶", "果汁", "水杯", "杯垫",
        "纸杯", "玻璃", "陶瓷", "钢化", "瓷器", "金属", "塑料", "木制", "布艺", "竹制",
        "橡胶", "羽毛", "棉花", "纺织", "织品", "针织", "梳妆", "镜子", "美甲", "美发",
        "烫发", "染发", "修眉", "口腔", "牙科", "牙齿", "牙龈", "牙线", "漱口", "嘴巴",
        "口香", "糖果", "巧克力", "糕点", "果冻", "饼干", "蛋糕", "橄榄", "榴莲", "柚子",
        "柠檬", "苹果", "香蕉", "葡萄", "樱桃", "橙子", "蜜瓜", "西瓜", "Books", "Stationery",
        "Mobile Phone", "Computer", "Glasses", "Watch", "Shoes", "Clothing", "Jewelry",
        "Perfume", "Cigarette", "Teacup", "Notebook", "Speaker", "Camera", "Car", "Bicycle",
        "Door Lock", "Wallet", "Lighter", "Lipstick", "Makeup", "Game", "Television", "Lamp",
        "Key", "Eye Shadow", "Mask", "Music", "Headphones", "Vase", "Petal", "Bouquet", "Flowerpot",
        "Carpet", "Bed Sheet", "Bedding", "Cushion", "Sofa", "Table Lamp", "Reputation", "Thermos",
        "Humidifier", "Purifier", "Air Conditioner", "Air", "Laundry", "Hair Dryer", "Vacuum Cleaner",
        "Refrigerator", "Microwave", "Kitchenware", "Bowls and Chopsticks", "Knife and Fork", "Cookware",
        "Oven", "Kitchen", "Bathroom", "Bathing", "Shampoo", "Skincare", "Beauty", "Face Wash", "Hair Care",
        "Lotion", "Soap", "Towel", "Toothbrush", "Toothpaste", "Sweep", "Mop", "Bucket of Water", "Garbage",
        "Bag", "Box", "Needle and Thread", "Scissors", "Glue", "Tape", "Bookbinding", "Clip", "Tissue",
        "Toothpick", "Shaving", "Shave", "Shawl", "Scarf", "Ear Cover", "Gloves", "Hairpin", "Headband",
        "Silk Scarf", "Blood Pressure", "Body Temperature", "Body Weight", "Medicine Box", "Medicine", "Medicine Water",
        "Medicine Ointment", "Medicine Bottle", "Mosquito Repellent", "Disinfection", "Black Tea", "Green Tea", "Coffee",
        "Milk", "Juice", "Cup", "Coaster", "Paper Cup", "Glass", "Ceramic", "Tempered", "Porcelain",
        "Metal", "Plastic", "Wooden", "Fabric", "Bamboo", "Rubber", "Feather", "Cotton", "Textile",
        "Knit", "Dressing", "Mirror", "Manicure", "Hairdressing", "Perm", "Dyeing", "Eyebrow Shaping",
        "Oral", "Dentistry", "Teeth", "Gums", "Dental Floss", "Rinse", "Mouth", "Breath Freshener",
        "Candy", "Chocolate", "Pastry", "Pudding", "Biscuit", "Cake", "Olive", "Durian", "Pomelo",
        "Lemon", "Apple", "Banana", "Grape", "Cherry", "Orange", "Melon"
    ];

    function getRandomEmoji() {
        // Emoji 的 Unicode 码点范围
        const emojiRangeStart = 0x1F601;
        const emojiRangeEnd = 0x1F64F;

        // 生成随机索引
        const randomIndex = Math.floor(Math.random() * (emojiRangeEnd - emojiRangeStart + 1)) + emojiRangeStart;

        // 将 Unicode 转换为字符
        const emojiChar = String.fromCodePoint(randomIndex);

        return emojiChar;
    }

    const Emoji = getRandomEmoji();

    name.value = firstName[Math.round(Math.random() * (firstName.length - 1))] + "的" + lastName[Math.round(Math.random() * (lastName.length - 1))] + Emoji;
    avatar.value = "https://joesch.moe/api/v1/" + name.value
}


// Use input change avatar
const inputAvatar = () => {
    avatar.value = "https://joesch.moe/api/v1/" + name.value

    if (name.value == "") {
        avatar.value = "https://joesch.moe/api/v1/Ebmaj9"
    }
}

// onMounted(() => {

// });
</script>
  
<style scoped>
.content {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    font-family: "SNOW";
    font-weight: 700;
    font-size: xxx-large;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
}

.form {
    width: 27%;
    height: 70%;
    /* background: #5e4b4b; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: xx-large;
}

.action {
    display: flex;
    justify-content: space-between;
}
</style>
  