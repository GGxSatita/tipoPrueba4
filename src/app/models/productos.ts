export type Productos ={
id : number,
title :string,
description : string,
price : number ,
discountPercentage : number,
rating : number,
stock : number,
brand : string,
category : string,
thumbail : string,
images: Array<string>
}

export type ProductosRespuesta ={

  products :Array<Productos>
  total : number,
  skip : number | null,
  limit : number
}
