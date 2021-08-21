import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import vsDarkTheme from "prism-react-renderer/themes/vsDark"

import {
  siteCodeBlock as siteCodeBlockClass,
  siteCodeBlockWithNumbers as siteCodeBlockWithNumbersClass,
  siteCodeBlockLineNumber as siteCodeBlockLineNumberClass,
  siteCodeBlockLineContent as siteCodeBlockLineContentClass,
} from "./index.module.scss"
import { CombineStyles } from "../../helpers/CombineStyles"

const LANGUAGE_PARSER = /language-([-\w]+)(?:{([\w,]+)})?/

const SiteCodeBlock = ({ children = "", className = "" }) => {
  const [, language, paramString] = LANGUAGE_PARSER.exec(
    children.props.className
  )

  const params = paramString?.split(",") || []
  const enableLineNumbers = params.includes("number")

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children}
      language={language}
      theme={vsDarkTheme}
    >
      {({ newClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={CombineStyles(
            newClassName,
            siteCodeBlockClass,
            enableLineNumbers && siteCodeBlockWithNumbersClass
          )}
          style={style}
        >
          {tokens.map((line, i) => (
            <>
              {enableLineNumbers && (
                <div className={siteCodeBlockLineNumberClass}>{i + 1}</div>
              )}
              <div className={siteCodeBlockLineContentClass}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            </>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export { SiteCodeBlock }
