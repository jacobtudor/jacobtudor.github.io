// src/stores/overflowStore.js
import { reactive } from 'vue'

export const overflowState = reactive({
  isOverflowHidden: false,
  toggleOverflow() {
    this.isOverflowHidden = !this.isOverflowHidden
  }
})