import { Component, h } from '@stencil/core';

class MyRenderer {
  render() {
    return (<img src="https://explorit.ch/wp-content/uploads/2019/10/placeholder.png" />)
  }
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  renderer = new MyRenderer();


  render() {
    return this.renderer.render()
  }
}
