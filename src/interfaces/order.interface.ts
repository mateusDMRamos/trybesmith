interface IOrderModel {
  id?: number,
  userId: number,
  productsIds: Array<number>,
}

export default IOrderModel;