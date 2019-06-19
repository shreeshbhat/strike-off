/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppHome {}
  interface AppMenu {
    'darkTheme': boolean;
  }
  interface AppRoot {
    'changeTheme': (event: CustomEvent<any>) => Promise<void>;
    'openMenu': () => Promise<void>;
  }
  interface AppTheme {
    'darkTheme': boolean;
  }
  interface SoClearButton {}
  interface SoCreateTodo {}
  interface SoTodoItem {
    'checked': boolean;
    'text': string;
    'todoId': number;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {}
  var HTMLAppMenuElement: {
    prototype: HTMLAppMenuElement;
    new (): HTMLAppMenuElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppThemeElement extends Components.AppTheme, HTMLStencilElement {}
  var HTMLAppThemeElement: {
    prototype: HTMLAppThemeElement;
    new (): HTMLAppThemeElement;
  };

  interface HTMLSoClearButtonElement extends Components.SoClearButton, HTMLStencilElement {}
  var HTMLSoClearButtonElement: {
    prototype: HTMLSoClearButtonElement;
    new (): HTMLSoClearButtonElement;
  };

  interface HTMLSoCreateTodoElement extends Components.SoCreateTodo, HTMLStencilElement {}
  var HTMLSoCreateTodoElement: {
    prototype: HTMLSoCreateTodoElement;
    new (): HTMLSoCreateTodoElement;
  };

  interface HTMLSoTodoItemElement extends Components.SoTodoItem, HTMLStencilElement {}
  var HTMLSoTodoItemElement: {
    prototype: HTMLSoTodoItemElement;
    new (): HTMLSoTodoItemElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-menu': HTMLAppMenuElement;
    'app-root': HTMLAppRootElement;
    'app-theme': HTMLAppThemeElement;
    'so-clear-button': HTMLSoClearButtonElement;
    'so-create-todo': HTMLSoCreateTodoElement;
    'so-todo-item': HTMLSoTodoItemElement;
  }
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppMenu extends JSXBase.HTMLAttributes<HTMLAppMenuElement> {
    'darkTheme'?: boolean;
    'onDarkThemeClick'?: (event: CustomEvent<any>) => void;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AppTheme extends JSXBase.HTMLAttributes<HTMLAppThemeElement> {
    'darkTheme'?: boolean;
    'onDarkThemeClick'?: (event: CustomEvent<any>) => void;
  }
  interface SoClearButton extends JSXBase.HTMLAttributes<HTMLSoClearButtonElement> {
    'onButtonClick'?: (event: CustomEvent<any>) => void;
  }
  interface SoCreateTodo extends JSXBase.HTMLAttributes<HTMLSoCreateTodoElement> {
    'onInputSubmit'?: (event: CustomEvent<any>) => void;
  }
  interface SoTodoItem extends JSXBase.HTMLAttributes<HTMLSoTodoItemElement> {
    'checked': boolean;
    'onItemCheck'?: (event: CustomEvent<any>) => void;
    'onItemRemove'?: (event: CustomEvent<any>) => void;
    'text': string;
    'todoId': number;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-menu': AppMenu;
    'app-root': AppRoot;
    'app-theme': AppTheme;
    'so-clear-button': SoClearButton;
    'so-create-todo': SoCreateTodo;
    'so-todo-item': SoTodoItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


