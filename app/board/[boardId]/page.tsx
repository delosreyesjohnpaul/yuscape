interface BoardIdPageProps {
    params: {
      boardId: string;
    };
}

import { Canvas } from "./_components/canvas";

const BoardIdPage = ({ params } : BoardIdPageProps) => {
    return (
        <Canvas boardId={params.boardId}/>
    )
}

export default BoardIdPage;