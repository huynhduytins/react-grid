import { ReactGrid, type ReactGridProps } from "@silevis/reactgrid";

type HeaderGridProps = Omit<ReactGridProps, 'disableVirtualScrolling'>

export function HeaderGrid(props: HeaderGridProps) {
    return <div>
        <ReactGrid {...props} disableVirtualScrolling/>
    </div>
}