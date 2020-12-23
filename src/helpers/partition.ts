/**
 * Split an array into an "almost" equal number of partitions.
 * @param items Array of items to split apart
 * @param partitions The number of partitions
 */
const partition = <T>(items: T[], partitions: number): T[][] => {
  const output = new Array<T[]>(partitions)
  for (let i = 0; i < partitions; i++) {
    output[i] = []
  }
  for (let i = 0; i < items.length; i++) {
    output[i % partitions].push(items[i])
  }
  return output
}

export { partition }
