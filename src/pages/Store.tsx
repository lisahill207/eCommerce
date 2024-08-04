import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  const [items, setItem] = useState<
    { id: number; title: string; price: number; image: string }[]
  >([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);
  console.log(items);

  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <h1>Store</h1>
    </>
  );
}
