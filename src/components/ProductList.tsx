import Product from "./Product";
import Topbar from "./Topbar";
import TProduct from "./Types";

function ProductList() {
  let prodectt: TProduct[] = [
    {
      imgg: "https://t3.ftcdn.net/jpg/05/92/45/74/360_F_592457427_VvrurBRa7bCROvoPk1u3JlLMGwzLwWOi.jpg",
      hed: "Hai world......",
      bt: "Click me",
    },
    {
      imgg: "https://t3.ftcdn.net/jpg/05/92/45/74/360_F_592457427_VvrurBRa7bCROvoPk1u3JlLMGwzLwWOi.jpg",
      hed: "Hai world......",
      bt: "Click me",
    },
  ];
  return (
    <div>
        <Topbar/>
      {prodectt.map((prdt) => {
        return <Product imgg={prdt.imgg} hed={prdt.hed} bt={prdt.bt} />;
      })}
    </div>
  );
}
export default ProductList;
