import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export function StoreItem({ id, title, price, image }: StoreItemProps) {
  return (
    <>
      <Card>
        <Card.Img
          className="p-3"
          variant="top"
          src={image}
          height="200px"
          style={{ objectFit: "contain" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-4">{title}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
