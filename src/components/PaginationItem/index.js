import { PaginationItemContainer } from "./PaginationItemElements";

export default function PaginationItem({
  index,
  handlePageChange,
  toggle,
  activeindex,
}) {
  return (
    <PaginationItemContainer
      index={index}
      activeindex={activeindex}
      onClick={() => {
        handlePageChange(index + 1);
        toggle(index);
      }}
    >
      {index + 1}
    </PaginationItemContainer>
  );
}
