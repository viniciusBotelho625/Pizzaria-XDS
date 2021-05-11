export interface Pizza {
    id: number
    name: string;
    imageUrl: string;
    rating: number;
    priceP: number;
    priceM: number;
    priceG: number;
}
interface pizzaItemProps {
    pizza: Pizza;
}