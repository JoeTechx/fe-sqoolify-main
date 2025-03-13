export interface IStudent {
  id: string
  fullname: string
  class: string
  rate: number
  subject: string
}

export interface ILibrary {
  id: string
  date: string
  bookName: string
  author: string
  class: string
  type: string
}

export interface IParentExp {
  id: number
  date: string
  expenses: string
  amount: string
  status: string
  action: string
}


export interface IPayment {
  id: number
  date: string
  counterparty: string
  paymentMemo: string
  amount: string
  type: string
  action: string
}


export type TimetableView = 'result' | 'upload' | 'download';
