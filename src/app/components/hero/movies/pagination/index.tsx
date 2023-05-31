import Pagination from '@mui/material/Pagination';

type MoviePaginationProps = {
    totalPages: number;
    currentPage: number;
    color: string;
    onPageChange: (page: number) => void;
}

export function MoviesPagination({
    totalPages,
    currentPage,
    onPageChange,
}: MoviePaginationProps) {

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        event.preventDefault();
        onPageChange(page);
    };

    return (
        <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color='primary'
        />
    )
}