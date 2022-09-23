export type model = 'Yaris sport' | 'F-150' | 'Silverao' | 'CX-5'
export type brand =  'Toyota' | 'Ford' | 'Chevrolet' | 'Mazda'

export interface carsList {
    Id: number
    Model: model
    Brand: brand
    Year: number
}


export type newCarEntrie = Omit<carsList, 'Id'>