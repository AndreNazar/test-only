export interface ITheme {
    id: number,
    title: string,
    yearFrom: number,
    yearTo: number,
}
export interface IEvent {
    id: number,
    theme: number,
    year: number,
    content: string,
}