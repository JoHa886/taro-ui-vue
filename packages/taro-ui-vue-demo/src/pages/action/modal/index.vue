<template>
  <view class="page">
    <DocsHeader title="Modal 模态框" />
    <view class="doc-body">
      <!-- 基础模态框 -->
      <view class="panel">
        <view class="panel__title">
          基础模态框
        </view>
        <view class="panel__content">
          <view class="example-item">
            <AtButton :on-click="handleClickShow.bind(this, 1)">
              打开基础模态框
            </AtButton>
          </view>
        </view>
      </view>

      <!-- 单个按钮 -->
      <view class="panel">
        <view class="panel__title">
          单个按钮
        </view>
        <view class="panel__content">
          <view class="example-item">
            <AtButton :on-click="handleClickShow.bind(this, 2)">
              打开单个按钮模态框
            </AtButton>
          </view>
        </view>
      </view>

      <!-- 无标题 -->
      <view class="panel">
        <view class="panel__title">
          无标题
        </view>
        <view class="panel__content">
          <view class="example-item">
            <AtButton :on-click="handleClickShow.bind(this, 3)">
              打开无标题模态框
            </AtButton>
          </view>
        </view>
      </view>

      <!-- 简化使用 -->
      <view class="panel">
        <view class="panel__title">
          简化使用
        </view>
        <view class="panel__content">
          <view class="example-item">
            <AtButton :on-click="handleClickShow.bind(this, 4)">
              打开简化使用模态框
            </AtButton>
          </view>
        </view>
      </view>

      <!-- 城市索引 -->
      <view class="panel">
        <view class="panel__title">
          城市索引
        </view>
        <view class="panel__content">
          <view class="example-item">
            <AtButton :on-click="handleClickShow.bind(this, 5)">
              打开城市索引
            </AtButton>
          </view>
        </view>
      </view>
    </view>

    <!-- 基础模态框 -->
    <AtModal
      :is-opened="state.isOpened1"
      :on-close="closeModal.bind(null, 1, 'Modal被关闭了')"
    >
      <AtModalHeader>标题</AtModalHeader>
      <AtModalContent>
        <view class="modal-content">
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </view>
      </AtModalContent>
      <AtModalAction>
        <button @tap="closeModal(1, '点击了取消')">
          取消
        </button>
        <button @tap="closeModal(1, '点击了确定')">
          确定
        </button>
      </AtModalAction>
    </AtModal>

    <!-- 单个按钮 -->
    <AtModal
      :is-opened="state.isOpened2"
      :on-close="closeModal.bind(this, 2, 'Modal被关闭了')"
    >
      <AtModalHeader>标题</AtModalHeader>
      <AtModalContent>
        <view class="modal-content">
          这里是正文内容，欢迎加入京东凹凸实验室
        </view>
      </AtModalContent>
      <AtModalAction>
        <button @tap="closeModal(2, '点击了确定')">
          确定
        </button>
      </AtModalAction>
    </AtModal>

    <!-- 无标题 -->
    <AtModal
      :key="3"
      :is-opened="state.isOpened3"
      content="这里是正文内容，欢迎加入京东凹凸实验室
      这里是正文内容，欢迎加入京东凹凸实验室
      这里是正文内容，欢迎加入京东凹凸实验室"
      :on-close="closeModal.bind(this, 3, 'Modal被关闭了')"
      :on-cancel="closeModal.bind(this, 3, '点击了取消')"
      :on-confirm="closeModalConfirm.bind(this, 3, '点击了确认')"
      cancel-text="取消"
      confirm-text="确认"
    />

    <!-- 简化使用 -->
    <AtModal
      :is-opened="state.isOpened4"
      title="标题"
      cancel-text="取消"
      confirm-text="确认"
      content="`欢迎加入京东凹凸实验室\n欢迎加入京东凹凸实验室`"
      :on-close="closeModal.bind(this, 4, 'Modal被关闭了')"
      :on-cancel="closeModal.bind(this, 4, '点击了取消')"
      :on-confirm="closeModalConfirm.bind(this, 4, '点击了确认')"
    />

    <AtModal :is-opened="state.isOpened5">
      <AtModalContent>
        <AtIndexes
          :list="mockData"
          top-key="Top"
          :custom-style="{ height: '400px' }"
        >
          <view class="custom-area">
            用户自定义内容
          </view>
        </AtIndexes>
      </AtModalContent>
    </AtModal>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import mockData from '../../navigation/indexes/mock-data'
export default {
  name: 'ModalPage',
  data() {
    return {
      mockData,
      state: {
        isOpened1: false,
        isOpened2: false,
        isOpened3: false,
        isOpened4: false,
        isOpened5: false,
      },
    }
  },
  methods: {
    handleClickShow(type) {
      this.state[`isOpened${type}`] = true
    },
    closeModal(type, msg) {
      this.state[`isOpened${type}`] = false
      Taro.showToast({
        icon: 'none',
        title: msg,
      })
    },

    closeModalConfirm(type, msg) {
      this.state[`isOpened${type}`] = false
      Taro.showToast({
        icon: 'none',
        title: msg,
      })
    },
  },
}
</script>
