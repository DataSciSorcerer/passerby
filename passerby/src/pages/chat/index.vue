<script setup>
</script>

<template>
    <div class="content">
        <div class="main px-5 overflow-auto mb-4">
            <div class="chat chat-start">
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div class="chat-header">
                    Obi-Wan Kenobi
                    <time class="text-xs opacity-50">12:45</time>
                </div>
                <div class="chat-bubble">You were the Chosen One!</div>
                <div class="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
            <div class="chat chat-end">
                <div class="chat-image avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div class="chat-header">
                    Anakin
                    <time class="text-xs opacity-50">12:46</time>
                </div>
                <div class="chat-bubble">I hate you!</div>
                <div class="chat-footer opacity-50">
                    Seen at 12:46
                </div>
            </div>
        </div>
        <div class="send_box mb-4">
            <div class="from_container px-4">
                <input type="text" placeholder="Search…" class="input input-bordered w-full mr-2" />
                <button class="btn btn-circle">
                    <icon-send size="24" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 8px; /* 滚动条宽度 */
}

::-webkit-scrollbar-thumb {
  background-color: #bdb5b5; /* 滑块颜色 */
  border-radius: 6px; /* 滑块圆角 */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #9a9a9a;
}

* {
    z-index: 10;
}

.content {
    height: calc(100vh - 4rem);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.from_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
