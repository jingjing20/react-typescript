## Hooks小记

### useEffect

- 1、useEffect 默认会在每次组件挂载和更新的时候执行。
- 2、可以通过设置 useEffect 的依赖来控制什么时候才会执行 Effect

### React 如何清除 Effect

- React 会在每次组件渲染的时候执行 Effect。每次组件卸载的时候清除 Effect。
- React 会在执行当前 Effect 之前清除上一个 Effect。 