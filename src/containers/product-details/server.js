"use server";

import { ProductDetailsClient } from "./client";
import { handleRequest } from "@/utils";
import { ENDPOINTS } from "@/const/endpoints";

export const ProductDetailsServer = async ({slug}) => { 
  const { data } = await handleRequest({
    url: `${ENDPOINTS.ITEMS}${slug}`
  });
  return (
    data ? (
      <ProductDetailsClient product={data}/>
    )
    :null
  )
}