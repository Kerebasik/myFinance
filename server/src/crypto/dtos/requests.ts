class NewWalletDto {
  address:string
  currency:string
}

class DeleteWalletsDto {
  address:string
  currency:string
}

export { NewWalletDto, DeleteWalletsDto }
