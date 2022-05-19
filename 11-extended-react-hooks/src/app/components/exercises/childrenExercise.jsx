import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них
        добавить порядковый номер, относительно того, как они
        располагаются на странице. Вы можете использовать как{" "}
        <code>React.Children.map</code> так и{" "}
        <code>React.Children.toArray</code>
      </p>
      <CustomList>
        <Component/>
        <ComponentWithNumber/>
        <Component/>
        <ComponentWithNumber/>
      </CustomList>

    </CollapseWrapper>
  );
};

const Component = () => {
  return <div>Компонент списка</div>;
};

const CustomList = ({ children }) => {
  let counter = 0;
  return React.Children.map(children, (child => {
    const config = {
      id: ++counter
    };
    return React.cloneElement(child, config);
  }));
}

const withNumber = (JSXComponent) => (props) => {
  return (
    <>
      {props ? <div className='d-inline-flex'>
        {props.id} &nbsp;
        <JSXComponent/>
      </div> : <JSXComponent />}
    </>
  );
};

const ComponentWithNumber = withNumber(Component);

export default ChildrenExercise;
