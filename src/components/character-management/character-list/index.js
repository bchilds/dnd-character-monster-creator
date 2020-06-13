import React, { useMemo, useContext } from "react";
import LoadingSpinner from '../../loading-spinner';
import PreformattedTable from "../../react-table";
import CharacterContext from "../../../contexts/character-list";
import UpdateLink from "./update-link";
import DeleteLink from "./delete-link";

import style from "./style.module.scss";

const Empty = () => (
  <div className="empty">
    <h2>You have no characters! Go make some!</h2>
  </div>
);

const getDefaultColumns = () => [
  {
    Header: "ID",
    accessor: "_id",
    filterable: true,
  },
  {
    Header: "Name",
    accessor: "name",
    filterable: true,
  },
  {
    Header: "Race",
    accessor: "race",
    filterable: true,
  },
  {
    Header: "level",
    accessor: "level",
    filterable: true,
  },
  {
    Header: "Class",
    accessor: "characterClass",
    filterable: true,
  },
  {
    Header: "Subclass",
    accessor: "subclass",
    filterable: true,
  },
  {
    Header: "",
    accessor: "update-link",
    Cell: function ({ row }) {
      return (
        <span>
          <UpdateLink id={row.values._id} />
        </span>
      );
    },
  },
  {
    Header: "",
    accessor: "delete-link",
    Cell: function ({ row }) {
      return (
        <span>
          <DeleteLink id={row.values._id} />
        </span>
      );
    },
  },
];

const CharacterList = () => {
  const context = useContext(CharacterContext);
  const {
    characters = [],
    isLoadingCharacters,
  } = context;
  const tableColumns = useMemo(getDefaultColumns);

  if (isLoadingCharacters) {
    return (
      <div className={style["preformatted-table"]}>
        <LoadingSpinner />
      </div>
    );
  }
  if (characters.length === 0) {
    return Empty();
  }

  return (
    <div className={style["preformatted-table"]}>
      <PreformattedTable data={characters} columns={tableColumns} />
    </div>
  );
};

export default CharacterList;
