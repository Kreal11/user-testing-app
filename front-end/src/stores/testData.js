import { defineStore } from 'pinia'

export const useTestDataStore = defineStore('testDataStore', {
  state: () => ({ testData: null, isEnabled: true }),

  actions: {
    setTestData(data) {
      this.testData = data
      localStorage.setItem('testDataStore', JSON.stringify(data))
    },
    loadTestData() {
      const storedData = localStorage.getItem('testDataStore')
      if (storedData) {
        this.testData = JSON.parse(storedData)
      }
    }
  }
})
