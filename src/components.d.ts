/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Todo } from "./interfaces/Todo";
export namespace Components {
    interface AppAbout {
    }
    interface AppHome {
    }
    interface AppMenu {
        "theme": number;
    }
    interface AppPreferences {
        "theme": number;
    }
    interface AppRoot {
        "openMenu": () => Promise<void>;
    }
    interface SoButton {
        "fill"?: 'clear' | 'solid';
    }
    interface SoCreateTodo {
    }
    interface SoPreviewTheme {
        "cardBackground": string;
        "mainBackground": string;
        "sidebarBackground": string;
    }
    interface SoTodoCard {
        "allowDelete": boolean;
        "displayEmptyCard": boolean;
        "header": string;
        "list": Todo[];
    }
    interface SoTodoItem {
        "allowDelete": boolean;
        "checked": boolean;
        "text": string;
        "todoId": number;
    }
    interface SoZoom {
    }
}
declare global {
    interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {
    }
    var HTMLAppAboutElement: {
        prototype: HTMLAppAboutElement;
        new (): HTMLAppAboutElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {
    }
    var HTMLAppMenuElement: {
        prototype: HTMLAppMenuElement;
        new (): HTMLAppMenuElement;
    };
    interface HTMLAppPreferencesElement extends Components.AppPreferences, HTMLStencilElement {
    }
    var HTMLAppPreferencesElement: {
        prototype: HTMLAppPreferencesElement;
        new (): HTMLAppPreferencesElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLSoButtonElement extends Components.SoButton, HTMLStencilElement {
    }
    var HTMLSoButtonElement: {
        prototype: HTMLSoButtonElement;
        new (): HTMLSoButtonElement;
    };
    interface HTMLSoCreateTodoElement extends Components.SoCreateTodo, HTMLStencilElement {
    }
    var HTMLSoCreateTodoElement: {
        prototype: HTMLSoCreateTodoElement;
        new (): HTMLSoCreateTodoElement;
    };
    interface HTMLSoPreviewThemeElement extends Components.SoPreviewTheme, HTMLStencilElement {
    }
    var HTMLSoPreviewThemeElement: {
        prototype: HTMLSoPreviewThemeElement;
        new (): HTMLSoPreviewThemeElement;
    };
    interface HTMLSoTodoCardElement extends Components.SoTodoCard, HTMLStencilElement {
    }
    var HTMLSoTodoCardElement: {
        prototype: HTMLSoTodoCardElement;
        new (): HTMLSoTodoCardElement;
    };
    interface HTMLSoTodoItemElement extends Components.SoTodoItem, HTMLStencilElement {
    }
    var HTMLSoTodoItemElement: {
        prototype: HTMLSoTodoItemElement;
        new (): HTMLSoTodoItemElement;
    };
    interface HTMLSoZoomElement extends Components.SoZoom, HTMLStencilElement {
    }
    var HTMLSoZoomElement: {
        prototype: HTMLSoZoomElement;
        new (): HTMLSoZoomElement;
    };
    interface HTMLElementTagNameMap {
        "app-about": HTMLAppAboutElement;
        "app-home": HTMLAppHomeElement;
        "app-menu": HTMLAppMenuElement;
        "app-preferences": HTMLAppPreferencesElement;
        "app-root": HTMLAppRootElement;
        "so-button": HTMLSoButtonElement;
        "so-create-todo": HTMLSoCreateTodoElement;
        "so-preview-theme": HTMLSoPreviewThemeElement;
        "so-todo-card": HTMLSoTodoCardElement;
        "so-todo-item": HTMLSoTodoItemElement;
        "so-zoom": HTMLSoZoomElement;
    }
}
declare namespace LocalJSX {
    interface AppAbout {
    }
    interface AppHome {
    }
    interface AppMenu {
        "onMenuLinkClicked"?: (event: CustomEvent<any>) => void;
        "theme"?: number;
    }
    interface AppPreferences {
        "onThemeClick"?: (event: CustomEvent<any>) => void;
        "theme"?: number;
    }
    interface AppRoot {
    }
    interface SoButton {
        "fill"?: 'clear' | 'solid';
        "onButtonClick"?: (event: CustomEvent<any>) => void;
    }
    interface SoCreateTodo {
        "onInputSubmit"?: (event: CustomEvent<any>) => void;
    }
    interface SoPreviewTheme {
        "cardBackground"?: string;
        "mainBackground"?: string;
        "sidebarBackground"?: string;
    }
    interface SoTodoCard {
        "allowDelete"?: boolean;
        "displayEmptyCard"?: boolean;
        "header"?: string;
        "list"?: Todo[];
        "onItemCheck"?: (event: CustomEvent<any>) => void;
        "onItemRemove"?: (event: CustomEvent<any>) => void;
    }
    interface SoTodoItem {
        "allowDelete"?: boolean;
        "checked": boolean;
        "onItemCheck"?: (event: CustomEvent<any>) => void;
        "onItemRemove"?: (event: CustomEvent<any>) => void;
        "text": string;
        "todoId": number;
    }
    interface SoZoom {
    }
    interface IntrinsicElements {
        "app-about": AppAbout;
        "app-home": AppHome;
        "app-menu": AppMenu;
        "app-preferences": AppPreferences;
        "app-root": AppRoot;
        "so-button": SoButton;
        "so-create-todo": SoCreateTodo;
        "so-preview-theme": SoPreviewTheme;
        "so-todo-card": SoTodoCard;
        "so-todo-item": SoTodoItem;
        "so-zoom": SoZoom;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-about": LocalJSX.AppAbout & JSXBase.HTMLAttributes<HTMLAppAboutElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-menu": LocalJSX.AppMenu & JSXBase.HTMLAttributes<HTMLAppMenuElement>;
            "app-preferences": LocalJSX.AppPreferences & JSXBase.HTMLAttributes<HTMLAppPreferencesElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "so-button": LocalJSX.SoButton & JSXBase.HTMLAttributes<HTMLSoButtonElement>;
            "so-create-todo": LocalJSX.SoCreateTodo & JSXBase.HTMLAttributes<HTMLSoCreateTodoElement>;
            "so-preview-theme": LocalJSX.SoPreviewTheme & JSXBase.HTMLAttributes<HTMLSoPreviewThemeElement>;
            "so-todo-card": LocalJSX.SoTodoCard & JSXBase.HTMLAttributes<HTMLSoTodoCardElement>;
            "so-todo-item": LocalJSX.SoTodoItem & JSXBase.HTMLAttributes<HTMLSoTodoItemElement>;
            "so-zoom": LocalJSX.SoZoom & JSXBase.HTMLAttributes<HTMLSoZoomElement>;
        }
    }
}
