<template>
  <div style="padding: 0px 21% 0px 21%;">
    <el-calendar>
      <template #date-cell="{ data }">
        <div>
          <div class="solar">{{ data.day.split('-')[2] }}</div>
          <div class="lunar" :class="{ festival : isFestival(data) }">{{ solarToLunar(data) }}</div>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script lang="ts" setup>
import calendar from '../../utils/js-calendar-converter.js';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

// 是否节假日
function isFestival(slotData) {
  let solarDayArr = slotData.day.split('-');
  let lunarDay = calendar.solar2lunar(solarDayArr[0], solarDayArr[1], solarDayArr[2])

  // 公历节日\农历节日\农历节气
  let festAndTerm = [];
  festAndTerm.push(lunarDay.festival == null ? '' : ' ' + lunarDay.festival)
  festAndTerm.push(lunarDay.lunarFestival == null ? '' : '' + lunarDay.lunarFestival)
  // festAndTerm.push(lunarDay.Term == null ? '' : '' + lunarDay.Term)
  festAndTerm = festAndTerm.join('')

  return festAndTerm != ''
}
// 公历转农历
function solarToLunar(slotData) {
  let solarDayArr = slotData.day.split('-');
  let lunarDay = calendar.solar2lunar(solarDayArr[0], solarDayArr[1], solarDayArr[2])

  // 农历日期
  let lunarMD = "";
  if (lunarDay.IDayCn == "初一") {
    lunarMD = lunarDay.IMonthCn
  } else {
    lunarMD = lunarDay.IDayCn
  }

  // 公历节日\农历节日\农历节气
  let festAndTerm = [];
  festAndTerm.push(lunarDay.festival == null ? '' : ' ' + lunarDay.festival)
  festAndTerm.push(lunarDay.lunarFestival == null ? '' : ' ' + lunarDay.lunarFestival)
  festAndTerm.push(lunarDay.Term == null ? '' : ' ' + lunarDay.Term)
  festAndTerm = festAndTerm.join('')

  return festAndTerm == '' ? lunarMD : festAndTerm
}

</script>

<style lang="less" scoped>
:deep(.ep-calendar-day) {
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
}

// 本月农历节日设置颜色
.ep-calendar-table .current .lunar.festival {
  color: #adadeb;
}
:deep(.ep-calendar__body) {
  padding: 0;
}
// 
:deep(.ep-calendar-table .current:nth-last-child(-n+2)) {
  background: var(--ep-fill-color-light);
}
</style>