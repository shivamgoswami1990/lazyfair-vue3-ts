type AxiosApiResponseDto<T> = {
    status: number | undefined
    statusText: string | undefined
    data: T
    error?: any
}

export type { AxiosApiResponseDto }