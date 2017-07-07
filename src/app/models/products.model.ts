
export class Product {
	constructor(
		public id: number,
		public categoriesId: number[],
		public name: string,
		public brand: string,
		public color: string | null,
		public size: string | null,
		public raiting: number,
    	public basePrice: number|null,
		public price: number,
		public mainImg: string,
		public imgArr: string[],
		public description: string,
		public isAvailable: boolean

		) {}
}
