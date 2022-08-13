import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FilterTodosByCheckedType, FilterTodosByStringType, OrderTodosByType } from "../models/useSortedTodos";
import SelectBox from "./SelectBox";
import { BiSearch } from "react-icons/bi";
import Debouncer from "../utils/Debouncer";
import { DEBOUNCER_DELAY_TIME } from "../consts/consts";
type SortControllersPropsType = {
  controllers: {
    orderTodosBy: OrderTodosByType;
    filterTodosByChecked: FilterTodosByCheckedType;
    filterTodosByString: FilterTodosByStringType;
  };
};
type OrderByType = { criteria: "updatedAt" | "createdAt"; order: "newestFirst" | "oldestFirst" };
type SelectedOptionsType = {
  orderBy: OrderByType;
  filterByStringIncluding: string;
  filterByIsChecked: boolean | null;
};

const initialSelectedOptionsState: SelectedOptionsType = {
  orderBy: { criteria: "updatedAt", order: "newestFirst" },
  filterByStringIncluding: "",
  filterByIsChecked: null,
};
export default function SortControllers({ controllers }: SortControllersPropsType) {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(initialSelectedOptionsState);

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptions({ ...selectedOptions, filterByStringIncluding: event.target.value });
  };

  const handleOnClickOrderOption = (criteria: "updatedAt" | "createdAt", order: "newestFirst" | "oldestFirst") => {
    setSelectedOptions({ ...selectedOptions, orderBy: { criteria: criteria, order: order } });
  };

  const handleOnClickFilterCheckedOption = (selectedCheckedValue: boolean | null) => {
    setSelectedOptions({ ...selectedOptions, filterByIsChecked: selectedCheckedValue });
  };

  const handleInputChangeWithDebouncer = new Debouncer(handleInputOnChange, DEBOUNCER_DELAY_TIME).build();

  useEffect(() => {
    controllers.orderTodosBy(selectedOptions.orderBy.criteria, selectedOptions.orderBy.order);
  }, [selectedOptions.orderBy]);

  useEffect(() => {
    controllers.filterTodosByString(null, selectedOptions.filterByStringIncluding);
  }, [selectedOptions.filterByStringIncluding]);

  useEffect(() => {
    controllers.filterTodosByChecked(selectedOptions.filterByIsChecked);
  }, [selectedOptions.filterByIsChecked]);

  return (
    <Container>
      <OrderSelection>
        <Option
          name="updatedAt/newestFirst"
          selected={selectedOptions.orderBy.criteria === "updatedAt" && selectedOptions.orderBy.order === "newestFirst"}
          onClick={() => handleOnClickOrderOption("updatedAt", "newestFirst")}
        >
          최신 수정순
        </Option>
        <Option
          name="createdAt/newestFirst"
          selected={selectedOptions.orderBy.criteria === "createdAt" && selectedOptions.orderBy.order === "newestFirst"}
          onClick={() => handleOnClickOrderOption("createdAt", "newestFirst")}
        >
          최신 등록순
        </Option>
        <Option
          name="updatedAt/oldestFirst"
          selected={selectedOptions.orderBy.criteria === "updatedAt" && selectedOptions.orderBy.order === "oldestFirst"}
          onClick={() => handleOnClickOrderOption("updatedAt", "oldestFirst")}
        >
          오래된 수정 순
        </Option>
        <Option
          name="createdAt/oldestFirst"
          selected={selectedOptions.orderBy.criteria === "createdAt" && selectedOptions.orderBy.order === "oldestFirst"}
          onClick={() => handleOnClickOrderOption("createdAt", "oldestFirst")}
        >
          오래된 등록 순
        </Option>
      </OrderSelection>
      <FilterInput>
        <label htmlFor="searchString">
          <BiSearch />
        </label>
        <input onChange={handleInputChangeWithDebouncer} type="text" id="searchString" />
      </FilterInput>
      <CheckedFilterSelection>
        <Option name="null" selected={selectedOptions.filterByIsChecked === null} onClick={() => handleOnClickFilterCheckedOption(null)}>
          전체
        </Option>
        <Option name="checked" selected={selectedOptions.filterByIsChecked === true} onClick={() => handleOnClickFilterCheckedOption(true)}>
          완료된 항목
        </Option>
        <Option name="unchecked" selected={selectedOptions.filterByIsChecked === false} onClick={() => handleOnClickFilterCheckedOption(false)}>
          미완료된 항목
        </Option>
      </CheckedFilterSelection>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  option,
  input {
    border: none;
  }
  input {
    outline: none;
  }
`;
const OrderSelection = styled(SelectBox)`
  width: 20%;
  option {
    width: 30%;
  }
`;
const FilterInput = styled.div`
  border: 3px white solid;
  border-radius: 8px;
  width: 50%;
  display: flex;
  input {
    background-color: #242424;
    color: white;
    width: 80%;
    margin-left: 1rem;
    padding: 0.3rem;
  }
  label {
    display: block;
    width: 3rem;
    height: 100%;
    border-right: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    * {
      width: 50%;
      height: 50%;
    }
  }
`;
const CheckedFilterSelection = styled(SelectBox)`
  width: 20%;
  option {
    width: 30%;
  }
`;
const Option = styled.div<{ name: string; selected: boolean }>``;
