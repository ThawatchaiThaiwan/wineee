<template>
  <v-card flat>
    <h1>แบบสำรวจความชื่นชอบในการดื่มไวน์</h1>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <h1>ประเภทไวน์ที่ชื่นชอบ</h1>
            <v-radio-group v-model="wine" column>
              <v-radio
                label="สปาร์กลิงไวน์"
                color="red"
                value="สปาร์กลิงไวน์"
              ></v-radio>
              <v-radio
                label="ไวน์แดง"
                color="red darken-3"
                value="ไวน์แดง"
              ></v-radio>
              <v-radio
                label="ไวน์ขาว"
                color="indigo darken-3"
                value="ไวน์ขาว"
              ></v-radio>
              <v-radio
                label="ไวน์สีกุหลาบ"
                color="orange"
                value="ไวน์สีกุหลาบ"
              ></v-radio>
              <v-radio
                label="ไวน์องุ่น"
                color="orange darken-3"
                value="ไวน์องุ่น"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <h1>เป็นของประเทศ</h1>
            <v-radio-group v-model="country" column>
              <v-radio label="ไทย" color="primary" value="ไทย"></v-radio>
              <v-radio
                label="ฝรั่งเศษ"
                color="secondary"
                value="ฝรั่งเศษ"
              ></v-radio>
              <v-radio
                label="ญี่ปุ่น"
                color="success"
                value="ญี่ปุ่น"
              ></v-radio>
              <v-radio label="เยอรมัน" color="info" value="เยอรมัน"></v-radio>
              <v-radio
                label="รัซเซีย"
                color="warning"
                value="รัซเซีย"
              ></v-radio>
              <v-radio label="อเมริกา" color="error" value="อเมริกา"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <h1>ปริมาณการดื่มไวน์</h1>
            <v-radio-group v-model="drink" column>
              <v-radio
                label="10 ขวดต่อเดือน"
                color="primary"
                value="10 ขวดต่อเดือน"
              ></v-radio>
              <v-radio
                label="20 ขวดต่อเดือน"
                color="secondary"
                value="20 ขวดต่อเดือน"
              ></v-radio>
              <v-radio
                label="5 ขวดต่อเดือน"
                color="success"
                value="5 ขวดต่อเดือน"
              ></v-radio>
              <v-radio
                label="1 ขวดต่อวัน"
                color="info"
                value="1 ขวดต่อวัน"
              ></v-radio>
              <v-radio
                label="ไม่ได้นับ"
                color="warning"
                value="ไม่ได้นับ"
              ></v-radio>
              <v-radio
                label="10 ขวดต่อเดือน"
                color="error"
                value="อเมริกา"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <h1>ซื้อไวน์จากที่ใด</h1>
            <v-radio-group v-model="buy" column>
              <v-radio label="ขโมย" color="primary" value="ขโมย"></v-radio>
              <v-radio
                label="ยืมเพื่อนมาทาน"
                color="secondary"
                value="ยืมเพื่อนมาทาน"
              ></v-radio>
              <v-radio
                label="ซื้อออนไลน์"
                color="success"
                value="ซื้อออนไลน์"
              ></v-radio>
              <v-radio
                label="ซื้อจากห้างสรรพสินค้า"
                color="info"
                value="ซื้อจากห้างสรรพสินค้า"
              ></v-radio>
              <v-radio
                label="ได้รับเป็นของขวัญ"
                color="warning"
                value="ได้รับเป็นของขวัญ"
              ></v-radio>
              <v-radio
                label="สั่งจากต่างประเทศ"
                color="error"
                value="สั่งจากต่างประเทศ"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <h2>ชื่อ-นามสกุล ผู้กรอกแบบสอบถาม</h2>
    <v-col cols="12" md="4">
      <v-text-field v-model="name" label="ชื่อ-นามสกุล" required></v-text-field>
    </v-col>
    <v-col cols="12" md="4">
      <v-text-field
        v-model="Phone"
        label="เบอร์โทรติดต่อ"
        required
      ></v-text-field>
    </v-col>
    <v-btn block color="Error" class="mr-4" @click="validate">
      ส่งแบบสอบถาม
    </v-btn>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      wine: '',
      country: '',
      drink: '',
      buy: '',
      name: '',
      Phone: '',
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    validate() {
      const wine = this.wine
      const country = this.country
      const drink = this.drink
      const buy = this.buy
      const name = this.name
      const Phone = this.Phone
      this.$store.commit('input', { wine, country, drink, buy, name, Phone })
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url('https://image.dek-d.com/23/946351/104569756');
  background-size: cover;
}
</style>
