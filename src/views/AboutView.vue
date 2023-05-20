<script lang="ts" setup>
import { computed, ref, getCurrentInstance } from 'vue'
import {
  TimeLine as TinyTimeLine,
  Modal,
  Button as TinyButton,
  Tabs as TinyTabs,
  TabItem as TinyTabItem,
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem,
  Notify,
  DialogBox as TinyDialogBox,
  Collapse as TinyCollapse,
  CollapseItem as TinyCollapseItem,
  ButtonGroup as TinyButtonGroup,
  Checkbox as TinyCheckbox,
  CheckboxGroup as TinyCheckboxGroup,
  CheckboxButton as TinyCheckboxButton,
  DatePicker as TinyDatePicker,
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Loading,
} from '@opentiny/vue'
import { iconStarDisable } from '@opentiny/vue-icon'

const disabled = ref(true)

const normalActive = ref(0)
const data = ref([{ name: 'Basic Info.' }, { name: 'BOQ Info' }, { name: 'Involved Parties' }, { name: 'Billing' }])

const normalClick = (index, node) => {
  normalActive.value = index

  Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
}

const activeName = ref('second')

const options = ref([
  {
    label: '老友粉1',
    icon: iconStarDisable(),
    children: [
      { label: '老友粉2.1', children: [{ label: '狮子头3.1' }] },
      { label: '老友粉2.2', divided: true },
      { label: '老友粉2.3', disabled: true }
    ]
  },
  {
    label: '狮子头',
    divided: true,
    disabled: true
  },
  {
    label: '黄金糕',
    divided: true,
    icon: iconStarDisable()
  }
])

const itemClick = (data) => {
  Notify({
    type: 'info',
    title: 'itemData',
    message: `配置式可以通过 data.itemData 获取配置数据：${JSON.stringify(data.itemData)}`,
    position: 'top-right',
    duration: 2000
  })
}

const boxVisibility = ref(false)
const boxVisibilityDrawer = ref(false)

const activeNames = ref(['1', '3'])


const checkedVal = ref('Button1')
const groupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' }
])


const checkboxGroup = ref(['北京'])
const cities = ref(['上海', '北京', '广州', '深圳'])


const isIndeterminate = computed(() => {
  return checkboxGroup.value.length > 0 && checkboxGroup.value.length !== cities.value.length
})

const checkAll = {
  get() {
    return checkboxGroup.value.length === cities.value.length
  },
  set(val) {
    if (val) {
      checkboxGroup.value = [...cities.value]
    } else {
      checkboxGroup.value = []
    }
  }
}


const checkboxGroup1 = ref(['上海'])

const checked = ref([''])

const dateValue = ref('')


const dateValue2 = ref('')
const pickerOptions = {
  disabledDate(time) {
    return time.getTime() > Date.now()
  },
  shortcuts: [
    {
      text: '今天',
      onClick(picker) {
        const date = new Date()
        picker.$emit('pick', date)
      }
    },
    {
      text: '昨天',
      onClick(picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        picker.$emit('pick', date)
      }
    },
    {
      text: '一周前',
      onClick(picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', date)
      }
    }
  ]
}

const dateValue3 = ref([new Date(), new Date(2019, 12, 12)])

const onPickOptions = {
  onPick: (val) => {
    if (val.maxDate) {
      Modal.message({
        message: '当前获取的值 maxDate' + val.maxDate,
        status: 'info'
      })
      Modal.message({
        message: '当前获取的值 minDate：' + val.minDate,
        status: 'info'
      })
    }
  }
}



let validatePass = (rule, value, callback) => {
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
    callback(new Error('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字'))
  } else {
    // if (this.ruleForm.password !== '') {
    //   this.$refs.ruleForm.validateField('password')
    // }
    callback()
  }
}

