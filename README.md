# vue-direct的常用自定义指令

## 快速上手

**安装**

```sh
npm i -S vue-direct
```

**完整引入**

```js
import vueDirect from 'vue-direct'
import Vue from 'vue';

Vue.use(vueDirect);
```

**按需引入**

```js
import { autosize } from 'vue-direct';
import Vue from 'vue';

Vue.use(autosize);
```



## 指令使用说明

### v-focus

**功能**： 自动获取焦点

**值说明**：

* 不写：和写成true的意思一样
* true: 获取焦点
* false： 失去焦点

```html
  <input v-focus="focused" />
```



### v-clipboard

**功能**： 自动把v-clipboard的value值复制到剪切板

**值说明**:

* data要复制的数据
* clipboardSuccessHandler复制成功的回调
* clipboardErrorHandler复制失败的回调

```html
<button v-clipboard="data"
        v-clipboard:success="clipboardSuccessHandler" // Success event handler
        v-clipboard:error="clipboardErrorHandler"
>
  Copy to clipboard
</button>
{
  methods: {
    clipboardSuccessHandler ({ value, event }) {
      console.log('success', value)
    },

    clipboardErrorHandler ({ value, event }) {
      console.log('error', value)
    }
  }
}
```



###v-ellipsis

**功能：** 超出部分显示省略符

**值说明**：

* 没有值和设置了1是等效的，表示单行超出显示省略符
* 设置大于1的值，表示多行(设置的数目)超出显示省略符

```html
<div v-ellipsis=5>
  这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，这个库太好用了，我一定要用，
</div>
```



### v-autosize

**功能**: `textarea`高度自适应

**值说明**:  不用设置值

```html
<textarea v-autosize>我们都是🇨🇳人</textarea>
```

