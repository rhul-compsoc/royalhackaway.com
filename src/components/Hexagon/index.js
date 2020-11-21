import React from "react"
import { CombineStyles } from "../../helpers/CombineStyles"
import styles from "./index.module.scss"
import testImage from "../../assets/images/hexagon/1.jpeg"

const HexagonGrid = ({ children, className, ...props }) => (
  <div {...props} className={CombineStyles(styles.grid, className)}>
    {children}
  </div>
)

const HexagonRow = ({ children }) => (
  <div className={styles.row}>{children}</div>
)

const Hexagon = ({ children, clipping = true }) => (
  <div className={CombineStyles(styles.hexagon, clipping && styles.clipping)}>
    {children}
  </div>
)

const HexagonImage = ({ src, clipping }) => (
  <Hexagon clipping={clipping}>
    <img className={styles.image} src={src} />
  </Hexagon>
)

const HexagonFlankingContainer = () => (
  <div className="container">
    <div className={CombineStyles("row", styles.flankContainer)}>
      <HexagonGrid className={styles.flankLeft}>
        <HexagonRow>
          <HexagonImage src={testImage} />
          <HexagonImage src={testImage} />
        </HexagonRow>
        <HexagonRow>
          <HexagonImage src={testImage} />
        </HexagonRow>
      </HexagonGrid>
      <HexagonGrid className={styles.flankRight}>
        <HexagonRow>
          <HexagonImage src={testImage} />
          <HexagonImage src={testImage} />
        </HexagonRow>
        <HexagonRow>
          <HexagonImage src={testImage} />
        </HexagonRow>
      </HexagonGrid>
    </div>
  </div>
)

export {
  HexagonImage,
  HexagonGrid,
  Hexagon,
  HexagonRow,
  HexagonFlankingContainer,
}
