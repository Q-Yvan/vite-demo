<template>
  <div>
    <div>
      <input v-model="obj.name" type="text">
      <button @click="handleAddName">+</button>
    </div>
    <div>
      列表：
      <p v-for="(item, index) in obj.nameList" :key="item" @click="handleDelete(index)">{{ item }}</p>
    </div>
    <div>数量：{{ count }}<button @click="handleAdd">+</button></div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, onMounted } from 'vue'
export default defineComponent({
  setup(props, context) {
    const count = ref(0)
    const handleAdd = () => {
      count.value++
    }
    const obj = reactive({
      name: '',
      nameList: []
    })
    const handleAddName = () => {
      obj.nameList.push(obj.name)
    }
    const handleDelete = (index) => {
      obj.nameList.splice(index, 1)
    }
    onMounted(() => {
      console.log('加载了')
    })
    return { count, handleAdd, obj, handleAddName, handleDelete }
  }
})
</script>
