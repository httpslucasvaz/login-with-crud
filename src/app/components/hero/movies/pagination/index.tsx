import Pagination from '@mui/material/Pagination';

type MoviePaginationProps = {
    totalPages: number;
    currentPage: number;
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
        />
    )
}