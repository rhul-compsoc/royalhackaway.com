/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module "*.module.css" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}
declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}
declare module "*.module.sass" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}
declare module "*.module.less" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}
declare module "*.module.styl" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

/* CSS */
declare module "*.css"
declare module "*.scss"
declare module "*.sass"
declare module "*.less"
declare module "*.styl"

/* IMAGES */
declare module "*.svg" {
  const ref: string
  export default ref
}
declare module "*.bmp" {
  const ref: string
  export default ref
}
declare module "*.gif" {
  const ref: string
  export default ref
}
declare module "*.jpg" {
  const ref: string
  export default ref
}
declare module "*.jpeg" {
  const ref: string
  export default ref
}
declare module "*.png" {
  const ref: string
  export default ref
}

/* CUSTOM: ADD YOUR OWN HERE */
