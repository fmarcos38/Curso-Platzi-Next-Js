import Image from 'next/image';
import { Product } from 'app/models/products';
import styles from './MainProducts.module.sass';
import { getProducts } from 'app/services/shopify';


export const MainProducts = async () => {//vuelvo el componente async (SOLO en los componentes de SERVIDOR)

  //const products = await getProducts(); //opción A
  const response = await fetch('http://localhost:3000/api'); //metodología Back for Frontend
  const { products } = await response.json();

  return (
    <section className={styles.MainProducts}>
      <h3>Productos</h3>
      <div className={styles.MainProducts__grid}>
      {
        products?.map((p: Product) => {
          const imageSrc = p.images[0].src;
          return(
            <article key={p.id}>
              <p>{p.title}</p>
              <Image src={imageSrc} fill alt={p.title} loading='eager'/>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

/* 

export interface GetProductsResponse {
  products: Product[];
}

export interface Product {
  id:                   number;
  title:                string;
  body_html:            string;
  vendor:               Vendor;
  product_type:         string;
  created_at:           string;
  handle:               string;
  updated_at:           string;
  published_at:         string;
  template_suffix:      null;
  published_scope:      PublishedScope;
  tags:                 string;
  status:               Status;
  admin_graphql_api_id: string;
  variants:             Variant[];
  options:              Option[];
  images:               Image[];
  image:                Image;
}

export interface Image {
  id:                   number;
  alt:                  null;
  position:             number;
  product_id:           number;
  created_at:           string;
  updated_at:           string;
  admin_graphql_api_id: string;
  width:                number;
  height:               number;
  src:                  string;
  variant_ids:          any[];
}

export interface Option {
  id:         number;
  product_id: number;
  name:       Name;
  position:   number;
  values:     Option1[];
}

export enum Name {
  Title = "Title",
}

export enum Option1 {
  DefaultTitle = "Default Title",
}

export enum PublishedScope {
  Global = "global",
}

export enum Status {
  Active = "active",
}

export interface Variant {
  id:                     number;
  product_id:             number;
  title:                  Option1;
  price:                  string;
  sku:                    null;
  position:               number;
  inventory_policy:       InventoryPolicy;
  compare_at_price:       null | string;
  fulfillment_service:    FulfillmentService;
  inventory_management:   null;
  option1:                Option1;
  option2:                null;
  option3:                null;
  created_at:             string;
  updated_at:             string;
  taxable:                boolean;
  barcode:                null;
  grams:                  number;
  image_id:               null;
  weight:                 number;
  weight_unit:            WeightUnit;
  inventory_item_id:      number;
  inventory_quantity:     number;
  old_inventory_quantity: number;
  requires_shipping:      boolean;
  admin_graphql_api_id:   string;
}

export enum FulfillmentService {
  Manual = "manual",
}

export enum InventoryPolicy {
  Deny = "deny",
}

export enum WeightUnit {
  Kg = "kg",
}

export enum Vendor {
  FutureWorld = "Future World",
}

  export interface GetProductsResponse {  products: Product\[];}
  export interface Product {  id:                   number;  title:                string;  body\_html:            string;  vendor:               Vendor;  product\_type:         string;  created\_at:           string;  handle:               string;  updated\_at:           string;  published\_at:         string;  template\_suffix:      null;  published\_scope:      PublishedScope;  tags:                 string;  status:               Status;  admin\_graphql\_api\_id: string;  variants:             Variant\[];  options:              Option\[];  images:               Image\[];  image:                Image;}
  export interface Image {  id:                   number;  alt:                  null;  position:             number;  product\_id:           number;  created\_at:           string;  updated\_at:           string;  admin\_graphql\_api\_id: string;  width:                number;  height:               number;  src:                  string;  variant\_ids:          any\[];}
  export interface Option {  id:         number;  product\_id: number;  name:       Name;  position:   number;  values:     Option1\[];}
  export enum Name {  Title = "Title",}
  export enum Option1 {  DefaultTitle = "Default Title",}
  export enum PublishedScope {  Global = "global",}
  export enum Status {  Active = "active",}
  export interface Variant {  id:                     number;  product\_id:             number;  title:                  Option1;  price:                  string;  sku:                    null;  position:               number;  inventory\_policy:       InventoryPolicy;  compare\_at\_price:       null | string;  fulfillment\_service:    FulfillmentService;  inventory\_management:   null;  option1:                Option1;  option2:                null;  option3:                null;  created\_at:             string;  updated\_at:             string;  taxable:                boolean;  barcode:                null;  grams:                  number;  image\_id:               null;  weight:                 number;  weight\_unit:            WeightUnit;  inventory\_item\_id:      number;  inventory\_quantity:     number;  old\_inventory\_quantity: number;  requires\_shipping:      boolean;  admin\_graphql\_api\_id:   string;}
  export enum FulfillmentService {  Manual = "manual",}
  export enum InventoryPolicy {  Deny = "deny",}
  export enum WeightUnit {  Kg = "kg",}
  export enum Vendor {  FutureWorld = "Future World",}


*/