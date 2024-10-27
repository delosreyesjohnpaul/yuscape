"use client";

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
            <div>
                Try Search something
            </div>
        );
    };

    if (!data?.length && query.favourites) {
        return (
            <div>
                no Favorites
            </div>
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