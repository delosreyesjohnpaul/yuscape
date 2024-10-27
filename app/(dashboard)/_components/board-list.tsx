"use client";

import { EmptyFavourites } from "./empty-favourites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
    orgId: string;
    query: {
      search?: string;
      favourites?: string;
    };
}

export const BoardList = ({ orgId, query } : BoardListProps) => {
    const data = []; //Todo change to api call

    if (!data?.length && query.search) {
        return (
            <EmptySearch/>
        );
    };

    if (!data?.length && query.favourites) {
        return (
            <EmptyFavourites/>
        );
    };

    if (!data?.length) {
        return (
            <div>
                no board at all 
            </div>
        );
    }
    

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    )
}