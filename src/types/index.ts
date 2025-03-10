interface IDogFull {
    id: number;
    name: string;
    breed_group: string;
    size: string;
    lifespan: string;
    origin: string;
    temperament: string;
    colors: string[];
    description: string;
    image: string;
}

type IDog = Pick<IDogFull, 
    'id' |
    'name' |
    'breed_group' |
    'temperament' |
    'image'
>;

export type { IDogFull, IDog }
