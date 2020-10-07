export const state = () => ({
  data: [],
  headers: [
    {
      text: 'ไวน์ที่ชอบ',
      align: 'start',
      sortable: false,
      value: 'wine',
    },
    { text: 'ประเทศ', value: 'country' },
    { text: 'ปริมาณการดื่ม', value: 'drink' },
    { text: 'ซื้อจาก', value: 'buy' },
    { text: 'ชื่อ-นามสกุล', value: 'name' },
    { text: 'Phone', value: 'Phone' },
  ],
})
export const mutations = {
  input(state, { wine, country, drink, buy, name, Phone }) {
    state.data.push({ wine, country, drink, buy, name, Phone })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
