import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parent-box">
      <FotoProduk />
      <ProdukInfo category="HOLIDAY" name="Ouraaaa" price="700.000" />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="https://cdn.shopify.com/s/files/1/0054/6737/3638/products/rug-1650605555437-4_large.jpg?v=1650616222" />
    </div>
  );
}

function ProdukInfo(props) {
  const { category, name, price } = props;

  return (
    <div className="Deskripsi">
      <p className="Cate">{category}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR {price}</p>
      <p className="Info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta culpa,
        iste voluptatem minima dolorum tempore voluptate! Nihil maiores
        consequatur tempora eum laudantium architecto? Aspernatur ipsa laborum
        cum! Dolorem veritatis iure assumenda animi harum officia odit beatae,
        distinctio qui sit quas obcaecati laborum atque ad architecto magni unde
        inventore excepturi quidem!
      </p>
      <a onClick={(e) => TambahCart(name, e)} href="#">
        Add Cart
      </a>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli produk " + e);
}

export default App;
