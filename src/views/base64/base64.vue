<template>
  <el-row>
    <el-col :span="24">
      <div style="float: left; margin-left: 20px">
        <el-button class="bu" :icon="SwitchFilled" type="success" @click="encode()">编码</el-button>
        <el-button class="bu" :icon="Brush" type="info" @click="decode()">解码</el-button>
        <el-button class="bu" :icon="CopyDocument" @click="copyData()">复制</el-button>
        <el-button class="bu" :icon="Delete" @click="clear()" >清空</el-button>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20" style="margin:1rem 10px 0px 10px">
    <el-col :span="12">
      <el-input v-model="form.data" placeholder="编码/解码内容" type="textarea" :rows="8" resize='none'></el-input>
    </el-col>
    <el-col :span="12">
      <el-input v-model="form.result" placeholder="编码/解码结果" type="textarea" :rows="8" disabled resize='none'></el-input>
    </el-col>
  </el-row>
  <el-row :gutter="20" style="margin:1rem 10px 0px 10px;text-align: left">
    <el-col :span="24">
      <el-card>
        <el-text size="large" tag="b">Base64 编码说明</el-text>
        <br/>
        <el-text type="primary">Base64 </el-text>
        <el-text>是一种基于 64 个可打印字符来表示二进制数据的表示方法，由于 2^6=64，所以每 6 个比特为一个单元，对应某个可打印字符。</el-text>
        <br/>
        <el-text type="primary">Base64 </el-text>
        <el-text>常用于在通常处理文本数据的场合，表示、传输、存储一些二进制数据，包括 MIME 的电子邮件及 XML 的一些复杂数据。</el-text>
        <br/>
        <el-text type="primary">Base64 </el-text>
        <el-text>编码要求把 3 个 8 位字节（3*8=24）转化为 4 个 6 位的字节（4*6=24），之后在 6 位的前面补两个 0，形成 8 位一个字节的形式。 如果剩下的字符不足 3 个字节，则用 0 填充，输出字符使用 =，因此编码后输出的文本末尾可能会出现 1 或 2 个 =。</el-text>
        <br/>
        <el-text>为了保证所输出的编码位可读字符，</el-text>
        <el-text type="primary">Base64 </el-text>
        <el-text>制定了一个编码表，以便进行统一转换。编码表的大小为</el-text>
        <el-text type="primary"> 2^6=64 </el-text>
        <el-text>，这也是</el-text>
        <el-text type="primary"> Base64 </el-text>
        <el-text>名称的由来。</el-text>
        <br/>
        <el-text>在 </el-text>
        <el-text type="primary"> Base64 </el-text>
        <el-text>中的可打印字符包括字母</el-text>
        <el-text type="primary"> A-Z </el-text>
        <el-text>、</el-text>
        <el-text type="primary"> a-z </el-text>
        <el-text>、数字</el-text>
        <el-text type="primary"> 0-9 </el-text>
        <el-text>，这样共有 62 个字符，此外两个可打印符号在不同的系统中而不同。</el-text>
        <br/>
        <el-text>以下是</el-text>
        <el-text type="primary"> Base64 </el-text>
        <el-text>编码的基本步骤：</el-text>
        <br/>
        <el-text>
          <ul>
            <li>将数据划分为 3 个字节一组（24位）。</li>
            <li>将每个字节转换为 8 位二进制形式。</li>
            <li>将 24 位数据按照 6 位一组进行划分，得到 4 个 6 位的组。</li>
            <li>将每个 6 位的组转换为对应的 Base64 字符。</li>
            <li>如果数据不足 3 字节，进行填充。</li>
            <li>将所有转换后的 Base64 字符连接起来，形成最终的编码结果。</li>
          </ul>
        </el-text>
        <el-text>解码</el-text>
        <el-text type="primary"> Base64 </el-text>
        <el-text>编码的过程与编码相反，将每个 Base64 字符转换为对应的6位二进制值，然后将这些 6 位值组合成原始的二进制数据。</el-text>
        <br/>
        <el-text type="primary">Base64 </el-text>
        <el-text>编码具有以下特点：</el-text>
        <el-text>
          <ul>
            <li>编码后的数据长度总是比原始数据长约 1/3。</li>
            <li>编码后的数据可以包含 A-Z、a-z、0-9 和两个额外字符的任意组合。</li>
            <li>Base64 编码是一种可逆的编码方式，可以通过解码还原原始数据。</li>
          </ul>
        </el-text>
        <el-text size="large" tag="b">Base64 编码表</el-text>
        <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          border
          stripe
          class="table_style"
        >
          <el-table-column label="码值" prop="1"/>
          <el-table-column label="字符" prop="2"/>
          <el-table-column width="120"/>
          <el-table-column label="码值" prop="3"/>
          <el-table-column label="字符" prop="4"/>
          <el-table-column width="120"/>
          <el-table-column label="码值" prop="5"/>
          <el-table-column label="字符" prop="6"/>
          <el-table-column width="120"/>
          <el-table-column label="码值" prop="7"/>
          <el-table-column label="字符" prop="8"/>
        </el-table>
        <el-text>举例来说，一段引用自托马斯·霍布斯《利维坦》的文本：</el-text>
        <br/>
        <div class="text_style">
          <el-text tag="b">Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.</el-text>
        </div>
        <el-text>使用 Base64 编码之后变成：</el-text>
        <br/>
        <div class="text_style">
          <el-text tag="b">TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=</el-text>
        </div>
        <el-text>编码 “Man” 的结果为 TWFu，转换过程如下：</el-text>
        <el-table
        :data="tableData1"
        border
        class="table_style"
        >
          <el-table-column prop="1" label="文本"></el-table-column>
          <el-table-column prop="2" label="M"></el-table-column>
          <el-table-column prop="3" label="a"></el-table-column>
          <el-table-column prop="4" label="n"></el-table-column>
          <el-table-column prop="5" label="文本"></el-table-column>
          <el-table-column prop="6" label="M"></el-table-column>
          <el-table-column prop="7" label="a"></el-table-column>
          <el-table-column prop="8" label="n"></el-table-column>
          <el-table-column prop="9" label="文本"></el-table-column>
          <el-table-column prop="10" label="M"></el-table-column>
          <el-table-column prop="11" label="a"></el-table-column>
          <el-table-column prop="12" label="n"></el-table-column>
          <el-table-column prop="13" label="文本"></el-table-column>
          <el-table-column prop="14" label="M"></el-table-column>
          <el-table-column prop="15" label="a"></el-table-column>
          <el-table-column prop="16" label="n"></el-table-column>
          <el-table-column prop="17" label="文本"></el-table-column>
          <el-table-column prop="18" label="M"></el-table-column>
          <el-table-column prop="19" label="a"></el-table-column>
          <el-table-column prop="20" label="n"></el-table-column>
          <el-table-column prop="21" label="文本"></el-table-column>
          <el-table-column prop="22" label="M"></el-table-column>
          <el-table-column prop="23" label="a"></el-table-column>
          <el-table-column prop="24" label="n"></el-table-column>
          <el-table-column prop="25" label="文本"></el-table-column>
          <el-table-column prop="26" label="M"></el-table-column>
          <el-table-column prop="27" label="a"></el-table-column> 
        </el-table> 
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { SwitchFilled } from '@element-plus/icons-vue'
import { Brush } from '@element-plus/icons-vue'
import { CopyDocument } from '@element-plus/icons-vue'
import { Delete } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { Base64 } from 'js-base64'
import type { TableColumnCtx } from 'element-plus'

