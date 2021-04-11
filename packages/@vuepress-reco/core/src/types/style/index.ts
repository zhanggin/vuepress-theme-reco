export type ClassificationPageOptions = {
  type: 'frontmatter'
  frontmatterKey: string
  path: string
  layout: string
  pagination?: number
}

export type OrdinaryPageOptions = {
  path: string
  layout: string
}

export type PageOptions = ClassificationPageOptions | OrdinaryPageOptions

export type StylePageOptions = Array<PageOptions>

export type StyleOptions = {
  pages: StylePageOptions
}