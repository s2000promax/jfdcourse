import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withOutCallback = useRef(0);
  const withCallback = useRef(0);
  const handleChange = ({ target }) => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }))
  }
  const validateWithoutCallback = (data) => {
    console.log(data)
  }

  const validateWithCallback = useCallback((data) => {
    console.log(data)
  }, [])

  useEffect(() => {
    withOutCallback.current += 1;
  }, [validateWithoutCallback]);

  useEffect(() => {
    withCallback.current += 1;
  }, [validateWithCallback]);

  useEffect(() => {
    validateWithoutCallback(data);
    validateWithCallback(data);
  }, [data]);

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render withoutCallback: {withOutCallback.current}</p>
      <p>Render withCallback: {withCallback.current}</p>
      <label
        htmlFor='email'
        className='form-label'
      >
        Email
      </label>
      <input
        type='email'
        className='form-control'
        id='email'
        value={data.email}
        name='email'
        onChange={handleChange}
      />
    </CardWrapper>
  );
};

export default UseCallBackExample;
