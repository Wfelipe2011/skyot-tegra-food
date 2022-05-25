export interface IProductsQuery {
  order: string;
  min: string;
  max: string;
  category: string;
  page: number
  filter?: string
}
