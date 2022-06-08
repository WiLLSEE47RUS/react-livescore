export interface TFetchedData<Type = any> {
  data: Type,
  meta?: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    current_page: number,
    from: number,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    per_page: number,
    to: number,
  }
}
