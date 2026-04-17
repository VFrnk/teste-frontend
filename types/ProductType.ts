export default interface ProductType {
  id: number;
  product: string;
  category: "Hardware" | "Áudio" | "Periféricos" | "Home Office" | "Smartphones";
  value: number;
  date: string;
}