import React from 'react';
import Image from "next/image";

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   totalItems,
                                                   itemsPerPage,
                                                   currentPage,
                                                   onPageChange,
                                               }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPaginationArray = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    };

    const handlePageChange = (page: number) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const paginationArray = getPaginationArray();

    return (
        <div className="flex">
            <button className="mr-[30px]" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                <Image className="rotate-[90deg] relative top-[-2px]" src="/images/chevronDown.svg" alt="arrow" width={11} height={11} />
            </button>
            <div className="flex gap-[12px] items-center">
                {paginationArray.map((page, index) => (
                    typeof page === 'number' ? (
                        <button
                            key={index}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? 'text-blue font-[700] text-[17px]' : 'text-[17px]'}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index}>{page}</span> // Отображаем многоточие
                    )
                ))}
            </div>
            <button className="flex items-center text-[15px] font-[400] ml-[26px] gap-[11px]" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Следующая страница
                <Image className="rotate-[-90deg] relative top-[-2px]" src="/images/chevronDown.svg" alt="arrow" width={11} height={11} />
            </button>
        </div>
    );
};

export default Pagination;