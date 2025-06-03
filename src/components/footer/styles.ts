import { pagePadding } from '../../config/global'

export const styles = {
  footerWrapper: `
    absolute 
    bottom-[${pagePadding.bottom}]
    left-[${pagePadding.left}] 
    right-[${pagePadding.right}]
    border-t
    border-neutral-200
    pt-6
    flex 
    flex-row
    justify-between
  `,

  footerPageNumber: `
    text-[12px]
    text-neutral-900
  `
}