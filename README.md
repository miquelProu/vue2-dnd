# vue2-dnd
![img](http://img.shields.io/npm/v/vue2-dnd.svg)
![img](http://img.shields.io/badge/license-MIT-blue.svg)

> Drag n' Drop plugin for Vue.js

## Demo
[jsfiddle](https://jsfiddle.net/jikkai/jy8epmor/3/)

## Installation
```
npm install miquelProu/vue2-dnd --save
```
Be patient

## Usage
```javascript
import Vue2Dnd from 'vue2-dnd'

Vue.use(Vue2Dnd)
```

## Fork
Add two more directives, DragEnter and DragLeave.
When a draged item enter or leave to droppable element.

### Draggable Directive
```
v-draggable.[groupname]="[draggable object]"
```

```
<template>
  <div v-draggable.groupname="item"></div>
</template>

<script>
  export default {
    data () {
      return {
        key: item.key,
        name: item.name
      }
    }
  }
</script>
```

### Droppable Directive
```
v-droppable.[groupname]="[droppable callback function]"
```

```
<template>
  <div v-droppable.groupname="callback"></div>
</template>

<script>
  export default {
    methods: {
      callback ($ev) {
        // $ev contains the draggable object
      }
    }
  }
</script>
```

### DragEnter Directive
```
v-dragenter.[groupname]="[dragenter callback function]"
```

```
<template>
  <div v-dragenter.groupname="callback"></div>
</template>

<script>
  export default {
    methods: {
      callback ($ev) {
        // $ev contains the draggable object
      }
    }
  }
</script>
```

### DragLeave Directive
```
v-dragleave.[groupname]="[dragleave callback function]"
```

```
<template>
  <div v-dragleave.groupname="callback"></div>
</template>

<script>
  export default {
    methods: {
      callback ($ev) {
        // $ev contains the draggable object
      }
    }
  }
</script>
```

## License
MIT
