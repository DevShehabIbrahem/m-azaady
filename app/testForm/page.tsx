"use client";

import useGetMainCategory from "@/app/hooks/useGetMainCategory";
import useModel from "@/app/hooks/useModel";
import { usefetchSub } from "@/app/hooks/usefetchSub";
import axios from "axios";
import { headers } from "next/headers";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [categoriesId, setCategoriesId] = useState("");
  const [subCatId, setSubCatId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [Model, setModelId] = useState("");
  const {
    data,
    handleDynamicallyChangeprosesSelect,
    handleDynamicallyChangeBrandSelect,
    handleDynamicallyChangeTransmissionTypeSelect,
  } = usefetchSub(+subCatId);
  const {
    handleDynamicallyChangeModelSelect,
    handleDynamicallyChangeTypeSelect,
  } = useModel(+brandId, +Model);

  const { categories, handleDynamicallyChangeSecondeSelect } =
    useGetMainCategory(categoriesId);
  // Empty dependency array means this effect runs only once, on mount

  const handlecategoryId = (e) => {
    const { value } = e.target;
    setCategoriesId(value);
  };
  const handleSubcategoryId = (e) => {
    const { value } = e.target;
    setSubCatId(value);
  };
  const handleBrandChange = (e) => {
    const { value } = e.target;
    setBrandId(value);
  };
  const handlemodelChange = (e) => {
    const { value } = e.target;
    setModelId(value);
  };

  return (
    <div>
      <form action="">
        <select name="" id="" onChange={handlecategoryId}>
          <option value="">اختار القايمه الاولى</option>
          {categories.map(({ name, id }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
        <select name="" id="" onChange={handleSubcategoryId}>
          <option value="">اختار القايمه التانيه</option>
          {handleDynamicallyChangeSecondeSelect()?.map(({ name, id }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
        <select name="" id="">
          <option value="">Prossces Type </option>
          {handleDynamicallyChangeprosesSelect()?.map(({ name, id }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
        <select name="" id="" onChange={handleBrandChange}>
          <option value="">Brand </option>
          {handleDynamicallyChangeBrandSelect()?.map(({ name, id }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
        <select name="" id="" onChange={handlemodelChange}>
          <option value="">Model </option>
          {handleDynamicallyChangeModelSelect()?.map(({ name, id }) => (
            <option value={id}>{name}</option>
          ))}
        </select>

        <select name="" id="">
          <option value="">Type </option>
          {handleDynamicallyChangeTypeSelect()?.map(({ name, id }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
        <select name="" id="">
          <option value="">Transmission Type </option>
          {handleDynamicallyChangeTransmissionTypeSelect()?.map(
            ({ name, id }) => (
              <option value={id}>{name}</option>
            )
          )}
        </select>
      </form>
    </div>
  );
};

export default Page;
