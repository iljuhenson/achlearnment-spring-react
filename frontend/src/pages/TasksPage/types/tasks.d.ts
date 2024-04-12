export interface Task {
    id: number,
    mainTaskPart: string,
    fillTaskPart: string,
    taskType: string,
    duration: number,
    pay: number,
    completed: boolean
}

export interface BalanceObject {
    balance: number
}

export interface FetchActivities extends Array<string> {}

export interface Activities extends Array<Date> {}

export interface ShopItem {
    id: number,
    name: string,
    description: string,
    price: number,
    bought: boolean
}