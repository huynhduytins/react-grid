import type { Column } from "@silevis/reactgrid";
import type { Row } from "../../types";
import { HeaderGrid } from "./HeaderGrid";

export type BaseGridProps = {
  headerRows: Row[];
  columns: Column[];
};

export const BaseGrid = (props: BaseGridProps) => {
  const { headerRows, columns } = props;
  return <HeaderGrid rows={headerRows} columns={columns} />;
};
