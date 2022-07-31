import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parent-box">
      <FotoProduk />
      <ProdukInfo
        category="HOLIDAY"
        name="Ouraaaa"
        price="700.000"
        isDiscount="coming"
      />
    </div>
  );
}

// (Start) Foto Produk
function FotoProduk() {
  return (
    <div className="Foto">
      <img src="https://cdn.shopify.com/s/files/1/0054/6737/3638/products/rug-1650605555437-4_large.jpg?v=1650616222" />
    </div>
  );
}
// (End)) Foto Produk

// (Start) Produk Info
function ProdukInfo(props) {
  const { category, name, price, isDiscount } = props;
  const benefits = [
    "Tahan Air",
    "Material Halus",
    "Tidak Gerah",
    "Tidak Kusut",
    "Tahan Lama",
  ];
  const listBenefits = benefits.map((e) => <li>{e}</li>);

  return (
    <div className="Deskripsi">
      <p className="Cate">{category}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR {price}</p>
      <CheckDiscount isDiscount={isDiscount} />
      <p className="Info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta culpa,
        iste voluptatem minima dolorum tempore voluptate! Nihil maiores
        consequatur tempora eum laudantium architecto? Aspernatur ipsa laborum
        cum! Dolorem veritatis iure assumenda animi harum officia odit beatae,
        distinctio qui sit quas obcaecati laborum atque ad architecto magni unde
        inventore excepturi quidem!
      </p>
      <ul>{listBenefits}</ul>
      <a onClick={(e) => TambahCart(name, e)} href="#">
        Add Cart
      </a>
    </div>
  );
}
// (End) Produk Info

// (Start) Check Diskon
function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return <p>Discount 50% Off</p>;
  } else if (isDiscount == "coming") {
    return <p>Discount is coming soon...</p>;
  } else {
    return <p>Nett</p>;
  }
}
// (End) Check Diskon

// (Start) Tambah Chart -Aksi-
function TambahCart(e) {
  return console.log("Membeli produk " + e);
}
// (End) Tambah Chart -Aksi-

export default App;