const form = reactive({
  data: '',
  result: ''
})

function encode() {
  form.result = Base64.encode(form.data);
}

function decode() {
  form.result = Base64.decode(form.data);
}

function copyData() {
  navigator.clipboard.writeText(form.result).then(() => {
    ElMessage.success({message: '复制成功'})
});
}

function clear() {
  form.data = '';
  form.result = '';
}

interface Table {
  1: string,2: string,3: string,4: string,5: string,6: string,7: string,8: string
}

interface TableDemo {
  1: string,2: string,3: string,4: string,5: string,6: string,7: string,8: string,9: string,10: string,11: string,12: string,13: string,14: string,15: string,16: string,17: string,18: string,19: string,20: string,21: string,22: string,23: string,24: string,25: string,26: string,27: string
}

interface SpanMethodProps {
  row: Table
  column: TableColumnCtx<Table>
  rowIndex: number
  columnIndex: number
}

const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  if ((columnIndex + 1) % 3 === 0) {
    if (rowIndex === 0) {
      return {
        rowspan: 16,
        colspan: 1,
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      }
    }
  }
}

const tableData: Table[] = [
  {1: '0',2: 'A',3: '16',4: 'Q',5: '32',6: 'g',7: '48',8: 'w'},
  {1: '1',2: 'B',3: '17',4: 'R',5: '33',6: 'h',7: '49',8: 'x'},
  {1: '2',2: 'C',3: '18',4: 'S',5: '34',6: 'i',7: '50',8: 'y'},
  {1: '3',2: 'D',3: '19',4: 'T',5: '35',6: 'j',7: '51',8: 'z'},
  {1: '4',2: 'E',3: '20',4: 'U',5: '36',6: 'k',7: '52',8: '0'},
  {1: '5',2: 'F',3: '21',4: 'V',5: '37',6: 'l',7: '53',8: '1'},
  {1: '6',2: 'G',3: '22',4: 'W',5: '38',6: 'm',7: '54',8: '2'},
  {1: '7',2: 'H',3: '23',4: 'X',5: '39',6: 'n',7: '55',8: '3'},
  {1: '8',2: 'I',3: '24',4: 'Y',5: '40',6: 'o',7: '56',8: '4'},
  {1: '9',2: 'J',3: '25',4: 'Z',5: '41',6: 'p',7: '57',8: '5'},
  {1: '10',2: 'K',3: '26',4: 'a',5: '42',6: 'q',7: '58',8: '6'},
  {1: '11',2: 'L',3: '27',4: 'b',5: '43',6: 'r',7: '59',8: '7'},
  {1: '12',2: 'M',3: '28',4: 'c',5: '44',6: 's',7: '60',8: '8'},
  {1: '13',2: 'N',3: '29',4: 'd',5: '45',6: 't',7: '61',8: '9'},
  {1: '14',2: 'O',3: '30',4: 'e',5: '46',6: 'u',7: '62',8: '+'},
  {1: '15',2: 'P',3: '31',4: 'f',5: '47',6: 'v',7: '63',8: '/'},
]

const tableData1: TableDemo[] = [
  {1: 'ASCII 编码',2: '77',3: '97',4: '110'}
]
</script>

<style lang="less" scoped>
.bu {
  width: 10px;
}

.table_style {
  width: 100%;
  margin: 10px 0px 10px 0px
}

.text_style {
  margin: 6px 0px 6px 0px
}

:deep(.ep-text) {
  line-height: 24px;
}

:deep(.cell) {
  color: #407CB9;
  font-weight: 600;
}
</style>