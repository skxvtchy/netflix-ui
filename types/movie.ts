export interface Movie {
    id: string;
    imageUrl: string;
}

export interface MovieRow {
    rowTitle: string;
    movies: Movie[];
}

export interface MoviesData {
    movies: MovieRow[];
}

export interface FeaturedMovie {
    id: string;
    title: string;
    thumbnail: string;
    categories: string[];
}

export type DeviceMotionData = {
    rotation: {
        alpha: number;
        beta: number;
        gamma: number;
    };
}; 