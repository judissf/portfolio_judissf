import React, { createContext, useState } from "react";

interface IProviderProps {
 children: React.ReactNode;
}

interface IContext {
 showCart: boolean;
 setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
 products: IProduct[];
}

export interface IProduct {
 id: number;
 type: string;
 name: string;
 price: number;
 img_url: string;
}

export const Context = createContext({} as IContext);

const Provider = ({ children }: IProviderProps) => {
 const [showCart, setShowCart] = useState<boolean>(false);
 const [products, setProducts] = useState<IProduct[]>([
  {
   id: 1,
   type: "pao",
   name: "Pão de queijo (6 unidades)",
   price: 8,
   img_url:
    "https://img.itdg.com.br/tdg/images/recipes/000/069/468/358656/358656_original.jpg?mode=crop&width=710&height=400",
  },
  {
   id: 2,
   type: "pao",
   name: "Pão francês (800g)",
   price: 6,
   img_url: "https://img.itdg.com.br/tdg/images/recipes/000/002/658/277270/277270_original.jpg?mode=crop&width=710&height=400",
  },
  {
   id: 3,
   type: "pao",
   name: "Pão italiano (800g)",
   price: 7,
   img_url: "https://cdn.panelinha.com.br/receita/1464663600000-Pao-italiano-caseiro.jpg",
  },
  {
   id: 4,
   type: "pao",
   name: "Pão sírio (800g)",
   price: 9,
   img_url: "https://img.saborosos.com.br/imagens/pao-sirio.jpg",
  },
  {
   id: 5,
   type: "pao",
   name: "Pão baguete (800g)",
   price: 6,
   img_url:
    "https://img.estadao.com.br/fotos/crop/960x540/resources/jpg/6/8/1453289237786.jpg",
  },
  {
   id: 6,
   type: "bebida",
   name: "Suco de Graviola (300 ml)",
   price: 9,
   img_url: "https://eunacompra.com/wp-content/uploads/2021/03/suco-graviola.jpg",
  },
  {
   id: 7,
   type: "bebida",
   name: "Suco de Goiaba (300 ml)",
   price: 5,
   img_url:
    "https://eunacompra.com/wp-content/uploads/2021/03/suco-goiaba.jpg",
  },
  {
   id: 8,
   type: "bebida",
   name: "Suco de Laranja (300 ml)",
   price: 10,
   img_url: "https://granblack.com.br/wp-content/webp-express/webp-images/uploads/2020/06/Suco-de-laranja-quais-os-fatores-de-qualidade-e-como-est%C3%A1-o-mercado-800x450.png.webp ",
  },
  {
   id: 9,
   type: "bebida",
   name: "Suco de Cupuaçú (300 ml)",
   price: 8,
   img_url: "https://eunacompra.com/wp-content/uploads/2021/03/suco-cupuacu.jpg",
  },
  {
   id: 10,
   type: "bebida",
   name: "Suco de Cajú (300 ml)",
   price: 5,
   img_url: "https://www.dicasdemulher.com.br/wp-content/uploads/2020/08/suco-de-caju-1.jpg",
  },
  {
   id: 11,
   type: "doce",
   name: "Torta de maçã (fatia)",
   price: 10,
   img_url: "https://www.oetker.com.br/Recipe/Recipes/oetker.com.br/br-pt/dessert/image-thumb__40444__RecipeDetailsLightBox/torta-de-maca-crocante.jpg",
  },
  {
   id: 12,
   type: "doce",
   name: "Torta de morango (fatia)",
   price: 10,
   img_url:
    "https://s2.glbimg.com/InKbnrvy9uUZ_wufoKnle2yV6NY=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/z/U/JBxNBxSay8QzBD3lGgPw/torta-de-morango-receita.jpg",
  },
  {
   id: 13,
   type: "doce",
   name: "Mousse de chocolate (taça)",
   price: 10,
   img_url:
    "https://s2.glbimg.com/kjOaxJHgpyoIy_X1ySBySFtniIM=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/J/A/2qt9AgQe6EmbAwdvnzfA/capa-materia-gshow-2022-01-21t143449.332.png",
  },
  {
   id: 14,
   type: "doce",
   name: "Brownie (unidade)",
   price: 5,
   img_url:
    "https://img.itdg.com.br/tdg/images/recipes/000/306/823/340593/340593_original.jpg?mode=crop&width=710&height=400",
  },
  {
   id: 15,
   type: "doce",
   name: "Mousse de maracujá (fatia)",
   price: 8,
   img_url:
    "https://img.itdg.com.br/tdg/images/recipes/000/001/599/361922/361922_original.jpg?mode=crop&width=710&height=400",
  },
 ]);

 return (
  <Context.Provider
   value={{
    showCart,
    setShowCart,
    products,
   }}
  >
   {children}
  </Context.Provider>
 );
};

export default Provider;
