export type MovieSearchListProps = {
    
    id: number;
    poster_path: string | null;
    title: string;
    release_date: string;
    original_title: string;
    overview: string | null;
}

export type MovieSearchProps = {
    movieResults: MovieSearchListProps[]
}