const createData = ref({
  username: '',
  password: ''
})
const isvalidate = ref(true)
const rules = {
  username: [
    { required: true, message: '必填', trigger: 'blur' },
    { min: 2, max: 11, message: '长度必须不小于2', trigger: 'change' }
  ],
  password: [
    { required: true, message: '必填', trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' }
  ]
}


const validate = (val) => {
  Modal.message({
    message: `表单项被校验后触发的事件,所校验字段为:${val}`,
    status: 'info'
  })
}
const handleSubmit = (formName) => {
  // this.$refs[formName].validate((valid) => {
  //   if (valid) {
  //     Modal.alert('校验通过，开始注册！')
  //   } else {
  //     Modal.message({ message: '校验不通过！！', status: 'warning' })
  //     return false
  //   }
  // })
}
const removePass = () => {
  // this.isvalidate = false // 通过配置validate-on-rule-change属性,设置是否在rules属性改变后立即触发一次验证
  // this.rules = {
  //   username: [
  //     { required: true, message: '必填', trigger: 'blur' },
  //     { min: 2, max: 11, message: '长度必须不小于2', trigger: 'change' }
  //   ]
  // }
}


const input = ref('')


const text = ref('')
const textarea = ref('')

const ipValue = ref('192.168.0.1')

const num1 = ref(1)

const radioValue = ref('1')
const radioValue2 = ref('1')

const radio2 = ref('1')

const searchValue = ref('')

const selectOptions = ref([
  {
    value: '选项1',
    label: '黄金糕'
  },
  {
    value: '选项2',
    label: '双皮奶'
  },
  {
    value: '选项3',
    label: '蚵仔煎'
  },
  {
    value: '选项4',
    label: '龙须面'
  },
  {
    value: '选项5',
    label: '北京烤鸭'
  }
])
const selectValue1 = ref('选项1')
const selectValue2 = ref(['选项1', '选项2'])

const selectValue3 = ref('')
const options3 = ref([
  {
    label: '热门城市',
    disabled: true,
    options: [
      {
        value: 'Shanghai',
        label: '上海'
      },
      {
        value: 'Beijing',
        label: '北京'
      }
    ]
  },
  {
    label: '城市名',
    options: [
      {
        value: 'Chengdu',
        label: '成都'
      },
      {
        value: 'Shenzhen',
        label: '深圳'
      },
      {
        value: 'Guangzhou',
        label: '广州'
      },
      {
        value: 'Dalian',
        label: '大连'
      }
    ]
  }
])


const switchValue = ref(true)
const switchValue1 = ref(true)
const switchValue2 = ref(false)

const vLoading = Loading.directive

const baseClick = () => {
  Modal.alert('基本提示框', '标题')
}
const successClick = () => {
  Modal.alert({ message: '成功提示框', status: 'success' })
}
const errorClick = () => {
  Modal.alert({ message: '失败提示框', title: '错误提示', status: 'error' })
}
const confirmClick = () => {
  Modal.confirm('您确定要删除吗？').then((res) => {
    Notify({
      type: 'info',
      title: '触发回调事件',
      message: `点击${res}按钮`
    })
  })
}

const baseClickMessage = () => {
  Modal.message({ message: '基本提示图标', status: 'info' })
}
const successClickMessage = () => {
  Modal.message({ message: '成功提示图标', status: 'success' })
}
const warningClickMessage = () => {
  Modal.message({ message: '警告提示图标', status: 'warning' })
}
const errorClickMessage = () => {
  Modal.message({ message: '错误提示图标', status: 'error' })
}
const loadingClickMessage = () => {
  Modal.message({ message: '加载提示图标', status: 'loading' })
}



const handleClickNotify = () => {
  Notify({
    type: 'info',
    title: '通知',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right',
  })
}

import { tinySmbTheme } from '@opentiny/vue-theme/theme'
const theme = getCurrentInstance().appContext.config.globalProperties.theme

const changeTheme = () => {
  if (theme.currentTheme.id === 'tiny-default-theme') {
    theme.changeTheme(tinySmbTheme)
  } else {
    theme.changeTheme()
  }
}
</script>

<template>
  <div class="about">
    <tiny-dropdown style="position: fixed; bottom: 60px; right: 60px; cursor: pointer;">
      <svg
        viewBox="0 0 1024 1024"
        width="32"
        height="32"
      >
        <path d="M361.28 853.67h-1c-64.14-0.32-111.49-30-124.48-39.09-33.47-23.43-61.42-63.11-80.82-114.74-17.15-45.65-26.6-98.32-26.6-148.33 0-51.48 10.21-101.42 30.34-148.46 19.43-45.39 47.23-86.14 82.63-121.12 35.37-34.95 76.56-62.4 122.43-81.57 47.48-19.84 97.89-29.91 149.83-29.91 51.95 0 102.36 10.06 149.83 29.91 45.87 19.17 87.06 46.61 122.43 81.57 35.4 34.98 63.2 75.73 82.63 121.12 20.13 47.03 30.34 96.98 30.34 148.46 0 32.15 0 72.16-15.91 107.63-9.52 21.23-29.24 33.94-58.62 37.78-19.38 2.54-41.77 1.44-67.69 0.18-75-3.65-168.33-8.2-233.38 73.46-54.6 68.56-118.02 83.1-161.96 83.11z m152.35-619.22c-85.88 0-166.59 33.03-227.28 93-60.59 59.87-93.95 139.44-93.95 224.05 0 42.51 7.99 87.19 22.51 125.82 14.63 38.93 35.09 69.05 57.61 84.82 18.84 13.19 51.87 27.34 88.09 27.52h0.7c43.07 0 80.71-19.84 111.9-58.99 85.48-107.3 206.48-101.41 286.55-97.51 18.63 0.91 34.72 1.69 47.68 1.03 11.04-0.57 15.96-2.07 17.8-2.83 9.62-22.81 9.62-53.08 9.62-79.86 0-84.62-33.37-164.19-93.95-224.05-60.69-59.97-141.41-93-227.28-93z m310.93 398.49c-0.01 0-0.01 0 0 0-0.01 0-0.01 0 0 0z" p-id="2373"></path><path d="M271.62 644.31a66.11 66.57 0 1 0 132.22 0 66.11 66.57 0 1 0-132.22 0Z" p-id="2374"></path><path d="M293.45 451.7a51.63 52 0 1 0 103.26 0 51.63 52 0 1 0-103.26 0Z" p-id="2375"></path><path d="M437.12 335.46a49.05 49.4 0 1 0 98.1 0 49.05 49.4 0 1 0-98.1 0Z" p-id="2376"></path><path d="M599.66 367.02a49.04 49.39 0 1 0 98.08 0 49.04 49.39 0 1 0-98.08 0Z" p-id="2377"></path><path d="M681.94 504.15a49.04 49.39 0 1 0 98.08 0 49.04 49.39 0 1 0-98.08 0Z" p-id="2378"></path>
      </svg>
      <template #dropdown>
        <tiny-dropdown-menu popper-class="my-class" placement="top">
          <tiny-dropdown-item label="default-theme" @click="changeTheme">默认主题</tiny-dropdown-item>
          <tiny-dropdown-item label="smb-theme" @click="changeTheme">极客黑主题</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <h1>OpenTiny 极客黑效果</h1>
    <div class="box-item button">
      <tiny-button>默认按钮</tiny-button>
      <tiny-button type="primary">主要按钮</tiny-button>
      <tiny-button type="danger" plain>危险按钮</tiny-button>
      <tiny-button :disabled="disabled">禁用按钮</tiny-button>
    </div>
    <div class="box-item button size">
      <tiny-button size="small">小型按钮</tiny-button>
      <tiny-button>默认按钮</tiny-button>
      <tiny-button size="medium">中等按钮</tiny-button>
      <tiny-button size="large">超大按钮</tiny-button>
    </div>
    <div class="box-item button loading">
      <tiny-button loading>加载中</tiny-button>
      <tiny-button type="primary" loading>加载中</tiny-button>
      <tiny-button type="success" loading>加载中</tiny-button>
      <tiny-button type="warning" loading>加载中</tiny-button>
      <tiny-button type="danger" loading>加载中</tiny-button>
    </div>
    <div class="box-item tabs">
      <tiny-tabs v-model="activeName" style="width: 600px;" :show-more-tabs="false">
        <tiny-tab-item title="表单组件1" name="first"> 表单组件,具有与用户交互，并可完成数据采集功能的控件。 </tiny-tab-item>
        <tiny-tab-item title="数据组件2" name="second">
          数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等
        </tiny-tab-item>
        <tiny-tab-item title="导航组件3" name="third"> 导航组件,帮助网站访问者浏览站点的组件. </tiny-tab-item>
        <tiny-tab-item title="业务组件4" name="fourth"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item>
        <!-- <tiny-tab-item title="表单组件5" name="5"> 表单组件,具有与用户交互，并可完成数据采集功能的控件。 </tiny-tab-item>
        <tiny-tab-item title="数据组件6" name="6">
          数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等
        </tiny-tab-item>
        <tiny-tab-item title="导航组件7" name="7"> 导航组件,帮助网站访问者浏览站点的组件. </tiny-tab-item>
        <tiny-tab-item title="业务组件8" name="8"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item>
        <tiny-tab-item title="表单组件9" name="9"> 表单组件,具有与用户交互，并可完成数据采集功能的控件。 </tiny-tab-item>
        <tiny-tab-item title="数据组件10" name="10">
          数据组件,提供了非常强大数据表格功能，在Grid可以展示数据列表，可以对数据列表进行选择、编辑等
        </tiny-tab-item>
        <tiny-tab-item title="导航组件11" name="11"> 导航组件,帮助网站访问者浏览站点的组件. </tiny-tab-item>
        <tiny-tab-item title="业务组件12" name="12"> 业务组件,与业务紧密相关实现某种业务功能的组件集 </tiny-tab-item> -->
      </tiny-tabs>
    </div>
    <div class="box-item dropdown">
      <tiny-dropdown>
        <template #dropdown>
          <tiny-dropdown-menu popper-class="my-class" placement="top">
            <tiny-dropdown-item label="老友粉"></tiny-dropdown-item>
            <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
            <tiny-dropdown-item>狮子头</tiny-dropdown-item>
            <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
            <tiny-dropdown-item disabled>双皮奶</tiny-dropdown-item>
            <tiny-dropdown-item divided>蚵仔煎</tiny-dropdown-item>
          </tiny-dropdown-menu>
        </template>
      </tiny-dropdown>

      <tiny-dropdown @item-click="itemClick" style="margin-left: 60px;">
        <template #dropdown>
          <tiny-dropdown-menu :options="options"> </tiny-dropdown-menu>
        </template>
      </tiny-dropdown>
    </div>
    <div class="box-item dialog-box">
      <tiny-button @click="boxVisibility = true" :title="'弹出Dialog' + boxVisibility">弹出 Dialog</tiny-button>
      <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
        <span>dialog-box内容</span>
        <template #footer>
          <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
          <tiny-button @click="boxVisibility = false">取 消</tiny-button>
        </template>
      </tiny-dialog-box>
    </div>
    <div class="box-item dialog-box right">
      <tiny-button @click="boxVisibilityDrawer = true">右侧弹窗</tiny-button>
      <tiny-dialog-box right-slide v-model:visible="boxVisibilityDrawer" title="消息" width="30%" modal-append-to-body>
        <span>dialog-box内容</span>
        <template #footer>
          <tiny-button type="primary" @click="boxVisibilityDrawer = false">确 定</tiny-button>
        </template>
      </tiny-dialog-box>
    </div>
    <div class="box-item collapse">
      <tiny-collapse v-model="activeNames">
        <tiny-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </tiny-collapse-item>
        <tiny-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </tiny-collapse-item>
        <tiny-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </tiny-collapse-item>
        <tiny-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </tiny-collapse-item>
      </tiny-collapse>
    </div>
    <div class="box-item button-group">
      <tiny-button-group :data="groupData" v-model="checkedVal"></tiny-button-group>
      <span>当前选中值：{{ checkedVal }}</span>
    </div>
    <div class="box-item checkbox">
      <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll"> 全选 </tiny-checkbox>
      <div style="margin: 15px 0"></div>
      <tiny-checkbox-group v-model="checkboxGroup">
        <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">{{ city }}</tiny-checkbox>
      </tiny-checkbox-group>
    </div>
    <div class="box-item checkbox disabled">
      <tiny-checkbox-group v-model="checked">
        <tiny-checkbox label="深圳" name="name1" checked disabled></tiny-checkbox>
        <tiny-checkbox label="上海" name="name2" disabled></tiny-checkbox>
      </tiny-checkbox-group>
    </div>
    <div class="box-item checkbox-button">
      <tiny-checkbox-group v-model="checkboxGroup1">
        <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
      </tiny-checkbox-group>
    </div>
    <div class="box-item date-picker">
      <div style="width: 270px">
        <tiny-date-picker v-model="dateValue"></tiny-date-picker>
      </div>
    </div>
    <div class="box-item date-picker options">
      <div style="width: 270px">
        <tiny-date-picker v-model="dateValue2" :picker-options="pickerOptions"></tiny-date-picker>
      </div>
    </div>
    <div class="box-item date-picker-range" v-if="false">
      <div>
        <p>日期值：{{ dateValue3 }}</p>
        <tiny-date-picker v-model="dateValue3" type="daterange" :picker-options="onPickOptions"></tiny-date-picker>
      </div>
    </div>
    <div class="box-item form">
      <div style="width: 360px;">
        <h3 class="box-item">注册表单</h3>
        <tiny-form
          ref="ruleForm"
          :model="createData"
          :rules="rules"
          :validate-on-rule-change="isvalidate"
          label-width="100px"
          validate-type="text"
          :inline-message="true"
          @validate="validate"
        >
          <tiny-form-item label="用户名" prop="username">
            <tiny-input v-model="createData.username"></tiny-input>
          </tiny-form-item>
          <tiny-form-item label="密码" prop="password">
            <tiny-input v-model="createData.password" type="password" show-password></tiny-input>
          </tiny-form-item>
          <tiny-form-item>
            <tiny-button type="primary" @click="handleSubmit('ruleForm')">注册</tiny-button>
            <tiny-button type="primary" @click="removePass">清除密码校验</tiny-button>
          </tiny-form-item>
        </tiny-form>
      </div>
    </div>
    <div class="box-item input" style="width: 300px;">
      <tiny-input class="box-item" v-model="input" placeholder="请输入内容"></tiny-input>
      <tiny-input class="box-item" v-model="input" clearable></tiny-input>
      <tiny-input class="box-item" type="password" v-model="input" show-password></tiny-input>
      <tiny-input class="box-item" type="textarea" v-model="input" placeholder="resize 为默认"></tiny-input>

      <tiny-input class="box-item" v-model="text" :maxlength="1000" show-word-limit></tiny-input>
      <br />
      <br />
      <tiny-input class="box-item" type="textarea" v-model="textarea" :maxlength="2000" show-word-limit></tiny-input>
    </div>
    <div class="box-item ip-address">
      <tiny-ip-address v-model="ipValue"></tiny-ip-address>
    </div>
    <div class="box-item numeric">
      <tiny-numeric v-model="num1"></tiny-numeric>

      <!-- <br /><br />
      <tiny-numeric v-model="num1" size="medium"></tiny-numeric>
      <br /><br />
      <tiny-numeric v-model="num1" size="small"></tiny-numeric>
      <br /><br />
      <tiny-numeric v-model="num1" size="mini"></tiny-numeric> -->
    </div>
    <div class="box-item radio">
      <tiny-radio v-model="radioValue" label="1">很好</tiny-radio>
      <tiny-radio v-model="radioValue" label="2" text="一般"></tiny-radio>
      <br>
      <br>
      <tiny-radio v-model="radioValue2" label="1" disabled>很好</tiny-radio>
      <tiny-radio v-model="radioValue2" label="2" text="一般" disabled></tiny-radio>
    </div>
    <div class="box-item radio-button">
      <tiny-radio-group v-model="radio2">
        <tiny-radio-button label="1">日度</tiny-radio-button>
        <tiny-radio-button label="2">月度</tiny-radio-button>
        <tiny-radio-button label="3">年度</tiny-radio-button>
      </tiny-radio-group>
    </div>
    <div class="box-item search">
      <tiny-search style="width: 260px;" v-model="searchValue" placeholder="请输入关键词"></tiny-search>
    </div>
    <div class="box-item select" style="width: 260px">
      <tiny-select class="box-item" v-model="selectValue1" placeholder="请选择">
        <tiny-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>

      <tiny-select class="box-item" v-model="selectValue2" placeholder="请选择" multiple>
        <tiny-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>

      <tiny-select class="box-item" v-model="selectValue1" placeholder="请选择" :searchable="true">
        <tiny-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>

      <tiny-select class="box-item" v-model="selectValue2" placeholder="请选择" :searchable="true" multiple>
        <tiny-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>


      <tiny-select class="box-item" v-model="selectValue3" placeholder="请选择" multiple filterable>
        <tiny-option-group v-for="group in options3" :key="group.label" :label="group.label">
          <tiny-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></tiny-option>
        </tiny-option-group>
      </tiny-select>
    </div>
    <div class="box-item switch">
      <tiny-switch v-model="switchValue"></tiny-switch>
      <tiny-switch></tiny-switch>
      <br>
      <br>
      <tiny-switch v-model="switchValue1" disabled></tiny-switch>
      <tiny-switch v-model="switchValue2" disabled></tiny-switch>
    </div>
    <div class="box-item pager">
      <tiny-pager mode="complete" :total="100"></tiny-pager>
    </div>
    <div class="box-item progress">
      <tiny-progress class="box-item" :percentage="50"></tiny-progress>
      <tiny-progress class="progress" :text-inside="true" :stroke-width="26" :percentage="70"></tiny-progress>
    </div>
    <div class="box-item alert">

      <tiny-alert description="type 为默认值 success"></tiny-alert>
      <tiny-alert type="error" description="type 为 error"></tiny-alert>
      <tiny-alert type="info" description="type 为 info"></tiny-alert>
      <tiny-alert type="warning" description="type 为 warning"></tiny-alert>

    </div>
    <div class="box-item alert title">
      <tiny-alert type="success" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
      </tiny-alert>
      <br />
      <tiny-alert type="error" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。"></tiny-alert>
      <br />
      <tiny-alert type="info" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。"></tiny-alert>
      <br />
      <tiny-alert type="warning" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
      </tiny-alert>
    </div>
    <div class="box-item loading">
      <div style="height: 200px;" v-loading="true"></div>
    </div>
    <div class="box-item tooltip">
      <tiny-tooltip content="提示内容" placement="top" effect="light">
        <tiny-button>提示</tiny-button>
      </tiny-tooltip>
    </div>
    <div class="box-item popover">
      <tiny-popover
        placement="top"
        title="标题"
        width="200"
        trigger="hover"
        append-to-body
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <tiny-button>悬浮我提示</tiny-button>
        </template>
      </tiny-popover>
    </div>
    <div class="box-item modal">
      <tiny-button @click="baseClick" :reset-time="0">基本提示框</tiny-button>
      <tiny-button @click="successClick" :reset-time="0">成功提示框</tiny-button>
      <tiny-button @click="errorClick" :reset-time="0">失败提示框</tiny-button>
      <tiny-button @click="confirmClick" :reset-time="0">确认提示框</tiny-button>
    </div>
    <div class="box-item modal message">
      <tiny-button @click="baseClickMessage" :reset-time="0">基本提示图标</tiny-button>
      <tiny-button @click="successClickMessage" :reset-time="0">成功提示图标</tiny-button>
      <tiny-button @click="warningClickMessage" :reset-time="0">警告提示图标</tiny-button>
      <tiny-button @click="errorClickMessage" :reset-time="0">错误提示图标</tiny-button>
      <tiny-button @click="loadingClickMessage" :reset-time="0">加载提示图标</tiny-button>
    </div>
    <div class="box-item notify">
      <tiny-button @click="handleClickNotify" :reset-time="0">弹出提示框</tiny-button>
    </div>
    <div class="box-item">
    </div>
    <div class="box-item">
    </div>
    <div class="box-item">
    </div>
    <div class="box-item">
      <tiny-time-line :data="data" :active="normalActive" type="normal" @click="normalClick"></tiny-time-line>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  h1 {
    margin-bottom: 20px;
  }

  .box-item {
    margin-bottom: 20px;
  }

  .about {
    min-height: 100vh;
    /* display: flex;
    align-items: center;
    flex-direction: column; */
  }
}
</style>
